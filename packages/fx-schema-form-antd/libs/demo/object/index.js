"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var index_1 = require("../../index");
var init_1 = require("../init");
var Panel = antd_1.Collapse.Panel;
var schema = {
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
var uiSchema = [
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
                extra: react_1.default.createElement("span", null, "\u6211\u5C31\u6D4B\u8BD5\u4E0B\u5C5E\u6027\u7684\u8986\u76D6\u60C5\u51B5"),
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
var uiSchema1 = [{
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
var reducer = index_1.createForms.createOne("object", {
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
}, init_1.ajv, schema);
exports.reducer = reducer;
var ObjectSchemaFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectSchemaFormComponent, _super);
    function ObjectSchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectSchemaFormComponent.prototype.doSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = index_1.SchemaFormCreate.metas.object;
                        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
                        _b = (_a = reducer.actions).updateMetaState;
                        _c = {
                            isLoading: false
                        };
                        return [4 /*yield*/, metaData.validateAll(this.props.data)];
                    case 1:
                        _b.apply(_a, [(_c.meta = _d.sent(),
                                _c)]);
                        if (this.props.isValid) {
                            alert("提交表单");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ObjectSchemaFormComponent.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return (react_1.default.createElement(antd_1.Row, { type: "flex" },
            react_1.default.createElement(antd_1.Col, { span: 24, style: { flex: 1 } },
                react_1.default.createElement(index_1.SchemaForm, { schemaKey: "object", schemaFormOptions: init_1.schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                        return state.get("object");
                    }, RootComponent: antd_1.Form, uiSchema: uiSchema, globalOptions: init_1.globalOptions },
                    react_1.default.createElement(antd_1.Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        react_1.default.createElement(antd_1.Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4")))),
            react_1.default.createElement(antd_1.Col, { style: {
                    borderLeft: "1px solid #e9e9e9",
                    width: 320
                } },
                react_1.default.createElement("div", { style: {
                        position: "fixed",
                        right: 0,
                        width: 320,
                        overflow: "auto",
                        bottom: 0,
                        top: 0
                    } },
                    react_1.default.createElement(index_1.SchemaForm, { schemaKey: "object", schemaFormOptions: init_1.schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                            return state.get("object");
                        }, RootComponent: antd_1.Form, uiSchema: uiSchema1, globalOptions: init_1.globalOptions })))));
    };
    ObjectSchemaFormComponent = tslib_1.__decorate([
        react_redux_1.connect(function (state, props) {
            var _a = state.get("object"), meta = _a.meta, data = _a.data;
            return {
                isValid: meta.isValid,
                isLoading: meta.isLoading,
                meta: meta,
                data: data
            };
        })
    ], ObjectSchemaFormComponent);
    return ObjectSchemaFormComponent;
}(react_1.default.Component));
exports.ObjectSchemaFormComponent = ObjectSchemaFormComponent;
//# sourceMappingURL=index.js.map