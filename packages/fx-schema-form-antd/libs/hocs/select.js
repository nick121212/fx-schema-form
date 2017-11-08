"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jpp = require("json-pointer");
var reselect_1 = require("reselect");
var create_1 = require("../libs/create");
var getCurrentState = function (state, props) {
    if (props.getCurrentState) {
        return props.getCurrentState(state, props);
    }
    return state[props.schemaKey];
};
/**
 * 获取formData的数据
 * @param state state
 * @param props 属性
 */
exports.getAllData = function (state, props) {
    var _a = getCurrentState(state, props).data, data = _a === void 0 ? {} : _a;
    return data;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var _b = getCurrentState(state, props).data, data = _b === void 0 ? {} : _b;
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getMetaStateData = function (state, props) {
    var schemaKey = props.schemaKey;
    var meta = getCurrentState(state, props).meta;
    return {
        isLoading: meta.isLoading,
        isValid: meta.isValid
    };
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getMetaData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var metaData = create_1.SchemaFormCreate.metas[schemaKey];
    var meta = getCurrentState(state, props).meta;
    return metaData.getMeta(keys, mergeSchema.type !== "array");
};
/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getActions = function (state, props) {
    var schemaKey = props.schemaKey;
    var metaData = create_1.SchemaFormCreate.metas[schemaKey];
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        metaData.init(props.schemaFormOptions, props.schemaKey);
    }
    return metaData.actions;
};
/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
exports.mapFormDataToProps = reselect_1.createSelector([exports.getAllData], function (formData) {
    return { formData: formData };
});
/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
exports.mapMetaStateToProps = reselect_1.createSelector([exports.getMetaData], function (meta) {
    return { meta: meta };
});
exports.mapFormItemDataProps = reselect_1.createSelector([exports.getData], function (formItemData) {
    return { formItemData: formItemData };
});
/**
 * 返回actions
 */
exports.mapActionsStateToProps = reselect_1.createSelector([exports.getActions], function (actions) {
    return { actions: actions };
});
//# sourceMappingURL=select.js.map