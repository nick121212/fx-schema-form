import React, { SyntheticEvent, ReactText } from "react";
import { InputNumber } from "antd";
import { InputNumberProps } from "antd/lib/input-number";

import { SchemaFormItemProps } from "./index";

export interface AntdInputNumberWidgetProps extends SchemaFormItemProps {
}

export class AntdInputNumberWidget extends React.Component<AntdInputNumberWidgetProps, any> {
    private setDefaultProps(): InputNumberProps {
        const { mergeSchema } = this.props;
        const props: InputNumberProps = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            // props.value = null;
        }

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, schemaFormOptions, schemaKey, validate } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <InputNumber
                onChange={validate.bind(this)}
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
