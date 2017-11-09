import React from "react";
import { Input } from "antd";
export class AntdInputWidget extends React.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }
        else {
            props.value = "";
        }
        return props;
    }
    render() {
        const { mergeSchema, globalOptions, uiSchemaOptions, validate, updateItemData, formItemData } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (<Input onBlur={() => {
            validate(formItemData);
        }} onChange={(e) => {
            updateItemData(e.currentTarget.value);
        }} disabled={readonly} placeholder={mergeSchema.title} {...input} {...inputDefault} {...this.setDefaultProps()}>
            </Input>);
    }
}
//# sourceMappingURL=input.jsx.map