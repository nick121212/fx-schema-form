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
import { connect } from "react-redux";
import { Card } from "antd";
import { shouldUpdate, compose } from "recompose";
import isEqual from "lodash.isequal";
import { mapMetaStateToProps } from "../hocs/select";
var AntdCardTemp = (function (_super) {
    __extends(AntdCardTemp, _super);
    function AntdCardTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCardTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema, ItemButtons = _a.ItemButtons, meta = _a.meta;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var _b = meta || {}, _c = _b.isValid, isValid = _c === void 0 ? true : _c, _d = _b.errorText, errorText = _d === void 0 ? "" : _d, _e = _b.isShow, isShow = _e === void 0 ? true : _e;
        console.log("antdCardTemp render");
        return (<Card title={title || uiSchema.title} extra={ItemButtons ? <ItemButtons /> : ""} bodyStyle={{
            "display": isShow === false ? "none" : "block"
        }} {...tempOptions}>
                {children}
                {!isValid ? errorText : ""}
            </Card>);
    };
    AntdCardTemp = __decorate([
        compose(shouldUpdate(function () { return false; }), connect(mapMetaStateToProps), shouldUpdate(function (curProps, nextProps) {
            return !isEqual(curProps.meta, nextProps.meta);
        }))
    ], AntdCardTemp);
    return AntdCardTemp;
}(React.PureComponent));
export { AntdCardTemp };
//# sourceMappingURL=card.jsx.map