import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
export declare class FormExampleReducer<T> {
    private initialState;
    /**
     * 更改meta的状态
     */
    private updateData;
    constructor(initialState: any);
    /**
     * 获取当前的actions
     */
    readonly actions: {
        updateData: SimpleActionCreator<{
            data: any;
        }, {}>;
    };
    /**
     * 返回当前的reducer
     */
    readonly reducer: Reducer<any>;
    private updateDataHandle(state, data);
}
