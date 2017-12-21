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
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
import { shouldUpdate } from "recompose";
const Panel = Collapse.Panel;
let schema = ajv.getSchema("normal").schema;
let uiSchema = ["*"];
let reducer = createForms.createOne("normal", {}, {
    reducerKeys: []
}, "immu", ajv, schema);
let NormalSchemaFormComponent = class NormalSchemaFormComponent extends React.Component {
    doSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            let metaData = SchemaFormCreate.metas.normal;
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
        return (React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1"] },
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement(SchemaForm, { schemaKey: "normal", schemaFormOptions: schemaFormOptions, schema: schema, key: "293993939", reducerKeys: ["normal"], RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    }
};
NormalSchemaFormComponent = __decorate([
    shouldUpdate(() => false),
    connect((state, props) => {
        return {};
    })
], NormalSchemaFormComponent);
export { NormalSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map