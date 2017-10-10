import React from "react";
import { Form } from "antd";
export class AntdFormItemTemp extends React.Component {
    render() {
        const { children, arrayIndex, arrayItems, mergeSchema, globalOptions = {}, tempKey, uiSchemaOptions, meta = { dirty: false, isValid: true } } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { hasFeedback = false } = tempOptions;
        let props = {};
        let { dirty, isValid, errorText = "" } = meta;
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        return (React.createElement(Form.Item, Object.assign({ required: mergeSchema.isRequired, label: mergeSchema.title || [].concat(mergeSchema.keys).pop(), extra: mergeSchema.description, help: isValid ? "" : errorText, hasFeedback: dirty && hasFeedback }, props, tempOptions),
            children,
            arrayItems && arrayItems()));
    }
}
//# sourceMappingURL=formitem.js.map