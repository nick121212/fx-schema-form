import React, { PureComponent } from "react";
import { compose } from "recompose";

import { DefaultProps } from "../components";
import { FxUiSchema, schemaFormTypes } from "../models";
import { SchemaForm } from "../components/form";
import { UtilsHocOutProps } from "../hocs/utils";
import { ArrayFieldComponent } from "./arrayfield";

export interface ArrayFieldProps extends DefaultProps, UtilsHocOutProps {

}

export const name = "array";

/**
 * 数组结构的字段解析
 * 这里需要数组元素的个数来做循环
 * 循环生成元素个数的SchemaForm
 */
export class ArrayField extends PureComponent<ArrayFieldProps, any> {
    private SchemaFormWithHoc: any = ArrayFieldComponent;
    private SchemaFormItemWithHoc: any;

    constructor(props: ArrayFieldProps) {
        super(props);

        this.initComponent();
    }

    /**
     * 初始化Component
     */
    private initComponent() {
        const { getOptions } = this.props,
            options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc = null, SchemaFormItemWithHoc = null;

        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(options.ArrayFieldComponent || ArrayFieldComponent);
        }

        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            SchemaFormItemWithHoc = compose(...options.formItemHocs)(SchemaForm as any);
        }

        this.SchemaFormWithHoc = SchemaFormWithHoc;
        this.SchemaFormItemWithHoc = SchemaFormItemWithHoc;
    }

    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number): JSX.Element | null {
        const { parentKeys, globalOptions, getOptions, arrayLevel = [], getRequiredKeys, ajv, reducerKey, ArrayItemComponent } = this.props,
            uiSchema = this.props.uiSchema as FxUiSchema,
            options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc: any = this.SchemaFormItemWithHoc || SchemaForm;
        // const extraProps = getRequiredKeys(this.props, options);

        // 如果不需要children，则跳出
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }

        // // 如果需要对schemaform对hoc包装
        // if (options.formItemHocs && options.formItemHocs.constructor === Array) {
        //     SchemaFormWithHoc = compose(...options.formItemHocs)(SchemaForm);
        // }

        return (
            <SchemaFormWithHoc
                key={idx}
                arrayIndex={idx}
                uiSchema={uiSchema}
                RootComponent={options.Root}
                ArrayItemComponent={ArrayItemComponent}
                arrayLevel={arrayLevel.concat([idx])}
                reducerKey={reducerKey}
                schemaId={uiSchema.schemaPath}
                uiSchemas={uiSchema.children || ["-"]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }
    /**
     * 渲染页面
     */
    public render(): JSX.Element | null {
        const { uiSchema, formItemData, getOptions, getRequiredKeys } = this.props, child = [],
            options = getOptions(this.props, schemaFormTypes.field, name),
            SchemaFormWithHoc = this.SchemaFormWithHoc,
            { fieldIncludeKeys, fieldExcludeKeys } = options,
            extraProps = getRequiredKeys(this.props, fieldIncludeKeys, fieldExcludeKeys);

        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }

        return <SchemaFormWithHoc children={child} {...extraProps} />;
    }
}

export default {
    [name]: ArrayField
};
