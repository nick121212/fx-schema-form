
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { createSelector, createSelectorCreator, defaultMemoize, Selector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";

export interface ResetKeysHocProps extends DefaultProps, UtilsHocOutProps {

}

export interface ResetKeysHocOutSettings {
    excludeKeys: string[];
    includeKeys: string[];
}

/**
 * condition
 * 筛选出需要使用的字段，包装到condition这个prop中，传递到下层组件
 * 配置：
 *  paths：字段的路径以及数据处理规则，路径使用相对或者决定路径
 *  hoc：   下层的包装组件
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>, settings: ResetKeysHocOutSettings = { excludeKeys: [], includeKeys: [] }) => {
    return (Component: any): RC<ResetKeysHocProps, any> => {
        class ComponentHoc extends React.PureComponent<ResetKeysHocProps, any> {
            public render(): JSX.Element {
                const { getOptions, getRequiredKeys } = this.props;
                const normalOptions = getOptions(this.props, "hoc", "resetkeys", Immutable.fromJS(settings || {}));
                const extraProps = getRequiredKeys(this.props, normalOptions.includeKeys, normalOptions.excludeKeys);

                return <Component {...extraProps} />;
            }
        }

        return ComponentHoc as any;
    };
};
