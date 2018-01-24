import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";
import { BaseFactory } from "./libs/factory";
import { FxJsonSchema } from "./models/jsonschema";
export declare const schemaFieldFactory: BaseFactory<FxJsonSchema>;
export declare const schemaKeyWordFactory: BaseFactory<(schema: JSONSchema6, ajv: Ajv) => JSONSchema6>;
export declare const schemaTypeFactory: BaseFactory<(schema: JSONSchema6, $id: string, ajv: Ajv) => JSONSchema6>;
export declare const schemaKeysFactory: BaseFactory<string>;
/**
 * 遍历所有的keyword，解析schema
 * @param schema schema
 * @param ajv    ajv的实例
 */
export declare const convertKeys: (schema: JSONSchema6, ajv: Ajv) => JSONSchema6;
