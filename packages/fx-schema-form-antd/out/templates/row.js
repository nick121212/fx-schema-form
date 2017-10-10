import React from "react";
import { Row } from "antd";
export class AntdRowTemp extends React.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (React.createElement(Row, Object.assign({}, tempOptions), children));
    }
}
//# sourceMappingURL=row.js.map