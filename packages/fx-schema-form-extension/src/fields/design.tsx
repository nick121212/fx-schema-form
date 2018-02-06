import React from "react";
import { compose, shouldUpdate } from "recompose";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/src/hocs/validate";

export interface DesignFieldProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {

}

let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};

class ArrayFieldComponent extends React.PureComponent {
    public render() {
        return <div style={arrayFieldStyle}>{this.props.children}</div>;
    }
}

/**
 * 数组字段的生成规则
 * 用于
 */
export class DesignField extends React.PureComponent<DesignFieldProps, any> {
    private SchemaFormWithHoc: new () => React.PureComponent = ArrayFieldComponent;
    private SchemaFormItemWithHoc: new () => React.PureComponent = schemaFormReact.SchemaForm;

    constructor(props: DesignFieldProps, context: any) {
        super(props, context);
        this.initComponent();
    }

    /**
     * 初始化Component
     */
    private initComponent() {
        const { uiSchema, formItemData, getOptions } = this.props,
            options = getOptions(this.props, "field", "design");
        let SchemaFormWithHoc = null, SchemaFormItemWithHoc = null;

        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(ArrayFieldComponent);
            this.SchemaFormWithHoc = SchemaFormWithHoc;
        }

        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            SchemaFormItemWithHoc = compose(...options.formItemHocs)(schemaFormReact.SchemaForm as any);
            this.SchemaFormItemWithHoc = SchemaFormItemWithHoc;
        }

    }
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number): JSX.Element | null {
        const { parentKeys, globalOptions, getOptions, arrayLevel = [], getRequiredKeys, ajv, ArrayItemComponent } = this.props,
            uiSchema = this.props.uiSchema as any;
        let SchemaFormWithHoc: any = this.SchemaFormItemWithHoc;

        // 如果不需要children，则跳出
        // if (uiSchema.children === null || !uiSchema.schemaPath) {
        //     return null;
        // }
        return (
            <SchemaFormWithHoc
                key={idx}
                index={idx}
                arrayIndex={idx}
                uiSchema={uiSchema}
                ArrayItemComponent={ArrayItemComponent}
                arrayLevel={arrayLevel.concat([idx])}
                schemaId={uiSchema.schemaPath}
                uiSchemas={[{
                    key: "-/children",
                    field: "design"
                }]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }

    /**
     * 渲染页面
     */
    public render(): any {
        const { uiSchema, formItemData, getOptions, getRequiredKeys, children } = this.props, child = [],
            options = getOptions(this.props, "field", "design");
        let SchemaFormWithHoc = this.SchemaFormWithHoc;
        const extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);

        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }

        // 如果需要对schemaform对hoc包装
        // if (options.formHocs && options.formHocs.constructor === Array) {
        //     SchemaFormWithHoc = compose(...options.formHocs)(({ children }) => {
        //         return <div style={arrayFieldStyle}>{children}</div>;
        //     });

        //     return <SchemaFormWithHoc {...this.props} children={child} />;
        // }

        return <SchemaFormWithHoc children={[...child, children]} {...extraProps} />;
    }
}
