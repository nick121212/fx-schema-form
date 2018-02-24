
import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";

import { DefaultProps } from "../components";
import { FxUiSchema, RC, NsFactory } from "../models/index";
import { themeFactory } from "../factory";

export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}

/**
 * 包装theme的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * currentTheme 当前的命名空间
 */
export default (hocFactory: BaseFactory<any>) => {
    return (Component: any): RC<DefaultProps, any> => {
        const defualtKey = "default";
        class ThemeComponentHoc extends PureComponent<DefaultProps, any> {
            public render(): JSX.Element {
                const { theme } = this.props.uiSchema as FxUiSchema;
                let nsFactory;

                if (themeFactory.has(theme || defualtKey)) {
                    nsFactory = themeFactory.get(theme || defualtKey);
                } else {
                    throw new Error(`没有找到${theme || defualtKey}的样式！`);
                }

                return <Component currentTheme={nsFactory} {...this.props} />;
            }
        }

        return ThemeComponentHoc as any;
    };
};
