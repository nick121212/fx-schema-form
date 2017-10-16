var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { connect } from "react-redux";
import { mapMetaStateToProps } from "../select";
const mapDispatchToProps = (dispatch, ownProps) => {
    const { mergeSchema, actions, schemaFormOptions } = ownProps;
    const { keys } = mergeSchema;
    // 返回validae方法，这里更新字段的值
    return {
        toggleItem: (data) => {
            if (!actions.toggleItem) {
                console.error("没有找到的action！");
            }
            actions.toggleItem({ keys });
        },
        removeItem: (data) => {
            if (!actions.removeItem) {
                console.error("没有找到的action！");
            }
            actions.removeItem({ keys, index: data });
        },
        addItem: (data) => {
            if (!actions.addItem) {
                console.error("没有找到的action！");
            }
            actions.addItem({ keys, data });
        },
        switchItem: (data) => {
            if (!actions.switchItem) {
                console.error("没有找到的action！");
            }
            actions.switchItem(Object.assign({ keys }, data));
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
export const ArrayHoc = (hocFactory, Component) => {
    let Hoc = class Hoc extends React.Component {
        render() {
            const { mergeSchema, getHocOptions } = this.props;
            const { type } = mergeSchema;
            const hocOptions = getHocOptions();
            const { array: arrayHocOptions } = hocOptions;
            const { createItemButtons = (props) => null, createItemChildButtons = (props) => null } = arrayHocOptions || {};
            let newProps = Object.assign({}, this.props, {
                removeItem: this.removeItem.bind(this),
                addItem: this.addItem.bind(this),
                toggleItem: this.toggleItem.bind(this),
                switchItem: this.switchItem.bind(this)
            });
            if (type === "array") {
                return React.createElement(Component, Object.assign({}, newProps, { arrayItems: createItemButtons(newProps), createItemChildButtons: createItemChildButtons.bind(this, newProps) }));
            }
            return React.createElement(Component, Object.assign({}, this.props));
        }
        /**
         * 移除一个数据项
         * @param index 数组索引
         */
        removeItem(index) {
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
        switchItem(curIndex, switchIndex) {
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
        toggleItem() {
            let { toggleItem } = this.props;
            toggleItem();
        }
        /**
         * 添加一个项目
         */
        addItem() {
            let { mergeSchema, validate, addItem } = this.props;
            if (mergeSchema.items.type === "object") {
                addItem({});
            }
            else {
                addItem(undefined);
            }
        }
    };
    Hoc = __decorate([
        connect(mapMetaStateToProps, mapDispatchToProps)
    ], Hoc);
    return Hoc;
};
//# sourceMappingURL=array.js.map