import * as jpp from "json-pointer";
import { createSelector } from "reselect";
export var getAllData = function (state, props) {
    var _a = state[props.schemaKey].data, data = _a === void 0 ? {} : _a;
    return data;
};
export var getData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var _b = state[props.schemaKey].data, data = _b === void 0 ? {} : _b;
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
export var getMetaData = function (state, props) {
    var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
    var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
    var meta = state[props.schemaKey].meta;
    return meta.getMeta(keys, mergeSchema.type !== "array");
};
export var getActions = function (state, props) {
    var schemaKey = props.schemaKey;
    var _a = state[schemaKey], _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.meta, meta = _c === void 0 ? { actions: {} } : _c;
    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        meta.init(props.schemaFormOptions.ajv, props.schemaKey);
    }
    return meta.actions;
};
export var mapMetaStateToProps = createSelector([getMetaData, getData, getAllData], function (meta, formItemData, formData) {
    return { meta: meta, formData: formData, formItemData: formItemData };
});
export var mapActionsStateToProps = createSelector([getActions], function (actions) {
    return { actions: actions };
});
//# sourceMappingURL=select.jsx.map