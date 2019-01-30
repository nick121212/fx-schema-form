import { JSONSchema6 } from "json-schema";

import { getDataKeys, getSchemaId } from "../libs/resolve";
import { warn, isProd } from "../utils";
import { schemaFieldFactory, schemaKeysFactory } from "../factory";

/**
 * 解析schema中的关键字 ref
 * 如果有$ref关键字，则从ajv中获取$ref的schema
 * 如果ajv中发现了schema，则添加$ref和refKeys，返回schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6) => {
    if (schema && schema.$ref) {
        const schemaId = getSchemaId(schema.$ref);
        let refName = schema.$ref;

        if (schema.$id) {
            refName = schema.$id + schema.$ref;
        } else if (!schemaId) {
            refName = getSchemaId($id) + schema.$ref;
        }
        schema.$ref = refName;

        if (!schemaFieldFactory.has(refName)) {
            // throw new Error(`不存在Key为[${refName}]的schema!`);
            schemaFieldFactory.add(refName, {});
        }

        const refSchema = schemaFieldFactory.get(refName);

        if (refSchema) {
            let schemaAjv = Object.assign({}, refSchema) as JSONSchema6;

            schemaAjv.$ref = refName;
            delete schemaAjv.$id;

            Object.assign(schemaAjv, {
                refKeys: getDataKeys(refName)
            });

            return schemaAjv;
        }

        if (!isProd) {
            warn(`${refName} not exist.`);
        }
    }

    return schema;
};
