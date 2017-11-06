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
    /**
     * 单个元素的值变化时候调用
     */
    private updateItem;
    /**
     * 显示/隐藏元素
     */
    private toggleItem;
    /**
     * 删除元素
     */
    private removeItem;
    /**
     * 添加元素
     */
    private addItem;
    /**
     * 元素移位
     */
    private switchItem;
    /**
     * 初始化元素的meta信息
     */
    private updateItemMeta;
    /**
     * 更改meta的状态
     */
    private updateMetaState;
    /**
     * 更改meta的状态
     */
    private updateData;
    /**
     * 构造
     * @param initialState 初始化状态
     * @param meta         当前的meta类
     * @param updateState  更改数据的方法
     */
    constructor(initialState: any, meta: any, getOriginState?: (state: any) => any, updateState?: (state: any, data: any) => any);
    /**
     * 获取当前的actions
     */
    readonly actions: Actions;
    /**
     * 返回当前的reducer
     */
    readonly reducer: Reducer<any>;
    /**
     * 更新全部数据
     * @param state state
     * @param data  data
     */
    private updateDataHandle(state, data);
    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    private getOrigin(state);
    /**
     * 更改meta的状态
     *  1. 如果存在meta，则更新meta
     * @param state 当前的state
     */
    private updateMetaStateHandle(state, {isLoading, isValid, meta});
    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    private updateItemHandle(state, {keys, data, meta});
    private updateMetaHandle(state, {keys, meta});
    private toggleItemHandle(state, {keys});
    private addItemHandle(state, {keys, data});
    private removeItemHandle(state, {keys, index});
    private switchItemHandle(state, {keys, curIndex, switchIndex});
}
