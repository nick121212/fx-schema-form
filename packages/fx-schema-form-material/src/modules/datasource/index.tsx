import React from "react";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import propTypes from "prop-types";
import { compose } from "recompose";

import { globalOptions, curAjv } from "../../sf/init";
import { Portal } from "material-ui";
import { NoneComponent } from "../../common/components/none";
import { FormComponent } from "../../common/components/form";
import { getSchema } from "../../modelproxy";
import asyncschema from "../../common/hoc/asyncschema";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

@(compose(asyncschema(), schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["normalForm"]
})) as any)
export class NormalForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll, parentKeys, resetForm, schemaId } = this.props;

        if (!this.props.root) {
            return null;
        }

        return <>
            <FormComponent
                key={"designForm" + "design"}
                title="测试表单"
                validateAll={validateAll}
                resetForm={resetForm}
                RootComponent={NoneComponent}
                schemaId={schemaId}
                uiSchemas={[{
                    key: "",
                    title: "尺寸设置",
                    temps: ["formGroup"],
                    children: [{
                        key: "width",
                        options: Immutable.fromJS({
                            widget: {
                                text: {
                                    options: {
                                        autoFocus: true
                                    }
                                }
                            }
                        })
                    }, {
                        key: "height",
                        widget: "password"
                    }, {
                        key: "aaa",
                        temps: ["card", "formGroup"],
                        options: Immutable.fromJS({
                            temp: {
                                card: {
                                    options: {
                                        className: "ml3 mr3 w-100",
                                        elevation: 0,
                                        raised: false
                                    }
                                }
                            }
                        }),
                        children: ["-"]
                    }]
                }, {
                    key: "",
                    title: "基础设置",
                    temps: ["formGroup"],
                    children: [{
                        key: "textAlign",
                        widget: "select",
                        options: Immutable.fromJS({
                            widget: {
                                select: {
                                    children: [
                                        { label: "None", value: "" },
                                        { label: "left", value: "left" },
                                        { label: "right", value: "right" },
                                        { label: "center", value: "center" }
                                    ]
                                }
                            }
                        }),
                    }, {
                        key: "font-size",
                        widget: "number",
                        hocs: ["utils", "theme", "field", "validate", "condition", "temp"],
                        options: Immutable.fromJS({
                            hoc: {
                                condition: {
                                    paths: [{ path: "../textAlign" }],
                                    hoc: hocFactory.get("show")({
                                        paths: ["../textAlign"]
                                    })
                                }
                            }
                        })
                    }, "ids"],
                    options: Immutable.fromJS({
                        temp: {
                            formGroup: {
                                options: {
                                    row: false
                                }
                            }
                        }
                    })
                }]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={curAjv} >
            </FormComponent>
        </>;
    }
}
