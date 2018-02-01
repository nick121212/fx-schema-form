
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";

import { BaseFactory } from "fx-schema-form-core";
import { createSelectorCreator, defaultMemoize, Selector, createSelector, OutputSelector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";

export interface ConditionHocOutProps {
    condition?: Immutable.Map<string, any>;
}

export interface ConditionPath {
    path: string;
    jsonata?: string;
}

export interface ConditionHocSettings {
    paths?: ConditionPath[];
    hoc?: ComponentEnhancer<any, any>;
}

export interface ConditionHocProps extends DefaultProps, UtilsHocOutProps {

}

const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);

/**
 * condition
 * 筛选出需要使用的字段，包装到condition这个prop中，传递到下层组件
 * 配置：
 *  paths：字段的路径以及数据处理规则，路径使用相对或者决定路径
 *  hoc：   下层的包装组件
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default (hocFactory: BaseFactory<any>, settings: ConditionHocSettings = { paths: [] }) => {
    /**
    * 获取FormItemData的数据
    * @param state 当前的state树
    */
    const getFormItemData = (rootReducerKey: string[], parentKeys: string[], keys: string[]):
        (state: Immutable.Map<string, any>) => Selector<any, any> => {
        return (state: Immutable.Map<string, any>): any => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "data", ...keys];
            let formItemData = state.getIn(dataKeys);

            if (formItemData !== undefined) {
                return Immutable.fromJS({
                    [[...parentKeys, ...keys].join("/")]: formItemData
                });
            }

            return "";
        };
    };

    return (Component: any): RC<ConditionHocOutProps, any> => {
        class ComponentHoc extends React.PureComponent<ConditionHocProps, any> {
            private ComponentWithHoc: new () => React.PureComponent = Component;
            private $condition: Immutable.Map<string, any> = Immutable.fromJS({});

            constructor(props: ConditionHocProps) {
                super(props);
                this.getConditionHocs();
            }

            private getConditionHocs() {
                const { getPathKeys, uiSchema, getOptions, parentKeys } = this.props,
                    options = getOptions(this.props, "hoc", "condition"),
                    dataHocOptions = getOptions(this.props, "hoc", "data"),
                    { keys = [] } = uiSchema || {},
                    funcs: Selector<any, any>[] = [],
                    conditionOptions = Immutable.fromJS(settings || {}).merge(options).toJS(),
                    { paths, hoc } = conditionOptions;

                if (paths && paths.length && hoc) {
                    paths.forEach((path: ConditionPath) => {
                        let pathKeys: string[] = getPathKeys(keys as string[], path.path);

                        funcs.push(getFormItemData(dataHocOptions.rootReducerKey, parentKeys, pathKeys));
                    });
                }

                if (funcs.length) {
                    this.ComponentWithHoc = compose(connect(
                        fxSelectorCreator.apply(fxSelectorCreator, [funcs, function () {
                            let formItemData = Array.prototype.splice.call(arguments, 0);

                            if (!formItemData || !formItemData.length) {
                                return {};
                            }
                            return {
                                condition: formItemData.reduce((prev: Immutable.Map<string, any>, next: Immutable.Map<string, any>) => {
                                    if (!next) {
                                        return prev;
                                    }
                                    return prev.merge(next);
                                }, Immutable.fromJS({}))
                            };
                        }])), hoc, hocFactory.get("clear")({ keys: ["condition"] }))(Component);
                }
            }

            public render(): JSX.Element {
                const { getPathKeys, uiSchema } = this.props;
                const { keys = [] } = uiSchema || {};
                const ComponentWithHoc = this.ComponentWithHoc || Component;

                return <ComponentWithHoc key={keys.join("condition")} {...this.props} />;
            }
        }

        return ComponentHoc as any;
    };
};
