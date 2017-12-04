import { UiMerge } from "./ui";
export declare class SchemaMerge {
    private uiMerge;
    constructor(uiMerge: UiMerge);
    compileSchema(keys: Array<string>, schema: any, options: any): any;
    merge(key: string, schema: any, uiSchema?: Array<any>, options?: any): void | any[];
}
export declare const schemaMerge: SchemaMerge;
