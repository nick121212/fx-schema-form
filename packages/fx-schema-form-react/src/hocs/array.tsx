
import React, { PureComponent } from "react";
import { branch, compose, withHandlers, ComponentEnhancer } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";

import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models";
import { reducerFactory } from "../factory";

export interface ArrayHocOutProps {
    addItem: (props: DefaultProps, data?: any) => Promise<void>;
    removeItem: (parentKeys: any[], keys: any[], index: number) => void;
    moveItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    initArrayComponent: (props: DefaultProps, index?: number) => JSX.Element;
    ArrayComponent?: new () => React.PureComponent<DefaultProps>;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}

export interface ArrayProps extends DefaultProps, UtilsHocOutProps { }

export const name = "array";
export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
        const commHoc = compose(
            withHandlers({
                /**
                 * 更新一个数据
                 * @param {ArrayProps} propsCur 当前的props
                 */
                addItem: (propsCur: ArrayProps) => {
                    return async (props: ArrayProps, data?: any) => {
                        if (!props.uiSchema || !props.uiSchema.items) {
                            return;
                        }
                        const { items, keys, defaultData } = props.uiSchema;

                        let dData = await props.getDefaultData(props.ajv, items as any, data, defaultData, true);

                        propsCur.getActions(propsCur).addItem({
                            parentKeys: props.parentKeys,
                            keys: keys,
                            data: dData
                        });
                    };
                },
                /**
                 * 删除一个数组元素
                 * @param {ArrayProps} propsCur 当前的props
                 */
                removeItem: (propsCur: ArrayProps) => {
                    return (parentKeys: any[], keys: any[], index: number) => {
                        propsCur.getActions(propsCur).removeItem({
                            parentKeys: parentKeys,
                            keys: keys,
                            index: index
                        });
                    };
                },
                /**
                 * 移动到某个元素后面
                 * @param {ArrayProps} propsCur 当前的props
                 */
                moveItem: (propsCur: ArrayProps) => {
                    return (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => {
                        propsCur.getActions(propsCur).moveToItem({
                            parentKeys: parentKeys,
                            keys: keys,
                            curIndex: curIndex,
                            toIndex: toIndex
                        });
                    };
                },
                /**
                 * 初始化array的操作组件
                 * @param {ArrayProps} propsCur 当前的props
                 */
                initArrayComponent: (propsCur: DefaultProps) => {
                    return (props: DefaultProps & ArrayHocOutProps, index?: number) => {
                        const { ArrayComponent, ArrayItemComponent, ...extraProps } = props, uiSchema = props.uiSchema as FxUiSchema;

                        if (uiSchema.type === "array") {
                            return ArrayComponent ? <ArrayComponent {...extraProps} /> : null;
                        }

                        return ArrayItemComponent ? <ArrayItemComponent {...extraProps} /> : null;
                    };
                }
            })) as any;

        /**
         * 包装array的组件HOC
         * @param hocFactory  hoc的工厂方法
         * @param Component   需要包装的组件
         * 加入属性
         * arrayItems
         */
        const arrayHoc = (Component: any): RC<ArrayHocOutProps, any> => {
            @commHoc
            class ArrayComponentHoc extends PureComponent<ArrayProps, any> {
                private ArrayComponent: new () => React.PureComponent;
                private ArrayItemComponent: new () => React.PureComponent;

                constructor(props: ArrayProps, context: any) {
                    super(props, context);
                    this.initArrayComponents();
                }

                private initArrayComponents() {
                    const { getOptions } = this.props;
                    const hocOptions: any = getOptions(this.props, "hoc", name);

                    // 设置当前的arrayComponent和ArrayItemComponent
                    if (hocOptions.ArrayComponent) {
                        this.ArrayComponent = hocOptions.ArrayComponent;
                    }

                    if (hocOptions.ArrayItemComponent) {
                        this.ArrayItemComponent = hocOptions.ArrayItemComponent;
                    }

                }

                public render(): JSX.Element {
                    let props: any = {};

                    if (this.ArrayComponent) {
                        props.ArrayComponent = this.ArrayComponent;
                    }

                    if (this.ArrayItemComponent) {
                        props.ArrayItemComponent = this.ArrayItemComponent;
                    }

                    return <Component {...this.props} {...props} />;
                }
            }

            return ArrayComponentHoc as any;
        };

        /**
         * 如果不是数组则返回pureComponent
         * @param Component  需要包装的组件
         */
        const pureHoc = (Component: any): RC<ArrayHocOutProps, any> => {
            @commHoc
            class ArrayPureComponentHoc extends React.PureComponent<ArrayProps, any> {
                public render() {
                    return <Component {...this.props} />;
                }
            }

            return ArrayPureComponentHoc as any;
        };

        /**
         * A/B test
         * 如果是数组则使用A，如果不是则使用B
         */
        return branch(
            (props: ArrayProps) => {
                const { uiSchema = { type: "" } } = props;

                return uiSchema.type === "array";
            },
            arrayHoc,
            pureHoc
        );
    };
};

export default {
    name,
    hoc
};
