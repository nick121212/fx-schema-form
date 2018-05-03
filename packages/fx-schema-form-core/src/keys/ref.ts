import { Ajv, ValidateFunction } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib, getDataKeys } from "../libs/resolve";
import { warn } from "../utils";

/**
 * 解析schema中的关键字 ref
 * 如果有$ref关键字，则从ajv中获取$ref的schema
 * 如果ajv中发现了schema，则添加$ref和refKeys，返回schema
 * @param  {JSONSchema6} schema 当前的schema
 * @param  {Ajv}         ajv    ajv实例
 * @return {JSONSchema6}        处理过后的schema
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
        }

        if (!__PROD__) {
            warn(`${schema.$ref} not exist.`);
        }
    }

    return schema;
};
