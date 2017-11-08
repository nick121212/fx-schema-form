"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var index_1 = require("../../index");
/**
 * 包装theme的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * currentTheme 当前的命名空间
 */
exports.ThemeHoc = function (hocFactory, Component) {
    var ThemeComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(ThemeComponentHoc, _super);
        function ThemeComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ThemeComponentHoc.prototype.render = function () {
            var mergeSchema = this.props.mergeSchema;
            var _a = mergeSchema.uiSchema, uiSchema = _a === void 0 ? { theme: "", field: "" } : _a;
            var theme;
            if (index_1.nsFactory.has(uiSchema.theme || "default")) {
                theme = index_1.nsFactory.get(uiSchema.theme || "default");
            }
            else {
                throw new Error("\u6CA1\u6709\u627E\u5230" + (uiSchema.theme || "default") + "\u7684\u6837\u5F0F\uFF01");
            }
            return react_1.default.createElement(Component, tslib_1.__assign({ currentTheme: theme }, this.props));
        };
        return ThemeComponentHoc;
    }(react_1.default.PureComponent));
    return ThemeComponentHoc;
};
//# sourceMappingURL=theme.js.map