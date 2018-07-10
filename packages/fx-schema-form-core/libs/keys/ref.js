import { getDataKeys, getSchemaId } from "../libs/resolve";
import { warn } from "../utils";
export default ($id, schema, ajv) => {
    if (schema && schema.$ref) {
        const schemaId = getSchemaId(schema.$ref);
        if (schema.$id) {
            schema.$ref = schema.$id + schema.$ref;
        }
        else if (!schemaId) {
            schema.$ref = getSchemaId($id) + schema.$ref;
        }
        const validate = ajv.getSchema(schema.$ref);
        if (validate && validate.schema) {
            let schemaAjv = Object.assign({}, validate.schema);
            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;
            Object.assign(schemaAjv, {
                refKeys: getDataKeys(schema.$ref)
            });
            return schemaAjv;
        }
        if (__DEV__) {
            warn(`${schema.$ref} not exist.`);
        }
    }
    return schema;
};
//# sourceMappingURL=ref.js.map