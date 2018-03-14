import { combineReducers } from "redux-immutable";
import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, Action } from "redux-act";
import { AnyAction, Reducer } from "redux";

import { HomeReducer, SetThemeData } from "./reducer";
import { $initialState, reducerKey } from "./constant";

export const homeReducer = new HomeReducer($initialState);
export const homeActions = homeReducer.actions;

export default combineReducers({
    [reducerKey]: homeReducer.reducer
}) as Reducer<any>;
