import { createAction, createReducer } from "redux-act";
export class FormExampleReducer {
    constructor(initialState) {
        this.initialState = initialState;
        this.updateData = createAction("更改data的值");
    }
    get actions() {
        return {
            updateData: this.updateData
        };
    }
    get reducer() {
        return createReducer({
            [this.updateData]: this.updateDataHandle.bind(this),
        }, this.initialState);
    }
    updateDataHandle(state, data) {
        if (!data.schema) {
            data.schema = state.schema;
        }
        if (!data.uiSchema) {
            data.uiSchema = state.uiSchema;
        }
        return Object.assign({}, state, { schema: data.schema, uiSchema: data.uiSchema });
    }
}
//# sourceMappingURL=schema.js.map