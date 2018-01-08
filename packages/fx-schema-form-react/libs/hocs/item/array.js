var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { branch, renderComponent, shouldUpdate, compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import isEqual from "lodash.isequal";
import merge from "lodash.merge";
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
        return (defaultValue) => {
            const { mergeSchema, actions, getHocOptions } = props;
            const { keys } = mergeSchema;
            const options = getHocOptions("array");
            if (mergeSchema.items.type === "object" || !mergeSchema.items.type) {
                let newData = {};
                props.schemaFormOptions.ajv.validate(mergeSchema.items, newData);
                actions.addItem({
                    keys,
                    data: merge({}, options.itemDefaultData || {}, defaultValue || newData, options.itemFormatData || {})
                });
            }
            else {
                let newData;
                props.schemaFormOptions.ajv.validate(mergeSchema, newData);
                actions.addItem({ keys, data: defaultValue || newData });
            }
        };
    }
});
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class ArrayComponentHoc extends React.PureComponent {
            render() {
                const { mergeSchema, getHocOptions } = this.props;
                const { type } = mergeSchema;
                const arrayHocOptions = getHocOptions("array");
                const { ItemChildButtons = null, ItemButtons = null } = arrayHocOptions || {};
                let ItemChildButtonsWithHoc, ItemButtonsWithHoc;
                if (ItemChildButtons) {
                    ItemChildButtonsWithHoc = compose(shouldUpdate(() => false), connect(mapFormItemDataProps), shouldUpdate((prev, next) => {
                        let { formItemData = [] } = prev;
                        let { formItemData: formItemData1 = [] } = next;
                        if (formItemData.size && formItemData1.size) {
                            return formItemData.size !== formItemData1.size;
                        }
                        return formItemData.length !== formItemData1.length;
                    }), handlers, connect(mapMetaStateToProps), shouldUpdate((curProps, nextProps) => {
                        return !isEqual(curProps.meta, nextProps.meta);
                    }))(ItemChildButtons);
                }
                if (ItemButtons) {
                    ItemButtonsWithHoc = compose(handlers, connect(mapMetaStateToProps), shouldUpdate((curProps, nextProps) => {
                        return !isEqual(curProps.meta, nextProps.meta);
                    }))(ItemButtons);
                }
                if (type === "array") {
                    return React.createElement(Component, Object.assign({}, this.props, { ItemButtons: ItemButtonsWithHoc ? (props) => React.createElement(ItemButtonsWithHoc, Object.assign({}, this.props, props)) : () => React.createElement("span", null), ItemChildButtons: ItemChildButtonsWithHoc ? ItemChildButtonsWithHoc : () => React.createElement("span", null) }));
                }
                return React.createElement(Component, Object.assign({}, this.props));
            }
        }
        let PureComponent = class PureComponent extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({}, this.props));
            }
        };
        PureComponent = __decorate([
            compose(handlers)
        ], PureComponent);
        const spinnerWhileLoading = isLoading => branch(isLoading, renderComponent(PureComponent));
        const enhance = spinnerWhileLoading(props => {
            const { mergeSchema, getHocOptions } = props;
            const { type } = mergeSchema;
            return type !== "array";
        });
        return enhance(ArrayComponentHoc);
    };
};
//# sourceMappingURL=array.js.map