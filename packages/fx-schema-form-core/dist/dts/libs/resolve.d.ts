import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";
export default class ResolveLib {
    private ajv;
    readonly $id: string;
    mergeSchema: JSONSchema6;
    constructor(ajv: Ajv, schema: JSONSchema6, $id?: string);
    private initSchema(ajv, schema);
    private compileSchema(schema, $id);
    static getDataKeys(schemaKey: string, keepFirst?: boolean): string[];
    static getSchemaId(schemaKey: string): string;
}
