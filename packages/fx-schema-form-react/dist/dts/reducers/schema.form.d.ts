import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import { FxReducer } from "./reducer";
export interface SchemaFormActions {
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
    switchItem: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        curIndex: number;
        toIndex: number;
    }>;
    moveToItem: SimpleActionCreator<{
        parentKeys: string[];
        keys: string[];
        curIndex: number;
        toIndex: number;
    }>;
}
export declare class SchemaFormReducer<T> implements FxReducer {
    private initialState;
    private createForm;
    private updateItemData;
    private updateItemMeta;
    private addItem;
    private removeItem;
    private switchItem;
    private moveToItem;
    private validateAll;
    constructor(initialState: any);
    readonly actions: SchemaFormActions;
    readonly reducer: Reducer<any>;
    private resolveKeys(state, keys);
    private createFormHandle(state, {key, data});
    private updateItemDataHandle(state, {parentKeys, keys, data, meta});
    private addItemDataHandle(state, {parentKeys, keys, data});
    private removeItemDataHandle(state, {parentKeys, keys, index});
    private switchItemHandle(state, {parentKeys, keys, curIndex, toIndex});
    private moveItemHandle(state, {parentKeys, keys, curIndex, toIndex});
    private updateItemMetaHandle(state, {parentKeys, keys, data});
}
