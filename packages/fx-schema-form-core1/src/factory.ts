import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { BaseFactory } from "./libs/factory";
import { FxJsonSchema } from "./models/jsonschema";

export const schemaFieldFactory = new BaseFactory<FxJsonSchema>();
export const schemaKeyWordFactory = new BaseFactory<(schema: JSONSchema6, ajv: Ajv) => JSONSchema6>();
export const schemaTypeFactory = new BaseFactory<(schema: JSONSchema6, $id: string, ajv: Ajv) => JSONSchema6>();
export const schemaKeysFactory = new BaseFactory<string>();

/**
 * 遍历所有的keyword，解析schema
 * @param schema schema
 * @param ajv    ajv的实例
 */
export const convertKeys = (schema: JSONSchema6, ajv: Ajv): JSONSchema6 => {
    schemaKeyWordFactory.forEach((key: string, val: (schema: JSONSchema6, ajv: Ajv) => JSONSchema6) => {
        schema = val(schema, ajv);
    });

    return schema;
};
