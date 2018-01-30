
import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";

import { RC, NsFactory, DefaultProps, FxUiSchema } from "../components";
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
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<DefaultProps, any> => {
        class ThemeComponentHoc extends PureComponent<DefaultProps, any> {
            public render(): JSX.Element {
                const { theme, field } = this.props.uiSchema as FxUiSchema;
                let nsFactory;

                if (themeFactory.has(theme || "default")) {
                    nsFactory = themeFactory.get(theme || "default");
                } else {
                    throw new Error(`没有找到${theme || "default"}的样式！`);
                }

                return <Component currentTheme={nsFactory} {...this.props} />;
            }
        }

        return ThemeComponentHoc as any;
    };
};
