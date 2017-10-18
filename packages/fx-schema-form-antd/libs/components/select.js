import * as jpp from "json-pointer";
import { createSelector } from "reselect";
/**
 * 获取formData的数据
 * @param state state
 * @param props 属性
 */
export var getAllData = function (state, props) {
    var _a = state[props.schemaKey].data, data = _a === void 0 ? {} : _a;
    return data;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export var getData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var _b = state[props.schemaKey].data, data = _b === void 0 ? {} : _b;
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export var getMetaData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var meta = state[props.schemaKey].meta;
    return meta.getMeta(keys, mergeSchema.type !== "array");
};
/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
export var getActions = function (state, props) {
    var schemaKey = props.schemaKey;
    var _a = state[schemaKey], _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.meta, meta = _c === void 0 ? { actions: {} } : _c;
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        meta.init(props.schemaFormOptions.ajv, props.schemaKey);
    }
    return meta.actions;
};
/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export var mapMetaStateToProps = createSelector([getMetaData, getData, getAllData], function (meta, formItemData, formData) {
    return { meta: meta, formData: formData, formItemData: formItemData };
});
/**
 * 返回actions
 */
export var mapActionsStateToProps = createSelector([getActions], function (actions) {
    return { actions: actions };
});
//# sourceMappingURL=select.js.map