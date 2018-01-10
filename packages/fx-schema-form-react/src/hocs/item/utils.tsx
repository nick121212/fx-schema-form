
import React from "react";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, pure } from "recompose";
import * as jpp from "json-pointer";
import { BaseFactory } from "fx-schema-form-core";
import merge from "lodash.merge";
import resolvePathname from "resolve-pathname";

import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";

export interface UtilsHocOutProps {
    getHocOptions: (props: SchemaFormItemBaseProps, hoc?: string) => any;
    getFieldOptions: (props: SchemaFormItemBaseProps, field: string) => any;
    getWidgetOptions: (props: SchemaFormItemBaseProps, widget: string) => any;
    getTempOptions: (props: SchemaFormItemBaseProps, temp: string) => any;
    getTitle(props: SchemaFormItemBaseProps): () => any;
    getPathKeys: (keys: string[], path: string) => string[];
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
                    getHocOptions={this.getHocOptions}
                    getFieldOptions={this.getFieldOptions}
                    getWidgetOptions={this.getWidgetOptions}
                    getTitle={this.getTitle}
                    getTempOptions={this.getTempOptions}
                    getPathKeys={this.getPathKeys}
                    {...this.props} />;
            }

            /**
             * 获取field的参数
             * @param field field的名称
             */
            private getFieldOptions(props: SchemaFormItemBaseProps, field: string) {
                const { mergeSchema, globalOptions } = props;
                const { uiSchema = { options: {} } } = mergeSchema;
                const uiSchemaOptions: any = uiSchema.options || {};
                const fieldOptions = uiSchemaOptions.field || {};
                const fieldDefaultOptions = globalOptions.field || {};

                return merge({}, fieldDefaultOptions[field] || {}, fieldOptions[field] || {});
            }

            private getTempOptions(props: SchemaFormItemBaseProps, temp: string) {
                const { mergeSchema = {}, globalOptions = {}, uiSchemaOptions = {} } = props;
                const { options = { template: {} } } = mergeSchema.uiSchema;

                const uiOptions = uiSchemaOptions.template || {};
                const widgetOptions = options.template || {};
                const widgetGlobalOptions = globalOptions.template || {};

                return merge({}, widgetGlobalOptions[temp] || {}, uiOptions[temp] || {}, widgetOptions[temp] || {});
            }

            /**
             * 获取widget的参数
             * @param widget widget的名称
             */
            private getWidgetOptions(props: SchemaFormItemBaseProps, widget: string) {
                const { mergeSchema = {}, globalOptions = {}, uiSchemaOptions = {} } = props;
                const { options = { widget: {} } } = mergeSchema.uiSchema;

                const uiOptions = uiSchemaOptions.widget || {};
                const widgetOptions = options.widget || {};
                const widgetGlobalOptions = globalOptions.widget || {};

                return merge({}, widgetGlobalOptions[widget] || {}, uiOptions[widget] || {}, widgetOptions[widget] || {});
            }

            /**
             * 返回hoc的参数
             * @param hoc hoc的名称
             */
            private getHocOptions(props: SchemaFormItemBaseProps, hoc?: string): any {
                const { mergeSchema, globalOptions } = props;
                const { uiSchema = { options: {} } } = mergeSchema;
                const uiSchemaOptions: any = uiSchema.options || {};
                const hocOptions: any = merge({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});

                if (hoc) {
                    return hocOptions[hoc] || {};
                }

                return hocOptions;
            }

            /**
             * 获取标题数据
             * uiSchema.title || title || key
             */
            private getTitle(props: SchemaFormItemBaseProps): any {
                const { mergeSchema } = props;
                const { uiSchema, title, keys } = mergeSchema;

                return uiSchema.title || title || [].concat(keys).pop();
            }

            /**
             * 根据相对路径，得到keys
             * @param keys 当前的keys
             * @param path 路径
             */
            private getPathKeys(keys: Array<string>, path: string): Array<string> {
                let keys1: string[] = resolvePathname(path, "/" + keys.join("/")).split("/");

                keys1.shift();

                if (keys1.length && !keys1[keys1.length - 1]) {
                    keys1.pop();
                }

                return keys1;
            }
        }

        return ComponentHoc;
    };
};
