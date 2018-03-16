var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { curAjv, globalOptionsOfDesign, globalOptionsOfDesign1 } from "../init";
import div from "../dnd/div";
import checkbox from "../dnd/checkbox";
const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;
const uiSchema = [{
        key: "children",
        field: "design"
    }];
let children = [];
for (let i = 0; i < 1; i++) {
    children.push({
        data: div,
        children: [{
                data: div,
                children: [{
                        data: div
                    }]
            }, {
                data: checkbox
            }]
    });
}
let DesignForm = class DesignForm extends React.PureComponent {
    render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;
        if (!this.props.root) {
            return null;
        }
        return React.createElement("div", null,
            React.createElement(Row, null,
                React.createElement(Col, { span: 12 },
                    React.createElement(SchemaForm, { key: "designForm" + "design", RootComponent: Form, schemaId: "design", uiSchemas: uiSchema, parentKeys: this.props.parentKeys, globalOptions: globalOptionsOfDesign, ajv: curAjv })),
                React.createElement(Col, { span: 12 },
                    React.createElement(SchemaForm, { key: "designForm" + "design1", RootComponent: Form, reducerKey: "schemaForm", schemaId: "design", uiSchemas: uiSchema, parentKeys: this.props.parentKeys, globalOptions: globalOptionsOfDesign1, ajv: curAjv }))),
            React.createElement("div", { className: "tc" },
                React.createElement("button", { key: "submit" + isValidating + isValid, type: "primary", className: "pa3 mt5 ba b--dashed w-90", onClick: this.props.validateAll },
                    "validate is ",
                    isValid ? "true" : "false")));
    }
};
DesignForm = __decorate([
    schemaFormDec({
        rootReducerKey: ["schemaForm"],
        parentKeys: ["designForm"]
    })
], DesignForm);
export { DesignForm };
export { children };
//# sourceMappingURL=design.js.map