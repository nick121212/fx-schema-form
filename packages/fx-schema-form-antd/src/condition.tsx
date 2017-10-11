
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import jpp from "json-pointer";

import { ThemeHocOutProps, RC, SchemaFormItemBaseProps, MakeHocOutProps } from "./index";

export interface ConditionHocOutProps {

}

/**
 * condition hoc
 * 用于组件的显示隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const ConditionHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps & MakeHocOutProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps & MakeHocOutProps, any> {
        private fieldKey = "ui:condition";

        /**
         * render
         */
        public render(): JSX.Element {
            const { getHocOptions, formData, formDefaultData } = this.props;
            const hocOptions = getHocOptions();
            const { array: arrayHocOptions } = hocOptions;
            const { condition: conditionHocOptions } = hocOptions;
            const { fields } = conditionHocOptions;
            let isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));

            if (fields && fields.length) {
                isShow = fields.reduce((prev: boolean, field: { key: string, val: any }) => {
                    if (!jFormData.has(field.key)) {
                        return prev && false;
                    } else {
                        let data = jFormData.get(field.key);

                        return prev && (data === field.val);
                    }
                }, isShow);
            }

            if (!isShow) {
                return null;
            }

            return <Component {...this.props} />;
        }
    }

    return Hoc;
};
