import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
var SchemaFormCreate = /** @class */ (function () {
    function SchemaFormCreate() {
    }
    SchemaFormCreate.prototype.createOne = function (key, data, curJjv, schema) {
        var meta = new MetaData();
        var defaultValue = curJjv.validate(schema, data).catch(function () {
            console.log("");
        });
        var reducer = new FormReducer({
            data: data,
            meta: meta.data
        }, meta);
        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;
        return reducer;
    };
    SchemaFormCreate.prototype.createMuti = function (forms) {
        if (forms === void 0) { forms = {}; }
        var reducers = {};
        for (var key in forms) {
            if (forms.hasOwnProperty(key)) {
                var element = forms[key];
                var meta = new MetaData();
                var reducer = new FormReducer({
                    data: element,
                    meta: meta
                }, meta);
                meta.actions = reducer.actions;
                SchemaFormCreate.metas[key] = meta;
                if (element) {
                    reducers[key] = reducer.reducer;
                }
            }
        }
        return reducers;
    };
    SchemaFormCreate.metas = {};
    return SchemaFormCreate;
}());
export { SchemaFormCreate };
export default new SchemaFormCreate();
//# sourceMappingURL=create.js.map