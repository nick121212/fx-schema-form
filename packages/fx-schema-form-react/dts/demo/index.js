var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { Form, Button } from "antd";
import { design } from "./schemas";
import "antd/dist/antd.css";
import "react-perf-tool/lib/styles.css";
import { reducerFactory, SchemaForm, schemaFormDec } from "../index";
import { gloabelOptions, curAjv } from "./init";
let designResolve = new ResolveLib(curAjv, design);
let actions = reducerFactory.get("schemaForm").actions;
let store = createStore(combineReducers({
    "schemaForm": reducerFactory.get("schemaForm").reducer
}), Immutable.fromJS({}));
for (const key in actions) {
    if (actions.hasOwnProperty(key)) {
        const element = actions[key];
        element.assignTo(store);
    }
}
let dsModelIds = [];
for (let i = 0; i > 0; i--) {
    dsModelIds.unshift({
        name: "nick" + i,
        password: "password" + i + i
    });
}
let start = performance.now();
actions.createForm({
    key: "designForm",
    data: {
        dsModelIds: dsModelIds
    }
});
let TestForm = class TestForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this._validateAll = props.validateAll.bind(this);
    }
    render() {
        return React.createElement(SchemaForm, { key: "designForm" + "design", RootComponent: Form, schemaId: "design", uiSchemas: ["*"], parentKeys: ["designForm"], globalOptions: gloabelOptions, ajv: curAjv },
            React.createElement(Button, { onClick: this._validateAll }, "validate"));
    }
};
TestForm = __decorate([
    schemaFormDec({
        rootReducerKey: ["schemaForm"],
        parentKeys: ["designForm"]
    }),
    __metadata("design:paramtypes", [Object])
], TestForm);
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement("div", null,
        React.createElement(TestForm, { ajv: curAjv, schemaId: "design" }))), document.getElementById("root"), () => {
    console.log("首次渲染form所用时间：", performance.now() - start);
});
//# sourceMappingURL=index.js.map