import React from "react";
import { Form, Row, Col } from "antd";
export class AntdFormItemTemp extends React.Component {
    render() {
        const { children, arrayIndex, ItemButtons, mergeSchema, globalOptions = {}, tempKey, uiSchemaOptions, meta = { dirty: false, isValid: true, isLoading: false } } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { hasFeedback = false } = tempOptions;
        let props = {};
        let { dirty, isValid, errorText = "", isLoading = false } = meta;
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
        }
        return (<Form.Item required={mergeSchema.isRequired} label={mergeSchema.title || [].concat(mergeSchema.keys).pop()} extra={mergeSchema.description} help={isValid ? "" : errorText} hasFeedback={dirty && hasFeedback} {...props} {...tempOptions}>
                <Row type="flex">
                    <Col span={20}>{children}</Col>
                    <Col offset={1} span={3}>{ItemButtons && <ItemButtons />}</Col>
                </Row>
            </Form.Item>);
    }
}
//# sourceMappingURL=formitem.jsx.map