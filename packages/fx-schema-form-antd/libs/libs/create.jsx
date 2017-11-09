import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
export class SchemaFormCreate {
    createOne(key, data, curJjv, schema, getOriginState, updateState) {
        let meta = new MetaData();
        let defaultValue = curJjv.validate(schema, data).catch(() => 1);
        let reducer = new FormReducer(updateState ? updateState({}, {
            data: data,
            meta: meta.data
        }) : {
            data: data,
            meta: meta.data
        }, meta, getOriginState, updateState);
        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;
        return reducer;
    }
}
SchemaFormCreate.metas = {};
export default new SchemaFormCreate();
//# sourceMappingURL=create.jsx.map