"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
var NormalField = (function (_super) {
    tslib_1.__extends(NormalField, _super);
    function NormalField(props, context) {
        return _super.call(this, props, context) || this;
    }
    NormalField.prototype.render = function () {
        var _a = this.props, WidgetComponent = _a.WidgetComponent, FieldComponent = _a.FieldComponent, formItemMeta = _a.formItemMeta, formItemData = _a.formItemData, extraProps = tslib_1.__rest(_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
        var fieldOptions = extraProps.getOptions(this.props, "field", "normal");
        var keys = extraProps.uiSchema.keys;
        var WidgetComponentWithHoc = WidgetComponent;
        if (!WidgetComponent) {
            return null;
        }
        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
            WidgetComponentWithHoc = recompose_1.compose.apply(void 0, fieldOptions.widgetHocs)(WidgetComponent);
        }
        return (react_1.default.createElement(WidgetComponentWithHoc, tslib_1.__assign({ key: keys.join(".") }, extraProps)));
    };
    return NormalField;
}(react_1.PureComponent));
exports.NormalField = NormalField;
//# sourceMappingURL=normal.js.map