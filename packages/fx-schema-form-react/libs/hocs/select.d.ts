import Reselect from "reselect";
import { SchemaFormItemBaseProps } from "../components/formitem/props";
import { SchemaFormMeta } from "../libs/meta";
export declare const getAllData: (state: any, props: SchemaFormItemBaseProps) => {};
export declare const getData: (state: any, props: SchemaFormItemBaseProps) => any;
export declare const getMetaStateData: (state: any, props: SchemaFormItemBaseProps) => SchemaFormMeta;
export declare const getMetaData: (state: any, props: SchemaFormItemBaseProps) => SchemaFormMeta;
export declare const getActions: (state: any, props: SchemaFormItemBaseProps) => any;
export declare const mapFormDataToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    formData: any;
}, (res: any) => {
    formData: any;
}>;
export declare const mapMetaStateToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    meta: any;
}, (res: any) => {
    meta: any;
}>;
export declare const mapFormItemDataProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    formItemData: any;
}, (res: any) => {
    formItemData: any;
}>;
export declare const mapActionsStateToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    actions: any;
}, (res: any) => {
    actions: any;
}>;
