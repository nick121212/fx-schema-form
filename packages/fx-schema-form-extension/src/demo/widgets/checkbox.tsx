import React, { PureComponent, SyntheticEvent } from "react";

import Checkbox from "antd/lib/checkbox";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";
import { fromJS } from "immutable";

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
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "checkbox"]) : fromJS({}),
            widgetOptions = getOptions(this.props, "widget", "checkbox",
                this.setDefaultProps(), metaOptions);

        return (
            <Checkbox onChange={async (e: SyntheticEvent<HTMLInputElement>) => {
                if (updateItemData) {
                    updateItemData(this.props, (e.target as any).checked, await validate(this.props, (e.target as any).checked));
                }
            }}
                disabled={readonly}
                {...widgetOptions.options } >
                {getTitle(this.props, metaOptions.get("options"))}
            </Checkbox>
        );
    }
}
