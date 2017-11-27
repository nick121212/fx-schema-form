import { createAction, createReducer } from "redux-act";
var SchemaFormReducer = (function () {
    function SchemaFormReducer(initialState, createFormHandle) {
        this.initialState = initialState;
        this.createFormHandle = createFormHandle;
        this.createForm = createAction("更新表单值");
    }
    Object.defineProperty(SchemaFormReducer.prototype, "actions", {
        get: function () {
            return {
                createForm: this.createForm,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaFormReducer.prototype, "reducer", {
        get: function () {
            return createReducer((_a = {},
                _a[this.createForm] = this.createFormHandle.bind(this),
                _a), this.initialState);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    return SchemaFormReducer;
}());
export { SchemaFormReducer };
//# sourceMappingURL=schema.form.jsx.map