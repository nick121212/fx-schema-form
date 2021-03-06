
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib } from "../libs/resolve";
// import MergeLib from "../libs/merge";

/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @param  {Ajv}         ajv    ajv实例
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6, ajv: Ajv): JSONSchema6 => {

    if (!schema) {
        return schema;
    }

    let oneOf = schema.oneOf;

    if (oneOf && oneOf.constructor === Array) {
        schema.oneOf = oneOf.map((schemaOfOne: JSONSchema6) => {
            let { mergeSchema } = new ResolveLib(ajv, schemaOfOne);

            return mergeSchema;
        });
    }

    return schema;
};
