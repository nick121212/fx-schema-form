import { RC } from "../../../types";
import { ThemeHocOutProps } from "./theme";
import { SchemaFormItemBaseProps } from "../props";
export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}
/**
 * 包装Field的组件HOC
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export declare const FieldHoc: (Component: any) => RC<SchemaFormItemBaseProps & ThemeHocOutProps, any>;
