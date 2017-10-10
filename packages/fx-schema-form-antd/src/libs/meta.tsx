
import uuid from "uuid";
import jpp from "json-pointer";
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
export class MetaData {
    /**
     * 数据
     */
    public data: { map: any, meta: any; isValid?: boolean } = { map: {}, meta: {} };
    /**
     * reducer的actions
     */
    public actions: any = {};

    private curAjv: ajv.Ajv;
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
    public init(curAjv: ajv.Ajv, key: string): void {
        this.isInit = true;

        this.curAjv = curAjv;
        this.curKey = key;
    }

    /**
     * 验证所有的数据
     * @param data 数据
     */
    public validateAll(data: any) {
        let result = this.curAjv.validate(this.curKey, data);

        // 设置所有的字段验证都通过
        for (let key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                let element = this.data.map[key];

                if (element.isValid === false) {
                    element.isValid = true;
                }
            }
        }
        // 如果验证有错误，则处理错误
        if (!result) {
            this.curAjv.errors.forEach((error: ajv.ErrorObject) => {
                let keys = jpp.parse(error.dataPath);
                let meta = this.getMeta(keys);

                this.setMeta(keys, {
                    dirty: true,
                    isValid: false,
                    errors: [],
                    errorText: error.message
                }, meta.type !== "array");
            });
        }

        this.data.isValid = result as boolean;
    }

    /**
     * 设置meta数据
     * @param keys   keys
     * @param meta   meta数据
     * @param strick 是否启用严格模式，针对array以及object类型的数据，进行特殊处理，返回keys的路径，否则返回对应的uuid
     */
    public setMeta(keys: Array<string>, meta: SchemaFormMeta, strick = true): void {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey, strick) || uuid();
        let curMeta = this.getCurMetaData(curUuid);

        if (strick) {
            this.setCurMetaUuid(keys, escapeKey, curUuid);
        }
        this.setCurMetaData(curUuid, Object.assign({}, curMeta, meta));
    }

    /**
     * 返回meta数据
     * @param keys   keys
     * @param strick 是否严格模式
     */
    public getMeta(keys: Array<string>, strick = true): SchemaFormMeta {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey, strick);

        return this.getCurMetaData(curUuid);
    }

    /**
     * 删除meta数据
     * @param keys keys
     */
    public removeMeta(keys: Array<string>) {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey);

        this.removeCurMetaData(curUuid, escapeKey);
    }

    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    public getKey(keys: Array<string>): { normalKey: string; escapeKey: string; } {
        const key = jpp.compile(keys);

        return {
            normalKey: key,
            escapeKey: key
        };
    }

    /**
     * 更换两个meta数据位置
     * @param keys        keys
     * @param curIndex    当前的索引
     * @param switchIndex 更换的索引
     */
    public switchMeta(keys: Array<string>, curIndex: number, switchIndex: number): void {
        let { normalKey, escapeKey } = this.getKey(keys);

        if (!jpp(this.data.meta).has(escapeKey)) {
            return;
        }

        let curMeta = jpp(this.data.meta).get(escapeKey);

        [curMeta[curIndex], curMeta[switchIndex]] = [curMeta[switchIndex], curMeta[curIndex]];

        jpp(this.data.meta).set(escapeKey, curMeta);
    }

    /**
     * 获取当前meta的uuid
     * @param escapeKey  key
     * @param strict     是否严格模式，非严格模式下，如果是object类型，则返回escapeKey
     */
    private getCurMetaUuid(escapeKey: string, strict = true): string {
        let curUuid: string;

        if (jpp(this.data.meta).has(escapeKey)) {
            curUuid = jpp(this.data.meta).get(escapeKey);
        }

        if (jpp(this.data.map).has(escapeKey) || !strict) {
            curUuid = jpp.parse(escapeKey).join("/");
        }

        // if (!strict || typeof curUuid === "object") {
        //     curUuid = jpp.parse(escapeKey).join("/");
        // }

        return curUuid;
    }

    /**
     * 返回meta数据
     * @param curUuid uuid
     */
    private getCurMetaData(curUuid: string): SchemaFormMeta {
        if (jpp(this.data.map).has(`/${curUuid}`)) {
            return jpp(this.data.map).get(`/${curUuid}`);
        }

        return { isShow: true };
    }

    /**
     * 设置meta数据
     * @param curUuid uuid
     * @param meta    meta数据
     */
    private setCurMetaData(curUuid: string, meta: SchemaFormMeta) {
        jpp(this.data.map).set(`/${curUuid}`, meta);
    }

    /**
     * 删除meta数据
     * @param curUuid   uuid
     * @param escapeKey key
     */
    private removeCurMetaData(curUuid: string, escapeKey: string) {
        if (jpp(this.data.map).has(`/${curUuid}`)) {
            jpp(this.data.map).remove(`/${curUuid}`);
        }
        if (jpp(this.data.meta).has(escapeKey)) {
            jpp(this.data.meta).remove(escapeKey);
        }
    }

    /**
     * 设置当前meta的uuid
     * @param keys    keys
     * @param key     key
     * @param curUuid uuid
     */
    private setCurMetaUuid(keys: string[], key: string, curUuid: string) {
        let parentKeys = [].concat(keys).splice(0, keys.length - 1);
        let metaJpp = jpp(this.data.meta);

        // 判断父亲节点有没有设置值，如果没有设置成{}
        if (parentKeys.length) {
            let { escapeKey: pescapeKey } = this.getKey(parentKeys);
            let curMeta = metaJpp.has(pescapeKey) ? metaJpp.get(pescapeKey) : null;
            let mapData = jpp(this.data.map).has(pescapeKey) ? jpp(this.data.map).get(pescapeKey) : {};

            if (!curMeta || typeof curMeta !== "object") {
                if (mapData && mapData.type === "array") {
                    metaJpp.set(pescapeKey, []);
                } else {
                    metaJpp.set(pescapeKey, {});
                }
            }
        }

        metaJpp.set(key, curUuid);
    }
}
