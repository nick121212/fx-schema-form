import { default as ResolveLib } from "../libs/resolve";
import { isArray } from "../utils";
export default ($id, schema) => {
    const oneOf = schema.oneOf;
    if (oneOf && isArray(oneOf)) {
        schema.oneOf = oneOf.map((schemaOfOne) => {
            let { mergeSchema } = new ResolveLib(schemaOfOne);
            return mergeSchema;
        });
    }
    return schema;
};
//# sourceMappingURL=oneof.js.map