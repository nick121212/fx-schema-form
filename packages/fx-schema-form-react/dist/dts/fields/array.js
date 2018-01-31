import React, { PureComponent } from "react";
import { SchemaForm } from "../components/form";
let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};
export class ArrayField extends PureComponent {
    renderItem(idx) {
        const { parentKeys, globalOptions, arrayLevel = [], ajv, ArrayItemComponent } = this.props, uiSchema = this.props.uiSchema;
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        return (React.createElement(SchemaForm, { key: idx, arrayIndex: idx, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    }
    render() {
        const { uiSchema, formItemData } = this.props, child = [];
        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }
        return React.createElement("div", { style: arrayFieldStyle }, child || null);
    }
}
//# sourceMappingURL=array.js.map