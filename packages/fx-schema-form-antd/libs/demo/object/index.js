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
import { createForms, SchemaForm } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
const Panel = Collapse.Panel;
let schema = {
    "$async": true,
    type: "object",
    required: [],
    properties: {
        object: {
            $ref: "test#/properties/object"
        }
    }
};
let uiSchema = ["object", "object/settings"];
let reducer = createForms.createOne("object", {}, ajv, schema);
let ObjectSchemaFormComponent = class ObjectSchemaFormComponent extends React.Component {
    doSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            reducer.actions.updateMetaState({ isLoading: true, isValid: false });
            reducer.actions.updateMetaState({
                isLoading: false,
                meta: yield this.props.meta.validateAll(this.props.data)
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
            React.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            React.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta.data || {}) : {}),
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement("div", null, "\u8FD9\u91CC\u67092\u4E2Aswitch\u7EC4\u4EF6\uFF0C2\u4E2A\u662F\u540C\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u4F46\u662F\u5B57\u6BB5\u7684\u8DEF\u5F84\u4E0D\u540C\u3002UiSchema\uFF1A[\"object\", \"object/settings\"]"),
                React.createElement(SchemaForm, { schemaKey: "object", schemaFormOptions: schemaFormOptions, schema: schema, RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    }
};
ObjectSchemaFormComponent = __decorate([
    connect((state, props) => {
        let { meta, data } = state.object;
        return {
            isValid: meta.data.isValid,
            isLoading: meta.data.isLoading,
            meta: meta,
            data
        };
    })
], ObjectSchemaFormComponent);
export { ObjectSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map