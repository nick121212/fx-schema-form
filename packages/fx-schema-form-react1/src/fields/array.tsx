import React from "react";

import { SchemaForm } from "../components/form";
import { DefaultProps, FxUiSchema } from "../components";
import { hocFactory } from "../factory";

export interface ArrayFieldProps extends DefaultProps {

}

let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};

export class NormalField extends React.PureComponent<ArrayFieldProps, any> {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number, maxLen: number): JSX.Element {
        const { parentKeys, globalOptions, arrayLevel = [], ajv } = this.props,
            uiSchema = this.props.uiSchema as FxUiSchema;

        if (uiSchema.children === null) {
            return null;
        }

        return (
            <SchemaForm
                key={idx}
                arrayIndex={idx}
                arrayLevel={arrayLevel.concat([idx])}
                schemaId={uiSchema.schemaPath}
                uiSchema={uiSchema.children || ["*"]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }
    /**
     * 渲染页面
     */
    public render(): JSX.Element | null {
        const { uiSchema, formItemData } = this.props;
        let child;

        child = formItemData && formItemData.map((data: any, idx: number) => {
            return this.renderItem(idx, formItemData.length);
        });

        return <div style={arrayFieldStyle}>{child || null}</div>;
    }
}
