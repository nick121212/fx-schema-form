import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { branch, compose, withHandlers } from "recompose";
import { schemaFormReducer } from "../reducer";
export default (hocFactory, settings = {}) => {
    const hoc = compose(withHandlers({
        addItem: (propsCur) => {
            return (props, data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let itemSchema = {}, defaultValue = {}, itemUiSchema = props.uiSchema ? props.uiSchema.items : {};
                try {
                    yield props.ajv.validate({
                        type: "object",
                        properties: {
                            defaultData: itemUiSchema
                        }
                    }, defaultValue);
                }
                catch (e) {
                    console.log(e);
                }
                finally {
                    schemaFormReducer.actions.addItem({
                        parentKeys: props.parentKeys,
                        keys: props.uiSchema.keys,
                        data: defaultValue.defaultData
                    });
                }
            });
        },
        removeItem: (propsCur) => {
            return (parentKeys, keys, index) => {
                schemaFormReducer.actions.removeItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    index: index
                });
            };
        },
        switchItem: (propsCur) => {
            return (parentKeys, keys, curIndex, toIndex) => {
                schemaFormReducer.actions.switchItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        moveItem: (propsCur) => {
            return (parentKeys, keys, curIndex, toIndex) => {
                schemaFormReducer.actions.moveToItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        initArrayComponent: (propsCur) => {
            return (props, index) => {
                const { ArrayComponent, ArrayItemComponent } = props, extraProps = tslib_1.__rest(props, ["ArrayComponent", "ArrayItemComponent"]), uiSchema = props.uiSchema;
                if (uiSchema.type === "array") {
                    return ArrayComponent ? React.createElement(ArrayComponent, Object.assign({}, extraProps)) : null;
                }
                return ArrayItemComponent ? React.createElement(ArrayItemComponent, Object.assign({}, extraProps)) : null;
            };
        }
    }));
    let arrayHoc = (Component) => {
        let ArrayComponentHoc = class ArrayComponentHoc extends PureComponent {
            constructor(props, context) {
                super(props, context);
                this.initArrayComponents();
            }
            initArrayComponents() {
                const { getOptions } = this.props;
                const hocOptions = getOptions(this.props, "hoc", "array");
                if (hocOptions.ArrayComponent) {
                    this.ArrayComponent = hocOptions.ArrayComponent;
                }
                if (hocOptions.ArrayItemComponent) {
                    this.ArrayItemComponent = hocOptions.ArrayItemComponent;
                }
            }
            render() {
                let props = {};
                if (this.ArrayComponent) {
                    props.ArrayComponent = this.ArrayComponent;
                }
                if (this.ArrayItemComponent) {
                    props.ArrayItemComponent = this.ArrayItemComponent;
                }
                return React.createElement(Component, Object.assign({}, this.props, props));
            }
        };
        ArrayComponentHoc = tslib_1.__decorate([
            hoc,
            tslib_1.__metadata("design:paramtypes", [Object, Object])
        ], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
    let pureHoc = (Component) => {
        let ArrayPureComponentHoc = class ArrayPureComponentHoc extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({}, this.props));
            }
        };
        ArrayPureComponentHoc = tslib_1.__decorate([
            hoc
        ], ArrayPureComponentHoc);
        return ArrayPureComponentHoc;
    };
    return branch((props) => {
        const { uiSchema = { type: "" } } = props;
        return uiSchema.type === "array";
    }, arrayHoc, pureHoc);
};
//# sourceMappingURL=array.js.map