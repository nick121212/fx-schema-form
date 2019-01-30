import { JSONSchema6 } from "json-schema";

import { default as ResolveLib } from "../libs/resolve";
import { isArray } from "../utils";

/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6): JSONSchema6 => {
    const oneOf = schema.oneOf;

    if (oneOf && isArray(oneOf)) {
        schema.oneOf = oneOf.map((schemaOfOne: JSONSchema6) => {
            let { mergeSchema } = new ResolveLib(schemaOfOne);

            return mergeSchema;
        });
    }

    return schema;
};
