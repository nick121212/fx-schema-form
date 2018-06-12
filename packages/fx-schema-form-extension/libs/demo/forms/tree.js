var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import { treeGlobalOptions, curAjv } from "../init";
const { SchemaForm, schemaFormDec } = schemaFormReact;
let TreeForm = class TreeForm extends React.PureComponent {
    render() {
        const { isValidating = false, isValid = false, validateAll, data } = this.props;
        if (!this.props.root) {
            return null;
        }
        return React.createElement("div", null,
            React.createElement(SchemaForm, { key: "designForm" + "design", RootComponent: Form, schemaId: "dnd-tree", uiSchemas: [{
                        key: "root",
                        field: "tree"
                    }], arrayLevel: [0], parentKeys: this.props.parentKeys, globalOptions: treeGlobalOptions, ajv: curAjv }),
            React.createElement("div", { className: "tc" },
                React.createElement("textarea", { cols: 30, rows: 10, onChange: () => console.log, value: JSON.stringify(data.toJS(), null, 4) }),
                React.createElement("button", { key: "submit" + isValidating + isValid, type: "primary", className: "pa3 mt5 ba b--dashed w-90", onClick: this.props.validateAll },
                    "validate is ",
                    isValid ? "true" : "false")));
    }
};
TreeForm = __decorate([
    schemaFormDec({
        rootReducerKey: ["schemaForm"],
        parentKeys: ["treeForm"]
    })
], TreeForm);
export { TreeForm };
//# sourceMappingURL=tree.js.map