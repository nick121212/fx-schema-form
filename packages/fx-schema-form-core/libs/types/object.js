import { default as ResolveLib, getDataKeys } from "../libs/resolve";
import { warn } from "../utils";
const pro = "properties";
export default (schema, schemaKey, ajv) => {
    const { properties, required = [], $ref } = schema;
    if (properties && !$ref) {
        Object.keys(properties).forEach((key) => {
            if ([pro, "items"].indexOf(key) >= 0) {
                if (__DEV__) {
                    warn(`${key}can not be key words.`);
                }
                return;
            }
            if (!properties || !properties[key]) {
                return;
            }
            Object.assign(properties[key], {
                isRequired: required.indexOf(key) >= 0
            });
            const propertySchemaResolve = new ResolveLib(ajv, properties[key], [schemaKey, pro, key].join("/")), keys = getDataKeys([schemaKey, pro, key].join("/"));
            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }
    return schema;
};
//# sourceMappingURL=object.js.map