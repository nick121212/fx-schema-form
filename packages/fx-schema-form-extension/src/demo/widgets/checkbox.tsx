import React, { PureComponent, SyntheticEvent } from "react";

import Checkbox from "antd/lib/checkbox";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";

export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class AntdCheckboxWidget extends PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps(): any {
        const { uiSchema } = this.props;
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.checked = false;
        }

        return { options: props };
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemData, validate, formItemMeta } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            widgetOptions = getOptions(this.props, "widget", "checkbox",
                this.setDefaultProps(),
                formItemMeta ? formItemMeta.getIn(["options", "widget", "checkbox"]) : {});

        return (
            <Checkbox onChange={async (e: SyntheticEvent<HTMLInputElement>) => {
                if (updateItemData) {
                    updateItemData(this.props, (e.target as any).checked, await validate(this.props, (e.target as any).checked));
                }
            }}
                disabled={readonly}
                {...widgetOptions.options } />
        );
    }
}
