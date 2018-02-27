import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import Button from "antd/lib/button";
import { compose, shouldUpdate } from "recompose";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import HTML5Backend from "react-dnd-html5-backend";
import { DropTarget, DragDropContext, DragSource } from "react-dnd";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";

// class TreeAddComponent extends React.PureComponent<any, any> {
//     public render() {
//         return <Component {...this.props} ArrayItemComponent={ArrayItemComponent} />;
//     }
// }

export const globalOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                data: true
            })]
        },
        normal: {
        },
        object: {
            temps: ["card"]
        },
        tree: {
            hocs: ["utils", "theme", "field", "validate", (Component: any) => {
                class HOC extends React.PureComponent<any, any> {
                    private _initArrayComponent = null;

                    constructor(props: any) {
                        super(props);

                        this._initArrayComponent = this.initArrayComponent.bind(this);
                    }

                    private initArrayComponent(prps: any) {
                        let { updateItemData, uiSchema, parentKeys, formItemData } = this.props;

                        return <Button.Group key="opt">
                            {(!formItemData || !formItemData.has("leftNode")) ? <Button key="left" type="primary" onClick={() => {
                                updateItemData({
                                    parentKeys,
                                    uiSchema: {
                                        keys: uiSchema.keys.concat("leftNode")
                                    }
                                }, { value: prps.arrayLevel.length + "--left" });
                            }} >添加左节点</Button> : null}
                            {(!formItemData || !formItemData.has("rightNode")) ? <Button key="right" type="primary" onClick={() => {
                                updateItemData({
                                    parentKeys,
                                    uiSchema: {
                                        keys: uiSchema.keys.concat("rightNode")
                                    }
                                }, { value: prps.arrayLevel.length + "--right" });
                            }} >添加右节点</Button> : null}
                        </Button.Group>;
                    }

                    public render() {
                        let { formItemData, ...extraProps } = this.props;

                        return <Component {...extraProps} initArrayComponent={this._initArrayComponent} />;
                    }
                }

                return (schemaFormReact.hocFactory.get("data")({
                    data: true
                }) as any)(HOC);

            }, "temp"],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                data: true
            })]
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
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

        }
    }
});
