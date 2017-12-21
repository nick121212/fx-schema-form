import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
import { conFactory } from "../container";
export class SchemaFormCreate {
    createOne(key, data, props, con = "jpp", curJjv, schema) {
        let meta = new MetaData(con);
        let container = conFactory.get(con);
        let defaultData = curJjv.validate(schema, data);
        let reducer = new FormReducer(container.initData(props, {
            data: data,
            meta: meta.data
        }), meta, props, container);
        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;
        return reducer;
    }
}
SchemaFormCreate.metas = {};
export default new SchemaFormCreate();
//# sourceMappingURL=create.js.map