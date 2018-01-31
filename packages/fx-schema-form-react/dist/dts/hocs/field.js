"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var FieldComponentHoc = (function (_super) {
            tslib_1.__extends(FieldComponentHoc, _super);
            function FieldComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FieldComponentHoc.prototype.render = function () {
                var _a = this.props, currentTheme = _a.currentTheme, getOptions = _a.getOptions, uiSchema = _a.uiSchema, _b = uiSchema, field = _b.field, widget = _b.widget, type = _b.type;
                var FieldComponent, WidgetComponent;
                var options = getOptions(this.props, "hoc", "field");
                var calcField = field || type;
                if (currentTheme.fieldFactory.has(calcField)) {
                    FieldComponent = currentTheme.fieldFactory.get(calcField);
                }
                else {
                    if (currentTheme.fieldFactory.has("default")) {
                        FieldComponent = currentTheme.fieldFactory.get("default");
                    }
                    else {
                        console.error("\u627E\u4E0D\u5230field\uFF1A" + (field || type));
                        return null;
                    }
                }
                if (currentTheme.widgetFactory.has(widget || type)) {
                    WidgetComponent = currentTheme.widgetFactory.get(widget || type);
                }
                else {
                    if (currentTheme.widgetFactory.has("default")) {
                        WidgetComponent = currentTheme.widgetFactory.get("default");
                    }
                    else {
                        console.warn("\u627E\u4E0D\u5230widget\uFF1A" + (widget || type), uiSchema);
                    }
                }
                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
            };
            return FieldComponentHoc;
        }(react_1.PureComponent));
        return FieldComponentHoc;
    };
};
//# sourceMappingURL=field.js.map