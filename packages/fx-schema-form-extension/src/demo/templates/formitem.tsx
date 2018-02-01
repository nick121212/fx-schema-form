import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { shouldUpdate, compose, onlyUpdateForKeys } from "recompose";
import { Form, Input, Row, Col } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";


export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}

export class AntdFormItemTemp extends PureComponent<AntdFormItemTempProps, any> {
    public render(): JSX.Element {
        const { children, arrayIndex, getOptions, getTitle, tempKey, formItemMeta, initArrayComponent, } = this.props;
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
                key={(uiSchema.keys || []).join() + tempKey + isValid}
                required={uiSchema.isRequired}
                label={getTitle(this.props)}
                extra={uiSchema.description}
                hasFeedback={dirty && hasFeedback}
                help={isValid ? "" : errorText}
                {...props}
                {...tempOptions.options}>

                <Row>
                    <Col span={20}>{children}</Col>
                    <Col span={4}>{initArrayComponent ? initArrayComponent(this.props) : null}</Col>
                </Row>
            </Form.Item>
        );
    }
}
