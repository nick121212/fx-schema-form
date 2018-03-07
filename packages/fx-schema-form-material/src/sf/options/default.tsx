import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { compose, shouldUpdate } from "recompose";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import HTML5Backend from "react-dnd-html5-backend";
import { DropTarget, DragDropContext, DragSource } from "react-dnd";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";
import { ArrayComponent, ArrayItemComponent } from "./arrayitem";
import { NoneComponent } from "../../common/components/none";

export const globalOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formItem"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                data: true
            })]
        },
        array: {
            temps: ["card"],
            Root: NoneComponent,
            ArrayFieldComponent: NoneComponent,
            // 这里为array字段添加sort排序功能
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
                            const opacity = isDragging ? 0.1 : 1;
                            let backgroundColor = "";

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
        number: {
            options: Immutable.fromJS({
                widget: {
                    number: {
                        options: {
                            inputProps: {
                                type: "number"
                            }
                        }
                    }
                }
            })
        },
        object: {
            temps: ["card"],
            Root: NoneComponent
        },
        boolean: {
            widget: "checkbox",
            options: Immutable.fromJS({
                temp: {
                    formItem: {
                        showTitle: false
                    }
                }
            })
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                data: true,
                dataLength: true,
                metaKeys: ["collapsing", "errorText", "isValid"]
            }), immutableRenderDecorator],
            options: {
                elevation: 0,
                raised: false,
                className: "ml3 mr3"
            }
        },
        formItem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
            }), immutableRenderDecorator],
            options: {
                fullWidth: true,
                margin: "normal",
                className: "ml3 mr3 flex w-auto"
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
    },
    widget: {
        text: {
            options: {
                autoFocus: true
            }
        }
    }
});
