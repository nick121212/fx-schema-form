import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";

export class SchemaFormReducer<T> {
    /**
     * 单个元素的值变化时候调用
     */
    private createForm: SimpleActionCreator<{ key: string, data: any }> = createAction("更新表单值");

    /**
     * 构造
     * @param initialState 初始化状态
     * @param meta         当前的meta类
     * @param updateState  更改数据的方法
     */
    constructor(private initialState: any, private createFormHandle: Function) { }
    /**
     * 获取当前的actions
     */
    public get actions() {
        return {
            createForm: this.createForm,
        };
    }
    /**
     * 返回当前的reducer
     */
    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.createForm as any]: this.createFormHandle.bind(this),
        }, this.initialState);
    }
}
