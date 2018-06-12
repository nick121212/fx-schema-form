import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";

import Immutable from "immutable";

import { globalOptions, curAjv } from "../init";

const { SchemaForm, schemaFormDec } = schemaFormReact;

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["normalForm"]
}) as any)
export class NormalForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll } = this.props;

        if (!this.props.root) {
            return null;
        }

        return <div>
            <SchemaForm
                key={"designForm" + "design"}
                RootComponent={Form}
                schemaId={"dnd-style"}
                uiSchemas={[{
                    key: "width",
                    hocs: ["utils", "theme", "field", "validate", "changed", "temp"],
                    options: Immutable.fromJS({
                        hoc: {
                            changed: {
                                paths: ["../height"],
                                condition: {
                                    paths: [{
                                        path: "../height"
                                    }]
                                },
                                onChanged: (props: any, data: any) => {
                                    let height = props.getPathKeys(props.uiSchema.keys as any, "../height").join("/");

                                    if (data[height] !== undefined) {
                                        // props.updateItemData(props, data[height]);
                                    }
                                }
                            }
                        }
                    })
                }, {
                    key: "height",
                    hocs: ["utils", "theme", "field", "validate", "copyToMeta", "temp"],
                    options: Immutable.fromJS({
                        hoc: {
                            copyToMeta: {
                                condition: {
                                    paths: [{ path: "../width" }]
                                },
                                paths: [{ path: "../width", defaultValue: 0, to: ["options", "widget", "number", "options", "max"] }]
                            }
                        }
                    })
                }, "isEighteen", {
                    key: "textAlign",
                    hocs: ["utils", "theme", "field", "validate", "show", "temp"],
                    options: Immutable.fromJS({
                        hoc: {
                            show: {
                                condition: {
                                    paths: [{ path: "../isEighteen" }]
                                },
                                paths: ["../isEighteen"]
                            }
                        }
                    })
                }, "*"] as any}
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
        </div>;
    }
}
