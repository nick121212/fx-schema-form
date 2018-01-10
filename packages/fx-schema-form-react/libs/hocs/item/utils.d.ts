import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface UtilsHocOutProps {
    getHocOptions: (props: SchemaFormItemBaseProps, hoc?: string) => any;
    getFieldOptions: (props: SchemaFormItemBaseProps, field: string) => any;
    getWidgetOptions: (props: SchemaFormItemBaseProps, widget: string) => any;
    getTempOptions: (props: SchemaFormItemBaseProps, temp: string) => any;
    getTitle(props: SchemaFormItemBaseProps): () => any;
    getPathKeys: (keys: string[], path: string) => string[];
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps, any>;
export default _default;
