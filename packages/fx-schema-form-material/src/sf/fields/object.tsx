import React, { PureComponent } from "react";

import { compose } from "recompose";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import schemaFormReact from "fx-schema-form-react";

const { SchemaForm, schemaFormTypes } = schemaFormReact;

export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {

}

export const name = "object";

/**
 * Object类型的字段解析
 * 嵌套一层SchemaForm
 */
export class ObjectField extends PureComponent<ObjectFieldProps, any> {
    public render(): JSX.Element | null {
        const { arrayIndex, arrayLevel, parentKeys, globalOptions, ajv, schemaId, getOptions, reducerKey, uiSchema } = this.props,
            options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc: any = SchemaForm;

        // 如果children设置成null，则返回空
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }

        // 如果需要对schemaform对hoc包装
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(SchemaForm);
        }

        return (
            <SchemaFormWithHoc
                arrayIndex={arrayIndex}
                arrayLevel={arrayLevel}
                RootComponent={options.Root}
                reducerKey={reducerKey}
                schemaId={uiSchema.schemaPath}
                uiSchemas={uiSchema.children || ["*"]}
                uiSchema={uiSchema}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }
}

export default {
    [name]: ObjectField
};
