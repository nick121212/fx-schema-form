import React from "react";
import { Row } from "antd";
export class AntdRowTemp extends React.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (<Row {...tempOptions}>
                {children}
            </Row>);
    }
}
//# sourceMappingURL=row.jsx.map