import ajv from "ajv";

import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";

export class SchemaFormCreate {
    public static metas: { [key: string]: MetaData } = {};

    public createOne<T>(key, data: T, curJjv?: ajv.Ajv, schema?: any): FormReducer<T> {
        let meta: MetaData = new MetaData();
        let defaultValue = (curJjv.validate(schema, data) as Promise<any>).catch(() => {
            console.log("");
        });
        let reducer = new FormReducer<T>({
            data: data,
            meta: meta.data
        }, meta);

        meta.actions = reducer.actions;

        SchemaFormCreate.metas[key] = meta;

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
                }, meta);

                meta.actions = reducer.actions;
                SchemaFormCreate.metas[key] = meta;

                if (element) {
                    reducers[key] = reducer.reducer;
                }
            }
        }

        return reducers;
    }
}

export default new SchemaFormCreate();
