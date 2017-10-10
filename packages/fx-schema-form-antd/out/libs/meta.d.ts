import ajv from "ajv";
/**
 * 单个meta数据
 */
export interface SchemaFormMeta {
    isShow?: boolean;
    dirty?: boolean;
    isValid?: boolean;
    errors?: ajv.ErrorObject[];
    errorText?: string;
    type?: string;
}
/**
 * Meta的数据操作类
 */
export declare class MetaData {
    /**
     * 数据
     */
    data: {
        map: any;
        meta: any;
        isValid?: boolean;
    };
    /**
     * reducer的actions
     */
    actions: any;
    private curAjv;
    private curKey;
    /**
     * 是否初始化
     */
    private isInit;
    /**
     * 初始化一个ajv
     * @param curAjv ajv的实例
     * @param key    ajv的schema的key
     */
    init(curAjv: ajv.Ajv, key: string): void;
    /**
     * 验证所有的数据
     * @param data 数据
     */
    validateAll(data: any): void;
    /**
     * 设置meta数据
     * @param keys   keys
     * @param meta   meta数据
     * @param strick 是否启用严格模式，针对array以及object类型的数据，进行特殊处理，返回keys的路径，否则返回对应的uuid
     */
    setMeta(keys: Array<string>, meta: SchemaFormMeta, strick?: boolean): void;
    /**
     * 返回meta数据
     * @param keys   keys
     * @param strick 是否严格模式
     */
    getMeta(keys: Array<string>, strick?: boolean): SchemaFormMeta;
    /**
     * 删除meta数据
     * @param keys keys
     */
    removeMeta(keys: Array<string>): void;
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    getKey(keys: Array<string>): {
        normalKey: string;
        escapeKey: string;
    };
    /**
     * 更换两个meta数据位置
     * @param keys        keys
     * @param curIndex    当前的索引
     * @param switchIndex 更换的索引
     */
    switchMeta(keys: Array<string>, curIndex: number, switchIndex: number): void;
    /**
     * 获取当前meta的uuid
     * @param escapeKey  key
     * @param strict     是否严格模式，非严格模式下，如果是object类型，则返回escapeKey
     */
    private getCurMetaUuid(escapeKey, strict?);
    /**
     * 返回meta数据
     * @param curUuid uuid
     */
    private getCurMetaData(curUuid);
    /**
     * 设置meta数据
     * @param curUuid uuid
     * @param meta    meta数据
     */
    private setCurMetaData(curUuid, meta);
    /**
     * 删除meta数据
     * @param curUuid   uuid
     * @param escapeKey key
     */
    private removeCurMetaData(curUuid, escapeKey);
    /**
     * 设置当前meta的uuid
     * @param keys    keys
     * @param key     key
     * @param curUuid uuid
     */
    private setCurMetaUuid(keys, key, curUuid);
}
