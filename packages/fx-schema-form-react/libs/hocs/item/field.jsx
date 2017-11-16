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
export var FieldHoc = function (hocFactory, Component) {
    var FieldComponentHoc = (function (_super) {
        __extends(FieldComponentHoc, _super);
        function FieldComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FieldComponentHoc.prototype.render = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { theme: "", field: "", widget: "" } : _b;
            var FieldComponent, WidgetComponent;
            if (typeof mergeSchema.type === "object") {
                mergeSchema.type = mergeSchema.type[0];
            }
            var field = uiSchema.field || mergeSchema.type;
            if (typeof field === "object") {
                if (field.length) {
                    field = field[0];
                }
            }
            if (currentTheme.fieldFactory.has(uiSchema.field || mergeSchema.type)) {
                FieldComponent = currentTheme.fieldFactory.get(uiSchema.field || mergeSchema.type);
            }
            else {
                console.error("\u627E\u4E0D\u5230field\uFF1A" + (uiSchema.field || mergeSchema.type));
                return null;
            }
            var widget = uiSchema.widget || mergeSchema.type;
            if (typeof widget === "object") {
                if (widget.length) {
                    widget = widget[0];
                }
            }
            if (currentTheme.widgetFactory.has(uiSchema.widget || mergeSchema.type)) {
                WidgetComponent = currentTheme.widgetFactory.get(uiSchema.widget || mergeSchema.type);
            }
            else {
            }
            return <Component {...this.props} FieldComponent={(FieldComponent)} WidgetComponent={WidgetComponent}/>;
        };
        return FieldComponentHoc;
    }(React.PureComponent));
    return FieldComponentHoc;
};
//# sourceMappingURL=field.jsx.map