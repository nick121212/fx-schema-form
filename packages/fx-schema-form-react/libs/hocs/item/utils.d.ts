import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface UtilsHocOutProps {
    getHocOptions: (hoc?: string) => any;
    getFieldOptions: (field: string) => any;
    getWidgetOptions: (widget: string) => any;
    getTempOptions: (temp: string) => any;
    getTitle(): () => any;
    getPathKeys: (keys: string[], path: string) => string[];
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps, any>;
export default _default;
