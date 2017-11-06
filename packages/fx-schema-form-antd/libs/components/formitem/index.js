import * as tslib_1 from "tslib";
import React from "react";
import { hoc } from "./container";
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
        return React.createElement(FieldComponent, tslib_1.__assign({}, this.props));
    };
    return SchemaFormItemComponent;
}(React.PureComponent));
export var SchemaFormItem = hoc(SchemaFormItemComponent);
//# sourceMappingURL=index.js.map