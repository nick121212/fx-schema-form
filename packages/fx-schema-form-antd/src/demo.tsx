import React from "react";
import ReactDom from "react-dom";
import { Card, Button, Form } from "antd";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { SchemaForm, createForms } from "./index";

const schema = {
    type: "object",
    title: "测试SCHEMA",
    required: ["array", "name"],
    properties: {
        name: { type: "string", "title": "昵称", "default": "nora", description: "昵称，必填" },
        number: { type: "number", "title": "测试number类型" },
        integer: { type: "integer", "title": "测试integer类型" },
        boolean: { type: "boolean", "title": "测试boolean类型", default: true },
        array: { type: "array", items: { type: "string", "title": "测试array类型ITEM", minLength: 3 }, "title": "测试array类型" },
        object: {
            type: "object",
            properties: {
                settings: { type: "boolean", default: true }
            }
        },
        array1: {
            type: "array",
            title: "测试无限极数组类型",
            items: {
                type: "object",
                properties: {
                    test: { type: "string", title: "无限极测试数据" },
                    children: { $ref: "test#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型" },
        muti: { type: ["string", "integer", "number"], "title": "测试多类型" }
    }
};

const uiSchema = [{
    "key": "array",
    "items": [{
        "key": "array/-",
        // "ui:temp": []
    }]
}, {
    "key": "array1"
}];

const globalOptions = {
    "ui:temp": ["formItem"],
    "formItem": {
        "labelCol": {
            "xs": { "span": 24 },
            "sm": { "span": 6 },
        },
        "wrapperCol": {
            "xs": { "span": 24 },
            "sm": { "span": 14 },
        },
    },
    "row": {
        "type": "flex"
    },
    "col": {
        "xs": { "span": 24, "offset": 24 },
        "sm": { "span": 24, "offset": 0 },
    },
    "array": {
        "ui:temp": ["row", "col", "card"]
    }
};

let store = createStore(combineReducers(createForms({
    "test": { name: "nick" }
})));

store.subscribe(() => {
    console.log(store.getState());
});
ReactDom.render(
    <Provider store={store}>
        <SchemaForm schemaKey={"test"} schema={schema} RootComponent={Form} uiSchema={uiSchema} globalOptions={globalOptions}>
            <Button>dfadf</Button>
        </SchemaForm>
    </Provider>
    , document.getElementById("root"), console.log);
