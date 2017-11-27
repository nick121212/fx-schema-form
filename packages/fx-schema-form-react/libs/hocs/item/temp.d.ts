import { BaseFactory } from "fx-schema-form-core";
import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps & ThemeHocOutProps, any>;
export default _default;
