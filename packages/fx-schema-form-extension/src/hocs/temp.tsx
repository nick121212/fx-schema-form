import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle, pure } from "recompose";
import { connect } from "react-redux";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ThemeHocOutProps } from "fx-schema-form-react/dist/typings/hocs/theme";
import { TreeMap } from "fx-schema-form-react/dist/typings/libs/tree";

export interface Props extends DefaultProps, ThemeHocOutProps, UtilsHocOutProps {
    formItemNode?: TreeMap;
}

/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */

export default (hocFactory: BaseFactory<any>) => {
    return (Component: any): RC<Props, any> => {
        /**
        * 获取模板的components
        * @param uiSchema 合并后的数据
        */
        @(hocFactory.get("data")({
            treeNode: true
        }))
        class TempComponentHoc extends PureComponent<Props, any> {
            /**
             * 渲染组件
             * 1. 获取meta数据中的temps字段
             * 2. 遍历temps，拼接temps，渲染temps组件
             * 3. 渲染Component组件作为temps的children
             */
            public render(): JSX.Element {
                const { uiSchema, getOptions, currentTheme, formItemNode, getRequiredKeys } = this.props,
                    options = getOptions(this.props, "hoc", "extraTemp"),
                    extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys),
                    { temps = [] } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {};

                console.log(uiSchema.keys, formItemNode, temps);

                return temps.map((temp: string) => {
                    return {
                        key: temp,
                        Temp: currentTheme.tempFactory.get(temp)
                    };
                }).reduce((prev: JSX.Element, { key, Temp }: any) => {
                    const tempOptions = getOptions(this.props, "temp", key),
                        TempWithHoc: any = compose(...(tempOptions.tempHocs || []))(Temp);

                    return <TempWithHoc
                        key={key}
                        tempKey={key}
                        ajv={this.props.ajv}
                        uiSchema={this.props.uiSchema}
                        schemaId={this.props.schemaId}
                        arrayLevel={this.props.arrayLevel}
                        arrayIndex={this.props.arrayIndex}
                        globalOptions={this.props.globalOptions}
                        parentKeys={this.props.parentKeys}
                        getTitle={this.props.getTitle}
                        getOptions={this.props.getOptions}
                        getPathKeys={this.props.getPathKeys}
                        children={prev} />;
                }, <Component {...extraProps} />);
            }
        }

        return TempComponentHoc as any;
    };
};
