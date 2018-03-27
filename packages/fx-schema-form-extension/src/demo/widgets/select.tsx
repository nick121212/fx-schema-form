import React, { PureComponent, SyntheticEvent } from "react";
import Select, { SelectValue } from "antd/lib/select";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";


export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class AntdSelectWidget extends PureComponent<AntdInputWidgetProps, any> {
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.defaultValue = this.props.formItemData;
        }

        return { options: props };
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "select"]) : fromJS({}),
            widgetOptions = getOptions(this.props, "widget", "select", metaOptions);

        return (
            <Select
                onChange={async (value: SelectValue, option: any) => {
                    updateItemData(this.props, value, await validate(this.props, value));
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...widgetOptions.options}
                {...this.setDefaultProps()}/>
        );
    }
}
