import React from "react";

import { RC } from "../types";
import { SchemaForm } from "../index";
import { SchemaFormItemProps } from "../components/formitem";

export interface ObjectFieldProps extends SchemaFormItemProps {

}

export class ObjectField extends React.Component<ObjectFieldProps, any> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, arrayIndex, ItemButtons, arrayLevel,
            getCurrentState, globalOptions, schemaFormOptions, schemaKey, getFieldOptions } = this.props;
        const { uiSchema } = mergeSchema;

        return (
            <SchemaForm
                arrayIndex={arrayIndex}
                schemaFormOptions={schemaFormOptions}
                getCurrentState={getCurrentState}
                schemaKey={schemaKey}
                arrayLevel={arrayLevel}
                schema={mergeSchema}
                parentKeys={mergeSchema.originKeys}
                RootComponent={getFieldOptions("object").root}
                uiSchema={uiSchema.items || ["*"]}
                globalOptions={globalOptions}>
            </SchemaForm>
        );
    }
}
