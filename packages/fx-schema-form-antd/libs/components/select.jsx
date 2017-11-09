import * as jpp from "json-pointer";
import { createSelector } from "reselect";
export const getAllData = (state, props) => {
    let { data = {} } = state[props.schemaKey];
    return data;
};
export const getData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {} } = state[props.schemaKey];
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
export const getMetaData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    const { meta } = state[props.schemaKey];
    return meta.getMeta(keys, mergeSchema.type !== "array");
};
export const getActions = (state, props) => {
    const { schemaKey } = props;
    const { data = {}, meta = { actions: {} } } = state[schemaKey];
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        meta.init(props.schemaFormOptions.ajv, props.schemaKey);
    }
    return meta.actions;
};
export const mapMetaStateToProps = createSelector([getMetaData, getData, getAllData], (meta, formItemData, formData) => {
    return { meta, formData, formItemData };
});
export const mapActionsStateToProps = createSelector([getActions], (actions) => {
    return { actions };
});
//# sourceMappingURL=select.jsx.map