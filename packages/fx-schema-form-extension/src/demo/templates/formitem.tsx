import Col from "antd/lib/col";
import Form from "antd/lib/form";
import React, { PureComponent } from "react";
import Row from "antd/lib/row";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { compose, onlyUpdateForKeys, shouldUpdate } from "recompose";
import { connect } from "react-redux";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { FormItemProps } from "antd/lib/form/FormItem";
import { FxUiSchema } from "fx-schema-form-react/libs/models";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";

export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}

export class AntdFormItemTemp extends PureComponent<AntdFormItemTempProps, any> {
    public render(): JSX.Element {
        const { children, arrayIndex, getOptions, getTitle, tempKey, formItemMeta, initArrayComponent, } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        const uiSchema = this.props.uiSchema as FxUiSchema;
        let { hasFeedback = true } = tempOptions;
        let props: FormItemProps = {};
        let { dirty = false, isValid = true, errorText = "", isLoading = false } = formItemMeta ? formItemMeta.toJS() : {};

        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }

        if (isLoading) {
            props.validateStatus = "validating";
            hasFeedback = true;
        }

        return (
            <Form.Item
                key={(uiSchema.keys || []).join() + tempKey + isValid}
                required={uiSchema.isRequired}
                label={getTitle(this.props)}
                extra={uiSchema.description}
                hasFeedback={dirty && hasFeedback}
                help={isValid ? "" : errorText}
                {...props}
                {...tempOptions.options}>
                {children}
                {/* {initArrayComponent ? initArrayComponent(this.props) : null} */}
            </Form.Item>

        );
    }
}
