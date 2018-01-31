"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdFormItemTemp = (function (_super) {
    tslib_1.__extends(AntdFormItemTemp, _super);
    function AntdFormItemTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdFormItemTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, arrayIndex = _a.arrayIndex, getOptions = _a.getOptions, getTitle = _a.getTitle, tempKey = _a.tempKey, formItemMeta = _a.formItemMeta, initArrayComponent = _a.initArrayComponent;
        var tempOptions = getOptions(this.props, "temp", tempKey);
        var _b = tempOptions.hasFeedback, hasFeedback = _b === void 0 ? true : _b;
        var uiSchema = this.props.uiSchema;
        var props = {};
        var _c = formItemMeta ? formItemMeta.toJS() : {}, _d = _c.dirty, dirty = _d === void 0 ? false : _d, _e = _c.isValid, isValid = _e === void 0 ? true : _e, _f = _c.errorText, errorText = _f === void 0 ? "" : _f, _g = _c.isLoading, isLoading = _g === void 0 ? false : _g;
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
        }
        return (react_1.default.createElement(antd_1.Form.Item, tslib_1.__assign({ key: uiSchema.keys.join() + tempKey + isValid, required: uiSchema.isRequired, label: getTitle(this.props), extra: uiSchema.description, hasFeedback: dirty && hasFeedback, help: isValid ? "" : errorText }, props, tempOptions.options),
            react_1.default.createElement(antd_1.Row, null,
                react_1.default.createElement(antd_1.Col, { span: 20 }, children),
                react_1.default.createElement(antd_1.Col, { span: 4 }, initArrayComponent ? initArrayComponent(this.props) : null))));
    };
    return AntdFormItemTemp;
}(react_1.PureComponent));
exports.AntdFormItemTemp = AntdFormItemTemp;
//# sourceMappingURL=formitem.js.map