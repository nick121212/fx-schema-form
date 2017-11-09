import React from "react";
import { hoc } from "./container";
class SchemaFormItemComponent extends React.PureComponent {
    render() {
        const { FieldComponent, mergeSchema } = this.props;
        const { uiSchema = {} } = mergeSchema;
        if (!FieldComponent) {
            console.log(mergeSchema, "没有找到匹配的field");
            return null;
        }
        return <FieldComponent {...this.props}/>;
    }
}
export const SchemaFormItem = hoc(SchemaFormItemComponent);
//# sourceMappingURL=index.jsx.map