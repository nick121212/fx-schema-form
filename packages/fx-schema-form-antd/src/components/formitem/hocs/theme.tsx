
import React from "react";

import { RC, NsFactory } from "../../../types";
import { nsFactory } from "../../../index";
import { SchemaFormItemBaseProps } from "../props";

export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}

/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const ThemeHoc = (Component: any): RC<SchemaFormItemBaseProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps, any> {
        public componentDidMount(): void {
            console.log("theme mounted!");
        }
        public render(): JSX.Element {
            const { mergeSchema } = this.props;
            const { uiSchema = { theme: "", field: "" } } = mergeSchema;
            let theme;

            // console.log("theme hoc render");

            if (nsFactory.has(uiSchema.theme || "default")) {
                theme = nsFactory.get(uiSchema.theme || "default");
            } else {
                throw new Error(`没有找到￥{uiSchema.theme || "default"}的样式！`);
            }

            return <Component currentTheme={theme} {...this.props} />;
        }
    }

    return Hoc;
};
