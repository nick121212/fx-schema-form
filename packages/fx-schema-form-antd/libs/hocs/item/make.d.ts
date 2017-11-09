import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface MakeHocOutProps {
    getHocOptions: () => any;
}
export declare const MakeHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & MakeHocOutProps, any>;
