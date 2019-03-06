import React, { ChangeEvent, useEffect } from "react";
import { Input, Button } from "antd";
import ReactDOM from "react-dom";

import { Delta } from "jsondiffpatch";

import { useSchemaForm } from "./hooks/form";
import { testSchema } from "./test-schema";

const initialData = {
    name: "fx-schema-form",
    version: "1.0.0",
    author: "NICK",
    listObj: [ { a: 0, b: 1 } ]
};

function App() {
    const { formItems } = useSchemaForm<any>("test", testSchema, initialData, (data: any, delta?: Delta) => {
        console.log("form Data has changed", data, delta);
    });
    const author = formItems.get("test/author")();
    const list = formItems.get("test/listObj")();
    const listItemA = formItems.get("test/listObj/-/a");
    const listItemB = formItems.get("test/listObj/-/b");

    useEffect(
        () => {
            console.log("name or version changed");
        },
        [ author.value ]
    );

    return (
        <React.Fragment>
            <span> Hello React </span>
            <br />
            <Input {...author} />

            <fieldset>
                <legend>
                    list
                    <button
                        onClick={() => {
                            list.addItem("1");
                        }}>
                        add
                    </button>
                </legend>

                <div>
                    {list.value ? (
                        list.value.map((val: any, i: number) => {
                            return (
                                <React.Fragment key={i.toString()}>
                                    <input {...listItemA([ i ])} />
                                    <input {...listItemB([ i ])} />
                                    <button
                                        onClick={() => {
                                            list.removeItem(i);
                                        }}>
                                        remove
                                    </button>
                                </React.Fragment>
                            );
                        })
                    ) : null}
                </div>
            </fieldset>
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
