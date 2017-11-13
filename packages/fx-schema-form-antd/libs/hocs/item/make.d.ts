import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { UtilsHocOutProps } from "./utils";
export interface MakeHocOutProps extends UtilsHocOutProps {
}
export declare const MakeHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
