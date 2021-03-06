import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Select from "antd/lib/select";

import Immutable from "immutable";

import { globalOptions, curAjv } from "../init";

const { SchemaForm, schemaFormDec } = schemaFormReact;

// ReactDOM.findDOMNode()
const SelectOption: any = Select.Option;

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["oneOfForm"]
}) as any)
export class OneOfForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;

        if (!this.props.root) {
            return null;
        }

        return <div>
            <SchemaForm
                key={"designForm" + "design"}
                RootComponent={Form}
                schemaId={"dnd-oneof"}
                uiSchemas={[{
                    key: "type",
                    widget: "select",
                    options: Immutable.fromJS({
                        widget: {
                            select: {
                                options: {
                                    children: [1, 2, 3, 4].map((val: number, index: number) => {
                                        return (<SelectOption key={index} value={val}>{val}</SelectOption>) as any;
                                    })
                                }
                            }
                        }
                    })
                }, {
                    key: "value",
                    hocs: ["utils", "theme", "field", "validate", "oneOf", "array", "temp"],
                    options: Immutable.fromJS({
                        hoc: {
                            oneOf: {
                                condition: {
                                    paths: [{ path: "../type" }]
                                },
                                path: "../type",
                                key: "oneOf",
                                uiSchemas: {
                                    1: { schemaId: "dnd-oneof-number", uiSchemas: ["*"] },
                                    2: { schemaId: "dnd-oneof-string1", uiSchemas: ["*"] },
                                    3: { schemaId: "dnd-oneof-boolean", uiSchemas: ["*"] },
                                    4: {
                                        schemaId: "dnd-oneof-object", uiSchemas: [{
                                            key: "",
                                            temps: ["formitem"],
                                            children: ["*"]
                                        }]
                                    }
                                }
                            }
                        }
                    })
                }] as any}
                parentKeys={this.props.parentKeys}
                globalOptions={globalOptions}
                ajv={curAjv} >
            </SchemaForm>
            <div className="tc">
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
