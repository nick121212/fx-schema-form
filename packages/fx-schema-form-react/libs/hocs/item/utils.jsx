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
import merge from "lodash.merge";
import resolvePathname from "resolve-pathname";
export default function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var ComponentHoc = (function (_super) {
            __extends(ComponentHoc, _super);
            function ComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ComponentHoc.prototype.render = function () {
                return <Component getHocOptions={this.getHocOptions.bind(this)} getFieldOptions={this.getFieldOptions.bind(this)} getWidgetOptions={this.getWidgetOptions.bind(this)} getTitle={this.getTitle.bind(this)} getPathKeys={this.getPathKeys.bind(this)} {...this.props}/>;
            };
            ComponentHoc.prototype.getFieldOptions = function (field) {
                var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
                var uiSchema = mergeSchema.uiSchema;
                var uiSchemaOptions = uiSchema.options || {};
                var fieldOptions = uiSchemaOptions.field || {};
                var fieldDefaultOptions = globalOptions.field || {};
                return merge({}, fieldDefaultOptions[field] || {}, fieldOptions[field] || {});
            };
            ComponentHoc.prototype.getWidgetOptions = function (widget) {
                var _a = this.props, _b = _a.mergeSchema, mergeSchema = _b === void 0 ? {} : _b, _c = _a.globalOptions, globalOptions = _c === void 0 ? {} : _c, _d = _a.uiSchemaOptions, uiSchemaOptions = _d === void 0 ? {} : _d;
                var _e = mergeSchema.uiSchema.options, options = _e === void 0 ? { widget: {} } : _e;
                var uiOptions = uiSchemaOptions.widget || {};
                var widgetOptions = options.widget || {};
                var widgetGlobalOptions = globalOptions.widget || {};
                return merge({}, widgetGlobalOptions[widget] || {}, uiOptions[widget] || {}, widgetOptions[widget] || {});
            };
            ComponentHoc.prototype.getHocOptions = function (hoc) {
                var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
                var uiSchema = mergeSchema.uiSchema;
                var uiSchemaOptions = uiSchema.options || {};
                var hocOptions = merge({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
                if (hoc) {
                    return hocOptions[hoc] || {};
                }
                return hocOptions;
            };
            ComponentHoc.prototype.getTitle = function () {
                var mergeSchema = this.props.mergeSchema;
                var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title, keys = mergeSchema.keys;
                return uiSchema.title || title || [].concat(keys).pop();
            };
            ComponentHoc.prototype.getPathKeys = function (keys, path) {
                var keys1 = resolvePathname(path, "/" + keys.join("/")).split("/");
                keys1.shift();
                if (keys1.length && !keys1[keys1.length - 1]) {
                    keys1.pop();
                }
                return keys1;
            };
            return ComponentHoc;
        }(React.PureComponent));
        return ComponentHoc;
    };
};
//# sourceMappingURL=utils.jsx.map