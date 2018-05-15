import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";
import { BaseFactory } from "./libs/factory";
import { FxJsonSchema } from "./models/jsonschema";
export declare let schemaFieldFactory: BaseFactory<FxJsonSchema>;
export declare let schemaKeyWordFactory: BaseFactory<(schema: JSONSchema6, ajv: Ajv) => JSONSchema6>;
export declare let schemaTypeFactory: BaseFactory<(schema: JSONSchema6, $id: string, ajv: Ajv) => JSONSchema6>;
export declare let schemaKeysFactory: BaseFactory<string>;
export declare let convertKeys: (schema: JSONSchema6, ajv: Ajv) => JSONSchema6;
