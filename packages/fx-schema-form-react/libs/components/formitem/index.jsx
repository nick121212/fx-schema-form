var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import { hoc } from "./container";
var SchemaFormItemComponent = (function (_super) {
    __extends(SchemaFormItemComponent, _super);
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
        return <FieldComponent {...this.props}/>;
    };
    return SchemaFormItemComponent;
}(React.PureComponent));
export var SchemaFormItem = hoc(SchemaFormItemComponent);
//# sourceMappingURL=index.jsx.map