/// <reference types="react" />
import { RC } from "../../../types";
import { SchemaFormItemBaseProps } from "../props";
import { ValidateHocOutProps } from "./validate";
export interface ArrayHocOutProps extends SchemaFormItemBaseProps, ValidateHocOutProps {
    toggleItem?: () => void;
    removeItem?: (data: number) => void;
    addItem?: (data: any) => void;
    switchItem?: (data: any) => void;
    createItemChildButtons?: (index: number, maxLength: number) => JSX.Element;
}
/**
 * 包装array的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * arrayItems
 */
export declare const ArrayHoc: (Component: any) => RC<ArrayHocOutProps, any>;
