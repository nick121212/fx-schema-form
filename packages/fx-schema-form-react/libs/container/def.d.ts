import { ConBase } from "./icon";
import { SchemaFormItemProps } from "../components/formitem";
import { BaseFactory } from "fx-schema-form-core";
export declare class DefCon extends ConBase<any, SchemaFormItemProps, any> {
    private conFactory;
    constructor(conFactory: BaseFactory<ConBase<any, any, any>>);
    private getContainer(props);
    getState(state: any, props: SchemaFormItemProps): any;
    getAllData(state: any, props: SchemaFormItemProps): any;
    getAllMeta(state: any, props: SchemaFormItemProps): any;
    getItemData(state: any, props: SchemaFormItemProps): any;
    getItemMeta(state: any, props: SchemaFormItemProps): any;
    updateState(state: any, props: any, data: any): any;
    mergeData(state: any, props: any, data: any): any;
    getOriginData(state: any, props: SchemaFormItemProps): any;
    initData(props: any, data: any): any;
    updateItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any): any;
    addItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any): any;
    removeItem(state: any, props: SchemaFormItemProps, data: number, keyInfo: any): any;
    switchItem(state: any, props: SchemaFormItemProps, from: number, to: number, keyInfo: any): any;
}
