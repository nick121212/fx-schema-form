var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import Button from "antd/lib/button";
import { compose, shouldUpdate } from "recompose";
import HTML5Backend from "react-dnd-html5-backend";
import { DropTarget, DragDropContext, DragSource } from "react-dnd";
let ArrayComponent = class ArrayComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.addItem = () => {
            props.addItem(this.props);
        };
        this.hideItems = (collapsing) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }
    render() {
        const { uiSchema, formItemData, formItemMeta } = this.props;
        const { maxItems } = uiSchema;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        let canAdd = true;
        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }
        return (React.createElement(Button.Group, { key: "opt" },
            React.createElement(Button, { key: "add" + canAdd, type: "primary", icon: "plus", disabled: !canAdd, onClick: this.addItem }),
            React.createElement(Button, { key: "collapsing" + collapsing, type: "primary", icon: collapsing ? "arrow-up" : "arrow-down", onClick: () => {
                    this.hideItems(!collapsing);
                } })));
    }
};
ArrayComponent = __decorate([
    compose(shouldUpdate(() => false), schemaFormReact.hocFactory.get("utils")(), schemaFormReact.hocFactory.get("validate")(), schemaFormReact.hocFactory.get("array")(), schemaFormReact.hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })),
    __metadata("design:paramtypes", [Object])
], ArrayComponent);
export { ArrayComponent };
let ArrayItemComponent = class ArrayItemComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { addItem } = this.props;
        this.removeItem = () => {
            this.props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
        };
        this.moveTo = () => {
            console.log(this.props.arrayIndex);
            this.props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
        };
        return React.createElement(Button.Group, { key: "opt" },
            React.createElement(Button, { key: "remove", type: "primary", icon: "minus", onClick: this.removeItem }));
    }
};
ArrayItemComponent = __decorate([
    compose(schemaFormReact.hocFactory.get("validate")(), schemaFormReact.hocFactory.get("array")()),
    __metadata("design:paramtypes", [Object])
], ArrayItemComponent);
export { ArrayItemComponent };
const style = {
    border: "1px dashed gray",
    padding: "0.5rem 1rem",
    marginBottom: ".5rem",
    backgroundColor: "white",
    cursor: "move",
};
export const globalOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true,
                    meta: true,
                    metaKeys: ["options"]
                })]
        },
        array: {
            temps: ["formitem", "card"],
            formHocs: [
                DragDropContext(HTML5Backend),
                schemaFormReact.hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData", "formItemMeta"]
                })
            ],
            formItemHocs: [
                schemaFormReact.hocFactory.get("utils")(),
                schemaFormReact.hocFactory.get("array")(),
                DropTarget("SchemaFormItem", {
                    canDrop(props, monitor) {
                        let monitorItem = monitor.getItem(), arrLev = (monitorItem.arrayLevel || []).concat([]), arrLev1 = (props.arrayLevel || []).concat([]);
                        arrLev.pop();
                        arrLev1.pop();
                        return arrLev.join() === arrLev1.join();
                    },
                    drop: (props, monitor) => {
                        const monitorItem = monitor.getItem();
                        const didDrop = monitor.didDrop();
                        const { arrayIndex } = props;
                        if (!didDrop && props.uiSchema && props.uiSchema.keys && monitorItem.arrayIndex !== arrayIndex) {
                            props.moveItem(props.parentKeys, props.uiSchema.keys, monitorItem.arrayIndex, arrayIndex || 0);
                        }
                    }
                }, (connect, monitor) => ({
                    connectDropTarget: connect.dropTarget(),
                    isHover: monitor.isOver(),
                    canDrop: monitor.canDrop()
                })),
                DragSource("SchemaFormItem", {
                    beginDrag: (props) => {
                        return props;
                    }
                }, (connect, monitor) => ({
                    connectDragSource: connect.dragSource(),
                    isDragging: monitor.isDragging()
                })),
                (Component) => {
                    return class Com extends React.PureComponent {
                        render() {
                            const _a = this.props, { isDragging, canDrop, isHover, index, connectDropTarget, connectDragSource } = _a, extraProps = __rest(_a, ["isDragging", "canDrop", "isHover", "index", "connectDropTarget", "connectDragSource"]);
                            const opacity = isDragging ? 0.3 : 1;
                            let backgroundColor = (canDrop && !isDragging) ? "" : "";
                            if (isHover && !isDragging) {
                                backgroundColor = "gray";
                            }
                            return connectDragSource(connectDropTarget(React.createElement("div", { style: { opacity, backgroundColor } },
                                React.createElement(Component, Object.assign({}, extraProps)))));
                        }
                    };
                },
            ],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true,
                    dataLength: true
                })]
        },
        normal: {},
        object: {
            temps: ["card"]
        },
        boolean: {
            widget: "checkbox"
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["errorText", "isValid", "collapsing"]
                }), immutableRenderDecorator],
            options: {
                bordered: false
            }
        },
        formitem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
                }), immutableRenderDecorator],
            options: {
                hasFeedback: true,
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            }
        }
    },
    hoc: {
        data: {
            rootReducerKey: ["schemaForm"]
        },
        array: {
            ArrayComponent: ArrayComponent,
            ArrayItemComponent: ArrayItemComponent
        }
    }
});
//# sourceMappingURL=normal.js.map