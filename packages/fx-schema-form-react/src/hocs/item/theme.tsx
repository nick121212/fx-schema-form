
import React from "react";
import { BaseFactory } from "fx-schema-form-core";

import { RC, NsFactory } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { nsFactory } from "../../index";

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
export const ThemeHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps, any> => {
    class ThemeComponentHoc extends React.PureComponent<SchemaFormItemBaseProps, any> {
        public render(): JSX.Element {
            const { mergeSchema } = this.props;
            const { uiSchema = { theme: "", field: "" } } = mergeSchema;
            let theme;

            if (nsFactory.has(uiSchema.theme || "default")) {
                theme = nsFactory.get(uiSchema.theme || "default");
            } else {
                throw new Error(`没有找到${uiSchema.theme || "default"}的样式！`);
            }

            return <Component currentTheme={theme} {...this.props} />;
        }
    }

    return ThemeComponentHoc;
};
