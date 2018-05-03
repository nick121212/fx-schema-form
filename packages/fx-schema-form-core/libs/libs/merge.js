import { uiSchemaSchema } from "../models/uischema";
import { schemaFieldFactory, schemaKeysFactory } from "../factory";
import { getDataKeys, getSchemaId } from "./resolve";
const getUiSchemaKeyRecursion = (uiSchemaKeys, parentKeys) => {
    while (uiSchemaKeys.length) {
        let key = uiSchemaKeys.shift() || "";
        let keys = key ? parentKeys.concat([key]) : parentKeys;
        let keysStr = keys.join("/").replace(/\/$/, "");
        if (!schemaKeysFactory.has(keysStr)) {
            if (!__PROD__) {
                throw new Error(`${keys.join("/")} did not found.`);
            }
            return "";
        }
        let schema = schemaFieldFactory.get(schemaKeysFactory.get(keysStr));
        if (schema.$ref) {
            parentKeys = getDataKeys(schema.$ref, true);
        }
        else {
            parentKeys = keys;
        }
    }
    return parentKeys.join("/");
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
        return getUiSchemaKeyRecursion(uiSchemaKeys, parent.key.split("/"));
    }
    return getUiSchemaKeyRecursion(uiSchemaKeys, [$id]);
};
const mergeUiSchemaToArray = (uiSchema) => {
    if (!schemaKeysFactory.has(uiSchema.key)) {
        if (!__PROD__) {
            throw new Error(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        }
        return uiSchema;
    }
    let schemaKey = schemaKeysFactory.get(uiSchema.key);
    let schema = schemaFieldFactory.get(schemaKey);
    return Object.assign({}, schema, uiSchema);
};
const initUiSchema = (parent, schemaPath, uiSchema) => {
    let parentKeys = getParentSchemaKeys(parent), keys;
    keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);
    return Object.assign({}, uiSchema, {
        key: getCurrentSchemaKey(parent, schemaPath, uiSchema),
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
        if (!__PROD__) {
            throw new Error("uiSchema can only has one *.");
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
        let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });
    uiSchemas.slice(idx + 1).forEach((us) => {
        let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
    });
    if (curSchema.type === types[0] && curSchema.properties) {
        Object.keys(curSchema.properties).forEach((us) => {
            let uiSchema = initUiSchema(parent, schemaPath, { key: us });
            pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
        });
    }
    if (curSchema.type === types[1] && curSchema.items) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: getDataKeys(curSchema.schemaPath || "").join("/")
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
            if (!__PROD__) {
                throw new Error(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
            }
            return;
        }
        const curSchema = schemaFieldFactory.get(schemaKeysFactory.get(keyPath));
        if (curSchema.$id) {
            curSchema.$ref = curSchema.$id;
            curSchema.$id = undefined;
            delete curSchema.$id;
        }
        this.mergeUiSchemaList = initMergeSchema(parent, schemaPath, uiSchemas, curSchema);
    }
}
//# sourceMappingURL=merge.js.map