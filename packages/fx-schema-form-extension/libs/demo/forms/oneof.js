var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Select from "antd/lib/select";
import Immutable from "immutable";
import { globalOptions, curAjv } from "../init";
const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;
let OneOfForm = class OneOfForm extends React.PureComponent {
    render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;
        if (!this.props.root) {
            return null;
        }
        return React.createElement("div", null,
            React.createElement(SchemaForm, { key: "designForm" + "design", RootComponent: Form, schemaId: "dnd-oneof", uiSchemas: [{
                        key: "type",
                        widget: "select",
                        options: Immutable.fromJS({
                            widget: {
                                select: {
                                    options: {
                                        children: [1, 2, 3, 4].map((val, index) => {
                                            return React.createElement(Select.Option, { key: index, value: val }, val);
                                        })
                                    }
                                }
                            }
                        })
                    }, {
                        key: "value",
                        hocs: ["utils", "theme", "field", "validate", "oneOf", "array", "temp"],
                        options: Immutable.fromJS({
                            hoc: {
                                oneOf: {
                                    condition: {
                                        paths: [{ path: "../type" }]
                                    },
                                    path: "../type",
                                    key: "oneOf",
                                    uiSchemas: {
                                        1: { schemaId: "dnd-oneof-number", uiSchemas: ["*"] },
                                        2: { schemaId: "dnd-oneof-string1", uiSchemas: ["*"] },
                                        3: { schemaId: "dnd-oneof-boolean", uiSchemas: ["*"] },
                                        4: {
                                            schemaId: "dnd-oneof-object", uiSchemas: [{
                                                    key: "",
                                                    temps: ["formitem"],
                                                    children: ["*"]
                                                }]
                                        }
                                    }
                                }
                            }
                        })
                    }], parentKeys: this.props.parentKeys, globalOptions: globalOptions, ajv: curAjv }),
            React.createElement("div", { className: "tc" },
                React.createElement("button", { key: "submit" + isValidating + isValid, type: "primary", className: "pa3 mt5 ba b--dashed w-90", onClick: this.props.validateAll },
                    "validate is ",
                    isValid ? "true" : "false")));
    }
};
OneOfForm = __decorate([
    schemaFormDec({
        rootReducerKey: ["schemaForm"],
        parentKeys: ["oneOfForm"]
    })
], OneOfForm);
export { OneOfForm };
//# sourceMappingURL=oneof.js.map