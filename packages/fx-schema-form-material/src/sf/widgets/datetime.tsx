import React, { PureComponent, SyntheticEvent, ChangeEvent, ReactNode } from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/libs/models";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";
import { TimePicker, DatePicker, DateTimePicker } from "material-ui-pickers";
import { Moment } from "moment";
import { Icon, InputAdornment, Input, TextField } from "material-ui";
import { TextFieldProps } from "material-ui/TextField";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "datetime";

class DateWidgetTextComponent extends React.PureComponent<TextFieldProps> {
    public render() {
        const { ...extraProps } = this.props;

        return <TextField {...extraProps} component={({ children }: { children?: any }) => {
            return children;
        }} />;
    }
}


export class Widget extends PureComponent<Props, any> {
    private setDefaultProps(): any {
        const props: any = {}, { uiSchema } = this.props;

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            props.value = null;
        }

        return props;
    }

    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta, parentKeys, schemaId, updateItemData, updateItemMeta, validate } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            isValid = formItemMeta ? formItemMeta.get("isValid") : true,
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({}),
            widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <DateTimePicker
                InputProps={{
                    inputProps: {
                        id: uiSchema.schemaPath
                    }
                }}
                label={getTitle(this.props)}
                TextFieldComponent={DateWidgetTextComponent}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
                error={isValid === false}
                onChange={(date: Moment) => {
                    let dateStr = date ? date.format(widgetOptions.options.format || "YYYY-MM-DD") : "";

                    updateItemData(this.props, dateStr);
                    updateItemMeta(this.props, dateStr);
                }} />
        );
    }
}

export default {
    [widgetKey]: Widget
};
