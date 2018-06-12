import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";

import { treeGlobalOptions, curAjv } from "../init";

const { SchemaForm, schemaFormDec } = schemaFormReact;

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
                }] as any}
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
