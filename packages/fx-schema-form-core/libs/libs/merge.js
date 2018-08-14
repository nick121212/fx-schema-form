import { uiSchemaSchema } from "../models/uischema";
import { schemaFieldFactory, schemaKeysFactory } from "../factory";
import { getDataKeys, getSchemaId } from "./resolve";
import { warn } from "../utils";
const getUiSchemaKeyRecursion = (uiSchemaKeys, parentSchemaPath) => {
    let parentKeysWithDef = getDataKeys(parentSchemaPath, true);
    while (uiSchemaKeys.length) {
        let key = uiSchemaKeys.shift() || "";
        parentKeysWithDef = parentKeysWithDef.concat(key ? [key] : []);
        let keysStr = parentKeysWithDef.join("/").replace(/\/$/, "");
        if (!schemaKeysFactory.has(keysStr)) {
            if (__DEV__) {
                warn(`${keysStr} did not found.`);
            }
            return "";
        }
        let schema = schemaFieldFactory.get(schemaKeysFactory.get(keysStr));
        if (schema.$ref) {
            parentKeysWithDef = getDataKeys(schema.$ref, true);
        }
        else {
            parentKeysWithDef = parentKeysWithDef;
        }
    }
    return parentKeysWithDef.join("/");
};
const getParentSchemaKeys = (parent) => {
    if (parent && parent.keys) {
        return parent.keys;
    }
    return [];
};
const getCurrentSchemaKey = (parent, schemaPath, uiSchema) => {
    const $id = getSchemaId(schemaPath);
    let uiSchemaKeys = uiSchema.key.split("/");
    if (parent && getSchemaId(parent.key) === $id) {
        return getUiSchemaKeyRecursion(uiSchemaKeys, parent.schemaPath || "");
    }
    return getUiSchemaKeyRecursion(uiSchemaKeys, schemaPath);
};
const mergeUiSchemaToArray = (uiSchema) => {
    if (!schemaKeysFactory.has(uiSchema.key)) {
        if (__DEV__) {
            console.log(schemaKeysFactory);
            warn(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        }
        return uiSchema;
    }
    let schemaKey = schemaKeysFactory.get(uiSchema.key);
    let schema = schemaFieldFactory.get(schemaKey);
    return Object.assign({}, schema, uiSchema);
};
const initUiSchema = (parent, schemaPath, uiSchema) => {
    let parentKeys = getParentSchemaKeys(parent), key = getCurrentSchemaKey(parent, schemaPath, uiSchema), keys, isRequired = false;
    keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);
    return Object.assign({ isRequired }, uiSchema, {
        key,
        keys
    });
};
const pushMergeResult = (uiSchemasFirst, uiSchemasLast, uiSchema) => {
    if (!uiSchemasFirst.concat(uiSchemasLast).filter((val) => {
        return val.key === uiSchema.key;
    }).length) {
        uiSchema = mergeUiSchemaToArray(uiSchema);
        uiSchemasFirst.push(uiSchema);
    }
};
const initMergeSchema = (parent, schemaPath, uiSchemas, curSchema) => {
    let idx = uiSchemas.indexOf("*"), uiSchemasFirst = [], uiSchemasLast = [], types = ["object", "array"];
    if (uiSchemas.lastIndexOf("*") !== idx) {
        if (__DEV__) {
            warn("uiSchema can only has one *.");
        }
        return [];
    }
    if (idx < 0) {
        uiSchemas.slice(idx + 1).map((us) => {
            let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
            uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
        });
        return uiSchemasFirst;
    }
    uiSchemas.slice(0, idx).forEach((us) => {
        let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });
    uiSchemas.slice(idx + 1).forEach((us) => {
        let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
    });
    if (curSchema.type === types[0] && curSchema.properties) {
        Object.keys(curSchema.properties).forEach((us) => {
            const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
                key: us,
                isRequired: curSchema.required ? curSchema.required.indexOf(us) >= 0 : false
            });
            pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
        });
    }
    if (curSchema.type === types[1] && curSchema.items) {
        const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
            key: "-"
        });
        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }
    if (types.indexOf(curSchema.type) < 0) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: getDataKeys(curSchema.schemaPath || "", false).join("/")
        });
        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }
    return uiSchemasFirst.concat(uiSchemasLast);
};
export default class MergeLib {
    constructor(ajv, schemaPath, parent, uiSchemas) {
        this.mergeUiSchemaList = [];
        uiSchemas = uiSchemas || ["*"];
        if (!ajv.validate(uiSchemaSchema, uiSchemas)) {
            throw ajv.errors;
        }
        let keyPath = getDataKeys(schemaPath, true).join("/");
        if (!schemaKeysFactory.has(keyPath)) {
            if (__DEV__) {
                warn(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
            }
            return;
        }
        const curSchema = schemaFieldFactory.get(schemaKeysFactory.get(keyPath));
        if (curSchema.$id) {
            if (!curSchema.$ref) {
                curSchema.$ref = curSchema.$id;
            }
            curSchema.$id = undefined;
            delete curSchema.$id;
        }
        this.mergeUiSchemaList = initMergeSchema(parent, schemaPath, uiSchemas, curSchema);
    }
}
//# sourceMappingURL=merge.js.map