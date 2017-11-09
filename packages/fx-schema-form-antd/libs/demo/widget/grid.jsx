import React from "react";
import { Col } from "antd";
export class AntdGridWidget extends React.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (typeof this.props.formItemData !== "number") {
        }
        else {
        }
        return props;
    }
    render() {
        const { mergeSchema, globalOptions, uiSchemaOptions, validate, updateItemData } = this.props;
        const { col = {} } = uiSchemaOptions.widget || {};
        const { col: colDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (<Col {...col} {...colDefault} {...this.setDefaultProps()}>
            </Col>);
    }
}
//# sourceMappingURL=grid.jsx.map