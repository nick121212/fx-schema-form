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
import { Card } from "antd";
var AntdCardTemp = (function (_super) {
    __extends(AntdCardTemp, _super);
    function AntdCardTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCardTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema, ItemButtons = _a.ItemButtons, meta = _a.meta;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var dirty = meta.dirty, isValid = meta.isValid, _b = meta.errorText, errorText = _b === void 0 ? "" : _b;
        return (React.createElement(Card, __assign({ title: title || uiSchema.title, extra: ItemButtons ? React.createElement(ItemButtons, null) : "", bodyStyle: {
                "display": meta.isShow === false ? "none" : "block"
            } }, tempOptions),
            children,
            !isValid ? errorText : ""));
    };
    return AntdCardTemp;
}(React.Component));
export { AntdCardTemp };
//# sourceMappingURL=card.js.map