import ajv from "ajv";
export interface SchemaFormMeta {
    isShow?: boolean;
    isLoading?: boolean;
    dirty?: boolean;
    isValid?: boolean;
    errors?: ajv.ErrorObject[];
    errorText?: string;
    type?: string;
}
export declare class MetaData {
    readonly con: string;
    data: {
        map: any;
        meta: any;
        isValid?: boolean;
        isLoading?: boolean;
        errMessage?: string;
    };
    actions: any;
    private schemaFormOptions;
    private curKey;
    private isInit;
    constructor(con: string);
    init(schemaFormOptions: any, key: string): void;
    validateAll(data: any): Promise<any>;
    setErrors(errors: ajv.ErrorObject[]): void;
    getKey(keys: Array<string>): {
        keys: Array<string>;
        schemaKey: string;
        originEscapeKey: string;
        normalKey: string;
        escapeKey: string;
    };
    setMeta(keys: Array<string>, meta: SchemaFormMeta, strick?: boolean): void;
    getUuid({normalKey, escapeKey, originEscapeKey, schemaKey}: {
        normalKey: any;
        escapeKey: any;
        originEscapeKey: any;
        schemaKey: any;
    }): string;
    getMeta(keys: Array<string>, strick?: boolean): SchemaFormMeta;
    switchMeta(keys: Array<string>, curIndex: number, switchIndex: number): void;
    removeMeta(keys: Array<string>): void;
    private getCurMetaData(curUuid);
    private setCurMetaData(curUuid, meta);
    private setCurMetaUuid(key, curUuid);
}
