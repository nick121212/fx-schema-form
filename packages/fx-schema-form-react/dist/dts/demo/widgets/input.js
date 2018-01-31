"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdInputWidget = (function (_super) {
    tslib_1.__extends(AntdInputWidget, _super);
    function AntdInputWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._count = 0;
        return _this;
    }
    AntdInputWidget.prototype.setDefaultProps = function () {
        var props = {};
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }
        else {
            props.value = "";
        }
        return props;
    };
    AntdInputWidget.prototype.render = function () {
        var _this = this;
        var _a = this.props, getOptions = _a.getOptions, uiSchema = _a.uiSchema, getTitle = _a.getTitle, parentKeys = _a.parentKeys, schemaId = _a.schemaId, updateItemData = _a.updateItemData, updateItemMeta = _a.updateItemMeta, validate = _a.validate;
        var keys = uiSchema.keys;
        var _b = uiSchema.readonly, readonly = _b === void 0 ? false : _b;
        return (react_1.default.createElement(antd_1.Input, tslib_1.__assign({ onBlur: function (e) {
                if (_this._count > 0) {
                    updateItemMeta(_this.props, e.currentTarget.value);
                }
            }, onChange: function (e) {
                _this._count++;
                updateItemData(_this.props, e.currentTarget.value);
            }, disabled: readonly, placeholder: getTitle(this.props) }, getOptions(this.props, "widget", "input"), this.setDefaultProps())));
    };
    return AntdInputWidget;
}(react_1.PureComponent));
exports.AntdInputWidget = AntdInputWidget;
//# sourceMappingURL=input.js.map