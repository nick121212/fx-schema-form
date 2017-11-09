import React from "react";
import { SchemaForm } from "../index";
export class ObjectField extends React.Component {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, arrayIndex, ItemButtons, arrayLevel, getCurrentState, globalOptions, schemaFormOptions, schemaKey } = this.props;
        const { uiSchema } = mergeSchema;
        return (<SchemaForm arrayIndex={arrayIndex} schemaFormOptions={schemaFormOptions} getCurrentState={getCurrentState} schemaKey={schemaKey} arrayLevel={arrayLevel} schema={mergeSchema} parentKeys={mergeSchema.originKeys} RootComponent={uiSchema.root} uiSchema={uiSchema.items || ["*"]} globalOptions={globalOptions}>
            </SchemaForm>);
    }
}
//# sourceMappingURL=object.jsx.map