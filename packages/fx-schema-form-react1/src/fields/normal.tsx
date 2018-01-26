import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";

import { DefaultProps, FxUiSchema } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { FieldHocOutProps } from "../hocs/field";

export interface NormalFieldProps extends DefaultProps, UtilsHocOutProps, FieldHocOutProps {

}

/**
 * 普通数据字段类型
 * 这里直接渲染[fieldHoc]中结算得出的WidgetComponent
 */
export class NormalField extends React.PureComponent<NormalFieldProps> {

    constructor(props: NormalFieldProps, context: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        const { WidgetComponent, FieldComponent, formItemMeta, formItemData, ...extraProps } = this.props;
        const fieldOptions = extraProps.getOptions(this.props, "field", "normal");
        const { keys } = extraProps.uiSchema as FxUiSchema;
        let WidgetComponentWithHoc = WidgetComponent;

        if (!WidgetComponent) {
            return null;
        }

        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
            WidgetComponentWithHoc = compose(
                ...fieldOptions.widgetHocs
            )(WidgetComponent);
        }

        return (
            <WidgetComponentWithHoc key={keys.join(".")} {...extraProps} />
        );
    }
}
