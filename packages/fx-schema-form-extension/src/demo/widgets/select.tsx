import React, { PureComponent, SyntheticEvent } from "react";
import Select, { SelectValue } from "antd/lib/select";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";
import { fromJS } from "immutable";


export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class AntdSelectWidget extends PureComponent<AntdInputWidgetProps, any> {
    private _count = 0;
    private setDefaultProps(): any {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "select"]) : fromJS({}),
            widgetOptions = getOptions(this.props, "widget", "select",
                this.setDefaultProps(), metaOptions),
            props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "select"]) : fromJS({}),
            widgetOptions = getOptions(this.props, "widget", "select",
                this.setDefaultProps(), metaOptions);

        return (
            <Select
                onChange={async (value: SelectValue) => {
                    console.log(value);
                    updateItemData(this.props, value.toString(), await validate(this.props, value));
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...widgetOptions.options }
                {...this.setDefaultProps() }>
            </Select>
        );
    }
}
