import React, { PureComponent } from "react";

import { SchemaForm } from "../components/form";
import { DefaultProps } from "../components";
import { schemaFormTypes } from "../models";
import { UtilsHocOutProps } from "../hocs/utils";
import { compose } from "recompose";

export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {

}

export const name = "object";

/**
 * Object类型的字段解析
 * 嵌套一层SchemaForm
 */
export class ObjectField extends PureComponent<ObjectFieldProps, any> {
    public render(): JSX.Element | null {
        const { arrayIndex, arrayLevel, parentKeys, globalOptions, ajv, getOptions, reducerKey, uiSchema } = this.props,
            options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc: any = SchemaForm;

        // 如果children设置成null，则返回空
        if (!uiSchema || uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }

        // 如果需要对schemaform对hoc包装
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(SchemaForm as any);
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
