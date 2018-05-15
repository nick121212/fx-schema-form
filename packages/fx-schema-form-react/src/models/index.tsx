import React from "react";
import { Map } from "immutable";
import { BaseFactory, UiSchema } from "fx-schema-form-core";
import { DefaultProps } from "../components";

export interface SchemaFormNs<F, T, W> {
    fieldFactory: BaseFactory<F>;
    tempFactory: BaseFactory<T>;
    widgetFactory: BaseFactory<W>;
}

export type RC<P, T> = new () => React.PureComponent<P, T>;
export interface FxUiSchema extends UiSchema {
    // 定义参数，与全局的配置参数格式一致；会覆盖全局的配置参数，用于单个FormSchemaItem的配置。
    options?: Map<string, any>;
    // 一般用于object和array的对象；用于渲染下级显示的key。
    children?: Array<UiSchema | string>;
    // 主题样式配置（default: default）
    theme?: string;
    // 定义字段。默认使用JsonSchema的type来确定field，也可以使用这个来指定字段。
    field?: string;
    // 定义显示组件。每种数据类型都可以使用不同的组件来渲染。
    widget?: string;
    // 定义包裹的模板数组
    temps?: string[];
    // 是否是required，自动添加
    isRequired?: boolean;
    // $ref的keys，自动添加
    refKeys?: string[];
    // keys的原始形式，不会对-做数字化处理（只有数组类型的originKeys和keys是不同的）
    originKeys?: string[];
    // 是否只读
    readonly?: boolean;
    // 用于包裹整个ShemaFormItem的hoc数组
    hocs?: any[];
    // 数据更改的时候触发的方法
    onValueChanged?: <T>(props: DefaultProps, data: T) => void;
    // 数组的默认添加数据
    defaultData?: any;
}
export type NsFactory = SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>;

export const schemaFormTypes = {
    hoc: "hoc",
    widget: "widget",
    template: "temp",
    field: "field"
};
