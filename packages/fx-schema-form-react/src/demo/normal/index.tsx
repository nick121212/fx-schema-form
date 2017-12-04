import React from "react";
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";
import Immutable from "immutable";

import { createForms, SchemaForm, SchemaFormItemBaseProps, FormReducer, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
import { shouldUpdate } from "recompose";

const Panel = Collapse.Panel;

let schema = ajv.getSchema("normal").schema;
let uiSchema: any = ["*"];

let reducer: FormReducer<any> = createForms.createOne("normal", {
    
}, {
        reducerKeys: []
    }, "immu", ajv, schema);

@(shouldUpdate(() => false) as any)
@connect((state: any, props: SchemaFormItemBaseProps) => {
    // let { meta, data } = state.get("normal").toJS();

    return {
        // isValid: state.getIn(["normal", "meta", "isValid"]),
        // isLoading: state.getIn(["normal", "meta", "isLoading"])
    };
})
export class NormalSchemaFormComponent extends React.Component<any> {
    private async doSubmit(): Promise<void> {
        let metaData = SchemaFormCreate.metas.normal;

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
            <Collapse bordered={false} defaultActiveKey={["1"]}>
                <Panel header={"生成的表单"} key="1">
                    <SchemaForm schemaKey={"normal"}
                        schemaFormOptions={schemaFormOptions}
                        schema={schema}
                        key="293993939"
                        reducerKeys={["normal"]}
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
