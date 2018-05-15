import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaKeysFactory, convertKeys } from "../factory";
import { default as ResolveLib, getDataKeys, getSchemaId } from "../libs/resolve";

/**
 * 解析schema中的type!=array && type!=object的结构
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaKey 当前的schemaKey
 * @param  {Ajv}         ajv       当前的ajv实例
 * @return {JSONSchema6}           返回处理过后的schema
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    const currentSchema = convertKeys(schema, ajv),
        keys: string[] = getDataKeys(schemaKey),
        $id = getSchemaId(schemaKey);

    // 如果已经存在，则直接返回
    if (schemaFieldFactory.has(schemaKey)) {
        return currentSchema || schema;
    }

    // 将当前获取的schema加入到schemaFieldFactory中
    schemaFieldFactory.add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    // 加入key的索引
    schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);

    return currentSchema || schema;
};
