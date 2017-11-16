import ajv from "ajv";

import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";

export class SchemaFormCreate {
    public static metas: { [key: string]: MetaData } = {};

    /**
     * 创建一个schema form reducer
     * @param key             唯一标志
     * @param data            数据
     * @param curJjv          当前的ajv实例
     * @param schema          当前的json schema
     * @param updateState     更新state的方法
     */
    public createOne<T>(key: string, data: T, curJjv?: ajv.Ajv, schema?: any,
        getOriginState?: (state: any) => any,
        updateState?: (state: any, data: any) => any): FormReducer<T> {
        let meta: MetaData = new MetaData();
        let defaultValue = (curJjv.validate(schema, data) as Promise<any>).catch(() => 1);
        let reducer = new FormReducer<T>(updateState ? updateState({}, {
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

export default new SchemaFormCreate();
