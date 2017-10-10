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
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate } = this.props;
        const { switch: switcho = {} } = uiSchemaOptions.widget || {};
        const { switch: switchDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Switch, Object.assign({ onChange: (checked) => {
                validate(checked);
            }, disabled: readonly }, switchDefault, switcho, this.setDefaultProps())));
    }
}
//# sourceMappingURL=switch.js.map