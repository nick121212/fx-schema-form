import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
import { conFactory } from "../container";
var SchemaFormCreate = (function () {
    function SchemaFormCreate() {
    }
    SchemaFormCreate.prototype.createOne = function (key, data, props, con, curJjv, schema) {
        if (con === void 0) { con = "jpp"; }
        var meta = new MetaData(con);
        var container = conFactory.get(con);
        var defaultData = curJjv.validate(schema, data);
        var reducer = new FormReducer(container.initData(props, {
            data: data,
            meta: meta.data
        }), meta, props, container);
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