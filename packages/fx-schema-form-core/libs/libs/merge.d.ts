import { UiMerge } from "./ui";
export declare class SchemaMerge {
    private uiMerge;
    constructor(uiMerge: UiMerge);
    private compileSchema(keys, schema, options);
    merge(key: string, schema: any, uiSchema?: Array<any>, options?: any): void | any[];
}
export declare const schemaMerge: SchemaMerge;
