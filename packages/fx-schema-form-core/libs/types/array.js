import { default as ResolveLib, getDataKeys } from "../libs/resolve";
const itemsName = "items";
export default (schema, schemaKey, ajv) => {
    let { items } = schema;
    if (items) {
        const propertySchemaResolve = new ResolveLib(ajv, items, [schemaKey, itemsName].join("/")), keys = getDataKeys([schemaKey, itemsName].join("/"));
        Object.assign(propertySchemaResolve.mergeSchema, {
            keys
        });
    }
    return schema;
};
//# sourceMappingURL=array.js.map