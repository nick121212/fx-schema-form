import { default as ResolveLib, getDataKeys } from "../libs/resolve";
import { warn, isProd } from "../utils";
const pro = "properties";
export default (schema, schemaKey) => {
    const { properties, required = [], $ref } = schema;
    if (properties && !$ref) {
        Object.keys(properties).forEach((key) => {
            if ([pro, "items"].indexOf(key) >= 0) {
                if (!isProd) {
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
            const propertySchemaResolve = new ResolveLib(properties[key], [schemaKey, pro, key].join("/")), keys = getDataKeys([schemaKey, pro, key].join("/"));
            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }
    return schema;
};
//# sourceMappingURL=object.js.map