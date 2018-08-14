
import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";

import { ThemeHocOutProps } from "./theme";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { RC } from "../models";
import { isProd } from "../libs/utils";

export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}

export const name = "field";
/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
        return (Component: any): RC<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any> => {
            const defaultKey = "default";
            class FieldComponentHoc extends PureComponent<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any> {
                public render(): JSX.Element | null {
                    const { currentTheme, getOptions, uiSchema } = this.props,
                        { field, widget, type } = uiSchema as any;
                    let FieldComponent, WidgetComponent,
                        calcField = field || type as string,
                        calcWidget = widget || type as string;

                    // 查找field
                    if (currentTheme.fieldFactory.has(calcField)) {
                        FieldComponent = currentTheme.fieldFactory.get(calcField);
                    } else {
                        if (currentTheme.fieldFactory.has(defaultKey)) {
                            FieldComponent = currentTheme.fieldFactory.get(defaultKey);
                        } else {
                            if (!isProd()) { console.error(`找不到field：${calcField}`); }
                            return null;
                        }
                    }

                    // 查找widget
                    if (currentTheme.widgetFactory.has(calcWidget)) {
                        WidgetComponent = currentTheme.widgetFactory.get(calcWidget);
                    } else {
                        if (currentTheme.widgetFactory.has(defaultKey)) {
                            WidgetComponent = currentTheme.widgetFactory.get(defaultKey);
                        } else {
                            if (!isProd()) { console.warn(`找不到widget：${calcWidget}`, uiSchema); }
                        }
                    }

                    return <Component {...this.props}
                        FieldComponent={(FieldComponent)}
                        WidgetComponent={WidgetComponent} />;
                }
            }

            return FieldComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
