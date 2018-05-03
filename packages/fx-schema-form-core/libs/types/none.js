import { schemaFieldFactory, schemaKeysFactory, convertKeys } from "../factory";
import { getDataKeys, getSchemaId } from "../libs/resolve";
export default (schema, schemaKey, ajv) => {
    const currentSchema = convertKeys(schema, ajv), keys = getDataKeys(schemaKey), $id = getSchemaId(schemaKey);
    if (schemaFieldFactory.has(schemaKey)) {
        return currentSchema || schema;
    }
    schemaFieldFactory.add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);
    return currentSchema || schema;
};
//# sourceMappingURL=none.js.map