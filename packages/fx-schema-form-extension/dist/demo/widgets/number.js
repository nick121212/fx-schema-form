import React, { PureComponent } from "react";
import InputNumber from "antd/lib/input-number";
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
        return props;
    }
    render() {
        const { getOptions, uiSchema, getTitle, parentKeys, schemaId, updateItemData, updateItemMeta, validate } = this.props;
        const { keys, readonly = false } = uiSchema;
        return (React.createElement(InputNumber, Object.assign({ style: style, onBlur: (e) => {
                if (this._count > 0) {
                    updateItemMeta(this.props, this.props.formItemData);
                }
            }, onChange: (val) => {
                this._count++;
                updateItemData(this.props, val);
            }, disabled: readonly, placeholder: getTitle(this.props) }, getOptions(this.props, "widget", "number").options, this.setDefaultProps())));
    }
}
//# sourceMappingURL=number.js.map