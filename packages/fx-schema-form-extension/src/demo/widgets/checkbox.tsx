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
            props.defaultChecked = false;
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemMeta } = this.props;
        const { keys } = uiSchema as FxUiSchema;
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
