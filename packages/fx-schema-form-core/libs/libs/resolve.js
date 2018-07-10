import { schemaTypeFactory } from "../factory";
import { warn } from "../utils";
const regexp = /#$/g;
export const getDataKeys = (schemaKey, keepFirst = false) => {
    let keys = schemaKey.split("/").map((key, index) => {
        if (index === 0 && regexp.test(key)) {
            regexp.lastIndex = 0;
            return keepFirst ? key.replace(regexp, "") : null;
        }
        if (key === "properties") {
            return null;
        }
        if (key === "items") {
            return "-";
        }
        return key;
    });
    return keys.filter((key) => {
        return key !== null;
    });
};
export const getSchemaId = (schemaKey) => {
    const keys = schemaKey.split("/");
    if (!keys.length) {
        if (__DEV__) {
            warn(`${schemaKey} not a valid schemaPath.`);
        }
        return "";
    }
    return keys[0].replace(regexp, "");
};
export default class ResolveLib {
    constructor(ajv, schema, $id = "") {
        this.ajv = ajv;
        this.$id = $id;
        this.mergeSchema = {};
        if (!$id) {
            this.initSchema(ajv, schema);
        }
        this.compileSchema(schema, $id || schema.$ref || "");
    }
    initSchema(ajv, schema) {
        let $id = schema.$id;
        if (!$id && !schema.$ref) {
            if (__DEV__) {
                console.log(schema);
                warn("id is required");
            }
            return schema;
        }
        if (!ajv.validateSchema(schema)) {
            throw ajv.errors;
        }
        if ($id && !ajv.getSchema($id)) {
            ajv.addSchema(schema);
        }
        return schema;
    }
    compileSchema(schema, $id) {
        schema = schemaTypeFactory.get("undefined")(schema, $id || ((schema.$id || "") + "#"), this.ajv);
        this.mergeSchema = schema;
        if (!schema.type || schema.$ref) {
            return;
        }
        if (schema.type.constructor !== String) {
            if (__DEV__) {
                warn(`schema type[${schema.type}] can only be string.`);
            }
            return;
        }
        let type = schema.type.toString();
        if (schemaTypeFactory.has(type)) {
            this.mergeSchema = schemaTypeFactory.get(type)(schema, $id || (schema.$id + "#"), this.ajv);
        }
    }
}
//# sourceMappingURL=resolve.js.map