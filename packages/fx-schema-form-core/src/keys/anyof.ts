
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib, getSchemaId } from "../libs/resolve";
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

    let anyOf = schema.anyOf;

    if (anyOf && anyOf.constructor === Array) {
        schema.anyOf = anyOf.map((schemaOfOne: JSONSchema6, index: number) => {
            // console.log(schemaOfOne, (schema.$id || schema.$ref) ? undefined : getSchemaId($id));
            let { mergeSchema } = new ResolveLib(ajv, schemaOfOne, (schema.$id || getSchemaId(schema.$ref || "")) ? undefined : getSchemaId($id));

            return mergeSchema;
        });
    }

    return schema;
};
