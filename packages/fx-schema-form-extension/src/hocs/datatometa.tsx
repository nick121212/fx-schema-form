
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { createSelector, createSelectorCreator, defaultMemoize, Selector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { TreeMap } from "fx-schema-form-react/dist/typings/libs/tree";
import schemaFormReact from "fx-schema-form-react";

import { ConditionHocOutProps } from "./condition";

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
    formItemNode?: TreeMap;
}

/**
 * data
 * 将data中的字段塞到meta中
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>) => {
    const actions = schemaFormReact.reducerFactory.get("schemaForm").actions;

    return (Component: any): RC<Props, any> => {
        @(compose(
            hocFactory.get("data")({
                data: true,
                treeNode: true
            })
        ) as any)
        class ComponentHoc extends React.PureComponent<Props, any> {

            /**
             * 这里把数据塞到了meta中，便于后面的组件使用
             * 遍历数组，数组元素的每一项数据合并到meta
             * @param props 当前的props
             */
            public dataToMeta(props: Props) {
                const { formItemData, uiSchema, parentKeys, formItemNode } = props,
                    { keys = [] } = uiSchema || {};

                if (formItemData && formItemNode) {
                    formItemData.map((child: Immutable.Map<string, any>, index: number) => {
                        let childNodeKeys = [index, "children"],
                            childNode = formItemNode.containPath(childNodeKeys);

                        if (!childNode) {
                            return formItemNode.addChild(childNodeKeys, child.get("data"));
                        }

                        if (childNode.value) {
                            childNode.value = childNode.value.merge(child.get("data"));
                        } else {
                            childNode.value = child.get("data");
                        }
                    });
                }
            }

            public componentWillMount() {
                this.dataToMeta(this.props);
            }

            public componentWillUpdate(props: Props) {
                this.dataToMeta(props);
            }

            public render(): JSX.Element {
                const { getOptions, getRequiredKeys, uiSchema } = this.props,
                    options = getOptions(this.props, "hoc", "dataToMeta"),
                    extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);

                return <Component {...extraProps} />;
            }
        }

        return ComponentHoc as any;
    };
};
