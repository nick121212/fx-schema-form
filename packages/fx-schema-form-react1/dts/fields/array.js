import React from "react";
import { SchemaForm } from "../components/form";
let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};
export class ArrayField extends React.PureComponent {
    renderItem(idx) {
        const { parentKeys, globalOptions, arrayLevel = [], ajv } = this.props, uiSchema = this.props.uiSchema;
        if (uiSchema.children === null) {
            return null;
        }
        return (React.createElement(SchemaForm, { key: idx, arrayIndex: idx, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchema: uiSchema.children || [uiSchema.keys.concat(["-"]).join("/")], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
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