
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps } from "../select";

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
export const FieldHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps & ThemeHocOutProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
        public shouldComponentUpdate() {
            return false;
        }

        public render(): JSX.Element | null {
            const { mergeSchema, currentTheme } = this.props;
            const { uiSchema = { theme: "", field: "", widget: "" } } = mergeSchema;
            let FieldComponent, WidgetComponent;

            if (currentTheme.fieldFactory.has(uiSchema.field || mergeSchema.type)) {
                FieldComponent = currentTheme.fieldFactory.get(uiSchema.field || mergeSchema.type);
            } else {
                console.error(`找不到field：${uiSchema.field || mergeSchema.type}`);

                return null;
            }

            if (currentTheme.widgetFactory.has(uiSchema.widget || mergeSchema.type)) {
                WidgetComponent = currentTheme.widgetFactory.get(uiSchema.widget || mergeSchema.type);
            } else {
                console.warn(`找不到widget：${uiSchema.widget || mergeSchema.type}`);
            }

            return <Component {...this.props}
                FieldComponent={(FieldComponent)}
                WidgetComponent={WidgetComponent} />;
        }
    }

    return Hoc;
};
