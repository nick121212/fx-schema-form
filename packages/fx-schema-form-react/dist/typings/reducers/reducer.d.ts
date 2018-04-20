import { Reducer } from "redux-act";
import { Store } from "react-redux";
export interface FxReducer {
    actions: any;
    reducer: Reducer<any>;
    init(store: Store<any>): void;
}
export declare const d = "data";
export declare const m = "meta";
