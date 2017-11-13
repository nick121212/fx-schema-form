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
import { Switch } from "antd";
var AntdSwitchWidget = (function (_super) {
    __extends(AntdSwitchWidget, _super);
    function AntdSwitchWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdSwitchWidget.prototype.setDefaultProps = function () {
        var mergeSchema = this.props.mergeSchema;
        var props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = mergeSchema.default;
        }
        return props;
    };
    AntdSwitchWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, arrayIndex = _a.arrayIndex, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, meta = _a.meta, validate = _a.validate, updateItemData = _a.updateItemData, getWidgetOptions = _a.getWidgetOptions;
        var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? {} : _b;
        var _c = uiSchema.readonly, readonly = _c === void 0 ? false : _c;
        return (React.createElement(Switch, __assign({ onChange: function (checked) {
                updateItemData(checked);
                validate(checked);
            }, disabled: readonly }, getWidgetOptions("switch"), this.setDefaultProps())));
    };
    return AntdSwitchWidget;
}(React.Component));
export { AntdSwitchWidget };
//# sourceMappingURL=switch.js.map