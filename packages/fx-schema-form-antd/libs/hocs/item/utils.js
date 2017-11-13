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
export var UtilsHoc = function (hocFactory, Component) {
    var ComponentHoc = (function (_super) {
        __extends(ComponentHoc, _super);
        function ComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComponentHoc.prototype.render = function () {
            return React.createElement(Component, __assign({ getHocOptions: this.getHocOptions.bind(this), getFieldOptions: this.getFieldOptions.bind(this), getWidgetOptions: this.getFieldOptions.bind(this) }, this.props));
        };
        ComponentHoc.prototype.getFieldOptions = function (field) {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var uiSchema = mergeSchema.uiSchema;
            var uiSchemaOptions = uiSchema.options || {};
            var fieldOptions = uiSchemaOptions.field || {};
            var fieldDefaultOptions = globalOptions.field || {};
            return Object.assign({}, fieldDefaultOptions[field] || {}, fieldOptions[field] || {});
        };
        ComponentHoc.prototype.getWidgetOptions = function (widget) {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions;
            var widgetOptions = uiSchemaOptions.widget || {};
            var widgetDefaultOptions = globalOptions.widget || {};
            return Object.assign({}, widgetDefaultOptions[widget] || {}, widgetOptions[widget] || {});
        };
        ComponentHoc.prototype.getHocOptions = function (hoc) {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var uiSchema = mergeSchema.uiSchema;
            var uiSchemaOptions = uiSchema.options || {};
            var hocOptions = Object.assign({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
            if (hoc) {
                return hocOptions[hoc] || {};
            }
            return hocOptions;
        };
        return ComponentHoc;
    }(React.PureComponent));
    return ComponentHoc;
};
//# sourceMappingURL=utils.js.map