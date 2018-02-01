import React, { PureComponent } from "react";

import { SchemaForm } from "../components/form";
import { DefaultProps } from "../components";
import { FxUiSchema } from "../models";
import { UtilsHocOutProps } from "../hocs/utils";
import { compose } from 'recompose';

export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {

}

/**
 * Object类型的字段解析
 * 嵌套一层SchemaForm
 */
export class ObjectField extends PureComponent<ObjectFieldProps, any> {
    public render(): JSX.Element | null {
        const uiSchema = this.props.uiSchema as FxUiSchema,
            { arrayIndex, arrayLevel, parentKeys, globalOptions, ajv, schemaId, getOptions } = this.props,
            options = getOptions(this.props, "field", "object");
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
                schemaId={uiSchema.schemaPath}
                uiSchemas={uiSchema.children || ["*"]}
                uiSchema={uiSchema}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }
}
