import React from "react";
import merge from "lodash.merge";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class FieldComponentHoc extends React.PureComponent {
            render() {
                const { mergeSchema, currentTheme } = this.props;
                const { uiSchema = { theme: "", field: "", widget: "" } } = mergeSchema;
                let FieldComponent, WidgetComponent;
                if (typeof mergeSchema.type === "object") {
                    mergeSchema.type = mergeSchema.type[0];
                }
                let field = uiSchema.field || mergeSchema.type;
                if (typeof field === "object") {
                    if (field.length) {
                        field = field[0];
                    }
                }
                if (currentTheme.fieldFactory.has(uiSchema.field || mergeSchema.type)) {
                    FieldComponent = currentTheme.fieldFactory.get(uiSchema.field || mergeSchema.type);
                }
                else {
                    console.error(`找不到field：${uiSchema.field || mergeSchema.type}`);
                    return null;
                }
                let widget = uiSchema.widget || mergeSchema.type;
                if (typeof widget === "object") {
                    if (widget.length) {
                        widget = widget[0];
                    }
                }
                if (mergeSchema.enum && !uiSchema.widget) {
                    uiSchema.widget = "combobox";
                    mergeSchema.uiSchema = merge({
                        options: {
                            widget: {
                                "combobox": {
                                    options: mergeSchema.enum.map((e) => {
                                        return {
                                            key: e,
                                            text: e.toString()
                                        };
                                    })
                                }
                            }
                        }
                    }, uiSchema);
                }
                if (currentTheme.widgetFactory.has(uiSchema.widget || mergeSchema.type)) {
                    WidgetComponent = currentTheme.widgetFactory.get(uiSchema.widget || mergeSchema.type);
                }
                else {
                }
                return React.createElement(Component, Object.assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
            }
        }
        return FieldComponentHoc;
    };
};
//# sourceMappingURL=field.js.map