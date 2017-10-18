import * as tslib_1 from "tslib";
import React from "react";
import { Form, Row, Col } from "antd";
var AntdFormItemTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdFormItemTemp, _super);
    function AntdFormItemTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdFormItemTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, arrayIndex = _a.arrayIndex, arrayItems = _a.arrayItems, mergeSchema = _a.mergeSchema, _b = _a.globalOptions, globalOptions = _b === void 0 ? {} : _b, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, _c = _a.meta, meta = _c === void 0 ? { dirty: false, isValid: true, isLoading: false } : _c;
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
        return (React.createElement(Form.Item, tslib_1.__assign({ required: mergeSchema.isRequired, label: mergeSchema.title || [].concat(mergeSchema.keys).pop(), extra: mergeSchema.description, help: isValid ? "" : errorText, hasFeedback: dirty && hasFeedback }, props, tempOptions),
            React.createElement(Row, { type: "flex" },
                React.createElement(Col, { span: 20 }, children),
                React.createElement(Col, { offset: 1, span: 3 }, arrayItems && arrayItems()))));
    };
    return AntdFormItemTemp;
}(React.Component));
export { AntdFormItemTemp };
//# sourceMappingURL=formitem.js.map