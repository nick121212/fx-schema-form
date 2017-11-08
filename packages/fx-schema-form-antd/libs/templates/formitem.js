"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdFormItemTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdFormItemTemp, _super);
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
        return (react_1.default.createElement(antd_1.Form.Item, tslib_1.__assign({ required: mergeSchema.isRequired, label: mergeSchema.title || [].concat(mergeSchema.keys).pop(), extra: mergeSchema.description, help: isValid ? "" : errorText, hasFeedback: dirty && hasFeedback }, props, tempOptions),
            react_1.default.createElement(antd_1.Row, { type: "flex" },
                react_1.default.createElement(antd_1.Col, { span: 20 }, children),
                react_1.default.createElement(antd_1.Col, { offset: 1, span: 3 }, ItemButtons && react_1.default.createElement(ItemButtons, null)))));
    };
    return AntdFormItemTemp;
}(react_1.default.Component));
exports.AntdFormItemTemp = AntdFormItemTemp;
//# sourceMappingURL=formitem.js.map