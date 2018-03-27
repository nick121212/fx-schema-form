import React, { PureComponent } from "react";
import { SchemaForm } from "../components/form";
import { schemaFormTypes } from "../models/index";
import { compose } from "recompose";
export const name = "object";
export class ObjectField extends PureComponent {
    render() {
        const { arrayIndex, arrayLevel, parentKeys, globalOptions, ajv, schemaId, getOptions, reducerKey, uiSchema } = this.props, options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc = SchemaForm;
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(SchemaForm);
        }
        return (React.createElement(SchemaFormWithHoc, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, RootComponent: options.Root, reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    }
}
export default {
    [name]: ObjectField
};
//# sourceMappingURL=object.js.map