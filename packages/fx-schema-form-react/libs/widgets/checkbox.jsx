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
import React from "react";
import { Checkbox } from "antd";
var AntdCheckboxWidget = (function (_super) {
    __extends(AntdCheckboxWidget, _super);
    function AntdCheckboxWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCheckboxWidget.prototype.setDefaultProps = function () {
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
    AntdCheckboxWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, arrayIndex = _a.arrayIndex, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, meta = _a.meta, validate = _a.validate, updateItemData = _a.updateItemData, getWidgetOptions = _a.getWidgetOptions;
        var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? {} : _b, keys = mergeSchema.keys;
        var _c = uiSchema.readonly, readonly = _c === void 0 ? false : _c;
        return (<Checkbox onChange={function (e) {
            updateItemData(e.target.checked);
            validate(e.target.checked);
        }} disabled={readonly} {...getWidgetOptions("checkbox")} {...this.setDefaultProps()}></Checkbox>);
    };
    return AntdCheckboxWidget;
}(React.Component));
export { AntdCheckboxWidget };
//# sourceMappingURL=checkbox.jsx.map