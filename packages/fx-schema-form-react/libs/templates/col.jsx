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
import { Col } from "antd";
import { shouldUpdate } from "recompose";
var AntdColTemp = (function (_super) {
    __extends(AntdColTemp, _super);
    function AntdColTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdColTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, mergeSchema = _a.mergeSchema, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (<Col {...tempOptions}>
                {children}
            </Col>);
    };
    AntdColTemp = __decorate([
        shouldUpdate(function () { return false; })
    ], AntdColTemp);
    return AntdColTemp;
}(React.PureComponent));
export { AntdColTemp };
//# sourceMappingURL=col.jsx.map