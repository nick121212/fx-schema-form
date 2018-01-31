"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var redux_1 = require("redux");
var container_1 = require("./container");
var SchemaFormItem = (function (_super) {
    tslib_1.__extends(SchemaFormItem, _super);
    function SchemaFormItem(props, context) {
        return _super.call(this, props, context) || this;
    }
    SchemaFormItem.prototype.render = function () {
        var _a = this.props, FieldComponent = _a.FieldComponent, uiSchema = _a.uiSchema, extraProps = tslib_1.__rest(_a, ["FieldComponent", "uiSchema"]);
        var options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
        var FieldComponentWithHoc = FieldComponent;
        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }
        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = redux_1.compose.apply(void 0, (options.fieldHocs || []))(FieldComponent);
        }
        return react_1.default.createElement(FieldComponentWithHoc, tslib_1.__assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
    };
    SchemaFormItem = tslib_1.__decorate([
        container_1.hoc,
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], SchemaFormItem);
    return SchemaFormItem;
}(react_1.PureComponent));
exports.SchemaFormItem = SchemaFormItem;
//# sourceMappingURL=component.js.map