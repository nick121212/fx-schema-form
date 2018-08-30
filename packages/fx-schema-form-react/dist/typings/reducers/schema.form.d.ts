import { SimpleActionCreator, Action } from "redux-act";
import { Reducer } from "redux-act";
import { Map } from "immutable";
import { Store } from "redux";
import { FxReducer } from "./reducer";
export declare type ASN = Array<string | number> | string[];
export interface SchemaFormActions {
    [index: string]: SimpleActionCreator<any, any>;
    removeForm: SimpleActionCreator<ASN>;
    createForm: SimpleActionCreator<{
        key: string;
        data: any;
        keepData?: boolean;
    }>;
    updateItemData: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        data: any;
        meta?: any;
    }>;
    updateItemMeta: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        meta: any;
        noChange?: boolean;
    }>;
    addItem: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        data: any;
    }>;
    removeItem: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        index: number;
    }>;
    moveToItem: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        curIndex: number;
        toIndex: number;
    }>;
    removeItemData: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        meta?: boolean;
    }>;
    combineActions: SimpleActionCreator<Action<any, any>[]>;
    removeMetaKeys: SimpleActionCreator<{
        parentKeys: ASN;
        keys: ASN;
        removeMetaKeys: Array<ASN>;
    }>;
}
export declare class SchemaFormReducer<T> implements FxReducer {
    private initialState;
    private createForm;
    private updateItemData;
    private updateItemMeta;
    private addItem;
    private removeItem;
    private moveToItem;
    private removeItemData;
    private combineActions;
    private removeForm;
    private removeMetaKeys;
    constructor(initialState: any);
    readonly actions: SchemaFormActions;
    init(store: Store<Map<string, any>>): void;
    readonly reducer: Reducer<any>;
    private removeFormHandle(state, parentKeys);
    private removeMetaKeysHandle(state, {parentKeys, keys, removeMetaKeys});
    private combineActionsHandle(state, actions);
    private removeItemDataMetaHandle(state, {parentKeys, keys, meta});
    private createFormHandle(state, {key, data, keepData});
    private updateItemDataHandle(state, {parentKeys, keys, data, meta});
    private addItemDataHandle(state, {parentKeys, keys, data});
    private removeItemHandle(state, {parentKeys, keys, index});
    private moveItemHandle(state, {parentKeys, keys, curIndex, toIndex});
    private updateItemMetaHandle(state, {parentKeys, keys, meta, noChange});
}
