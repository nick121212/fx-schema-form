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
import { Col } from "antd";
var AntdColTemp = (function (_super) {
    __extends(AntdColTemp, _super);
    function AntdColTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdColTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, mergeSchema = _a.mergeSchema, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (React.createElement(Col, __assign({}, tempOptions), children));
    };
    return AntdColTemp;
}(React.Component));
export { AntdColTemp };
//# sourceMappingURL=col.js.map