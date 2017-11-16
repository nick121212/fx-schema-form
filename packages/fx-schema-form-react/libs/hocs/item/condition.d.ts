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
declare const _default: (hocFactory: BaseFactory<any>, settings?: ConditionSettings) => (Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
export default _default;
