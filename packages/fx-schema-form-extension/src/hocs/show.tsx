
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer, renderNothing } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { createSelector, createSelectorCreator, defaultMemoize, Selector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";

import { ConditionHocOutProps } from "./condition";

export interface Props extends DefaultProps, ConditionHocOutProps, UtilsHocOutProps {

}

export interface ResetKeysHocOutSettings {
    paths?: string[];
    renderNothing?: boolean;
}

/**
 * condition
 * 显示/隐藏元素
 * 配置：
 *  paths:          字段的路径以及数据处理规则，路径使用相对或者决定路径
 *  renderNothing:  如果条件不满足，则返回null，不然则隐藏元素
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>, settings: ResetKeysHocOutSettings = {}) => {
    const style = {
        display: "none"
    };
    return (Component: any): RC<Props, any> => {
        class ComponentHoc extends React.PureComponent<Props, any> {
            /**
             * 渲染组件
             * 1. 如果配置中【paths，condition，uiSchema，uiSchema.keys】中的任何一项不存在，直接返回null
             * 2. 如果paths中的任何一项为false，则隐藏组件
             * 3. 否则正常显示组件
             */
            public render(): JSX.Element | null {
                const { getOptions, getPathKeys, condition, uiSchema } = this.props;
                const normalOptions = getOptions(this.props, "hoc", "show", Immutable.fromJS(settings || {}));
                let show = true;

                if (normalOptions.paths && condition && uiSchema && uiSchema.keys) {
                    show = normalOptions.paths.reduce((prev: boolean, path: string) => {
                        if (!prev) {
                            return false;
                        }

                        let pathKeys = getPathKeys(uiSchema.keys as string[], path);

                        if (condition.has(pathKeys.join("/"))) {
                            return !!condition.get(pathKeys.join("/")) && prev;
                        }

                        return false;
                    }, show);
                }

                if (show) {
                    return <Component {...this.props} />;
                }

                return null;
            }
        }

        return ComponentHoc as any;
    };
};
