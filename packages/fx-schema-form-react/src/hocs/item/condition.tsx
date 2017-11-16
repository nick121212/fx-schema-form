
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import jpp from "json-pointer";
import { connect } from "react-redux";

import { ThemeHocOutProps } from "./theme";
import { MakeHocOutProps } from "./make";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps, mapFormDataToProps } from "../select";

export interface ConditionHocOutProps {

}

export interface ConditionSettings {
    fields: Array<{
        key: string,
        val: any
    }>;
}

/**
 * condition hoc
 * 用于组件的显示隐藏
 *  1. 根据hoc设置中的condition字段来配置显示/隐藏的时机
 *  2. 从formData中获取所需的值，与设置的值做对比，如果都匹配，则显示，否则隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const ConditionHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps & MakeHocOutProps, any> => {
    @connect(mapFormDataToProps)
    class ConditionComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & MakeHocOutProps, any> {
        private fieldKey = "ui:condition";

        /**
         * render
         */
        public render(): JSX.Element {
            const { getHocOptions, formData, formDefaultData } = this.props;
            const hocOptions = getHocOptions();
            const { condition: conditionHocOptions } = hocOptions;
            const { fields } = conditionHocOptions as ConditionSettings;
            let isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));

            if (fields && fields.length) {
                isShow = fields.reduce((prev: boolean, { key, val }) => {
                    if (!jFormData.has(key)) {
                        return prev && false;
                    } else {
                        let data = jFormData.get(key);

                        return prev && (data === val);
                    }
                }, isShow);
            }

            if (!isShow) {
                return null;
            }

            return <Component {...this.props} />;
        }
    }

    return ConditionComponentHoc;
};
