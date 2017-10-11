import React from "react";
import ReactDom from "react-dom";
import { Card, Button, Form } from "antd";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { SchemaForm, createForms, hocFactory, defaultTheme } from "./index";

const schema = {
    type: "object",
    title: "测试SCHEMA",
    required: ["name"],
    removeAdditional: true,
    properties: {
        name: { type: "string", "title": "昵称", "default": "nora", description: "昵称，必填" },
    }
};

let uiSchema: any = ["name"];

const globalOptions = {
    "ui:temp": ["formItem"],
    "formItem": {
        "hasFeedback": true,
        "labelCol": {
            "xs": { "span": 24 },
            "sm": { "span": 6 },
        },
        "wrapperCol": {
            "xs": { "span": 24 },
            "sm": { "span": 14 },
        },
    }
};
let reducer = createForms.createOne("test", {
    name: "nick"
});

let store = createStore<any>(combineReducers({
    test: reducer.reducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

ReactDom.render(
    <Provider store={store}>
        <SchemaForm schemaKey={"test"} schema={schema} RootComponent={Form} uiSchema={uiSchema} globalOptions={globalOptions}>
            <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                <Button onClick={() => {
                    reducer.actions.validateAllField.bind(reducer)();

                    if (store.getState().test.meta.data.isValid) {
                        alert("提交表单");
                    }

                }}>提交</Button>
            </Form.Item>
        </SchemaForm>
    </Provider>
    , document.getElementById("root"), console.log);
