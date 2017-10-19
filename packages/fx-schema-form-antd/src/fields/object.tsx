import React from "react";

import { RC } from "../types";
import { SchemaForm } from "../index";
import { SchemaFormItemProps } from "../components/formitem";

export interface ObjectFieldProps extends SchemaFormItemProps {

}

export class ObjectField extends React.Component<ObjectFieldProps, any> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, getCurrentState, globalOptions, schemaFormOptions, schemaKey } = this.props;
        const { uiSchema } = mergeSchema;

        return (
            <SchemaForm
                schemaFormOptions={schemaFormOptions}
                getCurrentState={getCurrentState}
                schemaKey={schemaKey}
                schema={mergeSchema}
                parentKeys={mergeSchema.keys}
                RootComponent={uiSchema.root}
                uiSchema={uiSchema.items || ["*"]}
                globalOptions={globalOptions}>
            </SchemaForm>
        );
    }
}
