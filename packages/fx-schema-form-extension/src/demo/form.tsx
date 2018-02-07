import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Immutable from "immutable";
import Button from "antd/lib/button";
import propTypes from "prop-types";

import { gloabelOptions, curAjv, globalOptionsOfDesign, globalOptionsOfDesign1 } from "./init";

const { SchemaForm, hocFactory, schemaFormDec } = schemaFormReact;

const uiSchema = [{
    key: "children",
    field: "design"
}];

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["designForm"]
}) as any)
export class TestForm extends React.PureComponent<any> {

    public static propTypes: any;

    private _validateAll: () => Promise<void>;

    constructor(props: any) {
        super(props);

        this._validateAll = props.validateAll.bind(this);
    }

    public render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;

        return <div>
            <Row>
                <Col span={12}>
                    <SchemaForm
                        key={"designForm" + "design"}
                        RootComponent={Form}
                        schemaId="design"
                        uiSchemas={uiSchema}
                        parentKeys={this.props.parentKeys}
                        globalOptions={globalOptionsOfDesign}
                        ajv={curAjv} >
                    </SchemaForm>
                </Col>
                <Col span={12}>
                    <SchemaForm
                        key={"designForm" + "design1"}
                        RootComponent={Form}
                        schemaId="design"
                        uiSchemas={uiSchema}
                        parentKeys={this.props.parentKeys}
                        globalOptions={globalOptionsOfDesign1}
                        ajv={curAjv} >
                    </SchemaForm>
                </Col>
            </Row>

            <button key={"submit" + isValidating + isValid}
                type="primary"
                onClick={this._validateAll}>
                validate is {isValid ? "true" : "false"}
            </button>
        </div>;
    }
}

