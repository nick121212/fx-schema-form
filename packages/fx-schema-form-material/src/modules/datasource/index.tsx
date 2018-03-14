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
                    key: "city",
                    temps: ["formItem"],
                    hocs: ["utils", "theme", "field", "validate", "proxy", "temp"],
                    field: "normal",
                    widget: "select",
                    options: Immutable.fromJS({
                        hoc: {
                            proxy: {
                                proxyApi: getSchema,
                                options: {
                                    params: {
                                        id: "data.json"
                                    }
                                },
                                dataTo: ["options", "widget", "select", "children"],
                                dataFilter: (data: any) => {
                                    return data.map((val: any) => {
                                        return {
                                            label: val.name,
                                            value: val.code
                                        };
                                    });
                                }
                            }
                        },
                        widget: {
                            select: {
                                options: {
                                    multiple: true
                                }
                            }
                        }
                    })
                }, {
                    key: "textAlign",
                    hocs: ["utils", "theme", "field", "validate", "proxy", "temp"],
                    widget: "autocomplete",
                    options: Immutable.fromJS({
                        hoc: {
                            proxy: {
                                proxyApi: getSchema,
                                options: {
                                    params: {
                                        id: "data.json"
                                    }
                                },
                                dataTo: ["options", "widget", "autocomplete", "children"],
                                dataFilter: (data: any) => {
                                    return data.map((val: any) => {
                                        return {
                                            label: val.name,
                                            value: val.code
                                        };
                                    });
                                }
                            }
                        },
                        widget: {
                            autocomplete: {
                                options: {
                                    multiple: false
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
