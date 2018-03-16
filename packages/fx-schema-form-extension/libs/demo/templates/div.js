import React, { PureComponent } from "react";
export class DivTemp extends PureComponent {
    render() {
        const { children, tempKey, getOptions, getTitle, initArrayComponent, formItemMeta } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey, formItemMeta ? formItemMeta.getIn(["options", "temp", tempKey]) : {});
        return (React.createElement("div", Object.assign({}, tempOptions.options), children));
    }
}
//# sourceMappingURL=div.js.map