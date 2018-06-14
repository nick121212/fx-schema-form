import React from "react";
import { Route, Link } from "react-router-dom";
import { DatePicker } from "antd";
import { DesignForm, children } from "./forms/design";
import { NormalForm } from "./forms/normal";
import { OneOfForm } from "./forms/oneof";
import { TreeForm } from "./forms/tree";
import { curAjv } from "./init";
export class RouterComponent extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("header", { className: "bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l" },
                React.createElement("nav", { className: "f6 fw6 ttu tracked" },
                    React.createElement(Link, { className: "link dim white dib mr3", to: "/form/design" }, "\u6240\u89C1\u5373\u6240\u5F97"),
                    React.createElement(Link, { className: "link dim white dib mr3", to: "/form/normal" }, "\u8868\u5355\u6A21\u5F0F"),
                    React.createElement(Link, { className: "link dim white dib mr3", to: "/form/oneof", title: "OneOf" }, "OneOf\u5173\u952E\u5B57"),
                    React.createElement(Link, { className: "link dim white dib", to: "/form/tree", title: "Tree" }, "\u4E8C\u53C9\u6811"),
                    React.createElement("a", { className: "dib fr", href: "https://github.com/nick121212/fx-schema-form" }, "GITHUB"))),
            React.createElement("div", { className: "ma2" },
                React.createElement(Route, { path: "/form/design", component: () => {
                        return React.createElement(DesignForm, { ajv: curAjv, schemaId: "design", reducerKey: "schemaForm", formKey: "designForm", initData: { children } });
                    } }),
                React.createElement(Route, { path: "/form/normal", component: () => {
                        return React.createElement(NormalForm, { ajv: curAjv, schemaId: "dnd-style", reducerKey: "schemaForm", formKey: "normalForm", initData: {
                                ids: [1, 2, 3]
                            } });
                    } }),
                React.createElement(Route, { path: "/form/oneof", component: () => {
                        return React.createElement(OneOfForm, { ajv: curAjv, schemaId: "dnd-oneof", reducerKey: "schemaForm", formKey: "oneOfForm", initData: {
                                type: 1
                            } });
                    } }),
                React.createElement(Route, { path: "/form/tree", component: () => {
                        return React.createElement(TreeForm, { ajv: curAjv, schemaId: "dnd-tree", reducerKey: "schemaForm", formKey: "treeForm", initData: {} });
                    } })),
            React.createElement(DatePicker, { showTime: { format: "HH:mm" }, format: "YYYY-MM-DD HH:mm" }));
    }
}
//# sourceMappingURL=router.js.map