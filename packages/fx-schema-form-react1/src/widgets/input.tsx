import React, { SyntheticEvent } from "react";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { Input } from "antd";
import { hocFactory } from "../factory";
import { FxUiSchema } from "../components/index";
import { schemaFormReducer } from "../reducer";
import { ValidateHocOutProps } from "../hocs/validate";

export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class AntdInputWidget extends React.PureComponent<AntdInputWidgetProps, any> {
    private _count = 0;
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            // props.defaultValue = mergeSchema.default;
            props.value = "";
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, parentKeys, schemaId, updateItemData, updateItemMeta, validate } = this.props;
        const { keys } = uiSchema as FxUiSchema;
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
