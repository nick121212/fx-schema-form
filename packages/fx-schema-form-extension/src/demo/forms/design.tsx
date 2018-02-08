import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Immutable from "immutable";
import Button from "antd/lib/button";
import propTypes from "prop-types";

import { curAjv, globalOptionsOfDesign, globalOptionsOfDesign1 } from "../init";
import div from "../dnd/div";
import checkbox from "../dnd/checkbox";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

const uiSchema = [{
    key: "children",
    field: "design"
}];

let children: any = [];

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
@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["designForm"]
}) as any)
export class DesignForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;

        if (!this.props.root) {
            return null;
        }

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
            <div className="tc">
                <button key={"submit" + isValidating + isValid}
                    type="primary"
                    className="pa2 mt5 ba b--dashed bg-gray"
                    onClick={this.props.validateAll}>
                    validate is {isValid ? "true" : "false"}
                </button>
            </div>
        </div>;
    }
}

export {
    children
};
