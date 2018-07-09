import React from "react";
import { compose } from "recompose";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
const arrayFieldStyle = {
    width: "100%",
    height: "100%"
};
class DesignFieldComponent extends React.PureComponent {
    render() {
        return React.createElement("div", { style: arrayFieldStyle }, this.props.children);
    }
}
export const name = "design";
export class DesignField extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.SchemaFormWithHoc = DesignFieldComponent;
        this.SchemaFormItemWithHoc = SchemaForm;
        this.initComponent();
    }
    initComponent() {
        const { getOptions } = this.props, options = getOptions(this.props, schemaFormTypes.field, name);
        if (options.formHocs && options.formHocs.constructor === Array && options.formHocs.length) {
            this.SchemaFormWithHoc = compose(...options.formHocs)(DesignFieldComponent);
        }
        if (options.formItemHocs && options.formItemHocs.constructor === Array && options.formItemHocs.length) {
            this.SchemaFormItemWithHoc = compose(...options.formItemHocs)(SchemaForm);
        }
    }
    renderItem(idx) {
        const { parentKeys, globalOptions, arrayLevel = [], ajv, ArrayItemComponent, reducerKey } = this.props, uiSchema = this.props.uiSchema;
        let SchemaFormWithHoc = this.SchemaFormItemWithHoc;
        return (React.createElement(SchemaFormWithHoc, { key: idx, index: idx, arrayIndex: idx, reducerKey: reducerKey, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchemas: [{
                    key: "-/children",
                    field: name
                }], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    }
    render() {
        const { formItemData, getOptions, getRequiredKeys, children } = this.props, child = [], options = getOptions(this.props, "field", name);
        let SchemaFormWithHoc = this.SchemaFormWithHoc;
        const extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);
        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }
        return React.createElement(SchemaFormWithHoc, Object.assign({ children: [...child, children] }, extraProps));
    }
}
export default {
    [name]: DesignField
};
//# sourceMappingURL=design.js.map