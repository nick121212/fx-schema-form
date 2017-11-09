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
const handlers = withHandlers({
    removeItem(props) {
        return (index) => {
            const { formItemData = [], mergeSchema, arrayIndex, actions } = props;
            const { uiSchema, type, keys } = mergeSchema;
            if (type === "array" && index !== undefined) {
                actions.removeItem({ keys, index });
            }
        };
    },
    switchItem(props) {
        return (curIndex, switchIndex) => {
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
    toggleItem(props) {
        return () => {
            const { mergeSchema, actions, schemaFormOptions } = props;
            const { keys } = mergeSchema;
            actions.toggleItem({ keys });
        };
    },
    addItem(props) {
        return () => {
            const { mergeSchema, actions } = props;
            const { keys } = mergeSchema;
            if (mergeSchema.items.type === "object") {
                actions.addItem({ keys, data: {} });
            }
            else {
                actions.addItem({ keys, data: undefined });
            }
        };
    }
});
export const ArrayHoc = (hocFactory, Component) => {
    let ArrayComponentHoc = class ArrayComponentHoc extends React.PureComponent {
        render() {
            const { mergeSchema, getHocOptions } = this.props;
            const { type } = mergeSchema;
            const hocOptions = getHocOptions();
            const { array: arrayHocOptions } = hocOptions;
            const { ItemChildButtons = null, ItemButtons = null } = arrayHocOptions || {};
            let ItemChildButtonsWithHoc, ItemButtonsWithHoc;
            if (ItemChildButtons) {
                ItemChildButtonsWithHoc = compose(handlers, connect(mapMetaStateToProps))(ItemChildButtons);
            }
            if (ItemButtons) {
                ItemButtonsWithHoc = compose(handlers, connect(mapMetaStateToProps))(ItemButtons);
            }
            if (type === "array") {
                return <Component {...this.props} ItemButtons={ItemButtonsWithHoc ? () => <ItemButtonsWithHoc {...this.props}/> : () => <span />} ItemChildButtons={ItemChildButtonsWithHoc ? ItemChildButtonsWithHoc : () => <span />}/>;
            }
            return <Component {...this.props}/>;
        }
    };
    ArrayComponentHoc = __decorate([
        compose(handlers)
    ], ArrayComponentHoc);
    let PureComponent = class PureComponent extends React.PureComponent {
        render() {
            return <Component {...this.props}/>;
        }
    };
    PureComponent = __decorate([
        compose(handlers, connect(mapFormItemDataProps))
    ], PureComponent);
    const spinnerWhileLoading = isLoading => branch(isLoading, renderComponent(PureComponent));
    const enhance = spinnerWhileLoading(props => {
        const { mergeSchema, getHocOptions } = props;
        const { type } = mergeSchema;
        return type !== "array";
    });
    return enhance(ArrayComponentHoc);
};
//# sourceMappingURL=array.jsx.map