
import React from "react";
import { branch, renderComponent, shouldUpdate, compose, withHandlers, renderNothing, onlyUpdateForKeys } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";

import { UtilsHocOutProps } from "./utils";
import { DefaultProps, RC, FxUiSchema } from "../components";
import { schemaFormReducer } from "../reducer";

export interface ArrayHocOutProps extends DefaultProps {
    addItem: (props: DefaultProps, data?: any) => void;
    removeItem: (parentKeys: any[], keys: any[], index: number) => void;
    switchItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    moveItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    initArrayComponent: (props: DefaultProps, index?: number) => JSX.Element;
    ArrayComponent?: new () => React.PureComponent<DefaultProps>;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}

export interface ArrayProps extends DefaultProps, UtilsHocOutProps {

}

export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    /**
     * 包装array的组件HOC
     * @param hocFactory  hoc的工厂方法
     * @param Component   需要包装的组件
     * 加入属性
     * arrayItems
     */
    return (Component: any): RC<ArrayHocOutProps, any> => {
        @(compose(
            withHandlers({
                /**
                 * 更新一个数据
                 */
                addItem: (propsCur: DefaultProps) => {
                    return (props: DefaultProps, data?: any) => {
                        let defaultValue: { defaultValue?: any } = {};

                        // 先获取默认的数据
                        props.ajv.validate({
                            type: "object",
                            properteis: {
                                defaultData: props.uiSchema
                            }
                        }, defaultValue);

                        schemaFormReducer.actions.addItem({
                            parentKeys: props.parentKeys,
                            keys: (props.uiSchema as any).keys,
                            data: defaultValue.defaultValue
                        });
                    };
                },
                /**
                 * 删除一个数组元素
                 */
                removeItem: (propsCur: DefaultProps) => {
                    return (parentKeys: any[], keys: any[], index: number) => {
                        schemaFormReducer.actions.removeItem({
                            parentKeys: parentKeys,
                            keys: keys,
                            index: index
                        });
                    };
                },
                /**
                 * 与一个元素交换位置
                 */
                switchItem: (propsCur: DefaultProps) => {
                    return (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => {
                        schemaFormReducer.actions.switchItem({
                            parentKeys: parentKeys,
                            keys: keys,
                            curIndex: curIndex,
                            toIndex: toIndex
                        });
                    };
                },
                /**
                 * 移动到某个元素后面
                 */
                moveItem: (propsCur: DefaultProps) => {
                    return (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => {
                        schemaFormReducer.actions.moveToItem({
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
            })) as any)
        class ArrayComponentHoc extends React.PureComponent<ArrayProps, any> {
            private ArrayComponent;
            private ArrayItemComponent;

            constructor(props: ArrayProps, context: any) {
                super(props, context);
                this.initArrayComponents();
            }

            private initArrayComponents() {
                const { getOptions } = this.props;
                const hocOptions: any = getOptions(this.props, "hoc", "array");

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
};
