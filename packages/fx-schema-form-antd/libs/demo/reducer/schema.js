"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_act_1 = require("redux-act");
var FormExampleReducer = /** @class */ (function () {
    function FormExampleReducer(initialState) {
        this.initialState = initialState;
        /**
         * 更改meta的状态
         */
        this.updateData = redux_act_1.createAction("更改data的值");
    }
    Object.defineProperty(FormExampleReducer.prototype, "actions", {
        /**
         * 获取当前的actions
         */
        get: function () {
            return {
                updateData: this.updateData
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormExampleReducer.prototype, "reducer", {
        /**
         * 返回当前的reducer
         */
        get: function () {
            return redux_act_1.createReducer((_a = {},
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
exports.FormExampleReducer = FormExampleReducer;
//# sourceMappingURL=schema.js.map