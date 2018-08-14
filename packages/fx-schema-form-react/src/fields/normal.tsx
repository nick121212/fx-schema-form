import React, { PureComponent } from "react";
import { compose } from "recompose";

import { DefaultProps } from "../components";
import { FxUiSchema, schemaFormTypes } from "../models";
import { UtilsHocOutProps } from "../hocs/utils";
import { FieldHocOutProps } from "../hocs/field";

export interface NormalFieldProps extends DefaultProps, UtilsHocOutProps, FieldHocOutProps {

}

export const name = "normal";

/**
 * 普通数据字段类型
 * 这里直接渲染[fieldHoc]中结算得出的WidgetComponent
 */
export class NormalField extends PureComponent<NormalFieldProps> {
    public render(): JSX.Element | null {
        const { WidgetComponent, FieldComponent, formItemMeta, formItemData, ...extraProps } = this.props,
            fieldOptions = extraProps.getOptions(this.props, schemaFormTypes.field, name),
            { keys } = extraProps.uiSchema as FxUiSchema;
        let WidgetComponentWithHoc = WidgetComponent;

        if (!WidgetComponent || !keys) {
            return null;
        }

        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
            WidgetComponentWithHoc = (compose(
                ...fieldOptions.widgetHocs
            ) as any)(WidgetComponent);
        }

        return (
            <WidgetComponentWithHoc key={keys.join(".")} {...extraProps} />
        );
    }
}

export default {
    [name]: NormalField,
    default: NormalField
};
