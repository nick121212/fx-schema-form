
import uuid from "uuid";
import jpp from "json-pointer";
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
export class MetaData {
    /**
     * 数据
     */
    public data: {
        map: any,
        meta: any;
        isValid?: boolean;
        isLoading?: boolean;
    } = { map: {}, meta: {} };
    /**
     * reducer的actions
     */
    public actions: any = {};
    /**
     * 当前的ajv
     */
    private schemaFormOptions: any;
    /**
     * 当前的验证key
     */
    private curKey: string;
    /**
     * 是否初始化
     */
    private isInit = false;
    /**
     * 初始化一个ajv
     * @param curAjv ajv的实例
     * @param key    ajv的schema的key
     */
    public init(schemaFormOptions: any, key: string): void {
        if (this.isInit) {
            return;
        }
        this.isInit = true;

        this.schemaFormOptions = schemaFormOptions;
        this.curKey = key;
    }
    /**
     * 验证所有的数据
     * @param data 数据
     */
    public async validateAll(data: any): Promise<MetaData> {
        // 设置所有的字段验证都通过
        for (let key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                let element = this.data.map[key];

                if (element.isValid === false) {
                    element.isValid = true;
                }
            }
        }
        this.data.isLoading = true;
        this.data.isValid = false;

        try {
            await this.schemaFormOptions.ajv.compile(this.schemaFormOptions.ajv.getSchema(this.curKey).schema)(data);

            this.data.isValid = true;
        } catch (err) {
            // console.log(err);
            err.errors.forEach((error: ajv.ErrorObject) => {
                let keys = jpp.parse(error.dataPath);
                let meta = this.getMeta(keys);

                this.setMeta(keys, {
                    dirty: true,
                    isLoading: false,
                    isValid: false,
                    errors: [],
                    errorText: error.message
                });
            });
        }

        return this;
    }
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    public getKey(keys: Array<string>): { schemaKey: string; originEscapeKey: string; normalKey: string; escapeKey: string; } {
        const key = jpp.compile(keys);
        let escapeKey = jpp.escape(key);

        return {
            schemaKey: keys.map((k: string) => {
                if (typeof k === "number") {
                    return "-";
                }
                return k;
            }).join("/"),
            normalKey: key,
            originEscapeKey: escapeKey,
            escapeKey: "/" + escapeKey
        };
    }
    /**
     * 设置meta信息
     * @param keys     keys
     * @param meta     meta数据
     * @param strick   废弃属性
     */
    public setMeta(keys: Array<string>, meta: SchemaFormMeta, strick = true): void {
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        let curMeta = this.getCurMetaData(curUuid);

        if (curUuid !== escapeKey) {
            this.setCurMetaUuid(normalKey, curUuid);
        }

        this.setCurMetaData(curUuid, Object.assign({}, curMeta, meta));
    }
    /**
     * 获取当前keys的uuid
     * @param param0     各种keys
     */
    public getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey }): string {
        let jMap = jpp(this.data.map);
        let jMeta = jpp(this.data.meta), curMeta, curUuid;

        if (this.schemaFormOptions.map.has(schemaKey)) {
            let schema = this.schemaFormOptions.map.get(schemaKey);

            if (["array", "object"].indexOf(schema.type) >= 0) {
                return escapeKey;
            }
        }

        if (jMap.has(escapeKey)) {
            return escapeKey;
        }

        // 如果meta中存在normalKey
        if (jMeta.has(normalKey)) {
            curMeta = jMeta.get(normalKey);
            curUuid = curMeta;
        }

        if (typeof curMeta !== "string" || !curMeta) {
            curUuid = "/" + jpp.escape(`/${uuid()}`);
        }

        return curUuid;
    }
    /**
     * 返回meta数据
     * @param keys   keys
     * @param strick 是否严格模式
     */
    public getMeta(keys: Array<string>, strick = true): SchemaFormMeta {
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });

        return this.getCurMetaData(curUuid);
    }
    /**
     * 更换两个meta数据位置
     * @param keys        keys
     * @param curIndex    当前的索引
     * @param switchIndex 更换的索引
     */
    public switchMeta(keys: Array<string>, curIndex: number, switchIndex: number): void {
        let { normalKey, escapeKey, schemaKey, originEscapeKey } = this.getKey(keys);

        if (!jpp(this.data.meta).has(normalKey)) {
            return;
        }

        let curMeta = jpp(this.data.meta).get(normalKey);

        [curMeta[curIndex], curMeta[switchIndex]] = [curMeta[switchIndex], curMeta[curIndex]];

        jpp(this.data.meta).set(normalKey, curMeta);
    }
    /**
     * 删除meta数据
     *  1. 遍历map，清除map中是${originEscapeKey}开头的key
     *  2. 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
     *  3. 删除map中当前keys对应的uuid
     * @param keys keys
     */
    public removeMeta(keys: Array<string>): void {
        let jMap = jpp(this.data.map), jMeta = jpp(this.data.meta);
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        let regexp = new RegExp(`^${originEscapeKey}`, "ig");

        // 遍历map，清除map中是${originEscapeKey}开头的key
        for (let key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                let mapKeys = this.getKey(jpp.parse(key));

                if (regexp.test(mapKeys.originEscapeKey)) {
                    jMap.remove(mapKeys.escapeKey);
                }
            }
        }

        // 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
        if (jMeta.has(normalKey)) {
            let metaDict = jpp.dict(jMeta.get(normalKey));

            jMeta.remove(normalKey);

            // 遍历子元素，并且清除数据
            for (let key in metaDict) {
                if (metaDict.hasOwnProperty(key)) {
                    let element = metaDict[key];

                    if (jMap.has(element)) {
                        jMap.remove(element);
                    }
                }
            }
        }

        // 删除当前的uuid
        if (jMap.has(curUuid)) {
            jMap.remove(curUuid);
        }
    }
    /**
     * 返回meta数据
     * @param curUuid uuid
     */
    private getCurMetaData(curUuid: string): SchemaFormMeta {
        if (jpp(this.data.map).has(`${curUuid}`)) {
            return jpp(this.data.map).get(`${curUuid}`);
        }

        return { isShow: true };
    }

    /**
     * 设置meta数据
     * @param curUuid uuid
     * @param meta    meta数据
     */
    private setCurMetaData(curUuid: string, meta: SchemaFormMeta) {
        jpp(this.data.map).set(`${curUuid}`, meta);
    }
    /**
     * 设置当前meta的uuid
     * @param key     key
     * @param curUuid uuid
     */
    private setCurMetaUuid(key: string, curUuid: string) {
        let jMeta = jpp(this.data.meta);

        jMeta.set(key, curUuid);
    }
}
