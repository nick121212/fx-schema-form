import uuid from "uuid";
import jpp from "json-pointer";
/**
 * Meta的数据操作类
 */
export class MetaData {
    constructor() {
        /**
         * 数据
         */
        this.data = { map: {}, meta: {} };
        /**
         * reducer的actions
         */
        this.actions = {};
        /**
         * 是否初始化
         */
        this.isInit = false;
    }
    /**
     * 初始化一个ajv
     * @param curAjv ajv的实例
     * @param key    ajv的schema的key
     */
    init(curAjv, key) {
        this.isInit = true;
        this.curAjv = curAjv;
        this.curKey = key;
    }
    /**
     * 验证所有的数据
     * @param data 数据
     */
    validateAll(data) {
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
            this.curAjv.errors.forEach((error) => {
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
        this.data.isValid = result;
    }
    /**
     * 设置meta数据
     * @param keys   keys
     * @param meta   meta数据
     * @param strick 是否启用严格模式，针对array以及object类型的数据，进行特殊处理，返回keys的路径，否则返回对应的uuid
     */
    setMeta(keys, meta, strick = true) {
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
    getMeta(keys, strick = true) {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey, strick);
        return this.getCurMetaData(curUuid);
    }
    /**
     * 删除meta数据
     * @param keys keys
     */
    removeMeta(keys) {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey);
        this.removeCurMetaData(curUuid, escapeKey);
    }
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    getKey(keys) {
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
    switchMeta(keys, curIndex, switchIndex) {
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
    getCurMetaUuid(escapeKey, strict = true) {
        let curUuid;
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
    getCurMetaData(curUuid) {
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
    setCurMetaData(curUuid, meta) {
        jpp(this.data.map).set(`/${curUuid}`, meta);
    }
    /**
     * 删除meta数据
     * @param curUuid   uuid
     * @param escapeKey key
     */
    removeCurMetaData(curUuid, escapeKey) {
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
    setCurMetaUuid(keys, key, curUuid) {
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
                }
                else {
                    metaJpp.set(pescapeKey, {});
                }
            }
        }
        metaJpp.set(key, curUuid);
    }
}
//# sourceMappingURL=meta.js.map