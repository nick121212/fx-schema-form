import React from "react";
import { Checkbox } from "antd";
export class AntdCheckboxWidget extends React.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = mergeSchema.default;
        }
        return props;
    }
    render() {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData } = this.props;
        const { checkbox = {} } = uiSchemaOptions.widget || {};
        const { checkbox: checkboxDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (<Checkbox onChange={(e) => {
            updateItemData(e.target.checked);
            validate(e.target.checked);
        }} disabled={readonly} {...checkbox} {...checkboxDefault} {...this.setDefaultProps()}></Checkbox>);
    }
}
//# sourceMappingURL=checkbox.jsx.map