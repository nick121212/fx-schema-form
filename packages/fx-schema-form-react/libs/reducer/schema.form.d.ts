import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
export declare class SchemaFormReducer<T> {
    private initialState;
    private createFormHandle;
    private createForm;
    constructor(initialState: any, createFormHandle: Function);
    readonly actions: {
        createForm: SimpleActionCreator<{
            key: string;
            data: any;
        }, {}>;
    };
    readonly reducer: Reducer<any>;
}
