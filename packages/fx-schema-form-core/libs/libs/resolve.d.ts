import { JSONSchema6 } from "json-schema";
export declare const getDataKeys: (schemaKey: string, keepFirst?: boolean) => string[];
export declare const getSchemaId: (schemaKey: string) => string;
export default class ResolveLib {
    readonly $id: string;
    mergeSchema: JSONSchema6;
    constructor(schema: JSONSchema6, $id?: string);
    private initSchema(schema);
    private compileSchema(schema, $id);
}
