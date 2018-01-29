import React from "react";
import { Checkbox } from "antd";
export class AntdCheckboxWidget extends React.PureComponent {
    setDefaultProps() {
        const { uiSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = false;
        }
        return props;
    }
    render() {
        const { getOptions, uiSchema } = this.props;
        const { keys } = uiSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Checkbox, Object.assign({ onChange: (e) => {
            }, disabled: readonly }, getOptions(this.props, "widget", "checkbox"), this.setDefaultProps())));
    }
}
//# sourceMappingURL=checkbox.js.map