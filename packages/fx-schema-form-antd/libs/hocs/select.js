import * as jpp from "json-pointer";
import { createSelector } from "reselect";
/**
 * 获取formData的数据
 * @param state state
 * @param props 属性
 */
export const getAllData = (state, props) => {
    let { data = {} } = state[props.schemaKey];
    return data;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export const getData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {} } = state[props.schemaKey];
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export const getMetaStateData = (state, props) => {
    const { schemaKey } = props;
    const { meta } = state[props.schemaKey];
    return {
        isLoading: meta.data.isLoading,
        isValid: meta.data.isValid
    };
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export const getMetaData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    const { meta } = state[props.schemaKey];
    return meta.getMeta(keys, mergeSchema.type !== "array");
};
/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
export const getActions = (state, props) => {
    const { schemaKey } = props;
    const { data = {}, meta = { actions: {} } } = state[schemaKey];
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        meta.init(props.schemaFormOptions, props.schemaKey);
    }
    return meta.actions;
};
/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export const mapMetaStateToProps = createSelector([getMetaData, getData, getAllData], (meta, formItemData, formData) => {
    return { meta, formData, formItemData };
});
/**
 * 返回actions
 */
export const mapActionsStateToProps = createSelector([getActions, getMetaStateData], (actions, metaState) => {
    return { actions, metaState };
});
//# sourceMappingURL=select.js.map