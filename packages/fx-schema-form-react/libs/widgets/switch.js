import React from "react";
import { Switch } from "antd";
export class AntdSwitchWidget extends React.Component {
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
        const { uiSchema = {} } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Switch, Object.assign({ onChange: (checked) => {
                updateItemData(checked);
                validate(checked);
            }, disabled: readonly }, getWidgetOptions("switch"), this.setDefaultProps())));
    }
}
//# sourceMappingURL=switch.js.map