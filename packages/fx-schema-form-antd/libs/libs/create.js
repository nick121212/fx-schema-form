import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
export class SchemaFormCreate {
    createOne(key, data, curJjv, schema) {
        let meta = new MetaData();
        let defaultValue = curJjv.validate(schema, data).catch(console.error);
        let reducer = new FormReducer({
            data: data,
            meta: meta
        });
        meta.actions = reducer.actions;
        return reducer;
    }
    createMuti(forms = {}) {
        let reducers = {};
        for (let key in forms) {
            if (forms.hasOwnProperty(key)) {
                let element = forms[key];
                let meta = new MetaData();
                let reducer = new FormReducer({
                    data: element,
                    meta: meta
                });
                meta.actions = reducer.actions;
                if (element) {
                    reducers[key] = reducer.reducer;
                }
            }
        }
        return reducers;
    }
}
export default new SchemaFormCreate();
//# sourceMappingURL=create.js.map