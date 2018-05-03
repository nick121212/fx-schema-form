import { getDataKeys } from "../libs/resolve";
export default (schema, ajv) => {
    if (schema && schema.$ref) {
        let validate = ajv.getSchema(schema.$ref);
        if (validate && validate.schema) {
            let schemaAjv = Object.assign({}, validate.schema);
            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;
            Object.assign(schemaAjv, {
                refKeys: getDataKeys(schema.$ref)
            });
            return schemaAjv;
        }
        if (!__PROD__) {
            throw new Error("${schema.$ref} not exist.");
        }
    }
    return schema;
};
//# sourceMappingURL=ref.js.map