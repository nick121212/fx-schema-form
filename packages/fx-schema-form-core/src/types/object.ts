import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib, getDataKeys } from "../libs/resolve";

const pro = "properties";

/**
 * 解析schema中的type=object的结构
 * 如果存在schema.properties,则遍历properties，继续解析schema.properties[key]
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    if (schema.properties && !schema.$ref) {
        Object.keys(schema.properties).forEach((key: string) => {

            if ([pro, "items"].indexOf(key) >= 0) {
                if (!__PROD__) {
                    throw new Error(`${key}can not be key words.`);
                }
                return;
            }

            if (!schema.properties || !schema.properties[key]) {
                return;
            }

            let propertySchemaResolve = new ResolveLib(ajv,
                schema.properties[key] as JSONSchema6,
                [schemaKey, pro, key].join("/")
            );

            const keys: string[] = getDataKeys([schemaKey, pro, key].join("/"));

            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }

    return schema;
};
