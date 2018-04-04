import React from "react";
import schemaFormReact from "fx-schema-form-react";
import Form from "antd/lib/form";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Immutable from "immutable";
import Button from "antd/lib/button";
import propTypes from "prop-types";

import { globalOptions, curAjv, globalOptionsOfDesign, globalOptionsOfDesign1 } from "../init";
import div from "../dnd/div";
import checkbox from "../dnd/checkbox";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

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
                }, "*"]}
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
