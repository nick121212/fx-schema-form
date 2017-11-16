
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import jpp from "json-pointer";
import { connect } from "react-redux";

import { MakeHocOutProps } from "./make";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps, mapFormDataToProps } from "../select";

export interface DataHocOutProps {

}

/**
 * condition hoc
 * 用于组件的显示隐藏
 *  1. 根据hoc设置中的condition字段来配置显示/隐藏的时机
 *  2. 从formData中获取所需的值，与设置的值做对比，如果都匹配，则显示，否则隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<SchemaFormItemBaseProps & MakeHocOutProps, any> => {
        @connect(mapFormDataToProps)
        class ComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & MakeHocOutProps, any> {
            public render() {
                return <Component {...this.props} />;
            }
        }

        return ComponentHoc;
    };
};
