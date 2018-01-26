import React from "react";
import { connect } from "react-redux";
import { shouldUpdate, compose, onlyUpdateForKeys } from "recompose";
import { Form, Input, Row, Col } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { FxUiSchema } from "../components/index";


export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}

export class AntdFormItemTemp extends React.PureComponent<AntdFormItemTempProps, any> {
    public render(): JSX.Element {
        const { children, arrayIndex, getOptions, getTitle, tempKey, formItemMeta } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        const { hasFeedback = true } = tempOptions;
        const uiSchema = this.props.uiSchema as FxUiSchema;
        let props: FormItemProps = {};
        let { dirty = false, isValid = true, errorText = "", isLoading = false } = formItemMeta ? formItemMeta.toJS() : {};

        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }

        if (isLoading) {
            props.validateStatus = "validating";
        }

        return (
            <Form.Item
                key={tempKey + isValid}
                required={uiSchema.isRequired}
                label={getTitle(this.props)}
                extra={uiSchema.description}
                hasFeedback={dirty && hasFeedback}
                help={isValid ? "" : errorText}
                {...props}
                {...tempOptions.options}>
                {children}
            </Form.Item>
        );
    }
}
