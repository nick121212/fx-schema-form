import React from "react";
import { SchemaForm } from "../index";
export class ObjectField extends React.Component {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, globalOptions, schemaFormOptions, schemaKey } = this.props;
        const { uiSchema } = mergeSchema;
        return (React.createElement(SchemaForm, { schemaFormOptions: schemaFormOptions, schemaKey: schemaKey, schema: mergeSchema, parentKeys: mergeSchema.keys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions }));
    }
}
//# sourceMappingURL=object.js.map