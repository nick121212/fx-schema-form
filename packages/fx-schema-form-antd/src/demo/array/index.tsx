import React from "react";
import { Form, Button, Collapse, Row, Col } from "antd";
import { connect } from "react-redux";
import cloneDeep from "lodash.clonedeep";
import ReactCodeMirror from "react-codemirror";
import isEqual from "lodash.isequal";

import { createForms, SchemaForm, SchemaFormItemBaseProps, FormReducer, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
import { FormExampleReducer } from "../reducer/schema";
import { FormExampleCompnent } from "../components/form.example";
import { Dispatch } from "redux";

const Panel = Collapse.Panel;
let defaultSchema = {
    "$async": true,
    type: "object",
    required: [],
    properties: {
        array1: {
            $ref: "test#/properties/array1"
        }
    }
};

let settings = new FormExampleReducer({
    schema: cloneDeep(defaultSchema),
    uiSchema: ["*"]
});
let reducer: FormReducer<any> = createForms.createOne("array", {
    array1: [{
        test: "array_test", children: [{ test: "array_item_test" }]
    }]
}, ajv, defaultSchema);
let nextKey = "array";

@connect((state: any, props: SchemaFormItemBaseProps) => {
    let { meta, data } = state.get("array");
    let { schema, uiSchema } = state.get("arraySetting");

    return {
        isValid: meta.isValid,
        isLoading: meta.isLoading,
        meta: meta,
        data,
        schema,
        uiSchema
    };
}, (dispatch: Dispatch<any>) => {
    if (!settings.actions.updateData.assigned()) {
        settings.actions.updateData.assignTo(dispatch);
    }

    return {};
})
export class ArraySchemaFormComponent extends React.Component<any> {

    private async doSubmit(): Promise<void> {
        let metaData = SchemaFormCreate.metas.array;

        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
        reducer.actions.updateMetaState({
            isLoading: false,
            meta: await metaData.validateAll(this.props.data)
        });
        if (this.props.isValid) {
            alert("提交表单");
        }
    }

    public shouldComponentUpdate(nextProps, nextState) {
        if (!isEqual(this.props.schema, nextProps.schema) || !isEqual(this.props.uiSchema, nextProps.uiSchema)) {
            nextKey = "" + Date.now();
            ajv.removeSchema("array");
        }

        return true;
    }


    public render(): JSX.Element {
        const { isLoading, schema, uiSchema, data, meta } = this.props;
        const options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true,
            readOnly: true
        };

        return (
            <Collapse bordered={false} defaultActiveKey={["1", "2"]}>
                <Panel header={"meta 和 data"} key="2">
                    <Row>
                        <Col span={12}>
                            <ReactCodeMirror
                                key={Date.now()}
                                value={this.props.meta ? JSON.stringify(this.props.meta || {}, null, 4) : ""} options={options} />
                        </Col>
                        <Col span={12}>
                            <ReactCodeMirror
                                key={Date.now()}
                                value={data ? JSON.stringify(data || {}, null, 4) : ""} options={options} />
                        </Col>
                    </Row>
                </Panel>
                <Panel header={"生成的表单"} key="1">
                    <Row>
                        <Col span={16}>
                            <SchemaForm schemaKey={"array"}
                                schemaFormOptions={{
                                    ajv
                                }}
                                key={nextKey}
                                getCurrentState={(state, props) => {
                                    return state.get("array");
                                }}
                                schema={schema}
                                uiSchema={uiSchema}
                                RootComponent={Form}
                                globalOptions={globalOptions}>
                                <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                                    <Button type="primary" loading={isLoading} onClick={this.doSubmit.bind(this)}>提交</Button>
                                </Form.Item>
                            </SchemaForm>
                        </Col>
                        <Col span={8}>
                            <FormExampleCompnent
                                schema={JSON.stringify(schema, null, 4)}
                                data={JSON.stringify(data, null, 4)}
                                uiSchema={JSON.stringify(uiSchema, null, 4)}
                                onChangeData={reducer.actions.updateData.bind(reducer)}
                                onChange={settings.actions.updateData.bind(settings)} />
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        );
    }
}

export {
    reducer,
    settings
};
