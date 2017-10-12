import React from "react";
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";

import { createForms, SchemaForm, SchemaFormItemBaseProps } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";

const Panel = Collapse.Panel;

let reducer = createForms.createOne("array", {
    array1: [{
        test: "array_test", children: [{ test: "array_item_test" }]
    }]
});

let schema = {
    "$async": true,
    type: "object",
    required: [],
    properties: {
        array1: {
            $ref: "test#/properties/array1"
        }
    }
};
let schema1 = {
    "$async": true,
    "type": "object",
    "properties": {
        "userId": {
            "type": "string",
            "idExists": { "table": "users" }
        },
        "postId": {
            "type": "string",
            "idExists": { "table": "posts" }
        }
    }
};


let uiSchema: any = ["*"];

@connect((state: any, props: SchemaFormItemBaseProps) => {
    let { meta, data } = state.array;

    return {
        isValid: meta.data.isValid,
        meta: meta,
        data
    };
})
export class ArraySchemaFormComponent extends React.Component<any> {
    public render(): JSX.Element {
        return (
            <Collapse bordered={false} defaultActiveKey={["1", "4"]}>
                <Panel header={"schema"} key="2">
                    {JSON.stringify(schema)}
                </Panel>
                <Panel header={"data"} key="3">
                    {this.props.data ? JSON.stringify(this.props.data) : {}}
                </Panel>
                <Panel header={"meta"} key="4">
                    {this.props.meta ? JSON.stringify(this.props.meta.data || {}) : {}}
                </Panel>
                <Panel header={"生成的表单"} key="1">
                    <SchemaForm schemaKey={"array"}
                        schemaFormOptions={schemaFormOptions}
                        schema={schema}
                        RootComponent={Form} uiSchema={uiSchema}
                        globalOptions={globalOptions}>
                        <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                            <Button onClick={async () => {
                                reducer.actions.validateAllField(await this.props.meta.validateAll(this.props.data));
                                setTimeout(() => {
                                    if (this.props.isValid) {
                                        alert("提交表单");
                                    }
                                }, 100);
                            }}>{this.props.isValid}提交</Button>
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
