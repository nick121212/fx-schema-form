import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib, getDataKeys } from "../libs/resolve";

const items = "items";

/**
 * 解析schema中的type=array的结构
 * 如果存在items,则继续解析schema.item
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    if (schema.items) {
        let propertySchemaResolve = new ResolveLib(ajv,
            schema.items as JSONSchema6,
            [schemaKey, items].join("/")
        );

        const keys: string[] = getDataKeys([schemaKey, items].join("/"));

        Object.assign(propertySchemaResolve.mergeSchema, {
            keys
        });
    }

    return schema;
};
