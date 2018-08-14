import React, { PureComponent } from "react";
import { isProd } from "../libs/utils";
export const name = "field";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            const defaultKey = "default";
            class FieldComponentHoc extends PureComponent {
                render() {
                    const { currentTheme, getOptions, uiSchema } = this.props, { field, widget, type } = uiSchema;
                    let FieldComponent, WidgetComponent, calcField = field || type, calcWidget = widget || type;
                    if (currentTheme.fieldFactory.has(calcField)) {
                        FieldComponent = currentTheme.fieldFactory.get(calcField);
                    }
                    else {
                        if (currentTheme.fieldFactory.has(defaultKey)) {
                            FieldComponent = currentTheme.fieldFactory.get(defaultKey);
                        }
                        else {
                            if (!isProd()) {
                                console.error(`找不到field：${calcField}`);
                            }
                            return null;
                        }
                    }
                    if (currentTheme.widgetFactory.has(calcWidget)) {
                        WidgetComponent = currentTheme.widgetFactory.get(calcWidget);
                    }
                    else {
                        if (currentTheme.widgetFactory.has(defaultKey)) {
                            WidgetComponent = currentTheme.widgetFactory.get(defaultKey);
                        }
                        else {
                            if (!isProd()) {
                                console.warn(`找不到widget：${calcWidget}`, uiSchema);
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