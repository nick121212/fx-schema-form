import React from "react";
import { Card, Button, Form } from "antd";

import { RC } from "../types";
import { nsFactory, SchemaForm } from "../index";
import { SchemaFormItemProps } from "../components/formitem";

export interface ArryFieldProps extends SchemaFormItemProps {

}

/**
 * 数组字段的生成规则
 */
export class ArrayField extends React.Component<ArryFieldProps, any> {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number, maxLen: number): JSX.Element {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions, arrayItems, createItemChildButtons } = this.props;
        const { uiSchema, keys } = mergeSchema;

        return (
            <SchemaForm
                key={keys.join(".") + idx}
                schema={mergeSchema}
                arrayIndex={idx}
                arrayItems={createItemChildButtons ? createItemChildButtons.bind(null, idx, maxLen) : null}
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
            meta = { dirty: false, isValid: true, isShow: true }
        } = this.props;
        const { uiSchema, title } = mergeSchema;
        let child;

        child = formItemData && formItemData.map((data: any, idx: number) => {
            return this.renderItem(idx, formItemData.length);
        });

        return <div>{child || null}</div>;
    }
}
