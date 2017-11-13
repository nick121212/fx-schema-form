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
import { Form, Row, Col } from "antd";
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
        var dirty = meta.dirty, isValid = meta.isValid, _e = meta.errorText, errorText = _e === void 0 ? "" : _e, _f = meta.isLoading, isLoading = _f === void 0 ? false : _f;
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
        }
        return (React.createElement(Form.Item, __assign({ required: mergeSchema.isRequired, label: mergeSchema.title || [].concat(mergeSchema.keys).pop(), extra: mergeSchema.description, help: isValid ? "" : errorText, hasFeedback: dirty && hasFeedback }, props, tempOptions),
            React.createElement(Row, { type: "flex" },
                React.createElement(Col, { span: 20 }, children),
                React.createElement(Col, { offset: 1, span: 3 }, ItemButtons && React.createElement(ItemButtons, null)))));
    };
    return AntdFormItemTemp;
}(React.Component));
export { AntdFormItemTemp };
//# sourceMappingURL=formitem.js.map