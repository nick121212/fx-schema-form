import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Select from "antd/lib/select";

import Immutable from "immutable";
import Button from "antd/lib/button";
import propTypes from "prop-types";

import { treeGlobalOptions, curAjv } from "../init";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["treeForm"]
}) as any)
export class TreeForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll, data } = this.props;

        if (!this.props.root) {
            return null;
        }

        return <div>
            <SchemaForm
                key={"designForm" + "design"}
                RootComponent={Form}
                schemaId={"dnd-tree"}
                uiSchemas={[{
                    key: "root",
                    field: "tree"
                }]}
                arrayLevel={[0]}
                parentKeys={this.props.parentKeys}
                globalOptions={treeGlobalOptions}
                ajv={curAjv} >
            </SchemaForm>
            <div className="tc">

                <textarea cols={30} rows={10} onChange={() => console.log}
                    value={JSON.stringify(data.toJS(), null, 4)}>
                </textarea>

                <button key={"submit" + isValidating + isValid}
                    type="primary"
                    className="pa3 mt5 ba b--dashed w-90"
                    onClick={this.props.validateAll}>
                    validate is {isValid ? "true" : "false"}
                </button>
            </div>
        </div >;
    }
}
