import { getDataKeys, getSchemaId } from "../libs/resolve";
import { warn, isProd } from "../utils";
import { schemaFieldFactory } from "../factory";
export default ($id, schema) => {
    if (schema && schema.$ref) {
        const schemaId = getSchemaId(schema.$ref);
        let refName = schema.$ref;
        if (schema.$id) {
            refName = schema.$id + schema.$ref;
        }
        else if (!schemaId) {
            refName = getSchemaId($id) + schema.$ref;
        }
        schema.$ref = refName;
        if (!schemaFieldFactory.has(refName)) {
            schemaFieldFactory.add(refName, {});
        }
        const refSchema = schemaFieldFactory.get(refName);
        if (refSchema) {
            let schemaAjv = Object.assign({}, refSchema);
            schemaAjv.$ref = refName;
            delete schemaAjv.$id;
            Object.assign(schemaAjv, {
                refKeys: getDataKeys(refName)
            });
            return schemaAjv;
        }
        if (!isProd) {
            warn(`${refName} not exist.`);
        }
    }
    return schema;
};
//# sourceMappingURL=ref.js.map