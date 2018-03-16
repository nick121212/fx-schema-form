import Form from "antd/lib/form";
import React, { PureComponent } from "react";
export class AntdFormItemTemp extends PureComponent {
    render() {
        const { children, arrayIndex, getOptions, getTitle, tempKey, formItemMeta, initArrayComponent, } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        const uiSchema = this.props.uiSchema;
        let { hasFeedback = true } = tempOptions;
        let props = {};
        let { dirty = false, isValid = true, errorText = "", isLoading = false } = formItemMeta ? formItemMeta.toJS() : {};
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
            hasFeedback = true;
        }
        return (React.createElement(Form.Item, Object.assign({ key: (uiSchema.keys || []).join() + tempKey + isValid, required: uiSchema.isRequired, label: getTitle(this.props), extra: uiSchema.description, hasFeedback: dirty && hasFeedback, help: isValid ? "" : errorText }, props, tempOptions.options), children));
    }
}
//# sourceMappingURL=formitem.js.map