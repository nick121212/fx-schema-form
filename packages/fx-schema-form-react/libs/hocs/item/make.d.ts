import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { UtilsHocOutProps } from "./utils";
export interface MakeHocOutProps extends UtilsHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
export default _default;
