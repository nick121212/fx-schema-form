/// <reference types="json-pointer" />
import jpp from "json-pointer";
import { ConBase } from "./icon";
import { SchemaFormMeta } from "../libs/meta";
import { SchemaFormItemProps } from "../components/formitem";
export declare class JppCon extends ConBase<any, SchemaFormItemProps, any> {
    getState(state: any, props: SchemaFormItemProps): any;
    getAllData(state: any, props: SchemaFormItemProps): any;
    getAllMeta(state: any, props: SchemaFormItemProps): any;
    getItemData(state: any, props: SchemaFormItemProps): any;
    getItemMeta(state: any, props: SchemaFormItemProps): SchemaFormMeta;
    updateState(state: any, props: SchemaFormItemProps, data: any): any;
    mergeData(state: any, props: SchemaFormItemProps, data: any): any;
    getOriginData(state: any, props: SchemaFormItemProps): any;
    initData(props: any, data: any): any;
    updateItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any): jpp.JSON_PointerWrap;
    addItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any): jpp.JSON_PointerWrap;
    removeItem(state: any, props: SchemaFormItemProps, data: number, keyInfo: any): jpp.JSON_PointerWrap;
    switchItem(state: any, props: SchemaFormItemProps, from: number, to: number, keyInfo: any): jpp.JSON_PointerWrap;
}
