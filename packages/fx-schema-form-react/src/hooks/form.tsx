import { useEffect, useState, useMemo } from "react";
import { useSetState } from "react-use";
import { JSONSchema6 } from "json-schema";
import { ResolveLib, TreeMap, MergeLib, typeOf } from "fx-schema-form-core";
import { UiSchema } from "fx-schema-form-core/src/models/uischema";
import { Delta } from "jsondiffpatch";
import * as jpp from "json-pointer";

import { jsonDiffPatch } from "../jsondiff";
import { ISchemaFormData } from "./form-data";
import { useSchemaFormItem } from "../utils/form-item";
import { useSchemaFormItemArray } from "../utils/form-item-array";
import { getMergeInfo } from "../utils/merge-info";
import mergeKeys from "../utils/merge-keys";
import recursionMerge from "../utils/merge-lib";

const useSchemaFormItem1 = (schema: JSONSchema6, formData: any, setFormData: any, keyOfItem: string, indexList: number[] = []) => {
    const schemaKeyOfItem = schema.$id + "#/" + keyOfItem;
    const { schema: { type } } = getMergeInfo(schemaKeyOfItem, indexList);

    if (type === "array") {
        return useSchemaFormItemArray(formData, setFormData, schemaKeyOfItem, indexList);
    }

    return useSchemaFormItem(formData, setFormData, schemaKeyOfItem, indexList);
};

const getFormItem = (formData: any, setFormData: any, uiSchema: UiSchema) => {
    return (indexList: number[] = []) => {
        const formDataClone = jsonDiffPatch.clone(formData.data);
        const dataKeys = mergeKeys((uiSchema.keys as string[]).reverse(), indexList);
        const jppDataKeys = jpp.compile(dataKeys);
        const itemType = uiSchema.type;

        let value: any = undefined;

        // 如果存在数据，则获取
        if (jpp.has(formDataClone, jppDataKeys)) {
            value = jpp.get(formDataClone, jppDataKeys);
        }

        const formItem = {
            value,
            onChange: (val: any) => {
                jpp.set(formDataClone, jppDataKeys, val);
                setFormData({ data: formDataClone });
            }
        };

        if (!value) {
            Reflect.deleteProperty(formItem, "value");
        }

        // 添加一个元素
        const addItem = (data?: any) => {
            const formItemData = formItem.value || [];
            const typeOfData = typeOf(data);

            if (itemType === "object") {
                formItemData.push(typeOfData === "object" ? data : {});
            } else if (itemType === "array") {
                formItemData.push(typeOfData === "array" ? data : []);
            } else {
                formItemData.push(typeOfData === "array" || typeOfData === "object" ? undefined : data);
            }

            formItem.onChange(formItemData);
        };

        // 删除一个元素
        const removeItem = (index: number) => {
            const formItemData: Array<any> = [ ...(formItem.value || []) ];

            formItemData.splice(index, 1);

            formItem.onChange(formItemData);
        };

        if (itemType !== "array") {
            return formItem;
        }

        return {
            ...formItem,
            removeItem,
            addItem
        };
    };
};

/**
 * SchemaForm 的 hook实现
 * @param    {String}                              key                 form的唯一key
 * @param    {JSONSchema6}                         schema              json-schema
 * @param    {T}                                   initialValue        初始值
 * @param    {(d: T, delta: any)=>void}            onFormDataChanged   值更改的回调函数
 * @returns
 * {
 *     formData: T                 当前的form的数据
 *     setFormData: (d: T)=>void   更改form的数据的函数
 * }
 */
export function useSchemaForm<T extends Object>(key: string, schema: JSONSchema6, initialValue?: T, onFormDataChanged?: (data?: T, delta?: Delta) => void): any {
    const [ oldFormData, setOldFormData ] = useState<T>(initialValue as any);
    const [ formData, setFormData ] = useSetState<ISchemaFormData<T>>({ data: initialValue, meta: new TreeMap(key, {}) });

    // 验证下字段
    if (!key) {
        throw new Error("key不能为空");
    }

    // 判断下schema
    if (!schema) {
        throw new Error("schema不能为空");
    }

    const start = performance.now();

    // 解析json-schema
    const resolve: ResolveLib = new ResolveLib(schema as any);
    // 计算当前新老数据的差异
    const delta: Delta | undefined = jsonDiffPatch.diff(oldFormData, formData.data);
    const formItems = recursionMerge(key, getFormItem.bind(null, formData, setFormData));

    console.log(formItems);

    // 使用effect来处理数据的更改监听，这里是耗时的
    useEffect(
        () => {
            if (!delta) {
                return;
            }

            // 修改老数据，保持老数据和新数据同步
            setOldFormData(jsonDiffPatch.clone(formData.data));
            // 触发回调函数
            if (onFormDataChanged) {
                onFormDataChanged(formData.data, delta);
            }
        },
        [ delta ]
    );

    return {
        formData,
        setFormData,
        resolve,
        formItems,
        useSchemaFormItem: useSchemaFormItem1.bind(null, schema, formData, setFormData)
    };
}
