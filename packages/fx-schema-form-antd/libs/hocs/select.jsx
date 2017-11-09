import * as jpp from "json-pointer";
import { createSelector } from "reselect";
import { SchemaFormCreate } from "../libs/create";
const getCurrentState = (state, props) => {
    if (props.getCurrentState) {
        return props.getCurrentState(state, props);
    }
    return state[props.schemaKey];
};
export const getAllData = (state, props) => {
    let { data = {} } = getCurrentState(state, props);
    return data;
};
export const getData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {} } = getCurrentState(state, props);
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
export const getMetaStateData = (state, props) => {
    const { schemaKey } = props;
    const { meta } = getCurrentState(state, props);
    return {
        isLoading: meta.isLoading,
        isValid: meta.isValid
    };
};
export const getMetaData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    const metaData = SchemaFormCreate.metas[schemaKey];
    const { meta } = getCurrentState(state, props);
    return metaData.getMeta(keys, mergeSchema.type !== "array");
};
export const getActions = (state, props) => {
    const { schemaKey } = props;
    const metaData = SchemaFormCreate.metas[schemaKey];
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        metaData.init(props.schemaFormOptions, props.schemaKey);
    }
    return metaData.actions;
};
export const mapFormDataToProps = createSelector([getAllData], (formData) => {
    return { formData };
});
export const mapMetaStateToProps = createSelector([getMetaData], (meta) => {
    return { meta };
});
export const mapFormItemDataProps = createSelector([getData], (formItemData) => {
    return { formItemData };
});
export const mapActionsStateToProps = createSelector([getActions], (actions) => {
    return { actions };
});
//# sourceMappingURL=select.jsx.map