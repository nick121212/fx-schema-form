import { Ajv, ValidateFunction } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib, getDataKeys } from "../libs/resolve";

/**
 * 解析schema中的关键字 ref
 * 如果有$ref关键字，则从ajv中获取$ref的schema
 * 如果ajv中发现了schema，则添加$ref和refKeys，返回schema
 */
export default (schema: JSONSchema6, ajv: Ajv) => {
    if (schema && schema.$ref) {
        let validate: ValidateFunction = ajv.getSchema(schema.$ref);

        if (validate && validate.schema) {
            let schemaAjv = Object.assign({}, validate.schema) as JSONSchema6;

            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;

            Object.assign(schemaAjv, {
                refKeys: getDataKeys(schema.$ref)
            });

            return schemaAjv;
        } else {
            if (!__PROD__) {
                throw new Error("${schema.$ref} not exist.");
            }
        }
    }

    return schema;
};
