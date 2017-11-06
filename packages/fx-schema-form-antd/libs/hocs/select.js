import * as jpp from "json-pointer";
import { createSelector } from "reselect";
import { SchemaFormCreate } from "../libs/create";
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
export var getAllData = function (state, props) {
    var _a = getCurrentState(state, props).data, data = _a === void 0 ? {} : _a;
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
    var _b = getCurrentState(state, props).data, data = _b === void 0 ? {} : _b;
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export var getMetaStateData = function (state, props) {
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
export var getMetaData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var metaData = SchemaFormCreate.metas[schemaKey];
    var meta = getCurrentState(state, props).meta;
    return metaData.getMeta(keys, mergeSchema.type !== "array");
};
/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
export var getActions = function (state, props) {
    var schemaKey = props.schemaKey;
    var metaData = SchemaFormCreate.metas[schemaKey];
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
export var mapFormDataToProps = createSelector([getAllData], function (formData) {
    return { formData: formData };
});
/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export var mapMetaStateToProps = createSelector([getMetaData], function (meta) {
    return { meta: meta };
});
export var mapFormItemDataProps = createSelector([getData], function (formItemData) {
    return { formItemData: formItemData };
});
/**
 * 返回actions
 */
export var mapActionsStateToProps = createSelector([getActions], function (actions) {
    return { actions: actions };
});
//# sourceMappingURL=select.js.map