import React from "react";
export class NullWidget extends React.Component {
    render() {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData } = this.props;
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (<span>
                此值为Null值，这个有啥意思么
        </span>);
    }
}
//# sourceMappingURL=null.jsx.map