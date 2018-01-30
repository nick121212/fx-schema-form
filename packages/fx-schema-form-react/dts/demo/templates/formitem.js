import React from "react";
import { Form } from "antd";
export class AntdFormItemTemp extends React.PureComponent {
    render() {
        const { children, arrayIndex, getOptions, getTitle, tempKey, formItemMeta } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        const { hasFeedback = true } = tempOptions;
        const uiSchema = this.props.uiSchema;
        let props = {};
        let { dirty = false, isValid = true, errorText = "", isLoading = false } = formItemMeta ? formItemMeta.toJS() : {};
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
        }
        return (React.createElement(Form.Item, Object.assign({ key: uiSchema.keys.join() + tempKey + isValid, required: uiSchema.isRequired, label: getTitle(this.props), extra: uiSchema.description, hasFeedback: dirty && hasFeedback, help: isValid ? "" : errorText }, props, tempOptions.options), children));
    }
}
//# sourceMappingURL=formitem.js.map