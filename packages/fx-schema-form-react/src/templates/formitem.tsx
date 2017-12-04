import React from "react";
import { connect } from "react-redux";
import { shouldUpdate, compose, onlyUpdateForKeys } from "recompose";
import isEqual from "lodash.isequal";
import { Form, Input, Row, Col } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

import { SchemaFormItemProps } from "../components/formitem";
import { mapMetaStateToProps } from "../hocs/select";

export interface AntdFormItemTempProps extends SchemaFormItemProps {
    tempKey: string;
}


@(compose(shouldUpdate(() => false),
    connect(mapMetaStateToProps),
    shouldUpdate((curProps: SchemaFormItemProps, nextProps: SchemaFormItemProps) => {
        return !isEqual(curProps.meta, nextProps.meta);
    })) as any)
export class AntdFormItemTemp extends React.PureComponent<AntdFormItemTempProps, any> {
    public render(): JSX.Element {
        const { children, arrayIndex, ItemButtons, mergeSchema, globalOptions = {}, tempKey, uiSchemaOptions,
            meta = { dirty: false, isValid: true, isLoading: false }
        } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { hasFeedback = false } = tempOptions;
        let props: FormItemProps = {};
        let { dirty = false, isValid = true, errorText = "", isLoading = false } = meta || {};

        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }

        if (isLoading) {
            props.validateStatus = "validating";
        }

        return (
            <Form.Item
                key={tempKey + isValid}
                required={mergeSchema.isRequired}
                label={mergeSchema.title || [].concat(mergeSchema.keys).pop()}
                extra={mergeSchema.description}
                help={isValid ? "" : errorText}
                hasFeedback={dirty && hasFeedback}
                {...props}
                {...tempOptions}>
                <Row type="flex">
                    <Col span={20}>{children}</Col>
                    <Col offset={1} span={3}>{ItemButtons && <ItemButtons />}</Col>
                </Row>
            </Form.Item>
        );
    }
}
