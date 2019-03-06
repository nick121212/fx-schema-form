import { JSONSchema6 } from "json-schema";
import { typeOf } from "fx-schema-form-core";

import { useSchemaFormItem, SchemaFormItemData } from "./form-item";

export interface SchemaFormItemArrayData extends SchemaFormItemData {
    addItem: (d?: any) => void;
    removeItem: (i: number) => void;
    getChildItem?: (i: number) => SchemaFormItemData;
}

/**
 * SchemaFormItem的hook实现
 * @param   {string}                     key             schemaId + “#/” + schemaPathKey
 * @param   {any}                        formData        对应的ScheamFormHook中的数据
 * @param   {(data: any) => void}        setFormData     对应的ScheamFormHook中的修改数据方法
 * @param   {number[]}                   indexList       如果是数组元素，则需要下标索引
 * @returns {SchemaFormItemData}
 */
export function useSchemaFormItemArray(formData: any, setFormData: (data: any) => void, key: string, indexList: number[] = []): SchemaFormItemArrayData {
    const formItem = useSchemaFormItem(formData, setFormData, key, indexList);
    const { schema } = formItem;
    const itemType = (schema.items as JSONSchema6).type;

    // 如果当前的字段类型不是数组，则直接返回
    if (schema && schema.type !== "array" && schema.items) {
        throw new Error("当前的Schema路径不是数组类型");
        // return formItem
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

    return {
        ...formItem,
        addItem,
        removeItem
    };
}
