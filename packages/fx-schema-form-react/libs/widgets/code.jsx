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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { Input } from "antd";
import { onlyUpdateForKeys } from "recompose";
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
        var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, updateItemData = _a.updateItemData, updateItemMeta = _a.updateItemMeta, formItemData = _a.formItemData, getWidgetOptions = _a.getWidgetOptions;
        var _b = (uiSchemaOptions.widget || {}).input, input = _b === void 0 ? {} : _b;
        var _c = (globalOptions.widget || {}).input, inputDefault = _c === void 0 ? {} : _c;
        var _d = mergeSchema.uiSchema, uiSchema = _d === void 0 ? {} : _d, keys = mergeSchema.keys;
        var _e = uiSchema.readonly, readonly = _e === void 0 ? false : _e;
        return (<Input onBlur={function (e) {
            updateItemMeta(formItemData);
        }} onChange={function (e) {
            updateItemData(e.currentTarget.value);
        }} disabled={readonly} placeholder={mergeSchema.title} {...getWidgetOptions("input")} {...this.setDefaultProps()}>
            </Input>);
    };
    AntdInputWidget = __decorate([
        onlyUpdateForKeys(["formItemData"])
    ], AntdInputWidget);
    return AntdInputWidget;
}(React.Component));
export { AntdInputWidget };
//# sourceMappingURL=code.jsx.map