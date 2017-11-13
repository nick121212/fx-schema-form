import * as jpp from "json-pointer";
import { createSelector } from "reselect";
import { SchemaFormCreate } from "../libs/create";
var getCurrentState = function (state, props) {
    if (props.getCurrentState) {
        return props.getCurrentState(state, props);
    }
    return state[props.schemaKey];
};
export var getAllData = function (state, props) {
    var _a = getCurrentState(state, props).data, data = _a === void 0 ? {} : _a;
    return data;
};
export var getData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var _b = getCurrentState(state, props).data, data = _b === void 0 ? {} : _b;
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
export var getMetaStateData = function (state, props) {
    var schemaKey = props.schemaKey;
    var meta = getCurrentState(state, props).meta;
    return {
        isLoading: meta.isLoading,
        isValid: meta.isValid
    };
};
export var getMetaData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var metaData = SchemaFormCreate.metas[schemaKey];
    var meta = getCurrentState(state, props).meta;
    return metaData.getMeta(keys, mergeSchema.type !== "array");
};
export var getActions = function (state, props) {
    var schemaKey = props.schemaKey;
    var metaData = SchemaFormCreate.metas[schemaKey];
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        metaData.init(props.schemaFormOptions, props.schemaKey);
    }
    return metaData.actions;
};
export var mapFormDataToProps = createSelector([getAllData], function (formData) {
    return { formData: formData };
});
export var mapMetaStateToProps = createSelector([getMetaData], function (meta) {
    return { meta: meta };
});
export var mapFormItemDataProps = createSelector([getData], function (formItemData) {
    return { formItemData: formItemData };
});
export var mapActionsStateToProps = createSelector([getActions], function (actions) {
    return { actions: actions };
});
//# sourceMappingURL=select.js.map