import { ResolveLib } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import schemaEditor from "json-schema-editor-visual/dist/main";
import React from "react";
import { compose, defaultProps } from "recompose";
import { curAjv } from "../init";
import { DashboardTestComponent } from "./editform";
const { schemaFormDec } = schemaFormReact;
const SchemaEditor = schemaEditor({
    lg: "zh_CN"
});
export default class Component extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jsonSchema: `
            {
                "type": "object",
                "default": {},
                "properties": {
                  "firstName": {
                    "type": "string",
                    "default": "nick"
                  },
                  "lastName": {
                    "type": "string"
                  },
                  "field_6": {
                    "type": "string"
                  },
                  "field_7": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
        `
        };
    }
    render() {
        if (!this.state.jsonSchema) {
            return null;
        }
        const jsonSchema = JSON.parse(this.state.jsonSchema);
        jsonSchema.$id = "nick" + Date.now();
        delete jsonSchema.$schema;
        new ResolveLib(curAjv, jsonSchema);
        const EditorSchemaForm = compose(defaultProps({
            ajv: curAjv,
            schemaId: jsonSchema.$id,
            reducerKey: "schemaForm",
            formKey: "dashboard",
            shouldResetForm: true
        }), schemaFormDec({
            rootReducerKey: ["schemaForm"],
            parentKeys: ["dashboard"]
        }))(DashboardTestComponent);
        return (React.createElement("div", { className: " flex-auto overflow-auto h-100 flex-column" },
            React.createElement("div", { className: "overflow-auto h-50" },
                React.createElement(SchemaEditor, { data: this.state.jsonSchema, onChange: (jsonSchema1) => {
                        this.setState({
                            jsonSchema: jsonSchema1
                        });
                    }, showEditor: true })),
            React.createElement("div", { className: "overflow-auto h-50 bt " },
                React.createElement(EditorSchemaForm, { key: Date.now().toString() }))));
    }
}
//# sourceMappingURL=edit.js.map