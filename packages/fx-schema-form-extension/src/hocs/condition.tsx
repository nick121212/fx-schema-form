import React from "react";
import { compose, shouldUpdate, ComponentEnhancer, onlyUpdateForKeys } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { createSelectorCreator, defaultMemoize, Selector, createSelector } from "reselect";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models/index";
import schemaFormReact from "fx-schema-form-react";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";

const { schemaFormTypes } = schemaFormReact;

const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);

/**
 * 下层组件添加一个condition属性
 * @param condition { Immutable.Map<string,any> } 解析出来的数据
 */
export interface ConditionHocOutProps {
    condition?: Immutable.Map<string, any>;
}
/**
 * condition的配置类
 */
export interface ConditionPath {
    /**
     * 数据的路径，可是是相对路径，也可以是绝对路径
     */
    path: string;
    /**
     * 是否从meta中获取数据
     */
    meta?: boolean;
    /**
     * 需要获取的meta的字段
     * 例如 isLoading
     */
    metaKey?: string;
    /**
     * 数据的简单处理，（暂时没用到）
     */
    jsonata?: string;
}

export interface ConditionHocSettings {
    /**
     * 路径数组
     */
    paths?: ConditionPath[];
    /**
     * 需要用到condition的hoc
     * 包装在condition的后面
     */
    hoc?: ComponentEnhancer<any, any>;
}

export interface ConditionHocProps extends DefaultProps, UtilsHocOutProps { }

export const name = "condition";

/**
 * condition
 * 筛选出需要使用的字段，包装到condition这个prop中，传递到下层组件
 * 配置：
 *  paths： 字段的路径以及数据处理规则，路径使用相对或者决定路径
 *  hoc：   下层的包装组件
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const innerHoc = (hocFactory: BaseFactory<any>) => {
    /**
    * 获取FormItemData的数据
    * @param state 当前的state树
    */
    const getFormItemData = (rootReducerKey: string[], parentKeys: string[], keys: string[]):
        (state: Immutable.Map<string, any>) => Selector<any, any> => {
        return (state: Immutable.Map<string, any>): any => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "data", ...keys],
                formItemData = state.getIn(dataKeys);

            if (formItemData !== undefined) {
                return Immutable.fromJS({
                    [[...keys].join("/")]: formItemData
                });
            }

            return "";
        };
    };

    /**
    * 获取FormItemData的数据
    * @param state 当前的state树
    */
    const getFormItemMeta = (rootReducerKey: string[], parentKeys: string[], keys: string[], metaKey: string):
        (state: Immutable.Map<string, any>) => Selector<any, any> => {
        return (state: Immutable.Map<string, any>): any => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "meta"],
                rootNode: TreeMap = state.getIn(dataKeys),
                childNode = rootNode.containPath(keys);

            if (childNode && childNode.value && childNode.value.has(metaKey)) {
                return Immutable.fromJS({
                    [[...keys].join("/")]: childNode.value.get(metaKey)
                });
            }

            return "";
        };
    };

    return (settings: ConditionHocSettings = { paths: [] }) => {
        return (Component: any): RC<ConditionHocOutProps, any> => {
            class ComponentHoc extends React.PureComponent<ConditionHocProps, any> {
                private ComponentWithHoc: any = Component;
                private $condition: Immutable.Map<string, any> = Immutable.fromJS({});

                constructor(props: ConditionHocProps) {
                    super(props);

                    this.getConditionHocs();
                }

                /**
                 * 获取当前配置的Component
                 * 1. 获取当前需要监听的key
                 * 2. 生成hoc
                 * 3. 获取所有的监听数据做合并
                 * 4. 返回
                 */
                private getConditionHocs() {
                    const { getPathKeys, uiSchema, getOptions, parentKeys, schemaId } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        dataHocOptions = getOptions(this.props, schemaFormTypes.hoc, "data"),
                        { keys = [] } = uiSchema || {},
                        funcs: Selector<any, any>[] = [],
                        conditionOptions = Immutable.fromJS(settings || {}).merge(options).toJS(),
                        { paths, hoc } = conditionOptions;

                    // 获取所有需要监听的数据的值
                    if (paths && paths.length && hoc) {
                        paths.forEach((path: ConditionPath) => {
                            let pathKeys: Array<string | number> = getPathKeys(keys as string[], path.path, schemaId);

                            if (path.meta) {
                                if (!path.metaKey) {
                                    console.warn("没有配置metaKkey");
                                } else {
                                    funcs.push(getFormItemMeta(dataHocOptions.rootReducerKey, parentKeys, pathKeys as string[], path.metaKey));
                                }
                            } else {
                                funcs.push(getFormItemData(dataHocOptions.rootReducerKey, parentKeys, pathKeys as string[]));
                            }
                        });
                    }

                    // 这里选取所有的func来设置数据
                    if (funcs.length) {
                        this.ComponentWithHoc = compose(connect(
                            // connect 数据
                            fxSelectorCreator.apply(fxSelectorCreator, [funcs, function () {
                                let formItemData = Array.prototype.splice.call(arguments, 0);

                                if (!formItemData || !formItemData.length) {
                                    return {};
                                }
                                // 数据合并
                                return {
                                    condition: formItemData.reduce((prev: Immutable.Map<string, any>, next: Immutable.Map<string, any>) => {
                                        if (!next) {
                                            return prev;
                                        }
                                        return prev.merge(next);
                                    }, Immutable.fromJS({}))
                                };
                            }])),
                            // 只有conditon变化才触发之后的hoc
                            onlyUpdateForKeys([name]),
                            // 需要接受condition参数的hoc
                            hoc.constructor === String ? hocFactory.get(hoc)({}) : hoc,
                            // 去掉condition后传递到下一个hoc
                            hocFactory.get("resetKey")({
                                excludeKeys: [name]
                            }))(Component);
                    }
                }

                /**
                 * 渲染页面
                 */
                public render(): JSX.Element {
                    const { uiSchema } = this.props,
                        { keys = [] } = uiSchema || {},
                        ComponentWithHoc = this.ComponentWithHoc || Component;

                    return <ComponentWithHoc {...this.props} />;
                }
            }

            return ComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc: innerHoc
};
