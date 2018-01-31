import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib } from "../libs/resolve";

/**
 * 解析schema中的type=object的结构
 * 如果存在schema.properties,则遍历properties，继续解析schema.properties[key]
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    if (schema.properties) {
        Object.keys(schema.properties).forEach((key: string) => {

            if (["properties", "items"].indexOf(key) >= 0) {
                throw new Error(`${key}为保留关键字.`);
            }

            if (!schema.properties || !schema.properties[key]) {
                return;
            }

            let propertySchemaResolve = new ResolveLib(ajv,
                schema.properties[key] as JSONSchema6,
                [schemaKey, "properties", key].join("/")
            );

            const keys: string[] = ResolveLib.getDataKeys([schemaKey, "properties", key].join("/"));

            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }

    return schema;
};
