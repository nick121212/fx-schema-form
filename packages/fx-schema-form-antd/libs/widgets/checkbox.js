import * as tslib_1 from "tslib";
import React from "react";
import { Checkbox } from "antd";
var AntdCheckboxWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AntdCheckboxWidget, _super);
    function AntdCheckboxWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCheckboxWidget.prototype.setDefaultProps = function () {
        var mergeSchema = this.props.mergeSchema;
        var props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = mergeSchema.default;
        }
        return props;
    };
    AntdCheckboxWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, arrayIndex = _a.arrayIndex, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, meta = _a.meta, validate = _a.validate, updateItemData = _a.updateItemData;
        var _b = (uiSchemaOptions.widget || {}).checkbox, checkbox = _b === void 0 ? {} : _b;
        var _c = (globalOptions.widget || {}).checkbox, checkboxDefault = _c === void 0 ? {} : _c;
        var _d = mergeSchema.uiSchema, uiSchema = _d === void 0 ? {} : _d, keys = mergeSchema.keys;
        var _e = uiSchema.readonly, readonly = _e === void 0 ? false : _e;
        return (React.createElement(Checkbox, tslib_1.__assign({ onChange: function (e) {
                updateItemData(e.target.checked);
                validate(e.target.checked);
            }, disabled: readonly }, checkbox, checkboxDefault, this.setDefaultProps())));
    };
    return AntdCheckboxWidget;
}(React.Component));
export { AntdCheckboxWidget };
//# sourceMappingURL=checkbox.js.map