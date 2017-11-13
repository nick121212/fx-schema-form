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
import { Input } from "antd";
var AntdInputWidget = (function (_super) {
    __extends(AntdInputWidget, _super);
    function AntdInputWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdInputWidget.prototype.setDefaultProps = function () {
        var mergeSchema = this.props.mergeSchema;
        var props = {};
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }
        else {
            props.value = "";
        }
        return props;
    };
    AntdInputWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, validate = _a.validate, updateItemData = _a.updateItemData, formItemData = _a.formItemData, getWidgetOptions = _a.getWidgetOptions;
        var _b = (uiSchemaOptions.widget || {}).input, input = _b === void 0 ? {} : _b;
        var _c = (globalOptions.widget || {}).input, inputDefault = _c === void 0 ? {} : _c;
        var _d = mergeSchema.uiSchema, uiSchema = _d === void 0 ? {} : _d, keys = mergeSchema.keys;
        var _e = uiSchema.readonly, readonly = _e === void 0 ? false : _e;
        return (React.createElement(Input, __assign({ onBlur: function () {
                validate(formItemData);
            }, onChange: function (e) {
                updateItemData(e.currentTarget.value);
            }, disabled: readonly, placeholder: mergeSchema.title }, getWidgetOptions("input"), this.setDefaultProps())));
    };
    return AntdInputWidget;
}(React.Component));
export { AntdInputWidget };
//# sourceMappingURL=input.js.map