import { RC } from "../../../types";
import { ThemeHocOutProps } from "./theme";
import { SchemaFormItemBaseProps } from "../props";
/**
 * 包装Template的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 */
export declare const TempHoc: (Component: any) => RC<SchemaFormItemBaseProps & ThemeHocOutProps, any>;
