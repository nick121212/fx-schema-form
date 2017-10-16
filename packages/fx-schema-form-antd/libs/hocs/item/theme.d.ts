import { BaseFactory } from "fx-schema-form-core";
import { RC, NsFactory } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}
/**
 * 包装theme的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * currentTheme 当前的命名空间
 */
export declare const ThemeHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps, any>;
