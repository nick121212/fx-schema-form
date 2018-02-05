import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux-act";
import { Map } from "immutable";
import { FxReducer } from "./reducer";
import { Store } from "react-redux";
export interface SchemaFormActions {
    [index: string]: SimpleActionCreator<any, any>;
    createForm: SimpleActionCreator<{
        key: string;
        data: any;
    }>;
    updateItemData: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        data: any;
        meta?: any;
    }>;
    updateItemMeta: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        data: any;
    }>;
    addItem: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        data: any;
    }>;
    removeItem: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        index: number;
    }>;
    moveToItem: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        curIndex: number;
        toIndex: number;
    }>;
    removeItemData: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        meta?: boolean;
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
    private validateAll;
    private removeItemData;
    constructor(initialState: any);
    readonly actions: SchemaFormActions;
    init(store: Store<Map<string, any>>): void;
    readonly reducer: Reducer<any>;
    private removeItemDataMetaHandle(state, {parentKeys, keys, meta});
    private resolveKeys(state, keys);
    private createFormHandle(state, {key, data});
    private updateItemDataHandle(state, {parentKeys, keys, data, meta});
    private addItemDataHandle(state, {parentKeys, keys, data});
    private removeItemHandle(state, {parentKeys, keys, index});
    private moveItemHandle(state, {parentKeys, keys, curIndex, toIndex});
    private updateItemMetaHandle(state, {parentKeys, keys, meta});
}
