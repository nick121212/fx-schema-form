import ajv from "ajv";
/**
 * 单个meta数据
 */
export interface SchemaFormMeta {
    isShow?: boolean;
    isLoading?: boolean;
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
        isLoading?: boolean;
    };
    /**
     * reducer的actions
     */
    actions: any;
    /**
     * 当前的ajv
     */
    private schemaFormOptions;
    /**
     * 当前的验证key
     */
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
    init(schemaFormOptions: any, key: string): void;
    /**
     * 验证所有的数据
     * @param data 数据
     */
    validateAll(data: any): Promise<MetaData>;
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    getKey(keys: Array<string>): {
        schemaKey: string;
        originEscapeKey: string;
        normalKey: string;
        escapeKey: string;
    };
    /**
     * 设置meta信息
     * @param keys     keys
     * @param meta     meta数据
     * @param strick   废弃属性
     */
    setMeta(keys: Array<string>, meta: SchemaFormMeta, strick?: boolean): void;
    /**
     * 获取当前keys的uuid
     * @param param0     各种keys
     */
    getUuid({normalKey, escapeKey, originEscapeKey, schemaKey}: {
        normalKey: any;
        escapeKey: any;
        originEscapeKey: any;
        schemaKey: any;
    }): string;
    /**
     * 返回meta数据
     * @param keys   keys
     * @param strick 是否严格模式
     */
    getMeta(keys: Array<string>, strick?: boolean): SchemaFormMeta;
    /**
     * 更换两个meta数据位置
     * @param keys        keys
     * @param curIndex    当前的索引
     * @param switchIndex 更换的索引
     */
    switchMeta(keys: Array<string>, curIndex: number, switchIndex: number): void;
    /**
     * 删除meta数据
     *  1. 遍历map，清除map中是${originEscapeKey}开头的key
     *  2. 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
     *  3. 删除map中当前keys对应的uuid
     * @param keys keys
     */
    removeMeta(keys: Array<string>): void;
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
     * 设置当前meta的uuid
     * @param key     key
     * @param curUuid uuid
     */
    private setCurMetaUuid(key, curUuid);
}
