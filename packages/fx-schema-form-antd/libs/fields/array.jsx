import React from "react";
import { SchemaForm } from "../index";
export class ArrayField extends React.Component {
    renderItem(idx, maxLen) {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions, getCurrentState, ItemChildButtons, arrayLevel = [] } = this.props;
        const { uiSchema, keys } = mergeSchema;
        return (<SchemaForm key={keys.join(".") + idx} schema={mergeSchema} getCurrentState={getCurrentState} arrayIndex={idx} arrayLevel={arrayLevel.concat([idx])} ItemButtons={() => <ItemChildButtons {...this.props} index={idx}/>} parentKeys={mergeSchema.originKeys} RootComponent={null} schemaKey={schemaKey} uiSchema={uiSchema.items} schemaFormOptions={schemaFormOptions} globalOptions={globalOptions}>
            </SchemaForm>);
    }
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions, formItemData, meta = { dirty: false, isValid: true, isShow: true } } = this.props;
        const { uiSchema, title } = mergeSchema;
        let child;
        child = formItemData && formItemData.map((data, idx) => {
            return this.renderItem(idx, formItemData.length);
        });
        return <div style={{ width: "100%" }}>{child || null}</div>;
    }
}
//# sourceMappingURL=array.jsx.map