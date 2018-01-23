import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaKeysFactory, convertKeys } from "../factory";
import { ResolveLib } from "../libs/resolve";

export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    const currentSchema = convertKeys(schema, ajv);
    const keys: string[] = ResolveLib.getDataKeys(schemaKey);
    const $id = ResolveLib.getSchemaId(schemaKey);

    if (schemaFieldFactory.has(schemaKey)) {
        return schema;
    }

    schemaFieldFactory.add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);

    return schema;
};
