
import React, { PureComponent } from "react";
import {
    branch, shouldUpdate, compose,
    withHandlers, renderNothing, onlyUpdateForKeys, ComponentEnhancer
} from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";

import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models/index";
import { reducerFactory } from "../factory";
import { JSONSchema6 } from "json-schema";

export interface ArrayHocOutProps {
    addItem: (props: DefaultProps, data?: any) => Promise<void>;
    removeItem: (parentKeys: any[], keys: any[], index: number) => void;
    moveItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    initArrayComponent: (props: DefaultProps, index?: number) => JSX.Element;
    ArrayComponent?: new () => React.PureComponent<DefaultProps>;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}

export interface ArrayProps extends DefaultProps, UtilsHocOutProps {

}

export const name = "array";

export default (hocFactory: BaseFactory<any>) => {

    const hoc = compose(
        withHandlers({
            /**
             * 更新一个数据
             */
            addItem: (propsCur: DefaultProps) => {
                return async (props: DefaultProps, data?: any) => {
                    let itemSchema: any = {},
                        defaultValue: any = {},
                        itemUiSchema: any = props.uiSchema ? props.uiSchema.items : {};

                    try {
                        // 先获取默认的数据
                        await props.ajv.validate({
                            type: "object",
                            properties: {
                                defaultData: itemUiSchema
                            }
                        }, defaultValue);
                    } catch (e) {
                        console.log(e);
                    } finally {
                        if (propsCur.uiSchema && propsCur.uiSchema.items) {
                            switch ((propsCur.uiSchema.items as JSONSchema6).type) {
                                case "object":
                                    if (!defaultValue.defaultData) {
                                        defaultValue.defaultData = data || {};
                                    }
                                    Object.assign(defaultValue.defaultData, data);
                                    break;
                                case "array":
                                    if (!defaultValue.defaultData) {
                                        defaultValue.defaultData = data || [];
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        reducerFactory.get(props.reducerKey || "schemaForm").actions.addItem({
                            parentKeys: props.parentKeys,
                            keys: (props.uiSchema as any).keys,
                            data: defaultValue.defaultData
                        });
                    }
                };
            },
            /**
             * 删除一个数组元素
             */
            removeItem: (propsCur: DefaultProps) => {
                return (parentKeys: any[], keys: any[], index: number) => {
                    reducerFactory.get(propsCur.reducerKey || "schemaForm").actions.removeItem({
                        parentKeys: parentKeys,
                        keys: keys,
                        index: index
                    });
                };
            },
            /**
             * 移动到某个元素后面
             */
            moveItem: (propsCur: DefaultProps) => {
                return (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => {
                    reducerFactory.get(propsCur.reducerKey || "schemaForm").actions.moveToItem({
                        parentKeys: parentKeys,
                        keys: keys,
                        curIndex: curIndex,
                        toIndex: toIndex
                    });
                };
            },
            /**
             * 初始化array的操作组件
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
    let arrayHoc = (Component: any): RC<ArrayHocOutProps, any> => {
        @hoc
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

    let pureHoc = (Component: any): RC<ArrayHocOutProps, any> => {
        @hoc
        class ArrayPureComponentHoc extends React.PureComponent<ArrayProps, any> {
            public render() {
                return <Component {...this.props} />;
            }
        }

        return ArrayPureComponentHoc as any;
    };

    return branch(
        (props: ArrayProps) => {
            const { uiSchema = { type: "" } } = props;

            return uiSchema.type === "array";
        },
        arrayHoc,
        pureHoc
    );
};
