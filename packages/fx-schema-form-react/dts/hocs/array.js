var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose, withHandlers } from "recompose";
import { schemaFormReducer } from "../reducer";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        let ArrayComponentHoc = class ArrayComponentHoc extends React.PureComponent {
            render() {
                return React.createElement("div", null,
                    React.createElement("a", { href: "javascript:;", onClick: () => {
                            this.props.addItem(this.props);
                        } }, "\u6DFB\u52A0"),
                    React.createElement("a", { href: "javascript:;", onClick: () => {
                            this.props.removeItem(this.props, 0);
                        } }, "\u5220\u9664"),
                    React.createElement("a", { href: "javascript:;", onClick: () => {
                            this.props.switchItem(this.props, 1, 0);
                        } }, "switch"),
                    React.createElement("a", { href: "javascript:;", onClick: () => {
                            this.props.moveItem(this.props, 0, 10);
                        } }, "moveTo 10"),
                    React.createElement(Component, Object.assign({}, this.props)));
            }
        };
        ArrayComponentHoc = __decorate([
            compose(withHandlers({
                addItem: (propsCur) => {
                    return (props, data) => {
                        let defaultValue = {};
                        props.ajv.validate({
                            type: "object",
                            properteis: {
                                defaultData: props.uiSchema
                            }
                        }, defaultValue);
                        schemaFormReducer.actions.addItem({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            data: defaultValue.defaultValue
                        });
                    };
                },
                removeItem: (propsCur) => {
                    return (props, data) => {
                        schemaFormReducer.actions.removeItem({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            index: data
                        });
                    };
                },
                switchItem: (propsCur) => {
                    return (props, curIndex, toIndex) => {
                        schemaFormReducer.actions.switchItem({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            curIndex: curIndex,
                            toIndex: toIndex
                        });
                    };
                },
                moveItem: (propsCur) => {
                    return (props, curIndex, toIndex) => {
                        schemaFormReducer.actions.moveToItem({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            curIndex: curIndex,
                            toIndex: toIndex
                        });
                    };
                }
            }))
        ], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
};
//# sourceMappingURL=array.js.map