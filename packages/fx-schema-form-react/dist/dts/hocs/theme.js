"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var factory_1 = require("../factory");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var ThemeComponentHoc = (function (_super) {
            tslib_1.__extends(ThemeComponentHoc, _super);
            function ThemeComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ThemeComponentHoc.prototype.render = function () {
                var _a = this.props.uiSchema, theme = _a.theme, field = _a.field;
                var nsFactory;
                if (factory_1.themeFactory.has(theme || "default")) {
                    nsFactory = factory_1.themeFactory.get(theme || "default");
                }
                else {
                    throw new Error("\u6CA1\u6709\u627E\u5230" + (theme || "default") + "\u7684\u6837\u5F0F\uFF01");
                }
                return react_1.default.createElement(Component, tslib_1.__assign({ currentTheme: nsFactory }, this.props));
            };
            return ThemeComponentHoc;
        }(react_1.PureComponent));
        return ThemeComponentHoc;
    };
};
//# sourceMappingURL=theme.js.map