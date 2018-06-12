import React, { PureComponent } from "react";
import { compose, shouldUpdate } from "recompose";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";

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
            // 如果用户点击了左节点，则push左节点的值
            if (formItemData.hasIn(["leftNode"])) {
                children.push({
                    key: "leftNode",
                    field: "tree"
                });
            }
            // 如果用户点击了右节点，则push右节点的值
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
                arrayLevel={arrayLevel ? arrayLevel.concat([0]) : [0]}
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
