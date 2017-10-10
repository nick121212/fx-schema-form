import React from "react";
import { Card } from "antd";
export class AntdCardTemp extends React.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, arrayItems, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { dirty, isValid, errorText = "" } = meta;
        return (React.createElement(Card, Object.assign({}, tempOptions, { title: title || uiSchema.title, extra: arrayItems, bodyStyle: {
                "display": meta.isShow === false ? "none" : "block"
            } }),
            children,
            !isValid ? errorText : ""));
    }
}
//# sourceMappingURL=card.js.map