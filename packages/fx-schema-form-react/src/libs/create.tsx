import ajv from "ajv";

import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
import { conFactory } from "../container";

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
    public  createOne<T>(key: string, data: T, props: any, con = "jpp", curJjv?: ajv.Ajv, schema?: any): FormReducer<T> {
        let meta: MetaData = new MetaData(con);
        let container = conFactory.get(con);
        let defaultData = curJjv.validate(schema, data);
        let reducer = new FormReducer<T>(container.initData(props, {
            data: data,
            meta: meta.data
        }), meta, props, container);

        // try {
        // ;
        // } catch (e) {
        //     console.log(1);
        // }

        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;

        return reducer;
    }
}

export default new SchemaFormCreate();
