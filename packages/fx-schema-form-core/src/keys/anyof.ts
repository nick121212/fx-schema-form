
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib } from "../libs/resolve";
// import MergeLib from "../libs/merge";

/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 * @param  {JSONSchema6} schema 当前的schema
 * @param  {Ajv}         ajv    ajv实例
 * @return {JSONSchema6}        处理过后的schema
 */
export default (schema: JSONSchema6, ajv: Ajv): JSONSchema6 => {

    if (!schema) {
        return schema;
    }

    let anyOf = schema.anyOf;

    if (anyOf && anyOf.constructor === Array) {
        schema.anyOf = anyOf.map((schemaOfOne: JSONSchema6) => {
            let { mergeSchema } = new ResolveLib(ajv, schemaOfOne);

            return mergeSchema;
        });
    }

    return schema;
};
