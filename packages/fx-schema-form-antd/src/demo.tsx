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
                required: ["test"],
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

const uiSchema = ["name", {
    "key": "array1",
    "items": [{ key: "array1/-/test" }]
}];

const globalOptions = {
    "ui:temp": ["formItem"],
    "hoc": {
        "array": {
            createItemButtons: (props: any) => {
                return (
                    <div>
                        <Button type="primary" shape="circle" icon="plus" ghost={true} onClick={() => { props.addItem(); }}></Button>
                        <Button type="primary" shape="circle" icon="shrink" ghost={true} onClick={() => { props.toggleItem(); }}></Button>
                    </div>
                );
            },
            createItemChildButtons: (props: any, idx: number, maxLength: number) => {
                return (
                    <div>
                        <Button ghost={true} type="primary" shape="circle" icon="minus"
                            onClick={() => { props.removeItem(idx); }}></Button>
                        <Button ghost={true} type="primary" shape="circle" icon="arrow-up"
                            onClick={() => { props.switchItem(idx, idx - 1); }}></Button>
                        <Button ghost={true} type="primary" shape="circle" icon="arrow-down"
                            onClick={() => { props.switchItem(idx, idx + 1); }}></Button>
                    </div>
                );
            }
        }
    },
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
    },
    "row": {
        "type": "flex"
    },
    "col": {
        "xs": { "span": 24, "offset": 24 },
        "sm": { "span": 15, "offset": 5 },
    },
    "card": {
        "noHovering": true,
        "bordered": false
    },
    "array": {
        "ui:temp": ["row", "col", "card"]
    }
};
let reducer = createForms.createOne("test", {
    name: "nick", array1: [{
        test: "array_test", children: [{ test: "array_item_test" }]
    }, {
        test: "array_test1", children: [{ test: "array_item_test1" }]
    }, {
        test: "array_test2", children: [{ test: "array_item_test2" }]
    }]
});

let store = createStore(combineReducers({
    test: reducer.reducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

ReactDom.render(
    <Provider store={store}>
        <SchemaForm schemaKey={"test"} schema={schema} RootComponent={Form} uiSchema={uiSchema} globalOptions={globalOptions}>
            <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6 }}>
                <Button onClick={reducer.actions.validateAllField.bind(reducer)}>提交</Button>
            </Form.Item>
        </SchemaForm>
    </Provider>
    , document.getElementById("root"), console.log);
