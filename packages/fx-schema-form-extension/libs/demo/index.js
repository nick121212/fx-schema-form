import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "react-perf-tool/lib/styles.css";
import "../";
import { RouterComponent } from "./router";
const { SchemaForm, hocFactory, schemaFormDec } = schemaFormReact;
let store = createStore(combineReducers({
    "schemaForm": schemaFormReact.reducerFactory.get("schemaForm").reducer
}), Immutable.fromJS({}));
schemaFormReact.reducerFactory.get("schemaForm").init(store);
store.subscribe(() => {
    console.log(store.getState().toJS());
});
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(Router, null,
        React.createElement(RouterComponent, { key: "rootRouter" }))), document.getElementById("root"), () => {
    console.log("form ok!");
});
//# sourceMappingURL=index.js.map