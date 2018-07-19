import React, { PureComponent } from "react";
import Input from "antd/lib/input";
export class AntdInputWidget extends PureComponent {
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
        const { getOptions, uiSchema, getTitle, updateItemData, updateItemMeta } = this.props;
        const { readonly = false } = uiSchema;
        return (React.createElement(Input, Object.assign({ onBlur: (_e) => {
                if (this._count > 0) {
                    updateItemMeta(this.props, this.props.formItemData);
                }
            }, onChange: (e) => {
                this._count++;
                updateItemData(this.props, e.currentTarget.value);
            }, disabled: readonly, placeholder: getTitle(this.props) }, getOptions(this.props, "widget", "input").options, this.setDefaultProps())));
    }
}
//# sourceMappingURL=input.js.map