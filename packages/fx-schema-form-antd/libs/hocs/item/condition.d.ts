import { BaseFactory } from "fx-schema-form-core";
import { MakeHocOutProps } from "./make";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface ConditionHocOutProps {
}
export interface ConditionSettings {
    fields: Array<{
        key: string;
        val: any;
    }>;
}
export declare const ConditionHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
