import React from "react";
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";

import { createForms, SchemaForm, SchemaFormItemBaseProps } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";

const Panel = Collapse.Panel;

let reducer = createForms.createOne("normal", {

});

let schema = ajv.getSchema("test").schema;

let uiSchema: any = ["*"];

@connect((state: any, props: SchemaFormItemBaseProps) => {
    let { meta, data } = state.normal;

    return {
        isValid: meta.data.isValid,
        meta: meta,
        data
    };
})
export class NormalSchemaFormComponent extends React.Component<any> {
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
                    <SchemaForm schemaKey={"normal"}
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
                            }}>提交</Button>
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
