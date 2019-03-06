import { MergeLib, getSchemaId, getDataKeys, typeOf } from "fx-schema-form-core";
import { UiSchema } from "fx-schema-form-core/dist/typings/models/uischema";
import * as jpp from "json-pointer";

import mergeKeys from "./merge-keys";
import { jsonDiffPatch } from "../jsondiff";
import { getMergeInfo } from "./merge-info";

/**
 * SchemaFormItem的hook实现中的返回数据
 * @export
 * @interface SchemaFormItemData
 */
export interface SchemaFormItemData {
    /**
     * 当前字段的数据
     */
    value: any;
    /**
     * 修改当前数据的方法
     */
    onChange: (val: any) => void;
    /**
     * 当前字段对应的数据路径
     */
    dataKeys: string[];
    /**
     * 当前form的key
     */
    schemaId: string;
    /**
     * 当前字段对应的schema
     */
    schema: UiSchema;
}

/**
 * SchemaFormItem的hook实现
 * @param   {number[]}                   indexList       如果是数组元素，则需要下标索引
 * @param   {string}                     key             schemaId + “#/” + schemaPathKey
 * @param   {any}                        formData        对应的ScheamFormHook中的数据
 * @param   {(data: any) => void}        setFormData     对应的ScheamFormHook中的修改数据方法
 * @returns {SchemaFormItemData}
 */
export function useSchemaFormItem(formData: any, setFormData: (data: any) => void, key: string, indexList: number[] = []): SchemaFormItemData {
    const formDataClone = jsonDiffPatch.clone(formData.data);
    const { dataKeys, schema, schemaId } = getMergeInfo(key, indexList);
    const jppDataKeys = jpp.compile(dataKeys);

    let value = undefined;

    // 如果存在数据，则获取
    if (jpp.has(formDataClone, jppDataKeys)) {
        value = jpp.get(formDataClone, jppDataKeys);
    }

    return {
        value,
        onChange: (val: any) => {
            jpp.set(formDataClone, jppDataKeys, val);
            setFormData({ data: formDataClone });
        },
        dataKeys,
        schemaId,
        schema
    };
}
