# react-schema-form-antd

通过[json-schema](http://jsonschema.net/),[ui-schema](#custoization-ui-schema),以及[antd](https://ant.design/index-cn)自动生成表单组件。

> 组件之间的功能组合使用hoc来实现。

## 目录

- [安装](#installation)
    - [npm](#installation-npm)
    - [cdn](#installation-cdn)
- [依赖项](#dependencies)
- [使用](#usage)
    - [初始化表单](#usage-form)
- [表单定制化](#custoization)
    - [uiSchema配置](#custoization-ui-schema)
    - [供选择的表单组件](#custoization-widget)
        - [input](#custoization-widget-input)
        - [select](#custoization-widget-select)
        - [number](#custoization-widget-number)
        - [redio](#custoization-widget-redio)
    - [模板](#custoization-temps)
    - [HOCS](#custoization-hocs)
    - [字段类型](#custoization-fields)
- [高级配置](#advanced-customization)
    - [自定义字段](#advanced-customization-field)
    - [自定义模板](#advanced-customization-temp)
    - [自定义组件](#advanced-customization-widget)
- [验证](#validation)
    - [本地验证](validation-local)
    - [远程验证](validation-remote)
- [关于JsonSchema](#about-json-schema)
- [License](#license)

## <span id="installation">安装</span>

Requires React 15.0.0+.
> Note: 当前使用*tsc -d*来编译，代码为es6代码;
>

### <span id="installation-npm">通过npm来安装</span>

``` 
$ npm install fx-schema-form-antd --save
```
> Note: 当前组件库默认使用了antd的样式，你也可以使用其他样式来代替。

### <span id="installation-cdn">cdn</span>

> Note: 暂时没有cdn。

## <span id="dependencies">依赖项</span>

- JsonSchema
- antd
- redux
- higher order component
- react-redux
- recompose
- react-act
- avj
- json-pointer

## <span id="usage">使用</span>

``` jsx
import React from "react";
import ReactDom from "react-dom";
import { Card, Button, Form } from "antd";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { SchemaForm, createForms, hocFactory, defaultTheme } from "./index";

const schema = {
    type: "object",
    title: "测试SCHEMA",
    required: [ "name"],
    removeAdditional: true,
    properties: {
        name: { 
            type: "string", 
            title: "昵称", 
            default: "nora", 
            description: "昵称，必填" 
        }
    }
};

let uiSchema: any = ["name"];

const globalOptions = {
    "ui:temp": ["formItem"]
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
```
如果配置正确，会看到如下图效果：
![](./images/normal.jpg)

## <span id="license">License</span>

Apache 2