import React, { PureComponent, SyntheticEvent } from "react";
import { Input } from "antd";
import { DefaultProps } from "fx-schema-form-react/dist/dts/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/dts/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/dts/hocs/validate";


export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class AntdInputWidget extends PureComponent<AntdInputWidgetProps, any> {
    private _count = 0;
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            props.value = "";
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, parentKeys, schemaId, updateItemData, updateItemMeta, validate } = this.props;
        const { keys } = uiSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Input
                onBlur={(e: SyntheticEvent<HTMLInputElement>) => {
                    if (this._count > 0) {
                        updateItemMeta(this.props, e.currentTarget.value);
                    }
                }}
                onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                    this._count++;
                    updateItemData(this.props, e.currentTarget.value);
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...getOptions(this.props, "widget", "input") }
                {...this.setDefaultProps() }>
            </Input>
        );
    }
}
