import { ResolveLib } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import schemaEditor from "json-schema-editor-visual/dist/main";
import React from "react";
import { compose, defaultProps } from "recompose";

import {  curAjv } from "../init";
import { DashboardTestComponent } from "./editform";

const { schemaFormDec } = schemaFormReact;

const SchemaEditor = schemaEditor({
    lg: "zh_CN"
});

export default class Component extends React.PureComponent<any, any>{
    constructor(props: any) {
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
        ` };
    }
    public render() {

        if (!this.state.jsonSchema) {
            return null;
        }

        const jsonSchema = JSON.parse(this.state.jsonSchema);

        jsonSchema.$id = "nick" + Date.now();

        delete jsonSchema.$schema;

        // tslint:disable-next-line:no-unused-expression
        new ResolveLib(curAjv, jsonSchema);

        const EditorSchemaForm = compose(
            defaultProps({
                ajv: curAjv,
                schemaId: jsonSchema.$id,
                reducerKey: "schemaForm",
                formKey: "dashboard",
                shouldResetForm: true
            }),
            schemaFormDec({
                rootReducerKey: ["schemaForm"],
                parentKeys: ["dashboard"]
            }))(DashboardTestComponent);

        return (
            <div className=" flex-auto overflow-auto h-100 flex-column">
                <div className="overflow-auto h-50">
                    <SchemaEditor data={this.state.jsonSchema} onChange={(jsonSchema1: any) => {
                        this.setState({
                            jsonSchema: jsonSchema1
                        });
                    }} showEditor={true} /></div>
                <div className="overflow-auto h-50 bt ">
                    <EditorSchemaForm key={Date.now().toString()} />
                </div>
            </div>
        );
    }
}

