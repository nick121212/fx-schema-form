import React from "react";
import { Form, Input } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

import { SchemaFormItemProps } from "../components/formitem";

export interface AntdFormItemTempProps extends SchemaFormItemProps {
    tempKey: string;
}

export class AntdFormItemTemp extends React.Component<AntdFormItemTempProps, any> {
    public render(): JSX.Element {
        const { children, arrayIndex, arrayItems, mergeSchema, globalOptions = {}, tempKey, uiSchemaOptions,
            meta = { dirty: false, isValid: true }
        } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { hasFeedback = false } = tempOptions;
        let props: FormItemProps = {};
        let { dirty, isValid, errorText = "" } = meta;

        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }

        return (
            <Form.Item
                required={mergeSchema.isRequired}
                label={mergeSchema.title || [].concat(mergeSchema.keys).pop()}
                extra={mergeSchema.description}
                help={isValid ? "" : errorText}
                hasFeedback={dirty && hasFeedback}
                {...props}
                {...tempOptions}>
                {children}
                {arrayItems}
            </Form.Item>
        );
    }
}
