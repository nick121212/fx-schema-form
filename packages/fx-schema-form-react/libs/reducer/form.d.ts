import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
export interface SchemaFormState<T> {
    data: T;
    meta: any;
}
export interface Actions {
    updateItem: SimpleActionCreator<{
        keys: Array<string>;
        data: any;
    }>;
    toggleItem: SimpleActionCreator<{
        keys: Array<string>;
    }>;
    removeItem: SimpleActionCreator<{
        keys: Array<string>;
        data: any;
    }>;
    addItem: SimpleActionCreator<{
        keys: Array<string>;
        data: any;
    }>;
    switchItem: SimpleActionCreator<{
        keys: Array<string>;
        data: any;
    }>;
    updateMetaState: SimpleActionCreator<any>;
    updateItemMeta: SimpleActionCreator<{
        keys: Array<string>;
        data: any;
    }>;
    updateData: SimpleActionCreator<{
        data: any;
    }>;
}
export declare class FormReducer<T> {
    private initialState;
    private meta;
    private getOriginState;
    private updateState;
    private updateItem;
    private toggleItem;
    private removeItem;
    private addItem;
    private switchItem;
    private updateItemMeta;
    private updateMetaState;
    private updateData;
    constructor(initialState: any, meta: any, getOriginState?: (state: any) => any, updateState?: (state: any, data: any) => any);
    readonly actions: Actions;
    readonly reducer: Reducer<any>;
    private updateDataHandle(state, data);
    private getOrigin(state);
    private updateMetaStateHandle(state, {isLoading, isValid, meta});
    private updateItemHandle(state, {keys, data, meta});
    private updateMetaHandle(state, {keys, meta});
    private toggleItemHandle(state, {keys});
    private addItemHandle(state, {keys, data});
    private removeItemHandle(state, {keys, index});
    private switchItemHandle(state, {keys, curIndex, switchIndex});
}
