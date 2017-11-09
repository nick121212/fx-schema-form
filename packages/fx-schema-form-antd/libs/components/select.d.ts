import { SchemaFormItemBaseProps } from "./formitem/props";
import { SchemaFormMeta } from "../libs/meta";
export declare const getAllData: (state: any, props: SchemaFormItemBaseProps) => {};
export declare const getData: (state: any, props: SchemaFormItemBaseProps) => any;
export declare const getMetaData: (state: any, props: SchemaFormItemBaseProps) => SchemaFormMeta;
export declare const getActions: (state: any, props: SchemaFormItemBaseProps) => {};
export declare const mapMetaStateToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    meta: any;
    formData: any;
    formItemData: any;
}, (res1: any, res2: any, res3: any) => {
    meta: any;
    formData: any;
    formItemData: any;
}>;
export declare const mapActionsStateToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    actions: any;
}, (res: any) => {
    actions: any;
}>;
