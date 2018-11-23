import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib, getDataKeys } from "../libs/resolve";
import { warn, isProd } from "../utils";

const pro = "properties";

/**
 * 解析schema中的type=object的结构
 * 如果存在schema.properties,则遍历properties，继续解析schema.properties[key]
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaKey 当前的schemaKey
 * @param  {Ajv}         ajv       当前的ajv实例
 * @return {JSONSchema6}           返回处理过后的schema
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    const { properties, required = [], $ref } = schema;

    if (properties && !$ref) {
        Object.keys(properties).forEach((key: string) => {

            if ([pro, "items"].indexOf(key) >= 0) {
                if (!isProd) {
                    warn(`${key}can not be key words.`);
                    // throw new Error(`${key}can not be key words.`);
                }
                return;
            }

            if (!properties || !properties[key]) {
                return;
            }

            // console.log(required, key, required.indexOf(key));

            Object.assign(properties[key], {
                isRequired: required.indexOf(key) >= 0
            });

            const propertySchemaResolve = new ResolveLib(ajv, properties[key] as JSONSchema6, [schemaKey, pro, key].join("/")),
                keys: string[] = getDataKeys([schemaKey, pro, key].join("/"));

            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }

    return schema;
};
