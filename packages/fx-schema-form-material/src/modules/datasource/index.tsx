import React from "react";
import schemaFormReact from "fx-schema-form-react";

import Immutable from "immutable";
import propTypes from "prop-types";

import { globalOptions, curAjv } from "../../sf/init";
import { Portal } from "material-ui";
import { NoneComponent } from "../../common/components/none";
import { FormComponent } from "../../common/components/form";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["normalForm"]
}) as any)
export class NormalForm extends React.PureComponent<any> {
    public render() {
        const { isValidating = false, isValid = false, validateAll, parentKeys, resetForm } = this.props;

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
                schemaId={"dnd-style"}
                uiSchemas={[{
                    key: "",
                    title: "尺寸设置",
                    temps: ["formGroup"],
                    children: [{
                        key: "width"
                    }, {
                        key: "height"
                    }]
                }, {
                    key: "",
                    title: "基础设置",
                    temps: ["formGroup"],
                    children: ["textAlign", "font-size", "ids", "aaa"],
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
