import { Reducer } from "redux-act";
import { Store } from "react-redux";

export interface FxReducer {
    actions: any;
    reducer: Reducer<any>;
    init(store: Store<any>): void;
}

export const d = "data";
export const m = "meta";
