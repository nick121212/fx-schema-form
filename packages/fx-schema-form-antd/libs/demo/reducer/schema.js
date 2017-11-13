import { createAction, createReducer } from "redux-act";
var FormExampleReducer = (function () {
    function FormExampleReducer(initialState) {
        this.initialState = initialState;
        this.updateData = createAction("更改data的值");
    }
    Object.defineProperty(FormExampleReducer.prototype, "actions", {
        get: function () {
            return {
                updateData: this.updateData
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormExampleReducer.prototype, "reducer", {
        get: function () {
            return createReducer((_a = {},
                _a[this.updateData] = this.updateDataHandle.bind(this),
                _a), this.initialState);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    FormExampleReducer.prototype.updateDataHandle = function (state, data) {
        if (!data.schema) {
            data.schema = state.schema;
        }
        if (!data.uiSchema) {
            data.uiSchema = state.uiSchema;
        }
        return Object.assign({}, state, { schema: data.schema, uiSchema: data.uiSchema });
    };
    return FormExampleReducer;
}());
export { FormExampleReducer };
//# sourceMappingURL=schema.js.map