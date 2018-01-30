import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory } from "../factory";
import { ResolveLib } from "../libs/resolve";

/**
 * 解析schema中的type=array的结构
 * 如果存在items,则继续解析schema.item
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    if (schema.items) {
        let propertySchemaResolve = new ResolveLib(ajv,
            schema.items as JSONSchema6,
            [schemaKey, "items"].join("/")
        );

        const keys: string[] = ResolveLib.getDataKeys([schemaKey, "items"].join("/"));

        Object.assign(propertySchemaResolve.mergeSchema, {
            keys
        });
    }

    return schema;
};
