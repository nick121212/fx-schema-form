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
import { nsFactory } from "../../index";
export var ThemeHoc = function (hocFactory, Component) {
    var ThemeComponentHoc = (function (_super) {
        __extends(ThemeComponentHoc, _super);
        function ThemeComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ThemeComponentHoc.prototype.render = function () {
            var mergeSchema = this.props.mergeSchema;
            var _a = mergeSchema.uiSchema, uiSchema = _a === void 0 ? { theme: "", field: "" } : _a;
            var theme;
            if (nsFactory.has(uiSchema.theme || "default")) {
                theme = nsFactory.get(uiSchema.theme || "default");
            }
            else {
                throw new Error("\u6CA1\u6709\u627E\u5230" + (uiSchema.theme || "default") + "\u7684\u6837\u5F0F\uFF01");
            }
            return React.createElement(Component, __assign({ currentTheme: theme }, this.props));
        };
        return ThemeComponentHoc;
    }(React.PureComponent));
    return ThemeComponentHoc;
};
//# sourceMappingURL=theme.js.map