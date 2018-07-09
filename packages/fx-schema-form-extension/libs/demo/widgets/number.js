import React, { PureComponent } from "react";
import InputNumber from "antd/lib/input-number";
import { fromJS } from "immutable";
const style = {
    width: "100%"
};
export class AntdInputNumberWidget extends PureComponent {
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
            props.value = 0;
        }
        console.log(props.value);
        return props;
    }
    render() {
        const { getOptions, uiSchema, getTitle, formItemMeta, updateItemData, updateItemMeta } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "number"]) : fromJS({});
        const { readonly = false } = uiSchema;
        console.log(getOptions(this.props, "widget", "number", metaOptions).options);
        return (React.createElement(InputNumber, Object.assign({ style: style, onBlur: (_e) => {
                if (this._count > 0) {
                    updateItemMeta(this.props, this.props.formItemData);
                }
            }, onChange: (val) => {
                this._count++;
                updateItemData(this.props, val);
            }, disabled: readonly, placeholder: getTitle(this.props) }, getOptions(this.props, "widget", "number", metaOptions).options, this.setDefaultProps())));
    }
}
//# sourceMappingURL=number.js.map