import { EmptyActionCreator, SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import { MetaData } from "../libs/meta";
export interface SchemaFormState<T> {
    data: T;
    meta: MetaData;
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
    validateAllField: EmptyActionCreator;
    initItemMeta: SimpleActionCreator<{
        keys: Array<string>;
        data: any;
    }>;
}
export declare class FormReducer<T> {
    private initialState;
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
    private initItemMeta;
    /**
     * 验证所有的字段
     */
    private validateAllField;
    constructor(initialState: any);
    /**
     * 获取当前的actions
     */
    readonly actions: Actions;
    /**
     * 返回当前的reducer
     */
    readonly reducer: Reducer<any>;
    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    private getOrigin(state);
    /**
     * 验证所有字段
     * @param state 当前的state
     */
    private validateAllFieldHandle(state);
    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    private updateItemHandle(state, {keys, data, meta});
    private initMetaHandle(state, {keys, meta});
    private toggleItemHandle(state, {keys});
    private addItemHandle(state, {keys, data});
    private removeItemHandle(state, {keys, index});
    private switchItemHandle(state, {keys, curIndex, switchIndex});
}
