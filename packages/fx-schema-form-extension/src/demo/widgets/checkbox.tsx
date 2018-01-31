import React, { PureComponent, SyntheticEvent } from "react";

import { Checkbox } from "antd";
import { DefaultProps } from "fx-schema-form-react/dist/dts/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/dts/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/dts/hocs/validate";

export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class AntdCheckboxWidget extends PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps(): any {
        const { uiSchema } = this.props;
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.defaultChecked = false;
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemMeta } = this.props;
        const { keys } = uiSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Checkbox onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                updateItemMeta(this.props, (e.target as any).checked);
            }}
                disabled={readonly}
                {...getOptions(this.props, "widget", "checkbox") }
                {...this.setDefaultProps() }
            ></Checkbox>
        );
    }
}
