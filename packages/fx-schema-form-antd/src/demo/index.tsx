import React from "react";
import ReactDom from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";

import { ajv, schemaFormOptions } from "./init";
import { reducer as arrayReducer, ArraySchemaFormComponent } from "./array";
import { Menu, Icon } from "antd";

let store = createStore<any>(combineReducers({
    "array": arrayReducer.reducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

ReactDom.render(
    <Provider store={store}>
        <Router>
            <div>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="mail" />主页</Link>
                    </Menu.Item>
                    <Menu.Item key="array">
                        <Link to="/array"><Icon type="mail" />无限极数组</Link>
                    </Menu.Item>
                    <Menu.Item key="object">
                        <Link to="/object"><Icon type="mail" />对象类型</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path="/" component={() => {
                    return <span>hello world</span>;
                }} />
                <Route path="/array" component={ArraySchemaFormComponent} />
                {/* <Route path="/topics" component={Topics} /> */}
            </div>
        </Router>
    </Provider>
    , document.getElementById("root"), console.log);
