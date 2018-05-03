import { default as ResolveLib } from "../libs/resolve";
export default (schema, ajv) => {
    if (!schema) {
        return schema;
    }
    let oneOf = schema.oneOf;
    if (oneOf && oneOf.constructor === Array) {
        schema.oneOf = oneOf.map((schemaOfOne) => {
            let { mergeSchema } = new ResolveLib(ajv, schemaOfOne);
            return mergeSchema;
        });
    }
    return schema;
};
//# sourceMappingURL=oneof.js.map