import { BaseFactory } from "fx-schema-form-core";
import { RC, SchemaFormItemBaseProps, MakeHocOutProps } from "../../index";
export interface ConditionHocOutProps {
}
/**
 * condition hoc
 * 用于组件的显示隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export declare const ConditionHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
