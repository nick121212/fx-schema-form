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
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData, getWidgetOptions } = this.props;
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Checkbox, Object.assign({ onChange: (e) => {
                updateItemData(e.target.checked);
                validate(e.target.checked);
            }, disabled: readonly }, getWidgetOptions("checkbox"), this.setDefaultProps())));
    }
}
//# sourceMappingURL=checkbox.js.map