import { JSONSchema6 } from "json-schema";
import { BaseFactory } from "./libs/factory";
import { FxJsonSchema } from "./models/jsonschema";
export declare const schemaFieldFactory: BaseFactory<FxJsonSchema>;
export declare const schemaKeyWordFactory: BaseFactory<($id: string, schema: JSONSchema6) => JSONSchema6>;
export declare const schemaTypeFactory: BaseFactory<(schema: JSONSchema6, $id: string) => JSONSchema6>;
export declare const schemaKeysFactory: BaseFactory<string>;
export declare const convertKeys: ($id: string, schema: JSONSchema6) => JSONSchema6;
