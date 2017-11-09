import React from "react";
import { Card } from "antd";
export class AntdCardTemp extends React.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, ItemButtons, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { dirty, isValid, errorText = "" } = meta;
        return (<Card title={title || uiSchema.title} extra={ItemButtons ? <ItemButtons /> : ""} bodyStyle={{
            "display": meta.isShow === false ? "none" : "block"
        }} {...tempOptions}>
                {children}
                {!isValid ? errorText : ""}
            </Card>);
    }
}
//# sourceMappingURL=card.jsx.map