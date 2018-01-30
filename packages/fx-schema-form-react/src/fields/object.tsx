import React, { PureComponent } from "react";

import { SchemaForm } from "../components/form";
import { DefaultProps } from "../components";
import { FxUiSchema } from "../models";

export interface ObjectFieldProps extends DefaultProps {

}

/**
 * Object类型的字段解析
 * 嵌套一层SchemaForm
 */
export class ObjectField extends PureComponent<ObjectFieldProps, any> {
    public render(): JSX.Element {
        const uiSchema = this.props.uiSchema as FxUiSchema,
            { arrayIndex, arrayLevel, parentKeys, globalOptions, ajv, schemaId } = this.props;

        // 如果children设置成null，则返回空
        if (uiSchema.children === null) {
            return null;
        }

        return (
            <SchemaForm
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
