import { schemaFieldFactory, schemaKeysFactory, convertKeys } from "../factory";
import { getDataKeys, getSchemaId } from "../libs/resolve";
export default (schema, schemaKey) => {
    let keys = getDataKeys(schemaKey, false), $id = getSchemaId(schemaKey), currentSchema = convertKeys(schemaKey, schema), alreadyHasEmptySchema = false, emptySchema = {};
    alreadyHasEmptySchema = schemaFieldFactory.has(schemaKey);
    if (alreadyHasEmptySchema) {
        emptySchema = schemaFieldFactory.get(schemaKey);
    }
    if (alreadyHasEmptySchema && emptySchema.schemaPath) {
        return currentSchema || schema;
    }
    if (!$id) {
        $id = schema.$id || "";
    }
    if (schema.$id && schema.$ref) {
        schemaKeysFactory.add(schema.$id, schema.$ref);
    }
    schemaFieldFactory.add(schemaKey, Object.assign(emptySchema, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);
    return currentSchema || schema;
};
//# sourceMappingURL=none.js.map