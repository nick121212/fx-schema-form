/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface ArryFieldProps extends SchemaFormItemProps {
}
/**
 * 数组字段的生成规则
 */
export declare class ArrayField extends React.Component<ArryFieldProps, any> {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx, maxLen);
    /**
     * 渲染页面
     */
    render(): JSX.Element | null;
}
