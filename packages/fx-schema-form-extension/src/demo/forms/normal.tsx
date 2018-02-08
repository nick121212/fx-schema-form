import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Immutable from "immutable";
import Button from "antd/lib/button";
import propTypes from "prop-types";

import { gloabelOptions, curAjv, globalOptionsOfDesign, globalOptionsOfDesign1 } from "../init";
import div from "../dnd/div";
import checkbox from "../dnd/checkbox";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["normalForm"]
}) as any)
export class NormalForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;

        if (!this.props.root) {
            return null;
        }

        return <div>
            <SchemaForm
                key={"designForm" + "design"}
                RootComponent={Form}
                schemaId={"dnd-style"}
                uiSchemas={["*"]}
                parentKeys={this.props.parentKeys}
                globalOptions={gloabelOptions}
                ajv={curAjv} >
            </SchemaForm>

            <button key={"submit" + isValidating + isValid}
                type="primary"
                onClick={this.props.validateAll}>
                validate is {isValid ? "true" : "false"}
            </button>
        </div>;
    }
}
