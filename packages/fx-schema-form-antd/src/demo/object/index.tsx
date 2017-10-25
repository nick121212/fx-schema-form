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
            $ref: "test#/properties/object"
        },
        name: {
            $ref: "test#/properties/name"
        }
    }
};
let uiSchema: any = [
    "name",
    {
        title: "纯容器（使用card），包装2个item",
        field: "object",
        "ui:temp": ["card"],
        "ui:item.hoc": ["theme", "field", "array", "temp"],
        items: ["object/settings", {
            "key": "name"
        }],
        options: {
            card: {
                extra: <span>我就测试下属性的覆盖情况</span>,
                bordered: true
            }
        }
    },
    "object",
    "object/settings"];

let reducer: FormReducer<any> = createForms.createOne("object", {
}, ajv, schema);

@connect((state: any, props: SchemaFormItemBaseProps) => {
    let { meta, data } = state.get("object");

    return {
        isValid: meta.isValid,
        isLoading: meta.isLoading,
        meta: meta,
        data
    };
})
export class ObjectSchemaFormComponent extends React.Component<any> {

    private async doSubmit(): Promise<void> {
        let metaData = SchemaFormCreate.metas.object;

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
                <Panel header={"data"} key="3">
                    {this.props.data ? JSON.stringify(this.props.data) : {}}
                </Panel>
                <Panel header={"meta"} key="4">
                    {this.props.meta ? JSON.stringify(this.props.meta || {}) : {}}
                </Panel>
                <Panel header={"生成的表单"} key="1">
                    <div>这里有2个switch组件，2个是同一个字段，但是字段的路径不同。UiSchema：["object", "object/settings"]</div>
                    <SchemaForm schemaKey={"object"}
                        schemaFormOptions={schemaFormOptions}
                        schema={schema}
                        getCurrentState={(state, props) => {
                            return state.get("object");
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
