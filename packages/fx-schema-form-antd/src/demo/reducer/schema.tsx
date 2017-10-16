import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";

export class FormExampleReducer<T> {
    /**
     * 更改meta的状态
     */
    private updateData: SimpleActionCreator<{ data: any }> = createAction("更改data的值");

    constructor(private initialState: any) { }

    /**
     * 获取当前的actions
     */
    public get actions() {
        return {
            updateData: this.updateData
        };
    }

    /**
     * 返回当前的reducer
     */
    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.updateData as any]: this.updateDataHandle.bind(this),
        }, this.initialState);
    }

    private updateDataHandle(state: any, data) {
        if (!data.schema) {
            data.schema = state.schema;
        }
        if (!data.uiSchema) {
            data.uiSchema = state.uiSchema;
        }
        return Object.assign({}, state, { schema: data.schema, uiSchema: data.uiSchema });
    }

}
