import { Reducer } from "redux";
export interface FxReducer {
    actions: any;
    reducer: Reducer<any>;
}
