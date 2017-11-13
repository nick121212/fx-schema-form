var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import uuid from "uuid";
import jpp from "json-pointer";
var MetaData = (function () {
    function MetaData() {
        this.data = { map: {}, meta: {} };
        this.actions = {};
        this.isInit = false;
    }
    MetaData.prototype.init = function (schemaFormOptions, key) {
        if (this.isInit) {
            return;
        }
        this.isInit = true;
        this.schemaFormOptions = schemaFormOptions;
        this.curKey = key;
    };
    MetaData.prototype.validateAll = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var key, element, schema, validate, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (key in this.data.map) {
                            if (this.data.map.hasOwnProperty(key)) {
                                element = this.data.map[key];
                                element.isValid = true;
                                element.dirty = true;
                            }
                        }
                        this.data.isLoading = true;
                        this.data.isValid = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        schema = this.schemaFormOptions.ajv.getSchema(this.curKey).schema;
                        validate = this.schemaFormOptions.ajv.compile(schema);
                        return [4, validate(data)];
                    case 2:
                        _a.sent();
                        this.data.isValid = true;
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.data.isValid = false;
                        if (err_1.errors && err_1.errors.length) {
                            this.setErrors(err_1.errors);
                        }
                        return [3, 4];
                    case 4: return [2, this.data];
                }
            });
        });
    };
    MetaData.prototype.setErrors = function (errors) {
        var _this = this;
        this.data.isValid = false;
        errors.forEach(function (error) {
            var keys = jpp.parse(error.dataPath);
            var meta = _this.getMeta(keys);
            _this.setMeta(keys, {
                dirty: true,
                isLoading: false,
                isValid: false,
                errors: [],
                errorText: _this.schemaFormOptions.ajv.errorsText([error], { separator: ",", dataVar: "" })
            });
        });
    };
    MetaData.prototype.getKey = function (keys) {
        var key = jpp.compile(keys);
        var escapeKey = jpp.escape(key);
        return {
            schemaKey: keys.map(function (k) {
                if (!Number.isNaN(Number(k))) {
                    return "-";
                }
                return k;
            }).join("/"),
            normalKey: key,
            originEscapeKey: escapeKey,
            escapeKey: "/" + escapeKey
        };
    };
    MetaData.prototype.setMeta = function (keys, meta, strick) {
        if (strick === void 0) { strick = true; }
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var curUuid = this.getUuid({ normalKey: normalKey, escapeKey: escapeKey, originEscapeKey: originEscapeKey, schemaKey: schemaKey });
        var curMeta = this.getCurMetaData(curUuid);
        if (curUuid !== escapeKey) {
            this.setCurMetaUuid(normalKey, curUuid);
        }
        this.setCurMetaData(curUuid, Object.assign({}, curMeta, meta));
    };
    MetaData.prototype.getUuid = function (_a) {
        var normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var jMap = jpp(this.data.map);
        var jMeta = jpp(this.data.meta), curMeta, curUuid;
        if (this.schemaFormOptions.map.has(schemaKey)) {
            var schema = this.schemaFormOptions.map.get(schemaKey);
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
            curUuid = "/" + jpp.escape("/" + uuid());
        }
        return curUuid;
    };
    MetaData.prototype.getMeta = function (keys, strick) {
        if (strick === void 0) { strick = true; }
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var curUuid = this.getUuid({ normalKey: normalKey, escapeKey: escapeKey, originEscapeKey: originEscapeKey, schemaKey: schemaKey });
        return this.getCurMetaData(curUuid);
    };
    MetaData.prototype.switchMeta = function (keys, curIndex, switchIndex) {
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, schemaKey = _a.schemaKey, originEscapeKey = _a.originEscapeKey;
        if (!jpp(this.data.meta).has(normalKey)) {
            return;
        }
        var curMeta = jpp(this.data.meta).get(normalKey);
        _b = [curMeta[switchIndex], curMeta[curIndex]], curMeta[curIndex] = _b[0], curMeta[switchIndex] = _b[1];
        jpp(this.data.meta).set(normalKey, curMeta);
        var _b;
    };
    MetaData.prototype.removeMeta = function (keys) {
        var jMap = jpp(this.data.map), jMeta = jpp(this.data.meta);
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var curUuid = this.getUuid({ normalKey: normalKey, escapeKey: escapeKey, originEscapeKey: originEscapeKey, schemaKey: schemaKey });
        var regexp = new RegExp("^" + originEscapeKey, "ig");
        for (var key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                var mapKeys = this.getKey(jpp.parse(key));
                if (regexp.test(mapKeys.originEscapeKey)) {
                    jMap.remove(mapKeys.escapeKey);
                }
            }
        }
        if (jMeta.has(normalKey) && jMeta.get(normalKey)) {
            var metaDict = jpp.dict(jMeta.get(normalKey));
            jMeta.remove(normalKey);
            for (var key in metaDict) {
                if (metaDict.hasOwnProperty(key)) {
                    var element = metaDict[key];
                    if (jMap.has(element)) {
                        jMap.remove(element);
                    }
                }
            }
        }
        if (jMap.has(curUuid)) {
            jMap.remove(curUuid);
        }
    };
    MetaData.prototype.getCurMetaData = function (curUuid) {
        if (jpp(this.data.map).has("" + curUuid)) {
            return jpp(this.data.map).get("" + curUuid);
        }
        return { isShow: true };
    };
    MetaData.prototype.setCurMetaData = function (curUuid, meta) {
        jpp(this.data.map).set("" + curUuid, meta);
    };
    MetaData.prototype.setCurMetaUuid = function (key, curUuid) {
        var jMeta = jpp(this.data.meta);
        jMeta.set(key, curUuid);
    };
    return MetaData;
}());
export { MetaData };
//# sourceMappingURL=meta.js.map