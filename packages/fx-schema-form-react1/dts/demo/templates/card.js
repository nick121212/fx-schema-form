import React from "react";
import { Card } from "antd";
export class AntdCardTemp extends React.PureComponent {
    render() {
        const { children, tempKey, getOptions, getTitle } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        return (React.createElement(Card, Object.assign({ title: getTitle(this.props).toString() }, tempOptions.options), children));
    }
}
//# sourceMappingURL=card.js.map