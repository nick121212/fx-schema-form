import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface ValidateHocOutProps {
    validate?: (data: any) => void;
    updateItemData?: (data: any) => void;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps, any>;
export default _default;
