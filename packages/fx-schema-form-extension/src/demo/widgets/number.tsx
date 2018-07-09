import React, { PureComponent, SyntheticEvent } from "react";
import InputNumber from "antd/lib/input-number";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";


export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

const style = {
    width: "100%"
};

export class AntdInputNumberWidget extends PureComponent<AntdInputWidgetProps, any> {
    private _count = 0;
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            props.value = 0;
        }

        console.log( props.value);

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, formItemMeta, updateItemData, updateItemMeta } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "number"]) : fromJS({});

        const { readonly = false } = uiSchema as FxUiSchema;

        console.log(getOptions(this.props, "widget", "number", metaOptions).options);

        return (
            <InputNumber
                style={style}
                onBlur={(_e: SyntheticEvent<HTMLInputElement>) => {
                    if (this._count > 0) {
                        updateItemMeta(this.props, this.props.formItemData);
                    }
                }}
                onChange={(val: number) => {
                    this._count++;
                    updateItemData(this.props, val);
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...getOptions(this.props, "widget", "number", metaOptions).options}
                {...this.setDefaultProps()}>
            </InputNumber>
        );
    }
}
