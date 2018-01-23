import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { BaseFactory } from "./libs/factory";

export const schemaFieldFactory = new BaseFactory<JSONSchema6>();
export const schemaKeyWordFactory = new BaseFactory<(schema: JSONSchema6, ajv: Ajv) => JSONSchema6>();
export const schemaTypeFactory = new BaseFactory<(schema: JSONSchema6, $id: string, ajv: Ajv) => JSONSchema6>();

export const convertKeys = (schema: JSONSchema6, ajv: Ajv): JSONSchema6 => {
    schemaKeyWordFactory.forEach((key: string, val: (schema: JSONSchema6, ajv: Ajv) => JSONSchema6) => {
        schema = val(schema, ajv);
    });

    return schema;
};
