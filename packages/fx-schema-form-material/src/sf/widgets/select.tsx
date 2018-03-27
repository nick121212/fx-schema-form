import React, { PureComponent, SyntheticEvent, ChangeEvent } from "react";
import Immutable from "immutable";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/libs/models";
import { Input, Select, MenuItem } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "select";

export class Widget extends PureComponent<Props, any> {
    private setDefaultProps(widgetOptions: any): any {
        const props: any = {}, { uiSchema } = this.props;

        props.value = "";
        if (widgetOptions.options.multiple) {
            props.value = [];
        }

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
            if (Immutable.Map.isMap(props.value) || Immutable.List.isList(props.value)) {
                props.value = props.value.toJS();
            }
        }

        if (widgetOptions.children) {
            props.children = widgetOptions.children.map((c: any) => {
                return <MenuItem value={c.value}>{c.label}</MenuItem>;
            });
        }

        return props;
    }

    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta, parentKeys, schemaId, updateItemData,
            removeItemData, updateItemMeta, validate } = this.props,
            { keys = [], readonly = false } = uiSchema || {},
            isValid = formItemMeta ? formItemMeta.get("isValid") : true,
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({}),
            widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Select
                error={isValid === false}
                {...widgetOptions.options}
                {...this.setDefaultProps(widgetOptions)}
                onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                    let val = e.target.value;

                    updateItemData(this.props, val, await validate(this.props, val));
                }}
                inputProps={{
                    id: uiSchema.schemaPath
                }}/>
        );
    }
}

export default {
    [widgetKey]: Widget
};
