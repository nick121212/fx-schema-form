import React, { PureComponent } from "react";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class FieldComponentHoc extends PureComponent {
            render() {
                const { currentTheme, getOptions, uiSchema } = this.props, { field, widget, type } = uiSchema;
                let FieldComponent, WidgetComponent;
                let calcField = field || type;
                if (currentTheme.fieldFactory.has(calcField)) {
                    FieldComponent = currentTheme.fieldFactory.get(calcField);
                }
                else {
                    if (currentTheme.fieldFactory.has("default")) {
                        FieldComponent = currentTheme.fieldFactory.get("default");
                    }
                    else {
                        console.error(`找不到field：${field || type}`);
                        return null;
                    }
                }
                if (currentTheme.widgetFactory.has(widget || type)) {
                    WidgetComponent = currentTheme.widgetFactory.get(widget || type);
                }
                else {
                    if (currentTheme.widgetFactory.has("default")) {
                        WidgetComponent = currentTheme.widgetFactory.get("default");
                    }
                    else {
                        console.warn(`找不到widget：${widget || type}`, uiSchema);
                    }
                }
                return React.createElement(Component, Object.assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
            }
        }
        return FieldComponentHoc;
    };
};
//# sourceMappingURL=field.js.map