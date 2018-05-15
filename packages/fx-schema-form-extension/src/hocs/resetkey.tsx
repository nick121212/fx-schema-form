
import React from "react";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import schemaFormReact from "fx-schema-form-react";

const { SchemaForm, schemaFormTypes } = schemaFormReact;
export interface Props extends DefaultProps, UtilsHocOutProps { }

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
                        normalOptions = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {})),
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
