/// <reference types="react" />
import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { MakeHocOutProps } from "./make";
export interface ArrayHocOutProps extends SchemaFormItemBaseProps, ValidateHocOutProps, MakeHocOutProps {
    toggleItem?: () => void;
    removeItem?: (data: number) => void;
    addItem?: (data: any) => void;
    switchItem?: (data: any) => void;
    createItemChildButtons?: (index: number, maxLength: number) => JSX.Element;
}
/**
 * 包装array的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * arrayItems
 */
export declare const ArrayHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<ArrayHocOutProps, any>;
