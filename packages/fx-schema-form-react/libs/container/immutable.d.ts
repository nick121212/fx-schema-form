import Immutable from "immutable";
import { ConBase } from "./icon";
import { SchemaFormMeta } from "../libs/meta";
import { SchemaFormItemProps } from "../components/formitem";
export declare class ImmutableCon extends ConBase<any, SchemaFormItemProps, any> {
    private resolveKeys(data, keys);
    getState(state: Immutable.Map<string, any>, props: SchemaFormItemProps): any;
    getAllData(state: Immutable.Map<string, any>, props: SchemaFormItemProps): any;
    getAllMeta(state: Immutable.Map<string, any>, props: SchemaFormItemProps): any;
    getItemData(state: Immutable.Map<string, any>, props: SchemaFormItemProps): any;
    getItemMeta(state: Immutable.Map<string, any>, props: SchemaFormItemProps): SchemaFormMeta;
    updateState(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: any): any;
    mergeData(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: any): Immutable.Map<string, any>;
    getOriginData(state: Immutable.Map<string, any>, props: SchemaFormItemProps): any;
    initData(props: any, data: any): any;
    updateItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any): Immutable.Map<string, any>;
    addItem(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: any, keyInfo: any): Immutable.Map<string, any>;
    removeItem(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: number, keyInfo: any): Immutable.Map<string, any>;
    switchItem(state: Immutable.Map<string, any>, props: SchemaFormItemProps, from: number, to: number, keyInfo: any): Immutable.Map<string, any>;
}
