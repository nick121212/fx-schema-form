
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
}


/**
 * Meta的数据操作类
 */
export class MetaData {
    /**
     * 数据
     */
    public data: { map: any, meta: any; } = { map: {}, meta: {} };
    /**
     * reducer的actions
     */
    public actions: any = {};

    private curAjv: ajv.Ajv;

    /**
     * 是否初始化
     */
    private isInit = false;

    public init(curAjv: ajv.Ajv): void {
        this.isInit = true;

        this.curAjv = curAjv;
    }

    public validateAll(data: any) {
        console.log(data, this.curAjv);

        let result = this.curAjv.validate("test", data);

        // this.curAjv.validateSchema()

        console.log(result, this.curAjv.errors);
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

        // 向上移动
        if (curIndex > switchIndex) {
            curMeta = [
                ...[].concat(curMeta).splice(0, switchIndex),
                curMeta[curIndex],
                curMeta[switchIndex],
                ...[].concat(curMeta).splice(curIndex + 1)
            ];
        } else {
            // 向下移动
            curMeta = [
                ...[].concat(curMeta).splice(0, curIndex),
                curMeta[switchIndex],
                curMeta[curIndex],
                ...[].concat(curMeta).splice(switchIndex + 1)
            ];
        }

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

        if (!strict || typeof curUuid === "object") {
            curUuid = jpp.parse(escapeKey).join("/");
        }

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
        // console.log("-----------------", key, curUuid);
        let parentKeys = [].concat(keys).splice(0, keys.length - 1);
        let metaJpp = jpp(this.data.meta);

        if (parentKeys.length) {
            let { escapeKey: pescapeKey } = this.getKey(parentKeys);
            let curMeta = metaJpp.has(key) ? metaJpp.get(key) : null;

            if (!curMeta) {
                metaJpp.set(pescapeKey, {});
            }
        }

        metaJpp.set(key, curUuid);
    }
}
