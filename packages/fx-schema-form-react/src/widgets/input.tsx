import React, { SyntheticEvent } from "react";
import { Input, Icon } from "antd";
import { InputProps } from "antd/lib/input/Input";

import { SchemaFormItemProps } from "../components/formitem";
import { onlyUpdateForKeys } from "recompose";

export interface AntdInputWidgetProps extends SchemaFormItemProps {
}

@(onlyUpdateForKeys(["formItemData"]) as any)
export class AntdInputWidget extends React.Component<AntdInputWidgetProps, any> {
    private setDefaultProps(): InputProps {
        const { mergeSchema } = this.props;
        const props: InputProps = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            // props.defaultValue = mergeSchema.default;
            props.value = "";
        }

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, globalOptions, uiSchemaOptions,
            updateItemData, updateItemMeta, formItemData, getWidgetOptions } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Input
                onBlur={(e: SyntheticEvent<HTMLInputElement>) => {
                    // updateItemData(e.currentTarget.value);
                    updateItemMeta(formItemData);
                }}
                onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                    updateItemData(e.currentTarget.value);
                }}
                disabled={readonly}
                placeholder={mergeSchema.title}
                {...getWidgetOptions("input") }
                {...this.setDefaultProps() }>
            </Input>
        );
    }
}
