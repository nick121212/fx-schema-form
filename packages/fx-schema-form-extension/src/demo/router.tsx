import React from "react";
import { HashRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import { DesignForm, children } from "./forms/design";
import { NormalForm } from "./forms/normal";
import { OneOfForm } from "./forms/oneof";
import { TreeForm } from "./forms/tree";
import { curAjv } from "./init";

/**
 * 路由元素
 */
export class RouterComponent extends React.Component<any, any> {
    public render() {
        return <div>
            <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="f6 fw6 ttu tracked">
                    <Link className="link dim white dib mr3" to="/form/design">所见即所得</Link>
                    <Link className="link dim white dib mr3" to="/form/normal">表单模式</Link>
                    <Link className="link dim white dib mr3" to="/form/oneof" title="OneOf">OneOf关键字</Link>
                    <Link className="link dim white dib" to="/form/tree" title="Tree">二叉树</Link>

                    <a className="dib fr" href="https://github.com/nick121212/fx-schema-form">GITHUB</a>
                </nav>
            </header>
            <div className="ma2">
                <Route path="/form/design" component={() => {
                    return <DesignForm ajv={curAjv} schemaId="design"
                        reducerKey="schemaForm"
                        formKey="designForm"
                        initData={{ children }} />;
                }} />
                <Route path="/form/normal" component={() => {
                    return <NormalForm ajv={curAjv} schemaId="dnd-style" reducerKey="schemaForm" formKey="normalForm" initData={{
                        ids: [1, 2, 3]
                    }} />;
                }} />
                <Route path="/form/oneof" component={() => {
                    return <OneOfForm ajv={curAjv} schemaId="dnd-oneof" reducerKey="schemaForm" formKey="oneOfForm" initData={{
                        type: 1
                    }} />;
                }} />
                <Route path="/form/tree" component={() => {
                    return <TreeForm ajv={curAjv} schemaId="dnd-tree" reducerKey="schemaForm" formKey="treeForm" initData={{}} />;
                }} />
                {/* <Route key="panel-create" path="/panel/create" component={CreateComponent} />, */}
                {/* <Route key="panel-edit" path="/panel/edit/:id" component={CreateComponent} />, */}
            </div>
        </div>;
    }
}

