var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    init(schemaFormOptions, key) {
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
    validateAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
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
                yield this.schemaFormOptions.ajv.compile(this.schemaFormOptions.ajv.getSchema(this.curKey).schema)(data);
                this.data.isValid = true;
            }
            catch (err) {
                // console.log(err);
                err.errors.forEach((error) => {
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
        });
    }
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    getKey(keys) {
        const key = jpp.compile(keys);
        let escapeKey = jpp.escape(key);
        return {
            schemaKey: keys.map((k) => {
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
    setMeta(keys, meta, strick = true) {
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
    getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey }) {
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
    getMeta(keys, strick = true) {
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
    switchMeta(keys, curIndex, switchIndex) {
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
    removeMeta(keys) {
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
    getCurMetaData(curUuid) {
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
    setCurMetaData(curUuid, meta) {
        jpp(this.data.map).set(`${curUuid}`, meta);
    }
    /**
     * 设置当前meta的uuid
     * @param key     key
     * @param curUuid uuid
     */
    setCurMetaUuid(key, curUuid) {
        let jMeta = jpp(this.data.meta);
        jMeta.set(key, curUuid);
    }
}
//# sourceMappingURL=meta.js.map