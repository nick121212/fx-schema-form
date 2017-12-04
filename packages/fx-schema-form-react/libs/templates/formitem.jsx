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
import { shouldUpdate, compose } from "recompose";
import isEqual from "lodash.isequal";
import { Form, Row, Col } from "antd";
import { mapMetaStateToProps } from "../hocs/select";
var AntdFormItemTemp = (function (_super) {
    __extends(AntdFormItemTemp, _super);
    function AntdFormItemTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdFormItemTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, arrayIndex = _a.arrayIndex, ItemButtons = _a.ItemButtons, mergeSchema = _a.mergeSchema, _b = _a.globalOptions, globalOptions = _b === void 0 ? {} : _b, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, _c = _a.meta, meta = _c === void 0 ? { dirty: false, isValid: true, isLoading: false } : _c;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        var _d = tempOptions.hasFeedback, hasFeedback = _d === void 0 ? false : _d;
        var props = {};
        var _e = meta || {}, _f = _e.dirty, dirty = _f === void 0 ? false : _f, _g = _e.isValid, isValid = _g === void 0 ? true : _g, _h = _e.errorText, errorText = _h === void 0 ? "" : _h, _j = _e.isLoading, isLoading = _j === void 0 ? false : _j;
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
        }
        return (<Form.Item key={tempKey + isValid} required={mergeSchema.isRequired} label={mergeSchema.title || [].concat(mergeSchema.keys).pop()} extra={mergeSchema.description} help={isValid ? "" : errorText} hasFeedback={dirty && hasFeedback} {...props} {...tempOptions}>
                <Row type="flex">
                    <Col span={20}>{children}</Col>
                    <Col offset={1} span={3}>{ItemButtons && <ItemButtons />}</Col>
                </Row>
            </Form.Item>);
    };
    AntdFormItemTemp = __decorate([
        compose(shouldUpdate(function () { return false; }), connect(mapMetaStateToProps), shouldUpdate(function (curProps, nextProps) {
            return !isEqual(curProps.meta, nextProps.meta);
        }))
    ], AntdFormItemTemp);
    return AntdFormItemTemp;
}(React.PureComponent));
export { AntdFormItemTemp };
//# sourceMappingURL=formitem.jsx.map