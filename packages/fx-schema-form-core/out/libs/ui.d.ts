import { BaseFactory } from "./factory";
export declare class UiMerge {
    private schemaMerge;
    private getKey(keyProp);
    private mergeNormal(keyProp, map, keys, options);
    private mergeObject(keyProp, map, parentKeys, keys);
    private mergeArray(map, parentKeys, schema, uiSchemas, options);
    init(schemaMerge: Function): void;
    merge(map: BaseFactory<any>, parentKeys: Array<string>, schema: any, uiSchemas: Array<any>, options: any): any[];
}
