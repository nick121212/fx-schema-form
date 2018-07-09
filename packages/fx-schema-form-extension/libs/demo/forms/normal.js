var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Immutable from "immutable";
import { globalOptions, curAjv } from "../init";
const { SchemaForm, schemaFormDec } = schemaFormReact;
let NormalForm = class NormalForm extends React.PureComponent {
    render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;
        if (!this.props.root) {
            return null;
        }
        return React.createElement("div", null,
            React.createElement(SchemaForm, { key: "designForm" + "design", RootComponent: Form, schemaId: "dnd-style", uiSchemas: [{
                        key: "width",
                        hocs: ["utils", "theme", "field", "validate", "changed", "temp"],
                        options: Immutable.fromJS({
                            hoc: {
                                changed: {
                                    condition: {
                                        paths: [{
                                                path: "../height"
                                            }]
                                    },
                                    onChanged: (props, data) => {
                                        let height = props.getPathKeys(props.uiSchema.keys, "../height").join("/");
                                        if (data[height] !== undefined) {
                                        }
                                    }
                                }
                            }
                        })
                    }, {
                        key: "height",
                        hocs: ["utils", "theme", "field", "validate", "copyToMeta", "temp"],
                        options: Immutable.fromJS({
                            hoc: {
                                copyToMeta: {
                                    condition: {
                                        paths: [{ path: "../width" }]
                                    },
                                    paths: [{ path: "../width", defaultValue: 0, to: ["options", "widget", "number", "options", "max"] }]
                                }
                            }
                        })
                    }, "isEighteen", {
                        key: "textAlign",
                        hocs: ["utils", "theme", "field", "validate", "show", "temp"],
                        options: Immutable.fromJS({
                            hoc: {
                                show: {
                                    condition: {
                                        paths: [{ path: "../isEighteen" }]
                                    },
                                }
                            }
                        })
                    }, "*"], parentKeys: this.props.parentKeys, globalOptions: globalOptions, ajv: curAjv }),
            React.createElement("div", { className: "tc" },
                React.createElement("button", { key: "submit" + isValidating + isValid, type: "primary", className: "pa3 mt5 ba b--dashed w-90", onClick: this.props.validateAll },
                    "validate is ",
                    isValid ? "true" : "false")));
    }
};
NormalForm = __decorate([
    schemaFormDec({
        rootReducerKey: ["schemaForm"],
        parentKeys: ["normalForm"]
    })
], NormalForm);
export { NormalForm };
//# sourceMappingURL=normal.js.map