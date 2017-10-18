import * as tslib_1 from "tslib";
import React from "react";
import { connect } from "react-redux";
import { mapMetaStateToProps } from "../select";
var mapDispatchToProps = function (dispatch, ownProps) {
    var mergeSchema = ownProps.mergeSchema, actions = ownProps.actions, schemaFormOptions = ownProps.schemaFormOptions;
    var keys = mergeSchema.keys;
    // 返回validae方法，这里更新字段的值
    return {
        toggleItem: function (data) {
            if (!actions.toggleItem) {
                console.error("没有找到的action！");
            }
            actions.toggleItem({ keys: keys });
        },
        removeItem: function (data) {
            if (!actions.removeItem) {
                console.error("没有找到的action！");
            }
            actions.removeItem({ keys: keys, index: data });
        },
        addItem: function (data) {
            if (!actions.addItem) {
                console.error("没有找到的action！");
            }
            actions.addItem({ keys: keys, data: data });
        },
        switchItem: function (data) {
            if (!actions.switchItem) {
                console.error("没有找到的action！");
            }
            actions.switchItem(tslib_1.__assign({ keys: keys }, data));
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
export var ArrayHoc = function (hocFactory, Component) {
    var Hoc = /** @class */ (function (_super) {
        tslib_1.__extends(Hoc, _super);
        function Hoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Hoc.prototype.render = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, getHocOptions = _a.getHocOptions;
            var type = mergeSchema.type;
            var hocOptions = getHocOptions();
            var arrayHocOptions = hocOptions.array;
            var _b = arrayHocOptions || {}, _c = _b.createItemButtons, createItemButtons = _c === void 0 ? function (props) { return null; } : _c, _d = _b.createItemChildButtons, createItemChildButtons = _d === void 0 ? function (props) { return null; } : _d;
            var newProps = Object.assign({}, this.props, {
                removeItem: this.removeItem.bind(this),
                addItem: this.addItem.bind(this),
                toggleItem: this.toggleItem.bind(this),
                switchItem: this.switchItem.bind(this)
            });
            if (type === "array") {
                return React.createElement(Component, tslib_1.__assign({}, newProps, { arrayItems: createItemButtons(newProps), createItemChildButtons: createItemChildButtons.bind(this, newProps) }));
            }
            return React.createElement(Component, tslib_1.__assign({}, this.props));
        };
        /**
         * 移除一个数据项
         * @param index 数组索引
         */
        Hoc.prototype.removeItem = function (index) {
            var _a = this.props, _b = _a.formItemData, formItemData = _b === void 0 ? [] : _b, mergeSchema = _a.mergeSchema, removeItem = _a.removeItem, arrayIndex = _a.arrayIndex;
            var uiSchema = mergeSchema.uiSchema, type = mergeSchema.type, keys = mergeSchema.keys;
            if (type === "array" && index !== undefined) {
                removeItem(index);
            }
        };
        /**
         * 元素交换位置
         * @param curIndex     当前的位置
         * @param switchIndex  移动到的位置
         */
        Hoc.prototype.switchItem = function (curIndex, switchIndex) {
            var _a = this.props, _b = _a.formItemData, formItemData = _b === void 0 ? [] : _b, mergeSchema = _a.mergeSchema, switchItem = _a.switchItem, arrayIndex = _a.arrayIndex;
            var uiSchema = mergeSchema.uiSchema, type = mergeSchema.type, keys = mergeSchema.keys;
            if (type === "array" && curIndex !== undefined && switchIndex !== undefined) {
                if (switchIndex < 0 || formItemData.length < switchIndex + 1) {
                    return;
                }
                switchItem({
                    curIndex: curIndex,
                    switchIndex: switchIndex
                });
            }
        };
        /**
         * 显示隐藏数组中的item元素
         */
        Hoc.prototype.toggleItem = function () {
            var toggleItem = this.props.toggleItem;
            toggleItem();
        };
        /**
         * 添加一个项目
         */
        Hoc.prototype.addItem = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, validate = _a.validate, addItem = _a.addItem;
            if (mergeSchema.items.type === "object") {
                addItem({});
            }
            else {
                addItem(undefined);
            }
        };
        Hoc = tslib_1.__decorate([
            connect(mapMetaStateToProps, mapDispatchToProps)
        ], Hoc);
        return Hoc;
    }(React.Component));
    return Hoc;
};
//# sourceMappingURL=array.js.map