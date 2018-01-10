
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import merge from "lodash.merge";

import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps } from "../select";
import { UtilsHocOutProps } from "./utils";

export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}

/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<SchemaFormItemBaseProps & ThemeHocOutProps & UtilsHocOutProps, any> => {
        class FieldComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & ThemeHocOutProps & UtilsHocOutProps, any> {
            public render(): JSX.Element | null {
                const { mergeSchema, currentTheme, getHocOptions } = this.props;
                const { uiSchema = { theme: "", field: "", widget: "" } } = mergeSchema;
                let FieldComponent, WidgetComponent;
                let options = getHocOptions(this.props, "field");

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
                } else {
                    console.error(`找不到field：${uiSchema.field || mergeSchema.type}`);
                    return null;
                }

                let widget = uiSchema.widget || mergeSchema.type;

                if (typeof widget === "object") {
                    if (widget.length) {
                        widget = widget[0];
                    }
                }

                // 如果有enum，并且没有设置widget的，则默认给他加上combobox的widget，以及options
                if (mergeSchema.enum && options.autoCombine !== false) {
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
                } else {
                    // console.warn(`找不到widget：${uiSchema.widget || mergeSchema.type}`, mergeSchema);
                }

                return <Component {...this.props}
                    FieldComponent={(FieldComponent)}
                    WidgetComponent={WidgetComponent} />;
            }
        }

        return FieldComponentHoc;
    };
};
