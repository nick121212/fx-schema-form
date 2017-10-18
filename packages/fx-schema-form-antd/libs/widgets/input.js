import * as tslib_1 from "tslib";
import React from "react";
import { Input } from "antd";
var AntdInputWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AntdInputWidget, _super);
    function AntdInputWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdInputWidget.prototype.setDefaultProps = function () {
        var mergeSchema = this.props.mergeSchema;
        var props = {};
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }
        else {
            // props.defaultValue = mergeSchema.default;
            props.value = "";
        }
        return props;
    };
    AntdInputWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, validate = _a.validate, updateItemData = _a.updateItemData, formItemData = _a.formItemData;
        var _b = (uiSchemaOptions.widget || {}).input, input = _b === void 0 ? {} : _b;
        var _c = (globalOptions.widget || {}).input, inputDefault = _c === void 0 ? {} : _c;
        var _d = mergeSchema.uiSchema, uiSchema = _d === void 0 ? {} : _d, keys = mergeSchema.keys;
        var _e = uiSchema.readonly, readonly = _e === void 0 ? false : _e;
        return (React.createElement(Input, tslib_1.__assign({ onBlur: function () {
                validate(formItemData);
            }, onChange: function (e) {
                updateItemData(e.currentTarget.value);
            }, disabled: readonly, placeholder: mergeSchema.title }, input, inputDefault, this.setDefaultProps())));
    };
    return AntdInputWidget;
}(React.Component));
export { AntdInputWidget };
//# sourceMappingURL=input.js.map