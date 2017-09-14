import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";
import * as jpp from "json-pointer";

export class FormReducer {
    /**
     * 单个元素的值变化时候调用
     */
    private updateItem: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("更新表单值");
    /**
     * 验证所有的字段
     */
    private validateAllField: EmptyActionCreator = createAction("验证表单中所有的字段");

    constructor(private initialState: any) { }

    public get actions(): {
        updateItem: SimpleActionCreator<{ keys: Array<string>, data: any }>
    } {
        return {
            updateItem: this.updateItem
        };
    }

    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.updateItem as any]: (state: any, { keys, data, meta }:
                { keys: Array<string>, data: any, meta: { isValid: boolean } }) => {
                let originData = Object.assign({}, state.data);
                let originMeta = Object.assign({}, state.meta);

                jpp(originData).set(jpp.compile(keys), data);
                jpp(originMeta).set(jpp.compile(keys), meta);

                return Object.assign({}, state, { data: originData, meta: originMeta });
            }
        }, this.initialState);
    }
}
