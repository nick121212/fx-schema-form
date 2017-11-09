var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import { Form, Button, Collapse, Row, Col } from "antd";
import { connect } from "react-redux";
import cloneDeep from "lodash.clonedeep";
import ReactCodeMirror from "react-codemirror";
import isEqual from "lodash.isequal";
import Immutable from "immutable";
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, globalOptions } from "../init";
import { FormExampleReducer } from "../reducer/schema";
import { FormExampleCompnent } from "../components/form.example";
const Panel = Collapse.Panel;
let defaultSchema = {
    "$async": true,
    type: "object",
    required: [],
    properties: {
        array1: {
            $ref: "array"
        }
    }
};
let settings = new FormExampleReducer({
    schema: cloneDeep(defaultSchema),
    uiSchema: ["*"]
});
let reducer = createForms.createOne("array", {}, ajv, defaultSchema, (state) => {
    return {
        originMeta: state.get("meta").toJS(),
        originData: state.get("data").toJS()
    };
}, (state, data) => {
    if (Immutable.Map.isMap(state)) {
        return state.merge(data);
    }
    return Immutable.fromJS(data);
});
let nextKey = "array";
let ArraySchemaFormComponent = class ArraySchemaFormComponent extends React.Component {
    doSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            let metaData = SchemaFormCreate.metas.array;
            try {
                reducer.actions.updateMetaState({ isLoading: true, isValid: false });
                reducer.actions.updateMetaState({
                    isLoading: false,
                    meta: yield metaData.validateAll(this.props.data)
                });
            }
            catch (e) {
                console.log("dfdfdfdf", e);
            }
            if (this.props.isValid) {
                alert("提交表单");
            }
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!isEqual(this.props.schema, nextProps.schema) || !isEqual(this.props.uiSchema, nextProps.uiSchema)) {
            nextKey = "" + Date.now();
            ajv.removeSchema("array");
        }
        return true;
    }
    render() {
        const { isLoading, schema, uiSchema, data, meta, schemaForm } = this.props;
        const options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true,
            readOnly: true
        };
        return (<Collapse bordered={false} defaultActiveKey={["1", "2"]}>
                <Panel header={"meta 和 data"} key="2">
                    <Row>
                        <Col span={12}>
                            <ReactCodeMirror key={Date.now()} value={this.props.meta ? JSON.stringify(this.props.meta || {}, null, 4) : ""} options={options}/>
                        </Col>
                        <Col span={12}>
                            <ReactCodeMirror key={Date.now()} value={data ? JSON.stringify(data || {}, null, 4) : ""} options={options}/>
                        </Col>
                    </Row>
                </Panel>
                <Panel header={"生成的表单"} key="1">
                    <Row>
                        <Col span={16}>
                            <SchemaForm schemaKey={"array"} schemaFormOptions={{
            ajv
        }} key={"dddd"} getCurrentState={(state, props) => {
            return state.get("array").toJS();
        }} schema={schema} uiSchema={uiSchema} RootComponent={Form} globalOptions={globalOptions}>
                                <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                                    <Button type="primary" loading={isLoading} onClick={this.doSubmit.bind(this)}>提交</Button>
                                </Form.Item>
                            </SchemaForm>
                        </Col>
                        <Col span={8}>
                            <FormExampleCompnent schema={JSON.stringify(schema, null, 4)} data={JSON.stringify(data, null, 4)} uiSchema={JSON.stringify(uiSchema, null, 4)} onChangeData={reducer.actions.updateData.bind(reducer)} onChange={settings.actions.updateData.bind(settings)}/>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>);
    }
};
ArraySchemaFormComponent = __decorate([
    connect((state, props) => {
        let schemaForm = state.get("array").toJS();
        let { schema, uiSchema } = state.get("arraySetting");
        return {
            isValid: schemaForm.meta.isValid,
            isLoading: schemaForm.meta.isLoading,
            meta: schemaForm.meta,
            data: schemaForm.data,
            schemaForm,
            schema,
            uiSchema
        };
    }, (dispatch) => {
        if (!settings.actions.updateData.assigned()) {
            settings.actions.updateData.assignTo(dispatch);
        }
        return {};
    })
], ArraySchemaFormComponent);
export { ArraySchemaFormComponent };
export { reducer, settings };
//# sourceMappingURL=index.jsx.map