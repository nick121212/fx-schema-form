import ajv from "ajv";
import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
export declare class SchemaFormCreate {
    static metas: {
        [key: string]: MetaData;
    };
    /**
     * 创建一个schema form reducer
     * @param key             唯一标志
     * @param data            数据
     * @param curJjv          当前的ajv实例
     * @param schema          当前的json schema
     * @param updateState     更新state的方法
     */
    createOne<T>(key: string, data: T, curJjv?: ajv.Ajv, schema?: any, getOriginState?: (state: any) => any, updateState?: (state: any, data: any) => any): FormReducer<T>;
}
declare const _default: SchemaFormCreate;
export default _default;
