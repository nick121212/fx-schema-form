
import React from "react";
import { branch, renderComponent, shouldUpdate, compose, withHandlers, renderNothing } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";

import { RC, NsFactory } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";
import { MakeHocOutProps } from "./make";

export interface ArrayHocOutProps extends SchemaFormItemBaseProps, ValidateHocOutProps, MakeHocOutProps {
    toggleItem?: () => void;
    removeItem?: (data: number) => void;
    addItem?: (data: any) => void;
    switchItem?: (data: any) => void;

    ItemButtons?: new () => React.PureComponent<any>;
    ItemChildButtons?: new () => React.PureComponent<any>;
}

const handlers = withHandlers({
    /**
     * 移除一个数据项
     * @param index 数组索引
     */
    removeItem(props: SchemaFormItemBaseProps & { actions: any }) {
        return (index: number) => {
            const { formItemData = [], mergeSchema, arrayIndex, actions } = props;
            const { uiSchema, type, keys } = mergeSchema;

            if (type === "array" && index !== undefined) {
                actions.removeItem({ keys, index });
            }
        };
    },
    /**
     * 元素交换位置
     * @param curIndex     当前的位置
     * @param switchIndex  移动到的位置
     */
    switchItem(props: SchemaFormItemBaseProps & { actions: any }) {
        return (curIndex: number, switchIndex: number) => {
            const { formItemData = [], mergeSchema, arrayIndex, actions } = props;
            const { uiSchema, type, keys } = mergeSchema;

            if (type === "array" && curIndex !== undefined && switchIndex !== undefined) {
                if (switchIndex < 0 || formItemData.length < switchIndex + 1) {
                    return;
                }

                actions.switchItem({
                    keys,
                    curIndex,
                    switchIndex
                });
            }
        };
    },
    /**
     * 显示隐藏数组中的item元素
     */
    toggleItem(props: SchemaFormItemBaseProps & { actions: any }) {
        return () => {
            const { mergeSchema, actions, schemaFormOptions } = props;
            const { keys } = mergeSchema;

            actions.toggleItem({ keys });
        };
    },
    /**
     * 添加一个项目
     */
    addItem(props: SchemaFormItemBaseProps & { actions: any }) {
        return () => {
            const { mergeSchema, actions } = props;
            const { keys } = mergeSchema;

            if (mergeSchema.items.type === "object") {
                actions.addItem({ keys, data: {} });
            } else {
                actions.addItem({ keys, data: undefined });
            }
        };
    }
});

/**
 * 包装array的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * arrayItems
 */
export const ArrayHoc = (hocFactory: BaseFactory<any>, Component: any): RC<ArrayHocOutProps, any> => {
    @(compose(handlers) as any)
    class ArrayComponentHoc extends React.PureComponent<ArrayHocOutProps, any> {
        public render(): JSX.Element {
            const { mergeSchema, getHocOptions } = this.props;
            const { type } = mergeSchema;
            const arrayHocOptions = getHocOptions("array");
            const { ItemChildButtons = null, ItemButtons = null } = arrayHocOptions || {};
            let ItemChildButtonsWithHoc, ItemButtonsWithHoc;

            // 包装一个ItemChildButton的组件，用于删除，上下移动
            if (ItemChildButtons) {
                ItemChildButtonsWithHoc = compose(connect(mapFormItemDataProps), handlers, connect(mapMetaStateToProps))(ItemChildButtons);
            }

            // 包装一个ItemButton组件，用于添加，清空等功能
            if (ItemButtons) {
                ItemButtonsWithHoc = compose(connect(mapFormItemDataProps), handlers, connect(mapMetaStateToProps))(ItemButtons);
            }

            if (type === "array") {
                return <Component {...this.props}
                    ItemButtons={ItemButtonsWithHoc ? () => <ItemButtonsWithHoc {...this.props} /> : () => <span />}
                    ItemChildButtons={ItemChildButtonsWithHoc ? ItemChildButtonsWithHoc : () => <span />} />;
            }

            return <Component {...this.props} />;
        }
    }

    @(compose(handlers, connect(mapFormItemDataProps)) as any)
    class PureComponent extends React.PureComponent<any> {
        public render() {
            return <Component {...this.props} />;
        }
    }

    const spinnerWhileLoading = isLoading =>
        branch(
            isLoading,
            renderComponent(PureComponent)
        );

    const enhance = spinnerWhileLoading(
        props => {
            const { mergeSchema, getHocOptions } = props;
            const { type } = mergeSchema;

            return type !== "array";
        }
    );

    return enhance(ArrayComponentHoc) as any;
};
