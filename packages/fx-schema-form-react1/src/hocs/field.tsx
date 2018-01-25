
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { ThemeHocOutProps } from "./theme";
import { UtilsHocOutProps } from "./utils";
import { RC, DefaultProps, FxUiSchema } from "../components";

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
    return (Component: any): RC<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any> => {
        class FieldComponentHoc extends React.PureComponent<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any> {
            public render(): JSX.Element | null {
                const { currentTheme, getOptions, uiSchema } = this.props,
                    { field, widget, type } = uiSchema as FxUiSchema;
                let FieldComponent, WidgetComponent;
                let options = getOptions(this.props, "hoc", "field");

                if (currentTheme.fieldFactory.has(field || type as string)) {
                    FieldComponent = currentTheme.fieldFactory.get(field || type as string);
                } else {
                    console.error(`找不到field：${field || type}`);
                    return null;
                }

                if (currentTheme.widgetFactory.has(widget || type as string)) {
                    WidgetComponent = currentTheme.widgetFactory.get(widget || type as string);
                } else {
                    console.warn(`找不到widget：${widget || type}`, uiSchema);
                }

                return <Component {...this.props}
                    FieldComponent={(FieldComponent)}
                    WidgetComponent={WidgetComponent} />;
            }
        }

        return FieldComponentHoc;
    };
};
