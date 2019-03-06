import { schemaTypeFactory } from "../factory";
import { warn, isProd } from "../utils";
export const getDataKeys = (schemaKey, keepFirst = false) => {
    let keys = schemaKey.split("/").map((key, index) => {
        const regexp = /#$/g;
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
    const regexp = /#$/g;
    if (!keys.length) {
        if (!isProd) {
            warn(`${schemaKey} not a valid schemaPath.`);
        }
        return "";
    }
    return keys[0].replace(regexp, "");
};
export default class ResolveLib {
    constructor(schema, $id = "") {
        this.$id = $id;
        this.mergeSchema = {};
        if (!$id) {
            this.initSchema(schema);
        }
        this.compileSchema(schema, $id || schema.$ref || "");
    }
    initSchema(schema) {
        let $id = schema.$id;
        if (!$id && !schema.$ref) {
            if (!isProd) {
                warn("id is required");
            }
            return schema;
        }
        return schema;
    }
    compileSchema(schema, $id) {
        schema = schemaTypeFactory.get("undefined")(schema, $id || (schema.$id || "") + "#");
        this.mergeSchema = schema;
        if (!schema.type || schema.$ref) {
            return;
        }
        if (schema.type.constructor !== String) {
            if (!isProd) {
                warn(`schema type[${schema.type}] can only be string.`);
            }
            return;
        }
        const type = schema.type.toString();
        if (schemaTypeFactory.has(type)) {
            this.mergeSchema = schemaTypeFactory.get(type)(schema, $id || (schema.$id || "") + "#");
        }
    }
}
//# sourceMappingURL=resolve.js.map