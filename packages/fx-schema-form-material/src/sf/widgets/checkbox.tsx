import React, { PureComponent, SyntheticEvent, ChangeEvent } from "react";
import { defaultProps } from "recompose";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";
import { Checkbox, FormControlLabel } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import NumberFormat from "react-number-format";
import { fromJS } from "immutable";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "checkbox";

export class Widget extends PureComponent<Props, any> {
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }

        return props;
    }

    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta, parentKeys, schemaId, updateItemData, updateItemMeta, validate } = this.props,
            { keys= [], readonly = false } = uiSchema || {},
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({}),
            widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <FormControlLabel control={
                <Checkbox {...widgetOptions.options}
                    {...this.setDefaultProps()}
                    onChange={async (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
                        updateItemData(this.props, checked, await validate(this.props, checked));
                    }} />
            }
            label={getTitle(this.props)}
          />
        );
    }
}

export default {
    [widgetKey]: Widget,
    "boolean": Widget
};
