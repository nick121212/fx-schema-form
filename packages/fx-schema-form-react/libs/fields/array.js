import React, { PureComponent } from "react";
import { compose } from "recompose";
import { schemaFormTypes } from "../models/index";
import { SchemaForm } from "../components/form";
let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};
class ArrayFieldComponent extends React.PureComponent {
    render() {
        return React.createElement("div", { style: arrayFieldStyle }, this.props.children);
    }
}
export const name = "array";
export class ArrayField extends PureComponent {
    constructor(props) {
        super(props);
        this.SchemaFormWithHoc = ArrayFieldComponent;
        this.initComponent();
    }
    initComponent() {
        const { uiSchema, formItemData, getOptions } = this.props, options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc = null, SchemaFormItemWithHoc = null;
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(options.ArrayFieldComponent || ArrayFieldComponent);
        }
        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            SchemaFormItemWithHoc = compose(...options.formItemHocs)(SchemaForm);
        }
        this.SchemaFormWithHoc = SchemaFormWithHoc;
        this.SchemaFormItemWithHoc = SchemaFormItemWithHoc;
    }
    renderItem(idx) {
        const { parentKeys, globalOptions, getOptions, arrayLevel = [], getRequiredKeys, ajv, reducerKey, ArrayItemComponent } = this.props, uiSchema = this.props.uiSchema, options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc = this.SchemaFormItemWithHoc || SchemaForm;
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        return (React.createElement(SchemaFormWithHoc, { key: idx, index: idx, arrayIndex: idx, uiSchema: uiSchema, RootComponent: options.Root, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    }
    render() {
        const { uiSchema, formItemData, getOptions, getRequiredKeys } = this.props, child = [], options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc = this.SchemaFormWithHoc;
        const extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);
        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }
        return React.createElement(SchemaFormWithHoc, Object.assign({ children: child }, extraProps));
    }
}
export default {
    [name]: ArrayField
};
//# sourceMappingURL=array.js.map