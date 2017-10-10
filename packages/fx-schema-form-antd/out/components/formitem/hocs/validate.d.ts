import { SchemaFormItemBaseProps } from "../props";
import { RC } from "../../../types";
export interface ValidateHocOutProps {
    validate?: (data: any) => void;
}
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export declare const ValidateHoc: (Component: any) => RC<SchemaFormItemBaseProps, any>;
