import * as tslib_1 from "tslib";
import React from "react";
/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export var FieldHoc = function (hocFactory, Component) {
    var FieldComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(FieldComponentHoc, _super);
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
                // console.warn(`找不到widget：${uiSchema.widget || mergeSchema.type}`, mergeSchema);
            }
            return React.createElement(Component, tslib_1.__assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
        };
        return FieldComponentHoc;
    }(React.PureComponent));
    return FieldComponentHoc;
};
//# sourceMappingURL=field.js.map