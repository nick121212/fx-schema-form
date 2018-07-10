import { default as ResolveLib } from "../libs/resolve";
export default ($id, schema, ajv) => {
    if (!schema) {
        return schema;
    }
    let anyOf = schema.anyOf;
    if (anyOf && anyOf.constructor === Array) {
        schema.anyOf = anyOf.map((schemaOfOne, index) => {
            let { mergeSchema } = new ResolveLib(ajv, schemaOfOne, (schema.$id || schema.$ref) ? undefined : $id);
            return mergeSchema;
        });
    }
    return schema;
};
//# sourceMappingURL=anyof.js.map