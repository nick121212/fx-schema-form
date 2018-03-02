import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { fromJS } from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { Provider } from "react-redux";

import { HomeComponent, reducer, initActions } from "./modules/home";


const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

// 将schemaForm加入到store
let store = createStore<any>(combineReducers<any>({
    "schemaForm": reducerFactory.get("schemaForm").reducer as any,
    "modules": combineReducers({
        "home": reducer as any
    })
}), fromJS({}));
// 初始化reducer
reducerFactory.get("schemaForm").init(store);
// 监听数据的变化
store.subscribe(() => {
    console.log(store.getState().toJS());
});
initActions(store);

// 渲染数据
ReactDOM.render(
    <Provider store={store}>
        <HomeComponent />
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form ok!");
    });

