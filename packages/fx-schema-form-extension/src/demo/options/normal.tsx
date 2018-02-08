import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { Button } from "antd";
import { compose, shouldUpdate } from "recompose";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import HTML5Backend from "react-dnd-html5-backend";
import { DropTarget, DragDropContext, DragSource } from "react-dnd";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";

@(compose(
    shouldUpdate(() => false),
    schemaFormReact.hocFactory.get("validate")(),
    schemaFormReact.hocFactory.get("array")(),
    schemaFormReact.hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })
) as any)
export class ArrayComponent extends React.PureComponent<DefaultProps & any> {
    private addItem: any;
    private hideItems: any;

    constructor(props: DefaultProps & any) {
        super(props);

        this.addItem = () => {
            props.addItem(this.props);
        };
        this.hideItems = (collapsing: boolean) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }

    public render() {
        const { uiSchema, formItemData, formItemMeta } = this.props;
        const { maxItems } = uiSchema;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        let canAdd = true;

        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }

        return (
            <Button.Group key="opt">
                <Button key={"add" + canAdd} type="primary" icon="plus" disabled={!canAdd} onClick={this.addItem} />
                <Button key={"collapsing" + collapsing} type="primary" icon={collapsing ? "arrow-up" : "arrow-down"} onClick={() => {
                    this.hideItems(!collapsing);
                }} />
            </Button.Group>
        );
    }
} @(compose(
    schemaFormReact.hocFactory.get("validate")(),
    schemaFormReact.hocFactory.get("array")()
) as any)
export class ArrayItemComponent extends React.PureComponent<DefaultProps & any> {
    private removeItem: any;
    private moveTo: any;

    constructor(props: DefaultProps & any) {
        super(props);
    }

    public render() {
        const { addItem } = this.props;

        this.removeItem = () => {
            this.props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
        };
        this.moveTo = () => {
            console.log(this.props.arrayIndex);
            this.props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
        };

        return <Button.Group key="opt">
            <Button key="remove" type="primary" icon="minus" onClick={this.removeItem} />
        </Button.Group>;
    }
}
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
                data: true
            })]
        },
        array: {
            temps: ["card"],
            // 这里为array字段添加sort排序功能
            formHocs: [
                DragDropContext(HTML5Backend),
                // DropTarget("SchemaFormItem", {
                //     drop() { }
                // }, connect => ({
                //     connectDropTarget: connect.dropTarget(),
                // })),
                // (Component: new () => React.PureComponent) => {
                //     return class Com extends React.PureComponent<DefaultProps & { connectDropTarget: any }> {
                //         public render() {
                //             const { connectDropTarget, ...extraProps } = this.props;

                //             console.log(extraProps);

                //             return connectDropTarget(<div><Component {...extraProps} /></div>);
                //         }
                //     };
                // },
                schemaFormReact.hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData", "formItemMeta"]
                })
            ],
            formItemHocs: [
                schemaFormReact.hocFactory.get("utils")(),
                schemaFormReact.hocFactory.get("array")(),
                DropTarget("SchemaFormItem", {
                    canDrop(props: DefaultProps, monitor: any) {
                        let monitorItem: DefaultProps = monitor.getItem(),
                            arrLev = (monitorItem.arrayLevel || []).concat([]),
                            arrLev1 = (props.arrayLevel || []).concat([]);

                        arrLev.pop();
                        arrLev1.pop();

                        return arrLev.join() === arrLev1.join();
                    },
                    drop: (props: DefaultProps & ArrayHocOutProps, monitor: any) => {
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
                    beginDrag: (props: DefaultProps) => {
                        return props;
                    }
                }, (connect, monitor) => ({
                    connectDragSource: connect.dragSource(),
                    isDragging: monitor.isDragging()
                })),
                (Component: new () => React.PureComponent) => {
                    return class Com extends React.PureComponent<DefaultProps &
                        {
                            connectDragSource: any, isDragging: any, canDrop: boolean,
                            isHover: boolean, index: any, connectDropTarget: any
                        }> {
                        public render() {
                            const { isDragging, canDrop, isHover, index, connectDropTarget, connectDragSource, ...extraProps } = this.props;
                            const opacity = isDragging ? 0.3 : 1;
                            let backgroundColor = (canDrop && !isDragging) ? "" : "";

                            if (isHover && !isDragging) {
                                backgroundColor = "gray";
                            }

                            return connectDragSource(connectDropTarget(<div style={{ opacity, backgroundColor }}>
                                <Component {...extraProps} />
                            </div>));
                        }
                    };
                },
            ],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
                dataLength: true
            })]
        },
        normal: {
        },
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
            }), immutableRenderDecorator]
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
