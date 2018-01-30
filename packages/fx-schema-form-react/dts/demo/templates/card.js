import React from "react";
import { Card } from "antd";
export class AntdCardTemp extends React.PureComponent {
    render() {
        const { children, tempKey, getOptions, getTitle, initArrayComponent, formItemMeta, uiSchema, arrayLevel } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        let { isValid = true, errorText = "", collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        return (React.createElement(Card, Object.assign({ title: getTitle(this.props).toString() }, tempOptions.options, { extra: initArrayComponent ? initArrayComponent(this.props) : null }),
            collapsing ? React.createElement("span", null, "\u6298\u53E0\u4E2D") : children,
            isValid ? null : errorText));
    }
}
//# sourceMappingURL=card.js.map