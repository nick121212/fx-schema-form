"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdCheckboxWidget = (function (_super) {
    tslib_1.__extends(AntdCheckboxWidget, _super);
    function AntdCheckboxWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCheckboxWidget.prototype.setDefaultProps = function () {
        var uiSchema = this.props.uiSchema;
        var props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = false;
        }
        return props;
    };
    AntdCheckboxWidget.prototype.render = function () {
        var _a = this.props, getOptions = _a.getOptions, uiSchema = _a.uiSchema;
        var keys = uiSchema.keys;
        var _b = uiSchema.readonly, readonly = _b === void 0 ? false : _b;
        return (react_1.default.createElement(antd_1.Checkbox, tslib_1.__assign({ onChange: function (e) {
            }, disabled: readonly }, getOptions(this.props, "widget", "checkbox"), this.setDefaultProps())));
    };
    return AntdCheckboxWidget;
}(react_1.PureComponent));
exports.AntdCheckboxWidget = AntdCheckboxWidget;
//# sourceMappingURL=checkbox.js.map