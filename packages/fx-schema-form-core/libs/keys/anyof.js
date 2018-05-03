import { default as ResolveLib } from "../libs/resolve";
export default (schema, ajv) => {
    if (!schema) {
        return schema;
    }
    let anyOf = schema.anyOf;
    if (anyOf && anyOf.constructor === Array) {
        schema.anyOf = anyOf.map((schemaOfOne) => {
            let { mergeSchema } = new ResolveLib(ajv, schemaOfOne);
            return mergeSchema;
        });
    }
    return schema;
};
//# sourceMappingURL=anyof.js.map