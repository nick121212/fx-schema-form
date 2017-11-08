"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var json_pointer_1 = require("json-pointer");
/**
 * Meta的数据操作类
 */
var MetaData = /** @class */ (function () {
    function MetaData() {
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
    MetaData.prototype.init = function (schemaFormOptions, key) {
        if (this.isInit) {
            return;
        }
        this.isInit = true;
        this.schemaFormOptions = schemaFormOptions;
        this.curKey = key;
    };
    /**
     * 验证所有的数据
     * @param data 数据
     */
    MetaData.prototype.validateAll = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var key, element, schema, validate, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 设置所有的字段验证都通过
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
                        // this.schemaFormOptions.ajv.removeSchema
                        // 调用验证方法
                        return [4 /*yield*/, validate(data)];
                    case 2:
                        // this.schemaFormOptions.ajv.removeSchema
                        // 调用验证方法
                        _a.sent();
                        this.data.isValid = true;
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.data.isValid = false;
                        if (err_1.errors && err_1.errors.length) {
                            this.setErrors(err_1.errors);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, this.data];
                }
            });
        });
    };
    /**
     * 设置表单的错误
     * @param errors 错误详情
     */
    MetaData.prototype.setErrors = function (errors) {
        var _this = this;
        this.data.isValid = false;
        errors.forEach(function (error) {
            var keys = json_pointer_1.default.parse(error.dataPath);
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
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    MetaData.prototype.getKey = function (keys) {
        var key = json_pointer_1.default.compile(keys);
        var escapeKey = json_pointer_1.default.escape(key);
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
    /**
     * 设置meta信息
     * @param keys     keys
     * @param meta     meta数据
     * @param strick   废弃属性
     */
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
    /**
     * 获取当前keys的uuid
     * @param param0     各种keys
     */
    MetaData.prototype.getUuid = function (_a) {
        var normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var jMap = json_pointer_1.default(this.data.map);
        var jMeta = json_pointer_1.default(this.data.meta), curMeta, curUuid;
        if (this.schemaFormOptions.map.has(schemaKey)) {
            var schema = this.schemaFormOptions.map.get(schemaKey);
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
            curUuid = "/" + json_pointer_1.default.escape("/" + uuid_1.default());
        }
        return curUuid;
    };
    /**
     * 返回meta数据
     * @param keys   keys
     * @param strick 是否严格模式
     */
    MetaData.prototype.getMeta = function (keys, strick) {
        if (strick === void 0) { strick = true; }
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var curUuid = this.getUuid({ normalKey: normalKey, escapeKey: escapeKey, originEscapeKey: originEscapeKey, schemaKey: schemaKey });
        return this.getCurMetaData(curUuid);
    };
    /**
     * 更换两个meta数据位置
     * @param keys        keys
     * @param curIndex    当前的索引
     * @param switchIndex 更换的索引
     */
    MetaData.prototype.switchMeta = function (keys, curIndex, switchIndex) {
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, schemaKey = _a.schemaKey, originEscapeKey = _a.originEscapeKey;
        if (!json_pointer_1.default(this.data.meta).has(normalKey)) {
            return;
        }
        var curMeta = json_pointer_1.default(this.data.meta).get(normalKey);
        _b = [curMeta[switchIndex], curMeta[curIndex]], curMeta[curIndex] = _b[0], curMeta[switchIndex] = _b[1];
        json_pointer_1.default(this.data.meta).set(normalKey, curMeta);
        var _b;
    };
    /**
     * 删除meta数据
     *  1. 遍历map，清除map中是${originEscapeKey}开头的key
     *  2. 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
     *  3. 删除map中当前keys对应的uuid
     * @param keys keys
     */
    MetaData.prototype.removeMeta = function (keys) {
        var jMap = json_pointer_1.default(this.data.map), jMeta = json_pointer_1.default(this.data.meta);
        var _a = this.getKey(keys), normalKey = _a.normalKey, escapeKey = _a.escapeKey, originEscapeKey = _a.originEscapeKey, schemaKey = _a.schemaKey;
        var curUuid = this.getUuid({ normalKey: normalKey, escapeKey: escapeKey, originEscapeKey: originEscapeKey, schemaKey: schemaKey });
        var regexp = new RegExp("^" + originEscapeKey, "ig");
        // 遍历map，清除map中是${originEscapeKey}开头的key
        for (var key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                var mapKeys = this.getKey(json_pointer_1.default.parse(key));
                if (regexp.test(mapKeys.originEscapeKey)) {
                    jMap.remove(mapKeys.escapeKey);
                }
            }
        }
        // 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
        if (jMeta.has(normalKey) && jMeta.get(normalKey)) {
            var metaDict = json_pointer_1.default.dict(jMeta.get(normalKey));
            jMeta.remove(normalKey);
            // 遍历子元素，并且清除数据
            for (var key in metaDict) {
                if (metaDict.hasOwnProperty(key)) {
                    var element = metaDict[key];
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
    };
    /**
     * 返回meta数据
     * @param curUuid uuid
     */
    MetaData.prototype.getCurMetaData = function (curUuid) {
        if (json_pointer_1.default(this.data.map).has("" + curUuid)) {
            return json_pointer_1.default(this.data.map).get("" + curUuid);
        }
        return { isShow: true };
    };
    /**
     * 设置meta数据
     * @param curUuid uuid
     * @param meta    meta数据
     */
    MetaData.prototype.setCurMetaData = function (curUuid, meta) {
        json_pointer_1.default(this.data.map).set("" + curUuid, meta);
    };
    /**
     * 设置当前meta的uuid
     * @param key     key
     * @param curUuid uuid
     */
    MetaData.prototype.setCurMetaUuid = function (key, curUuid) {
        var jMeta = json_pointer_1.default(this.data.meta);
        jMeta.set(key, curUuid);
    };
    return MetaData;
}());
exports.MetaData = MetaData;
//# sourceMappingURL=meta.js.map