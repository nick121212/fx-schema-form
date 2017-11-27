import { BaseFactory } from "fx-schema-form-core";
import { MakeHocOutProps } from "./make";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface DataHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
export default _default;
