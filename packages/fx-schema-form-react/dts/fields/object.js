import React from "react";
import { SchemaForm } from "../components/form";
export class ObjectField extends React.PureComponent {
    render() {
        const uiSchema = this.props.uiSchema, { arrayIndex, arrayLevel, parentKeys, globalOptions, ajv, schemaId } = this.props;
        if (uiSchema.children === null) {
            return null;
        }
        return (React.createElement(SchemaForm, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    }
}
//# sourceMappingURL=object.js.map