import { RC } from "../../../types";
import { SchemaFormBaseProps } from "../props";
/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    schemaFormOptions: any;
    mergeSchemaList: any;
}
/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param Component 需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
export declare const MergeHoc: (Component: RC<any, any>) => RC<SchemaFormBaseProps, any>;
