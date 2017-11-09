import { BaseFactory } from "fx-schema-form-core";
import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export declare const TempHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & ThemeHocOutProps, any>;
