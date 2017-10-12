import React from "react";
import { Card } from "antd";

import { SchemaFormItemProps, SchemaForm } from "../../index";

export class GeoPositionField extends React.PureComponent<SchemaFormItemProps> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, globalOptions, schemaFormOptions, schemaKey } = this.props;
        const { uiSchema } = mergeSchema;

        // return (
        //     <span>
        //         hello geo
        //     </span>
        // );

        return (
            <Card title="经纬度">
                <SchemaForm
                    schemaFormOptions={schemaFormOptions}
                    schemaKey={schemaKey}
                    schema={mergeSchema}
                    parentKeys={mergeSchema.keys}
                    RootComponent={uiSchema.root}
                    uiSchema={uiSchema.items || ["*"]}
                    globalOptions={globalOptions}>
                </SchemaForm>
            </Card>
        );
    }
}
