"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
var react_redux_1 = require("react-redux");
var select_1 = require("../select");
var handlers = recompose_1.withHandlers({
    /**
     * 移除一个数据项
     * @param index 数组索引
     */
    removeItem: function (props) {
        return function (index) {
            var _a = props.formItemData, formItemData = _a === void 0 ? [] : _a, mergeSchema = props.mergeSchema, arrayIndex = props.arrayIndex, actions = props.actions;
            var uiSchema = mergeSchema.uiSchema, type = mergeSchema.type, keys = mergeSchema.keys;
            if (type === "array" && index !== undefined) {
                actions.removeItem({ keys: keys, index: index });
            }
        };
    },
    /**
     * 元素交换位置
     * @param curIndex     当前的位置
     * @param switchIndex  移动到的位置
     */
    switchItem: function (props) {
        return function (curIndex, switchIndex) {
            var _a = props.formItemData, formItemData = _a === void 0 ? [] : _a, mergeSchema = props.mergeSchema, arrayIndex = props.arrayIndex, actions = props.actions;
            var uiSchema = mergeSchema.uiSchema, type = mergeSchema.type, keys = mergeSchema.keys;
            if (type === "array" && curIndex !== undefined && switchIndex !== undefined) {
                if (switchIndex < 0 || formItemData.length < switchIndex + 1) {
                    return;
                }
                actions.switchItem({
                    keys: keys,
                    curIndex: curIndex,
                    switchIndex: switchIndex
                });
            }
        };
    },
    /**
     * 显示隐藏数组中的item元素
     */
    toggleItem: function (props) {
        return function () {
            var mergeSchema = props.mergeSchema, actions = props.actions, schemaFormOptions = props.schemaFormOptions;
            var keys = mergeSchema.keys;
            actions.toggleItem({ keys: keys });
        };
    },
    /**
     * 添加一个项目
     */
    addItem: function (props) {
        return function () {
            var mergeSchema = props.mergeSchema, actions = props.actions;
            var keys = mergeSchema.keys;
            if (mergeSchema.items.type === "object") {
                actions.addItem({ keys: keys, data: {} });
            }
            else {
                actions.addItem({ keys: keys, data: undefined });
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
exports.ArrayHoc = function (hocFactory, Component) {
    var ArrayComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(ArrayComponentHoc, _super);
        function ArrayComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ArrayComponentHoc.prototype.render = function () {
            var _this = this;
            var _a = this.props, mergeSchema = _a.mergeSchema, getHocOptions = _a.getHocOptions;
            var type = mergeSchema.type;
            var hocOptions = getHocOptions();
            var arrayHocOptions = hocOptions.array;
            var _b = arrayHocOptions || {}, _c = _b.ItemChildButtons, ItemChildButtons = _c === void 0 ? null : _c, _d = _b.ItemButtons, ItemButtons = _d === void 0 ? null : _d;
            var ItemChildButtonsWithHoc, ItemButtonsWithHoc;
            if (ItemChildButtons) {
                ItemChildButtonsWithHoc = recompose_1.compose(handlers, react_redux_1.connect(select_1.mapMetaStateToProps))(ItemChildButtons);
            }
            if (ItemButtons) {
                ItemButtonsWithHoc = recompose_1.compose(handlers, react_redux_1.connect(select_1.mapMetaStateToProps))(ItemButtons);
            }
            if (type === "array") {
                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props, { ItemButtons: ItemButtonsWithHoc ? function () { return react_1.default.createElement(ItemButtonsWithHoc, tslib_1.__assign({}, _this.props)); } : function () { return react_1.default.createElement("span", null); }, ItemChildButtons: ItemChildButtonsWithHoc ? ItemChildButtonsWithHoc : function () { return react_1.default.createElement("span", null); } }));
            }
            return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
        };
        ArrayComponentHoc = tslib_1.__decorate([
            recompose_1.compose(handlers)
        ], ArrayComponentHoc);
        return ArrayComponentHoc;
    }(react_1.default.PureComponent));
    var PureComponent = /** @class */ (function (_super) {
        tslib_1.__extends(PureComponent, _super);
        function PureComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PureComponent.prototype.render = function () {
            return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
        };
        PureComponent = tslib_1.__decorate([
            recompose_1.compose(handlers, react_redux_1.connect(select_1.mapFormItemDataProps))
        ], PureComponent);
        return PureComponent;
    }(react_1.default.PureComponent));
    var spinnerWhileLoading = function (isLoading) {
        return recompose_1.branch(isLoading, recompose_1.renderComponent(PureComponent));
    };
    var enhance = spinnerWhileLoading(function (props) {
        var mergeSchema = props.mergeSchema, getHocOptions = props.getHocOptions;
        var type = mergeSchema.type;
        return type !== "array";
    });
    return enhance(ArrayComponentHoc);
};
//# sourceMappingURL=array.js.map