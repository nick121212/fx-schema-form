import { default as ResolveLib, getDataKeys } from "../libs/resolve";
import { warn } from "../utils";
const pro = "properties";
export default (schema, schemaKey, ajv) => {
    if (schema.properties && !schema.$ref) {
        Object.keys(schema.properties).forEach((key) => {
            if ([pro, "items"].indexOf(key) >= 0) {
                if (__DEV__) {
                    warn(`${key}can not be key words.`);
                }
                return;
            }
            const { properties } = schema;
            if (!properties || !properties[key]) {
                return;
            }
            const propertySchemaResolve = new ResolveLib(ajv, properties[key], [schemaKey, pro, key].join("/")), keys = getDataKeys([schemaKey, pro, key].join("/"));
            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }
    return schema;
};
//# sourceMappingURL=object.js.map