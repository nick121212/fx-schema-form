
import React from "react";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, pure } from "recompose";
import * as jpp from "json-pointer";
import { BaseFactory } from "fx-schema-form-core";

import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
// import { mapActionsStateToProps } from "../select";


export interface UtilsHocOutProps {
    getHocOptions: (hoc?: string) => any;
    getFieldOptions: (field: string) => any;
    getWidgetOptions: (widget: string) => any;
}

/**
 * 包装utils的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * getHocOptions    获取hoc的参数
 * getFieldOptions  获取field的参数
 * getWidgetOptions 获取widget的参数
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<SchemaFormItemBaseProps, any> => {
        class ComponentHoc extends React.PureComponent<SchemaFormItemBaseProps, any> {
            public render(): JSX.Element {
                return <Component
                    getHocOptions={this.getHocOptions.bind(this)}
                    getFieldOptions={this.getFieldOptions.bind(this)}
                    getWidgetOptions={this.getWidgetOptions.bind(this)}
                    {...this.props} />;
            }

            /**
             * 获取field的参数
             * @param field field的名称
             */
            private getFieldOptions(field: string) {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const fieldOptions = uiSchemaOptions.field || {};
                const fieldDefaultOptions = globalOptions.field || {};

                return Object.assign({}, fieldDefaultOptions[field] || {}, fieldOptions[field] || {});
            }

            /**
             * 获取widget的参数
             * @param widget widget的名称
             */
            private getWidgetOptions(widget: string) {
                const { mergeSchema = {}, globalOptions = {}, uiSchemaOptions = {} } = this.props;
                const widgetOptions = uiSchemaOptions.widget || {};
                const widgetDefaultOptions = globalOptions.widget || {};

                return Object.assign({}, widgetDefaultOptions[widget] || {}, widgetOptions[widget] || {});
            }

            /**
             * 返回hoc的参数
             * @param hoc hoc的名称
             */
            private getHocOptions(hoc?: string): any {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const hocOptions = Object.assign({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});

                if (hoc) {
                    return hocOptions[hoc] || {};
                }

                return hocOptions;
            }
        }

        return ComponentHoc;
    };
};
