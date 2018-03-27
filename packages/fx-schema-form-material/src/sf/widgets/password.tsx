import React, { PureComponent, SyntheticEvent, ChangeEvent } from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/libs/models";
import { Input, Icon, InputAdornment, IconButton } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "password";

export class Widget extends PureComponent<Props, any> {
    private _count = 0;
    private setDefaultProps(): any {
        const props: any = {}, { uiSchema } = this.props;

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            props.value = "";
        }

        return props;
    }

    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta, parentKeys, schemaId,
            updateItemData, updateItemMeta, validate, formItemData } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            isValid = formItemMeta ? formItemMeta.get("isValid") : true,
            showPassword = formItemMeta ? formItemMeta.get("showPassword") : false,
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({}),
            widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Input
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => {
                                updateItemMeta(this.props, formItemData, {
                                    showPassword: !showPassword
                                });
                            }}>
                            <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                        </IconButton>
                    </InputAdornment>
                }
                inputProps={{
                    id: uiSchema.schemaPath,
                    type: showPassword ? "text" : "password"
                }}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
                error={isValid === false}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    this._count++;
                    updateItemData(this.props, e.target.value);
                }} onBlur={() => {
                    if (this._count > 0) {
                        this._count = 0;
                        updateItemMeta(this.props, this.props.formItemData);
                    }
                }} />
        );
    }
}

export default {
    [widgetKey]: Widget,
    "string": Widget,
    "default": Widget
};
