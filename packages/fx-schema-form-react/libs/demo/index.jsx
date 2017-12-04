import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import Immutable from "immutable";
import ReactPerfTool from "react-perf-tool";
import Perf from "react-addons-perf";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.less";
import "react-perf-tool/lib/styles.css";
import { reducer as normalReducer, NormalSchemaFormComponent } from "./normal";
import { Menu, Icon } from "antd";
var store = createStore(combineReducers({
    "normal": normalReducer.reducer,
}), Immutable.fromJS({}));
store.subscribe(function () {
    console.log(store.getState().toJS());
});
ReactDom.render(<Provider store={store}>
        <Router>
            <div>
                <div style={{ display: "none" }}>
                    <ReactPerfTool perf={Perf}/>
                </div>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="mail"/>主页</Link>
                    </Menu.Item>
                    <Menu.Item key="array">
                        <Link to="/array"><Icon type="mail"/>无限极数组</Link>
                    </Menu.Item>
                    <Menu.Item key="object">
                        <Link to="/object"><Icon type="mail"/>对象类型</Link>
                    </Menu.Item>
                    <Menu.Item key="custom.hoc">
                        <Link to="/custom.hoc"><Icon type="mail"/>自定义HOC</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path="/" component={NormalSchemaFormComponent}/>
                
            </div>
        </Router>
    </Provider>, document.getElementById("root"), console.log);
//# sourceMappingURL=index.jsx.map