
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib } from "../libs/resolve";

/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 */
export default (schema: JSONSchema6, ajv: Ajv): JSONSchema6 => {

    if (!schema) {
        return schema;
    }

    let oneOf = schema.oneOf;

    if ( oneOf && oneOf.constructor === Array) {
        schema.oneOf = oneOf.map((schemaOfOne: JSONSchema6) => {
            let resolve = new ResolveLib(ajv, schemaOfOne);

            return resolve.mergeSchema;
        });
    }

    return schema;
};
