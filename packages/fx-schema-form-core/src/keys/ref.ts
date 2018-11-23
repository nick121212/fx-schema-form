import { Ajv, ValidateFunction } from "ajv";
import { JSONSchema6 } from "json-schema";

import { getDataKeys, getSchemaId } from "../libs/resolve";
import { warn, isProd } from "../utils";
// import { schemaFieldFactory, schemaKeysFactory } from "../factory";

/**
 * 解析schema中的关键字 ref
 * 如果有$ref关键字，则从ajv中获取$ref的schema
 * 如果ajv中发现了schema，则添加$ref和refKeys，返回schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @param  {Ajv}         ajv    ajv实例
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6, ajv: Ajv) => {
    if (schema && schema.$ref) {
        const schemaId = getSchemaId(schema.$ref);

        if (schema.$id) {
            schema.$ref = schema.$id + schema.$ref;
        } else if (!schemaId) {
            schema.$ref = getSchemaId($id) + schema.$ref;
        }

        const validate: ValidateFunction = ajv.getSchema(schema.$ref);

        if (validate && validate.schema) {
            let schemaAjv = Object.assign({}, validate.schema) as JSONSchema6;

            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;

            Object.assign(schemaAjv, {
                refKeys: getDataKeys(schema.$ref)
            });

            return schemaAjv;
        }

        if (!isProd) {
            // console.log($id, schema, getSchemaId("$id"));
            warn(`${schema.$ref} not exist.`);
        }
    }

    return schema;
};
