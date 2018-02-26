import React, { PureComponent } from "react";
import { compose, shouldUpdate } from "recompose";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";

const { schemaFormTypes, SchemaForm } = schemaFormReact;

export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {

}

export const name = "tree";



/**
 * Object类型的字段解析
 * 嵌套一层SchemaForm
 */
export class TreeField extends PureComponent<ObjectFieldProps, any> {
    public render(): JSX.Element | null {
        const { arrayIndex, arrayLevel, parentKeys, globalOptions, formItemData,
            ajv, schemaId, getOptions, reducerKey, uiSchema } = this.props,
            options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc: any = SchemaForm,
            children: any[] = ["value"];

        // 如果children设置成null，则返回空
        if (!uiSchema || uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }

        // 如果需要对schemaform对hoc包装
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(SchemaForm as any);
        }

        if (formItemData) {
            if (formItemData.hasIn(["leftNode"])) {
                children.push({
                    key: "leftNode",
                    field: "tree"
                });
            }
            if (formItemData.hasIn(["rightNode"])) {
                children.push({
                    key: "rightNode",
                    field: "tree"
                });
            }
        }

        return (
            <SchemaFormWithHoc
                key={children.length}
                arrayIndex={arrayIndex}
                arrayLevel={arrayLevel}
                reducerKey={reducerKey}
                schemaId={uiSchema.schemaPath}
                uiSchemas={children}
                uiSchema={uiSchema}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }
}

export default {
    [name]: TreeField
};
