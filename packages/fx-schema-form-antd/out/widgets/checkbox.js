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
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate } = this.props;
        const { checkbox = {} } = uiSchemaOptions.widget || {};
        const { checkbox: checkboxDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Checkbox, Object.assign({ onChange: (e) => {
                validate(e.target.checked);
            }, disabled: readonly }, checkbox, checkboxDefault, this.setDefaultProps())));
    }
}
//# sourceMappingURL=checkbox.js.map