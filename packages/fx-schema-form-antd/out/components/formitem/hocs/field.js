import React from "react";
/**
 * 包装Field的组件HOC
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export const FieldHoc = (Component) => {
    class Hoc extends React.Component {
        shouldComponentUpdate() {
            return false;
        }
        render() {
            const { mergeSchema, currentTheme } = this.props;
            const { uiSchema = { theme: "", field: "", widget: "" } } = mergeSchema;
            let FieldComponent, WidgetComponent;
            if (currentTheme.fieldFactory.has(uiSchema.field || mergeSchema.type)) {
                FieldComponent = currentTheme.fieldFactory.get(uiSchema.field || mergeSchema.type);
            }
            if (currentTheme.widgetFactory.has(uiSchema.widget || mergeSchema.type)) {
                WidgetComponent = currentTheme.widgetFactory.get(uiSchema.widget || mergeSchema.type);
            }
            return React.createElement(Component, Object.assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
        }
    }
    return Hoc;
};
//# sourceMappingURL=field.js.map