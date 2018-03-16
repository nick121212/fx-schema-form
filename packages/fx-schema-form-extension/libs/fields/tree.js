import React, { PureComponent } from "react";
import { compose } from "recompose";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes, SchemaForm } = schemaFormReact;
export const name = "tree";
export class TreeField extends PureComponent {
    render() {
        const { arrayIndex, arrayLevel, parentKeys, globalOptions, formItemData, ajv, schemaId, getOptions, reducerKey, uiSchema } = this.props, options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc = SchemaForm, children = ["value"];
        if (!uiSchema || uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(SchemaForm);
        }
        if (formItemData) {
            if (formItemData.hasIn(["leftNode"])) {
                children.push({
                    key: "leftNode",
                    field: "tree"
                });
            }
            if (formItemData.hasIn(["rightNode"])) {
                children.push({
                    key: "rightNode",
                    field: "tree"
                });
            }
        }
        return (React.createElement(SchemaFormWithHoc, { key: children.length, arrayLevel: arrayLevel ? arrayLevel.concat([0]) : [0], reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: children, uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    }
}
export default {
    [name]: TreeField
};
//# sourceMappingURL=tree.js.map