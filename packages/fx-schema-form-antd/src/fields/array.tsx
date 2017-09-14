import React from "react";
import { Card, Button, Form } from "antd";

import { RC } from "../types";
import { nsFactory, SchemaForm } from "../index";
import { SchemaFormItemProps } from "../components/formitem";

export interface ArryFieldProps extends SchemaFormItemProps {

}

export class ArrayField extends React.Component<ArryFieldProps, any> {
    private renderItem(idx: number): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions } = this.props;
        const { uiSchema, keys } = mergeSchema;

        return (
            <SchemaForm
                key={keys.join(".") + idx}
                schema={mergeSchema}
                arrayIndex={idx}
                parentKeys={mergeSchema.keys}
                RootComponent={null}
                schemaKey={schemaKey}
                uiSchema={uiSchema.items}
                schemaFormOptions={schemaFormOptions}
                globalOptions={globalOptions}>
            </SchemaForm>
        );
    }

    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions, formData } = this.props;
        const { uiSchema } = mergeSchema;


        return <Card title={
            <Button onClick={() => {
                this.addItem();
            }}>
                {formData ? formData.length : 0}
            </Button>
        }>
            {
                formData && formData.map((data: any, idx: number) => {
                    return this.renderItem(idx);
                })
            }
        </Card>;
    }

    private addItem(): void {
        let { formData, mergeSchema, validate } = this.props;

        if (!formData) {
            formData = [];
        }

        if (mergeSchema.items.type === "object") {
            formData.push({});
        } else {
            formData.push(undefined);
        }

        validate(formData);
    }
}
