import { SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import { FxReducer } from "./reducer";
export interface SchemaFormActions {
    createForm: SimpleActionCreator<{
        key: string;
        data: any;
    }>;
}
export declare class SchemaFormReducer<T> implements FxReducer {
    private initialState;
    private createForm;
    constructor(initialState: any);
    readonly actions: SchemaFormActions;
    readonly reducer: Reducer<any>;
    private createFormHandle(state, {key, data});
}
