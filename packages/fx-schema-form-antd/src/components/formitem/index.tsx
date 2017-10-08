import React from "react";
import { compose } from "recompose";

import { SchemaFormItemBaseProps } from "./props";
import { hoc } from "./container";
import { FieldHocOutProps } from "./hocs/field";
import { ThemeHocOutProps } from "./hocs/theme";
import { ValidateHocOutProps } from "./hocs/validate";
import { ArrayHocOutProps } from "./hocs/array";


export interface SchemaFormItemProps
    extends SchemaFormItemBaseProps, FieldHocOutProps, ThemeHocOutProps, ValidateHocOutProps, ArrayHocOutProps {

}

/**
 * SchemaFormItem组件
 * 找到对应的field组件，渲染
 */
class SchemaFormItemComponent extends React.Component<SchemaFormItemProps, any> {
    public render(): JSX.Element | null {
        const { FieldComponent, mergeSchema } = this.props;
        const { uiSchema = {} } = mergeSchema;

        if (!FieldComponent) {
            console.log(mergeSchema, "没有找到匹配的field");
            return null;
        }

        return <FieldComponent {...this.props} />;
    }
}

export const SchemaFormItem = hoc(SchemaFormItemComponent);
