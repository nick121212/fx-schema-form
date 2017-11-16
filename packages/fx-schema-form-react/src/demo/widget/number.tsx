import React, { SyntheticEvent, ReactText } from "react";
import { InputNumber } from "antd";
import { InputNumberProps } from "antd/lib/input-number";

import { SchemaFormItemProps } from "./../../index";

export interface AntdInputNumberWidgetProps extends SchemaFormItemProps {
}

export class AntdInputNumberWidget extends React.Component<AntdInputNumberWidgetProps, any> {
    private setDefaultProps(): InputNumberProps {
        const { mergeSchema } = this.props;
        const props: InputNumberProps = {};

        if (typeof this.props.formItemData !== "number") {
            // props.value = NaN;
        } else {
            props.value = this.props.formItemData;
        }

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, globalOptions, uiSchemaOptions, validate, updateItemData } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <InputNumber
                onChange={(val: number) => {
                    updateItemData(val);
                    validate(val);
                }}
                style={{ width: "100%" }}
                disabled={readonly}
                placeholder={mergeSchema.title}
                {...input }
                {...inputDefault }
                {...this.setDefaultProps() }>
            </InputNumber >
        );
    }
}
