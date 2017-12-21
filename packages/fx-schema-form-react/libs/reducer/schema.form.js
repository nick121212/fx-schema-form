import { createAction, createReducer } from "redux-act";
export class SchemaFormReducer {
    constructor(initialState, createFormHandle) {
        this.initialState = initialState;
        this.createFormHandle = createFormHandle;
        this.createForm = createAction("更新表单值");
    }
    get actions() {
        return {
            createForm: this.createForm,
        };
    }
    get reducer() {
        return createReducer({
            [this.createForm]: this.createFormHandle.bind(this),
        }, this.initialState);
    }
}
//# sourceMappingURL=schema.form.js.map