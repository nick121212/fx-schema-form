
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";
import { fromJS } from "immutable";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "./utils";
import { schemaFormTypes, RC } from "../models";

export interface Props extends DefaultProps, UtilsHocOutProps {

}

export interface ResetKeysHocOutSettings {
    excludeKeys: string[];
    includeKeys: string[];
}

export const name = "resetKey";

/**
 * resetKey
 * 用来筛选组件中的props
 * 配置：
 *  excludeKeys：需要去掉的属性数组
 *  includeKeys：需要的属性数组
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: ResetKeysHocOutSettings = { excludeKeys: [], includeKeys: [] }) => {
        return (Component: any): RC<Props, any> => {
            class ComponentHoc extends React.PureComponent<Props, any> {
                public render(): JSX.Element {
                    const { getOptions, getRequiredKeys } = this.props,
                        normalOptions = getOptions(this.props, schemaFormTypes.hoc, name, fromJS(settings || {})),
                        extraProps = getRequiredKeys(this.props, normalOptions.includeKeys, normalOptions.excludeKeys);

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
