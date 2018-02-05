import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Immutable from "immutable";
import Button from "antd/lib/button";
import propTypes from "prop-types";

import { gloabelOptions, curAjv, globalOptionsOfDesign } from "./init";

const { SchemaForm, hocFactory, schemaFormDec } = schemaFormReact;
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
        return <div>
            <SchemaForm
                key={"designForm" + "design"}
                RootComponent={Form}
                schemaId="design"
                uiSchemas={[{
                    key: "children",
                    field: "design"
                }]}
                parentKeys={this.props.parentKeys}
                globalOptions={globalOptionsOfDesign}
                ajv={curAjv} >
            </SchemaForm>
            <Button key={"submit"} type="primary" onClick={this.props.validateAll} loading={this.props.isValidating}>
                validate is {this.props.isValid ? this.props.isValid.toString() : "false"}
            </Button>
        </div>;
    }
}

