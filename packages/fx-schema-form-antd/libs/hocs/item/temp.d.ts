import { BaseFactory } from "fx-schema-form-core";
import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export declare const TempHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & ThemeHocOutProps, any>;
