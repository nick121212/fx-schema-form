import React from "react";
import { InputNumber } from "antd";
export class AntdInputNumberWidget extends React.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (typeof this.props.formItemData !== "number") {
        }
        else {
            props.value = this.props.formItemData;
        }
        return props;
    }
    render() {
        const { mergeSchema, globalOptions, uiSchemaOptions, validate, updateItemData } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (<InputNumber onChange={(val) => {
            updateItemData(val);
            validate(val);
        }} style={{ width: "100%" }} disabled={readonly} placeholder={mergeSchema.title} {...input} {...inputDefault} {...this.setDefaultProps()}>
            </InputNumber>);
    }
}
//# sourceMappingURL=number.jsx.map