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
export class MetaData {
    constructor() {
        this.data = { map: {}, meta: {} };
        this.actions = {};
        this.isInit = false;
    }
    init(schemaFormOptions, key) {
        if (this.isInit) {
            return;
        }
        this.isInit = true;
        this.schemaFormOptions = schemaFormOptions;
        this.curKey = key;
    }
    validateAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let key in this.data.map) {
                if (this.data.map.hasOwnProperty(key)) {
                    let element = this.data.map[key];
                    element.isValid = true;
                    element.dirty = true;
                }
            }
            this.data.isLoading = true;
            this.data.isValid = false;
            try {
                let schema = this.schemaFormOptions.ajv.getSchema(this.curKey).schema;
                let validate = this.schemaFormOptions.ajv.compile(schema);
                yield validate(data);
                this.data.isValid = true;
            }
            catch (err) {
                this.data.isValid = false;
                if (err.errors && err.errors.length) {
                    this.setErrors(err.errors);
                }
            }
            return this.data;
        });
    }
    setErrors(errors) {
        this.data.isValid = false;
        errors.forEach((error) => {
            let keys = jpp.parse(error.dataPath);
            let meta = this.getMeta(keys);
            this.setMeta(keys, {
                dirty: true,
                isLoading: false,
                isValid: false,
                errors: [],
                errorText: this.schemaFormOptions.ajv.errorsText([error], { separator: ",", dataVar: "" })
            });
        });
    }
    getKey(keys) {
        const key = jpp.compile(keys);
        let escapeKey = jpp.escape(key);
        return {
            schemaKey: keys.map((k) => {
                if (!Number.isNaN(Number(k))) {
                    return "-";
                }
                return k;
            }).join("/"),
            normalKey: key,
            originEscapeKey: escapeKey,
            escapeKey: "/" + escapeKey
        };
    }
    setMeta(keys, meta, strick = true) {
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        let curMeta = this.getCurMetaData(curUuid);
        if (curUuid !== escapeKey) {
            this.setCurMetaUuid(normalKey, curUuid);
        }
        this.setCurMetaData(curUuid, Object.assign({}, curMeta, meta));
    }
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
        if (jMeta.has(normalKey)) {
            curMeta = jMeta.get(normalKey);
            curUuid = curMeta;
        }
        if (typeof curMeta !== "string" || !curMeta) {
            curUuid = "/" + jpp.escape(`/${uuid()}`);
        }
        return curUuid;
    }
    getMeta(keys, strick = true) {
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        return this.getCurMetaData(curUuid);
    }
    switchMeta(keys, curIndex, switchIndex) {
        let { normalKey, escapeKey, schemaKey, originEscapeKey } = this.getKey(keys);
        if (!jpp(this.data.meta).has(normalKey)) {
            return;
        }
        let curMeta = jpp(this.data.meta).get(normalKey);
        [curMeta[curIndex], curMeta[switchIndex]] = [curMeta[switchIndex], curMeta[curIndex]];
        jpp(this.data.meta).set(normalKey, curMeta);
    }
    removeMeta(keys) {
        let jMap = jpp(this.data.map), jMeta = jpp(this.data.meta);
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        let regexp = new RegExp(`^${originEscapeKey}`, "ig");
        for (let key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                let mapKeys = this.getKey(jpp.parse(key));
                if (regexp.test(mapKeys.originEscapeKey)) {
                    jMap.remove(mapKeys.escapeKey);
                }
            }
        }
        if (jMeta.has(normalKey) && jMeta.get(normalKey)) {
            let metaDict = jpp.dict(jMeta.get(normalKey));
            jMeta.remove(normalKey);
            for (let key in metaDict) {
                if (metaDict.hasOwnProperty(key)) {
                    let element = metaDict[key];
                    if (jMap.has(element)) {
                        jMap.remove(element);
                    }
                }
            }
        }
        if (jMap.has(curUuid)) {
            jMap.remove(curUuid);
        }
    }
    getCurMetaData(curUuid) {
        if (jpp(this.data.map).has(`${curUuid}`)) {
            return jpp(this.data.map).get(`${curUuid}`);
        }
        return { isShow: true };
    }
    setCurMetaData(curUuid, meta) {
        jpp(this.data.map).set(`${curUuid}`, meta);
    }
    setCurMetaUuid(key, curUuid) {
        let jMeta = jpp(this.data.meta);
        jMeta.set(key, curUuid);
    }
}
//# sourceMappingURL=meta.jsx.map