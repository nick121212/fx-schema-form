import React from "react";
export class NullWidget extends React.Component {
    render() {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData } = this.props;
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement("span", null, "\u6B64\u503C\u4E3ANull\u503C\uFF0C\u8FD9\u4E2A\u6709\u5565\u610F\u601D\u4E48"));
    }
}
//# sourceMappingURL=null.js.map