import { Reducer } from "redux-act";
export interface FxReducer {
    actions: any;
    reducer: Reducer<any>;
}
