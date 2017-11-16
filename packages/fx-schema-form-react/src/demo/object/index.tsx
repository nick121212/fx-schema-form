import React from "react";
import { Form, Button, Collapse, Col, Row } from "antd";
import { connect } from "react-redux";

import { createForms, SchemaForm, SchemaFormItemBaseProps, FormReducer, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";

const Panel = Collapse.Panel;
let schema: any = {
    "$async": true,
    type: "object",
    required: ["name"],
    properties: {
        object: {
            $ref: "test#/properties/object"
        },
        name: {
            $ref: "test#/properties/name"
        }
    }
};
let uiSchema: any = [
    "name",
    {
        title: "纯容器（使用card），包装2个item",
        field: "object",
        "ui:temp": ["card"],
        "ui:item.hoc": ["theme", "field", "array", "temp"],
        items: ["object/settings", {
            "key": "name"
        }],
        options: {
            card: {
                extra: <span>我就测试下属性的覆盖情况</span>,
                bordered: true
            }
        }
    },
    "object",
    "object/settings"];


schema = {
    $async: true,
    type: "object",
    properties: {
        blocks: {
            type: "array",
            title: "块元素集合",
            default: [],
            items: {
                type: "object",
                title: "块元素",
                properties: {
                    elements: {
                        type: "array",
                        title: "元素集合",
                        default: [],
                        items: {
                            type: "object",
                            title: "元素",
                            required: ["image", "span"],
                            default: {},
                            properties: {
                                image: {
                                    type: "string",
                                    default: "http://git.huginn.cn/static/images/huginn_logo.png"
                                },
                                span: {
                                    type: "number",
                                    default: 24,
                                    mininum: 0,
                                    maxinum: 0
                                },
                                offset: {
                                    type: "number",
                                    default: 0
                                },
                                push: {
                                    type: "number",
                                    default: 0
                                },
                                containerType: {
                                    type: "string",
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
uiSchema = [{
    key: "blocks",
    items: [{
        title: "容器组件",
        field: "object",
        "ui:temp": ["card"],
        "ui:item.hoc": ["theme", "field", "array", "temp"],
        items: [{
            key: "blocks/-/elements",
            "ui:temp": "gridcard",
            items: [{
                key: "blocks/-/elements/-",
                title: "纯容器（使用card），包装2个item",
                "ui:temp": [],
                field: "gridcol",
                items: [{
                    title: "元素组件",
                    field: "object",
                    "ui:temp": ["card"],
                    "ui:item.hoc": ["theme", "field", "array", "temp"],
                    items: ["*"],
                    options: {
                        card: {
                            bordered: true
                        }
                    }
                }]
            }],
            options: {
                gridcard: {
                    showButtons: true,
                    title: "元素设置"
                }
            }
        }],
        options: {
            card: {
                bordered: false,
                bodyStyle: {
                    margin: 0,
                    padding: 0
                }
            }
        }
    }]
}];

let uiSchema1 = [{
    key: "blocks",
    "ui:temp": [],
    items: [{
        title: "容器组件",
        field: "object",
        "ui:temp": [],
        "ui:item.hoc": ["theme", "field", "array", "temp"],
        items: [{
            key: "blocks/-/elements",
            "ui:temp": "gridcard",
            items: [{
                key: "blocks/-/elements/-",
                title: "纯容器（使用card），包装2个item",
                "ui:temp": [],
                field: "gridcol",
                extra: null,
                items: [{
                    title: "容器组件",
                    field: "object",
                    "ui:temp": [],
                    "ui:item.hoc": ["theme", "field", "array", "temp"],
                    items: ["*"],
                    options: {
                        card: {
                            bordered: true
                        }
                    }
                }],
                options: {
                    gridcol: {
                        image: true
                    }
                }
            }]
        }],
        options: {
            card: {
                bordered: false,
                bodyStyle: {
                    margin: 0,
                    padding: 0
                }
            }
        }
    }]
}];


let reducer: FormReducer<any> = createForms.createOne("object", {
    "blocks": [{
        "elements": [{
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 24, "offset": 0, "push": 0
        }]
    }, {
        "elements": [{
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 10, "offset": 1, "push": 1
        }, {
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 10, "offset": 1, "push": 1
        }]
    }, {
        "elements": [{
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 24, "offset": 0, "push": 0
        }, {
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 24, "offset": 0, "push": 0
        }, {
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 24, "offset": 0, "push": 0
        }]
    }, {
        "elements": [{
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 7, "offset": 0, "push": 0
        }, {
            "image":
            "http://git.huginn.cn/static/images/huginn_logo.png", "span": 7, "offset": 1, "push": 1
        }, {
            "span": 7,
            "image": "http://git.huginn.cn/static/images/huginn_logo.png", "offset": 1, "push": 1
        }]
    }]
}, ajv, schema);

@connect((state: any, props: SchemaFormItemBaseProps) => {
    let { meta, data } = state.get("object");

    return {
        isValid: meta.isValid,
        isLoading: meta.isLoading,
        meta: meta,
        data
    };
})
export class ObjectSchemaFormComponent extends React.Component<any> {

    private async doSubmit(): Promise<void> {
        let metaData = SchemaFormCreate.metas.object;

        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
        reducer.actions.updateMetaState({
            isLoading: false,
            meta: await metaData.validateAll(this.props.data)
        });
        if (this.props.isValid) {
            alert("提交表单");
        }
    }

    public render(): JSX.Element {
        const { isLoading } = this.props;

        return (
            <Row type="flex">
                <Col span={24} style={{ flex: 1 }}>
                    <SchemaForm schemaKey={"object"}
                        schemaFormOptions={schemaFormOptions}
                        schema={schema}
                        getCurrentState={(state, props) => {
                            return state.get("object");
                        }}
                        RootComponent={Form} uiSchema={uiSchema}
                        globalOptions={globalOptions}>
                        <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                            <Button type="primary" loading={isLoading} onClick={this.doSubmit.bind(this)}>提交</Button>
                        </Form.Item>
                    </SchemaForm>
                </Col>
                <Col style={{
                    borderLeft: "1px solid #e9e9e9",
                    width: 320
                }}>
                    <div style={{
                        position: "fixed",
                        right: 0,
                        width: 320,
                        overflow: "auto",
                        bottom: 0,
                        top: 0
                    }}>
                        <SchemaForm schemaKey={"object"}
                            schemaFormOptions={schemaFormOptions}
                            schema={schema}
                            getCurrentState={(state, props) => {
                                return state.get("object");
                            }}
                            RootComponent={Form}
                            uiSchema={uiSchema1}
                            globalOptions={globalOptions}>
                        </SchemaForm>
                    </div>
                </Col>
            </Row >

        );
    }
}

export {
    reducer
};
