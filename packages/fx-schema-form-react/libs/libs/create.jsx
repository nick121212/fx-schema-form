import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
var SchemaFormCreate = (function () {
    function SchemaFormCreate() {
    }
    SchemaFormCreate.prototype.createOne = function (key, data, curJjv, schema, getOriginState, updateState) {
        var meta = new MetaData();
        var defaultValue = curJjv.validate(schema, data).catch(function () { return 1; });
        var reducer = new FormReducer(updateState ? updateState({}, {
            data: data,
            meta: meta.data
        }) : {
            data: data,
            meta: meta.data
        }, meta, getOriginState, updateState);
        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;
        return reducer;
    };
    SchemaFormCreate.metas = {};
    return SchemaFormCreate;
}());
export { SchemaFormCreate };
export default new SchemaFormCreate();
//# sourceMappingURL=create.jsx.map