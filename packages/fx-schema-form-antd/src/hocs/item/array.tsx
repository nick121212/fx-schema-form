
import React from "react";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";

import { RC, NsFactory } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps } from "../select";
import { MakeHocOutProps } from "./make";

export interface ArrayHocOutProps extends SchemaFormItemBaseProps, ValidateHocOutProps, MakeHocOutProps {
    toggleItem?: () => void;
    removeItem?: (data: number) => void;
    addItem?: (data: any) => void;
    switchItem?: (data: any) => void;

    createItemChildButtons?: (index: number, maxLength: number) => JSX.Element;
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormItemBaseProps & { actions: any }) => {
    const { mergeSchema, actions, schemaFormOptions } = ownProps;
    const { keys } = mergeSchema;

    // 返回validae方法，这里更新字段的值
    return {
        toggleItem: (data: boolean) => {
            if (!actions.toggleItem) {
                console.error("没有找到的action！");
            }
            actions.toggleItem({ keys });
        },
        removeItem: (data: number) => {
            if (!actions.removeItem) {
                console.error("没有找到的action！");
            }
            actions.removeItem({ keys, index: data });
        },
        addItem: (data: any) => {
            if (!actions.addItem) {
                console.error("没有找到的action！");
            }
            actions.addItem({ keys, data });
        },
        switchItem: (data: {
            curIndex: number;
            switchIndex: number;
        }) => {
            if (!actions.switchItem) {
                console.error("没有找到的action！");
            }
            actions.switchItem({ keys, ...data });
        }
    };
};

/**
 * 包装array的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * arrayItems
 */
export const ArrayHoc = (hocFactory: BaseFactory<any>, Component: any): RC<ArrayHocOutProps, any> => {
    @(connect(mapMetaStateToProps, mapDispatchToProps) as any)
    class Hoc extends React.Component<ArrayHocOutProps, any> {
        public render(): JSX.Element {
            const { mergeSchema, getHocOptions } = this.props;
            const { type } = mergeSchema;
            const hocOptions = getHocOptions();
            const { array: arrayHocOptions } = hocOptions;
            const { createItemButtons = (props: any) => null, createItemChildButtons = (props: any) => null } = arrayHocOptions || {};

            let newProps = Object.assign({}, this.props, {
                removeItem: this.removeItem.bind(this),
                addItem: this.addItem.bind(this),
                toggleItem: this.toggleItem.bind(this),
                switchItem: this.switchItem.bind(this)
            });

            if (type === "array") {
                return <Component {...newProps}
                    arrayItems={createItemButtons(newProps)}
                    createItemChildButtons={createItemChildButtons.bind(this, newProps)} />;
            }

            return <Component {...this.props} />;
        }

        /**
         * 移除一个数据项
         * @param index 数组索引
         */
        private removeItem(index: number): void {
            const { formItemData = [], mergeSchema, removeItem, arrayIndex } = this.props;
            const { uiSchema, type, keys } = mergeSchema;

            if (type === "array" && index !== undefined) {
                removeItem(index);
            }
        }

        /**
         * 元素交换位置
         * @param curIndex     当前的位置
         * @param switchIndex  移动到的位置
         */
        private switchItem(curIndex: number, switchIndex: number) {
            const { formItemData = [], mergeSchema, switchItem, arrayIndex } = this.props;
            const { uiSchema, type, keys } = mergeSchema;

            if (type === "array" && curIndex !== undefined && switchIndex !== undefined) {
                if (switchIndex < 0 || formItemData.length < switchIndex + 1) {
                    return;
                }

                switchItem({
                    curIndex,
                    switchIndex
                });
            }
        }

        /**
         * 显示隐藏数组中的item元素
         */
        private toggleItem(): void {
            let { toggleItem } = this.props;

            toggleItem();
        }

        /**
         * 添加一个项目
         */
        private addItem(): void {
            let { mergeSchema, validate, addItem } = this.props;

            if (mergeSchema.items.type === "object") {
                addItem({});
            } else {
                addItem(undefined);
            }
        }
    }

    return Hoc;
};
