
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { createSelector, createSelectorCreator, defaultMemoize, Selector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";

export interface Props extends DefaultProps, UtilsHocOutProps {

}

export interface ResetKeysHocOutSettings {
    excludeKeys: string[];
    includeKeys: string[];
}

/**
 * resetKey
 * 用来筛选组件中的props
 * 配置：
 *  excludeKeys：需要去掉的属性数组
 *  includeKeys：需要的属性数组
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>, settings: ResetKeysHocOutSettings = { excludeKeys: [], includeKeys: [] }) => {
    return (Component: any): RC<Props, any> => {
        class ComponentHoc extends React.PureComponent<Props, any> {
            public render(): JSX.Element {
                const { getOptions, getRequiredKeys } = this.props,
                    normalOptions = getOptions(this.props, "hoc", "resetkeys", Immutable.fromJS(settings || {})),
                    extraProps = getRequiredKeys(this.props, normalOptions.includeKeys, normalOptions.excludeKeys);

                return <Component {...extraProps} />;
            }
        }

        return ComponentHoc as any;
    };
};
