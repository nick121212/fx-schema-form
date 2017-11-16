import React from "react";
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";

import { createForms, SchemaForm, SchemaFormItemBaseProps, FormReducer, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";

const Panel = Collapse.Panel;
let schema = {
    "$async": true,
    type: "object",
    required: ["name"],
    properties: {
        object: {
            default: {},
            $ref: "test#/properties/object"
        },
        name: {
            $ref: "test#/properties/name"
        }
    }
};
let uiSchema: any = [{
    "key": "name",
    "ui:item.hoc": ["theme", "field", "validate", "array", "condition", "temp"],
    "options": {
        "hoc": {
            "condition": {
                "fields": [{ "key": "/object/settings", "val": true }]
            }
        }
    }
}, "object/settings"];

let reducer: FormReducer<any> = createForms.createOne("custom.hoc", {
}, ajv, schema);

@connect((state: any, props: SchemaFormItemBaseProps) => {
    let { meta, data } = state.get("custom.hoc");

    return {
        isValid: meta.isValid,
        isLoading: meta.isLoading,
        meta: meta,
        data
    };
})
export class CustomHocSchemaFormComponent extends React.Component<any> {

    private async doSubmit(): Promise<void> {
        let metaData = SchemaFormCreate.metas["custom.hoc"];

        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
        reducer.actions.updateMetaState({
            isLoading: false,
            meta: await metaData.validateAll(this.props.data)
        });
        if (this.props.isValid) {
            alert("提交表单");
        }
    }

    public render(): JSX.Element {
        const { isLoading } = this.props;

        return (
            <Collapse bordered={false} defaultActiveKey={["1", "4"]}>
                <Panel header={"schema"} key="2">
                    {JSON.stringify(schema)}
                </Panel>
                <Panel header={"uiSchema"} key="5">
                    {uiSchema ? JSON.stringify(uiSchema || {}) : {}}
                </Panel>
                <Panel header={"data"} key="3">
                    {this.props.data ? JSON.stringify(this.props.data) : {}}
                </Panel>
                <Panel header={"meta"} key="4">
                    {this.props.meta ? JSON.stringify(this.props.meta || {}) : {}}
                </Panel>
                <Panel header={"生成的表单"} key="1">
                    {<div>这里的name字段，只有当switch未开的时候才会显示</div>}
                    <SchemaForm schemaKey={"custom.hoc"}
                        schemaFormOptions={schemaFormOptions}
                        schema={schema}
                        getCurrentState={(state, props) => {
                            return state.get("custom.hoc");
                        }}
                        RootComponent={Form} uiSchema={uiSchema}
                        globalOptions={globalOptions}>
                        <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                            <Button type="primary" loading={isLoading} onClick={this.doSubmit.bind(this)}>提交</Button>
                        </Form.Item>
                    </SchemaForm>
                </Panel>
            </Collapse>
        );
    }
}

export {
    reducer
};
