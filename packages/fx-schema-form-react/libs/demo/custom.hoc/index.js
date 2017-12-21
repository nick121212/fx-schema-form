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
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";
import { createForms, SchemaForm, SchemaFormCreate, hocFactory } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
const Panel = Collapse.Panel;
let schema = {
    "$async": true,
    type: "object",
    required: ["name"],
    properties: {
        object: {
            default: {},
            $ref: "test#/properties/object"
        },
        name: {
            $ref: "test#/properties/name"
        }
    }
};
let uiSchema = [{
        "key": "name",
        "ui:item.hoc": [
            "theme",
            hocFactory.get("temp")({
                templates: ["card"]
            }),
            "field", "validate", "array", "temp"
        ],
        "options": {
            "hoc": {
                "condition": {
                    "fields": [{ "key": "/object/settings", "val": true }]
                }
            }
        }
    }, "object/settings"];
let reducer = createForms.createOne("custom.hoc", {}, {}, "jpp", ajv, schema);
let CustomHocSchemaFormComponent = class CustomHocSchemaFormComponent extends React.Component {
    doSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            let metaData = SchemaFormCreate.metas["custom.hoc"];
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
        return (React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1", "4"] },
            React.createElement(Panel, { header: "schema", key: "2" }, JSON.stringify(schema)),
            React.createElement(Panel, { header: "uiSchema", key: "5" }, uiSchema ? JSON.stringify(uiSchema || {}) : {}),
            React.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            React.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta || {}) : {}),
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement("div", null, "\u8FD9\u91CC\u7684name\u5B57\u6BB5\uFF0C\u53EA\u6709\u5F53switch\u672A\u5F00\u7684\u65F6\u5019\u624D\u4F1A\u663E\u793A"),
                React.createElement(SchemaForm, { schemaKey: "custom.hoc", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: (state, props) => {
                        return state.get("custom.hoc");
                    }, RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    }
};
CustomHocSchemaFormComponent = __decorate([
    connect((state, props) => {
        let { meta, data } = state.get("custom.hoc");
        return {
            isValid: meta.isValid,
            isLoading: meta.isLoading,
            meta: meta,
            data
        };
    })
], CustomHocSchemaFormComponent);
export { CustomHocSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map