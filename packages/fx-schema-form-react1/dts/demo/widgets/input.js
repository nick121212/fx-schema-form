import React from "react";
import { Input } from "antd";
export class AntdInputWidget extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._count = 0;
    }
    setDefaultProps() {
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
        const { getOptions, uiSchema, getTitle, parentKeys, schemaId, updateItemData, updateItemMeta, validate } = this.props;
        const { keys } = uiSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Input, Object.assign({ onBlur: (e) => {
                if (this._count > 0) {
                    updateItemMeta(this.props, e.currentTarget.value);
                }
            }, onChange: (e) => {
                this._count++;
                updateItemData(this.props, e.currentTarget.value);
            }, disabled: readonly, placeholder: getTitle(this.props) }, getOptions(this.props, "widget", "input"), this.setDefaultProps())));
    }
}
//# sourceMappingURL=input.js.map