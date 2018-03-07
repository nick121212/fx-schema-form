import React, { PureComponent, SyntheticEvent, ChangeEvent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";
import { Input } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "number";

export class Widget extends PureComponent<Props, any> {
    private _count = 0;
    private setDefaultProps(): any {
        const props: any = {}, { uiSchema } = this.props;

        props.value = "";
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }

        return props;
    }

    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta, parentKeys, schemaId, updateItemData,
            removeItemData, updateItemMeta, validate } = this.props,
            { keys= [], readonly = false } = uiSchema || {},
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({}),
            widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Input {...widgetOptions.options}
                {...this.setDefaultProps()}
                id={uiSchema.schemaPath}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    let val: any = e.currentTarget.value;

                    val = val ? Number(e.currentTarget.value) : Number.NaN;

                    if (Number.isNaN(val)) {
                        return removeItemData(this.props);
                    }

                    this._count++;
                    updateItemData(this.props, val);
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
    "integer": Widget,
    "float": Widget
};
