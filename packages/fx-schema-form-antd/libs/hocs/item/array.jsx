var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { branch, renderComponent, compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";
var handlers = withHandlers({
    removeItem: function (props) {
        return function (index) {
            var _a = props.formItemData, formItemData = _a === void 0 ? [] : _a, mergeSchema = props.mergeSchema, arrayIndex = props.arrayIndex, actions = props.actions;
            var uiSchema = mergeSchema.uiSchema, type = mergeSchema.type, keys = mergeSchema.keys;
            if (type === "array" && index !== undefined) {
                actions.removeItem({ keys: keys, index: index });
            }
        };
    },
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
    toggleItem: function (props) {
        return function () {
            var mergeSchema = props.mergeSchema, actions = props.actions, schemaFormOptions = props.schemaFormOptions;
            var keys = mergeSchema.keys;
            actions.toggleItem({ keys: keys });
        };
    },
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
export var ArrayHoc = function (hocFactory, Component) {
    var ArrayComponentHoc = (function (_super) {
        __extends(ArrayComponentHoc, _super);
        function ArrayComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ArrayComponentHoc.prototype.render = function () {
            var _this = this;
            var _a = this.props, mergeSchema = _a.mergeSchema, getHocOptions = _a.getHocOptions;
            var type = mergeSchema.type;
            var arrayHocOptions = getHocOptions("array");
            var _b = arrayHocOptions || {}, _c = _b.ItemChildButtons, ItemChildButtons = _c === void 0 ? null : _c, _d = _b.ItemButtons, ItemButtons = _d === void 0 ? null : _d;
            var ItemChildButtonsWithHoc, ItemButtonsWithHoc;
            if (ItemChildButtons) {
                ItemChildButtonsWithHoc = compose(handlers, connect(mapMetaStateToProps))(ItemChildButtons);
            }
            if (ItemButtons) {
                ItemButtonsWithHoc = compose(handlers, connect(mapMetaStateToProps))(ItemButtons);
            }
            if (type === "array") {
                return <Component {...this.props} ItemButtons={ItemButtonsWithHoc ? function () { return <ItemButtonsWithHoc {..._this.props}/>; } : function () { return <span />; }} ItemChildButtons={ItemChildButtonsWithHoc ? ItemChildButtonsWithHoc : function () { return <span />; }}/>;
            }
            return <Component {...this.props}/>;
        };
        ArrayComponentHoc = __decorate([
            compose(connect(mapFormItemDataProps), handlers)
        ], ArrayComponentHoc);
        return ArrayComponentHoc;
    }(React.PureComponent));
    var PureComponent = (function (_super) {
        __extends(PureComponent, _super);
        function PureComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PureComponent.prototype.render = function () {
            return <Component {...this.props}/>;
        };
        PureComponent = __decorate([
            compose(handlers, connect(mapFormItemDataProps))
        ], PureComponent);
        return PureComponent;
    }(React.PureComponent));
    var spinnerWhileLoading = function (isLoading) {
        return branch(isLoading, renderComponent(PureComponent));
    };
    var enhance = spinnerWhileLoading(function (props) {
        var mergeSchema = props.mergeSchema, getHocOptions = props.getHocOptions;
        var type = mergeSchema.type;
        return type !== "array";
    });
    return enhance(ArrayComponentHoc);
};
//# sourceMappingURL=array.jsx.map