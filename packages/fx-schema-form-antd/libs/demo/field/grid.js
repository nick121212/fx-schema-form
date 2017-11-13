var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from "react";
import { Col } from "antd";
import { SchemaForm } from "../../index";
var GridColField = (function (_super) {
    __extends(GridColField, _super);
    function GridColField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridColField.prototype.getColProps = function () {
        var formItemData = this.props.formItemData;
        var span = formItemData.span, push = formItemData.push, offset = formItemData.offset;
        var props = {};
        if (push) {
            props.push = push;
        }
        if (offset) {
            props.offset = offset;
        }
        props.span = span || 24;
        return props;
    };
    GridColField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, getCurrentState = _a.getCurrentState, formItemData = _a.formItemData, ItemButtons = _a.ItemButtons, getHocOptions = _a.getHocOptions, uiSchemaOptions = _a.uiSchemaOptions, arrayIndex = _a.arrayIndex, arrayLevel = _a.arrayLevel, WidgetComponent = _a.WidgetComponent, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey;
        var uiSchema = mergeSchema.uiSchema;
        var _b = (uiSchemaOptions || {}).gridcol, gridcol = _b === void 0 ? { image: false } : _b;
        var _c = (globalOptions || {}).gridcol, gridDefault = _c === void 0 ? {} : _c;
        return (React.createElement(Col, __assign({}, this.getColProps()), gridcol.image ?
            React.createElement("img", { style: { width: "100%" }, src: formItemData.image }) :
            React.createElement(SchemaForm, { arrayIndex: arrayIndex, schemaFormOptions: schemaFormOptions, ItemButtons: ItemButtons, getCurrentState: getCurrentState, schemaKey: schemaKey, arrayLevel: arrayLevel, schema: mergeSchema, parentKeys: mergeSchema.originKeys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions })));
    };
    return GridColField;
}(React.PureComponent));
export { GridColField };
//# sourceMappingURL=grid.js.map