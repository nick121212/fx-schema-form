import React, { PureComponent } from "react";
export const name = "field";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            const defaultKey = "default";
            class FieldComponentHoc extends PureComponent {
                render() {
                    const { currentTheme, getOptions, uiSchema } = this.props, { field, widget, type } = uiSchema;
                    let FieldComponent, WidgetComponent, calcField = field || type;
                    if (currentTheme.fieldFactory.has(calcField)) {
                        FieldComponent = currentTheme.fieldFactory.get(calcField);
                    }
                    else {
                        if (currentTheme.fieldFactory.has(defaultKey)) {
                            FieldComponent = currentTheme.fieldFactory.get(defaultKey);
                        }
                        else {
                            if (!__PROD__) {
                                console.error(`找不到field：${field || type}`);
                            }
                            return null;
                        }
                    }
                    if (currentTheme.widgetFactory.has(widget || type)) {
                        WidgetComponent = currentTheme.widgetFactory.get(widget || type);
                    }
                    else {
                        if (currentTheme.widgetFactory.has(defaultKey)) {
                            WidgetComponent = currentTheme.widgetFactory.get(defaultKey);
                        }
                        else {
                            if (!__PROD__) {
                                console.warn(`找不到widget：${widget || type}`, uiSchema);
                            }
                        }
                    }
                    return React.createElement(Component, Object.assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
                }
            }
            return FieldComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=field.js.map