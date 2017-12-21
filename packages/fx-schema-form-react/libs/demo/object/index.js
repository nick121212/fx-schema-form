var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import { Form, Button, Collapse, Col, Row } from "antd";
import { connect } from "react-redux";
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
const Panel = Collapse.Panel;
let schema = {
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
let uiSchema = [
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
                extra: React.createElement("span", null, "\u6211\u5C31\u6D4B\u8BD5\u4E0B\u5C5E\u6027\u7684\u8986\u76D6\u60C5\u51B5"),
                bordered: true
            }
        }
    },
    "object",
    "object/settings"
];
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
let reducer = createForms.createOne("object", {
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
                    "image": "http://git.huginn.cn/static/images/huginn_logo.png", "span": 7, "offset": 1, "push": 1
                }, {
                    "span": 7,
                    "image": "http://git.huginn.cn/static/images/huginn_logo.png", "offset": 1, "push": 1
                }]
        }]
}, ajv, schema);
let ObjectSchemaFormComponent = class ObjectSchemaFormComponent extends React.Component {
    doSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            let metaData = SchemaFormCreate.metas.object;
            reducer.actions.updateMetaState({ isLoading: true, isValid: false });
            reducer.actions.updateMetaState({
                isLoading: false,
                meta: yield metaData.validateAll(this.props.data)
            });
            if (this.props.isValid) {
                alert("提交表单");
            }
        });
    }
    render() {
        const { isLoading } = this.props;
        return (React.createElement(Row, { type: "flex" },
            React.createElement(Col, { span: 24, style: { flex: 1 } },
                React.createElement(SchemaForm, { schemaKey: "object", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: (state, props) => {
                        return state.get("object");
                    }, RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4")))),
            React.createElement(Col, { style: {
                    borderLeft: "1px solid #e9e9e9",
                    width: 320
                } },
                React.createElement("div", { style: {
                        position: "fixed",
                        right: 0,
                        width: 320,
                        overflow: "auto",
                        bottom: 0,
                        top: 0
                    } },
                    React.createElement(SchemaForm, { schemaKey: "object", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: (state, props) => {
                            return state.get("object");
                        }, RootComponent: Form, uiSchema: uiSchema1, globalOptions: globalOptions })))));
    }
};
ObjectSchemaFormComponent = __decorate([
    connect((state, props) => {
        let { meta, data } = state.get("object");
        return {
            isValid: meta.isValid,
            isLoading: meta.isLoading,
            meta: meta,
            data
        };
    })
], ObjectSchemaFormComponent);
export { ObjectSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map