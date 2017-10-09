
import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";

export class SchemaFormCreate {
    public createOne<T>(key, data: T): FormReducer<T> {
        let meta: MetaData = new MetaData();
        let reducer = new FormReducer<T>({
            data: data,
            meta: meta
        });

        meta.actions = reducer.actions;

        return reducer;
    }

    public createMuti(forms: { [id: string]: any } = {}): Object {
        let reducers: any = {};

        for (let key in forms) {
            if (forms.hasOwnProperty(key)) {
                let element = forms[key];
                let meta: MetaData = new MetaData();
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
