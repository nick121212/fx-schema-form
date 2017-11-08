"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var container_1 = require("./container");
/**
 * SchemaFormItem组件
 * 找到对应的field组件，渲染
 */
var SchemaFormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaFormItemComponent, _super);
    function SchemaFormItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaFormItemComponent.prototype.render = function () {
        var _a = this.props, FieldComponent = _a.FieldComponent, mergeSchema = _a.mergeSchema;
        var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? {} : _b;
        if (!FieldComponent) {
            console.log(mergeSchema, "没有找到匹配的field");
            return null;
        }
        return react_1.default.createElement(FieldComponent, tslib_1.__assign({}, this.props));
    };
    return SchemaFormItemComponent;
}(react_1.default.PureComponent));
exports.SchemaFormItem = container_1.hoc(SchemaFormItemComponent);
//# sourceMappingURL=index.js.map