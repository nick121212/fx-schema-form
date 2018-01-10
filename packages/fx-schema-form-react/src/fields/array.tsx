import React from "react";
import { connect } from "react-redux";
import { shouldUpdate, compose } from "recompose";

import { RC } from "../types";
import { nsFactory, SchemaForm, } from "../index";
import { SchemaFormItemProps } from "../components/formitem";
import { mapFormItemDataProps } from "../hocs/select";

export interface ArryFieldProps extends SchemaFormItemProps {

}

/**
 * 数组字段的生成规则
 */
// @(shouldUpdate(() => false) as any)
@(compose(connect(mapFormItemDataProps),
    shouldUpdate((prev: ArryFieldProps, next: ArryFieldProps) => {
        let { formItemData = [] } = prev;
        let { formItemData: formItemData1 = [] } = next;

        return formItemData.length !== formItemData1.length;
    })) as any)
export class ArrayField extends React.PureComponent<ArryFieldProps, any> {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number, maxLen: number): JSX.Element {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions,
            getCurrentState, ItemChildButtons, arrayLevel = [], getFieldOptions,
            reducerKeys
            } = this.props;
        const { uiSchema, keys } = mergeSchema;


        // console.log("array firldd drekdlflkadklfklalkjfkd----");

        return (
            <SchemaForm
                key={keys.join(".") + idx}
                schema={mergeSchema}
                getCurrentState={getCurrentState}
                arrayIndex={idx}
                reducerKeys={reducerKeys}
                arrayLevel={arrayLevel.concat([idx])}
                ItemButtons={(props) => <ItemChildButtons {...this.props} { ...props} arrayIndex={idx} />}
                parentKeys={mergeSchema.originKeys}
                RootComponent={getFieldOptions(this.props, "array").root}
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

        return <div style={{ width: "100%" }}>{child || null}</div>;
    }
}
