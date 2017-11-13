var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from "react";
import { Form, Button, Collapse, Col, Row } from "antd";
import { connect } from "react-redux";
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
var Panel = Collapse.Panel;
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
var reducer = createForms.createOne("object", {
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
var ObjectSchemaFormComponent = (function (_super) {
    __extends(ObjectSchemaFormComponent, _super);
    function ObjectSchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectSchemaFormComponent.prototype.doSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = SchemaFormCreate.metas.object;
                        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
                        _b = (_a = reducer.actions).updateMetaState;
                        _c = {
                            isLoading: false
                        };
                        return [4, metaData.validateAll(this.props.data)];
                    case 1:
                        _b.apply(_a, [(_c.meta = _d.sent(),
                                _c)]);
                        if (this.props.isValid) {
                            alert("提交表单");
                        }
                        return [2];
                }
            });
        });
    };
    ObjectSchemaFormComponent.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return (React.createElement(Row, { type: "flex" },
            React.createElement(Col, { span: 24, style: { flex: 1 } },
                React.createElement(SchemaForm, { schemaKey: "object", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
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
                    React.createElement(SchemaForm, { schemaKey: "object", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                            return state.get("object");
                        }, RootComponent: Form, uiSchema: uiSchema1, globalOptions: globalOptions })))));
    };
    ObjectSchemaFormComponent = __decorate([
        connect(function (state, props) {
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
}(React.Component));
export { ObjectSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map