import { Button } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { SchemaFormProps } from "fx-schema-form-react/libs/libs/dec";
import React from "react";
// import { compose, defaultProps } from "recompose";

import {  curAjv, globalOptions } from "../init";


const { SchemaForm } = schemaFormReact;

// @(compose(
//     defaultProps({
//         ajv: curAjv,
//         schemaId: "dashboard",
//         reducerKey: "schemaForm",
//         formKey: "dashboard",
//         shouldResetForm: true,
//         initData: {

//         }
//     }),
//     // hocFactory.get("asyncSchema"),
//     schemaFormDec({
//         rootReducerKey: ["schemaForm"],
//         parentKeys: ["dashboard"]
//     })) as any)
export class DashboardTestComponent extends React.PureComponent<SchemaFormProps & any, any> {

    public render() {
        const { parentKeys, schemaId, validateAll, isValid, resetForm } = this.props;

        if (!this.props.root) {
            return null;
        }

        return <>
            <SchemaForm
                schemaId={schemaId}
                uiSchemas={["*"]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={curAjv} />

            <Button className="mt3" onClick={async () => {
                if (validateAll) {
                    const { data: dataRaw, isValid: isValidRaw } = await validateAll();

                    console.log(dataRaw, isValidRaw);
                }
            }}>
                保存设置({String(isValid)})
            </Button>

            <Button onClick={() => {
                if (resetForm) {
                    resetForm();
                }
            }} className=" ml2 mt3">
                放弃
            </Button>

        </>;
    }
}
