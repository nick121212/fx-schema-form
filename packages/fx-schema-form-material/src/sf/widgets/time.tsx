import React, { PureComponent, SyntheticEvent, ChangeEvent, ReactNode } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";
import { TimePicker, DatePicker, DateTimePicker } from "material-ui-pickers";
import moment, { Moment } from "moment";
import { Icon, InputAdornment, Input, TextField } from "material-ui";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "time";

class DateWidgetTextComponent extends React.PureComponent<any> {
    public render() {
        const { ...extraProps } = this.props;

        return <TextField {...extraProps} component={({ children }: { children?: ReactNode }) => {
            return children;
        }} />;
    }
}


export class Widget extends PureComponent<Props, any> {
    private setDefaultProps(widgetOptions: any): any {
        const props: any = {}, { uiSchema } = this.props;

        if (this.props.formItemData !== undefined) {
            props.value = moment(this.props.formItemData, widgetOptions.options.format || "hh:mm:ss");
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
            <TimePicker
                inputProps={{
                    id: uiSchema.schemaPath
                }}
                label={getTitle(this.props)}
                TextFieldComponent={DateWidgetTextComponent}
                {...widgetOptions.options}
                {...this.setDefaultProps(widgetOptions)}
                error={isValid === false}
                onChange={(date: Moment) => {
                    let dateStr = date ? date.format(widgetOptions.options.format || "hh:mm:ss") : "";

                    updateItemData(this.props, dateStr);
                    updateItemMeta(this.props, dateStr);
                }} />
        );
    }
}

export default {
    [widgetKey]: Widget
};
