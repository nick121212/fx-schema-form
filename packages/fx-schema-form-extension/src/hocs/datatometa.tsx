
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
import schemaFormReact from "fx-schema-form-react";

import { ConditionHocOutProps } from "./condition";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
    formItemNode?: TreeMap;
}

export const name = "dataToMeta";

/**
 * data
 * 将data中的字段塞到meta中
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
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
                    console.log("this.props = ok; ");
                    this.dataToMeta(this.props);
                }

                public componentWillUpdate(props: Props) {
                    this.dataToMeta(props);
                }

                public render(): JSX.Element {
                    const { getOptions, getRequiredKeys, uiSchema } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);

                    return <Component {...extraProps} />;
                }
            }

            return ComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
