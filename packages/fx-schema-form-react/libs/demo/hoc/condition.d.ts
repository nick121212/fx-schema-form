import { BaseFactory } from "fx-schema-form-core";
import { RC, SchemaFormItemBaseProps, MakeHocOutProps } from "../../index";
export interface ConditionHocOutProps {
}
export declare const ConditionHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
