import React from "react";
import { HashRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import { DesignForm, children } from "./forms/design";
import { NormalForm } from "./forms/normal";
import { curAjv } from "./init";

/**
 * 路由元素
 */
export class RouterComponent extends React.Component<any, any> {
    public render() {
        return <div>
            <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="f6 fw6 ttu tracked">
                    <Link className="link dim white dib mr3" to="/form/design">design</Link>
                    <Link className="link dim white dib mr3" to="/form/normal">Normal</Link>
                    <Link className="link dim white dib mr3" to="#" title="Store">Store</Link>
                    <Link className="link dim white dib" to="#" title="Contact">Contact</Link>

                    <a className="dib fr" href="https://github.com/nick121212/fx-schema-form">GITHUB</a>
                </nav>
            </header>
            <div className="ma2">
                <Route path="/form/design" component={() => {
                    return <DesignForm ajv={curAjv} schemaId="design" formKey="designForm" initData={{ children }} />;
                }} />
                <Route path="/form/normal" component={() => {
                    return <NormalForm ajv={curAjv} schemaId="dnd-style" formKey="normalForm" initData={{
                        ids: [1, 2, 3]
                    }} />;
                }} />
                {/* <Route key="panel-create" path="/panel/create" component={CreateComponent} />, */}
                {/* <Route key="panel-edit" path="/panel/edit/:id" component={CreateComponent} />, */}
            </div>
        </div>;
    }
}

