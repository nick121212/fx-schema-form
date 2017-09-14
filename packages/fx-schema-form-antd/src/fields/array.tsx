import React from "react";
import { Card, Button, Form } from "antd";

import { RC } from "../types";
import { nsFactory, SchemaForm } from "../index";
import { SchemaFormItemProps } from "../components/formitem";

export interface ArryFieldProps extends SchemaFormItemProps {

}

export class ArrayField extends React.Component<ArryFieldProps, any> {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number): JSX.Element {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions, arrayItems, arrayItemItems } = this.props;
        const { uiSchema, keys } = mergeSchema;

        return (
            <SchemaForm
                key={keys.join(".") + idx}
                schema={mergeSchema}
                arrayIndex={idx}
                arrayItems={arrayItemItems}
                parentKeys={mergeSchema.keys}
                RootComponent={null}
                schemaKey={schemaKey}
                uiSchema={uiSchema.items}
                schemaFormOptions={schemaFormOptions}
                globalOptions={globalOptions}>
            </SchemaForm>
        );
    }

    /**
     * 渲染页面
     */
    public render(): JSX.Element | null {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions, formItemData,
            meta = { dirty: false, isValid: true }
        } = this.props;
        const { uiSchema, title } = mergeSchema;

        let child = formItemData && formItemData.map((data: any, idx: number) => {
            return this.renderItem(idx);
        });

        return <div>{child || null}</div>;
    }

    // private removeItem(index: number): void {
    //     let { formData = [], mergeSchema, validate } = this.props;

    //     formData.splice(index, 1);

    //     validate(formData);
    // }

    // private addItem(): void {
    //     let { formData = [], mergeSchema, validate } = this.props;

    //     if (mergeSchema.items.type === "object") {
    //         formData.push({});
    //     } else {
    //         formData.push(undefined);
    //     }

    //     validate(formData);
    // }
}
