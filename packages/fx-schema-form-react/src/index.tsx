import React from "react";
import { Input } from "antd";
import ReactDOM from "react-dom";
import { JSONSchema6 } from "json-schema";

import { useSchemaForm } from "./hooks/form";
import { useSchemaFormItem } from "./hooks/formitem";

const testSchema: JSONSchema6 = {
    type: "object",
    $id: "test",
    required: [ "name" ],
    properties: {
        author: {
            type: "string"
        },
        version: {
            type: "string"
        },
        name: {
            type: "string"
        },
        list: {
            type: "array",
            items: {
                type: "string"
            }
        }
    }
};

function App() {
    const { formData, setFormData } = useSchemaForm<any>(
        "test",
        testSchema,
        {
            name: "fx-schema-form",
            version: "1.0.0",
            author: "NICK"
        },
        (data: any, delta: any) => {
            console.log("form Data has changed", data);
            console.log("changed items", delta);
        }
    );
    const author = useSchemaFormItem("test#/author", formData, setFormData);
    const version = useSchemaFormItem("test#/version", formData, setFormData);
    const name = useSchemaFormItem("test#/name", formData, setFormData);
    const list = useSchemaFormItem("test#/list", formData, setFormData);

    return (
        <React.Fragment>
            <span> Hello React </span>
            <br />

            <Input value={author.value} onChange={author.onChange} />
            <Input value={version.value} onChange={version.onChange} />
            <Input value={name.value} onChange={name.onChange} />

            <fieldset>
                <legend>{list.schema.title || list.schema.key}</legend>

                {list.value ? (
                    list.value.map(() => {
                        return <Input value={name.value} onChange={name.onChange} />;
                    })
                ) : null}
            </fieldset>
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
