import React, { SyntheticEvent } from "react";
import { Input, Icon } from "antd";
import { InputProps } from "antd/lib/input/Input";

import { SchemaFormItemProps } from "../components/formitem";

export interface AntdInputWidgetProps extends SchemaFormItemProps {
}

export class AntdInputWidget extends React.Component<AntdInputWidgetProps, any> {
    public componentDidMount(): void {
        console.log("input mounted!");
    }
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
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, schemaFormOptions, schemaKey, validate } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Input onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                validate(e.currentTarget.value);
            }}
                disabled={readonly}
                placeholder={mergeSchema.title}
                {...input}
                {...inputDefault}
                {...this.setDefaultProps() }>
            </Input>
        );
    }
}
