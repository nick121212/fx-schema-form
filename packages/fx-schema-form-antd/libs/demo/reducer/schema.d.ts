import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
export declare class FormExampleReducer<T> {
    private initialState;
    private updateData;
    constructor(initialState: any);
    readonly actions: {
        updateData: SimpleActionCreator<{
            data: any;
        }, {}>;
    };
    readonly reducer: Reducer<any>;
    private updateDataHandle(state, data);
}
