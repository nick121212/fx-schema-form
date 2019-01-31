import { useEffect, useContext } from "react";
import { useSetState } from "react-use";
import { JSONSchema6 } from "json-schema";
import { ResolveLib } from "fx-schema-form-core";
import * as jsondiffpatch from "jsondiffpatch";
import { SchemaFormContext, ISchemaFormData } from "./data";

const jsonDiffPatch: jsondiffpatch.DiffPatcher = (jsondiffpatch as any).create({
    objectHash: function(obj: any) {
        return obj._id || obj.id;
    },
    arrays: {
        detectMove: true,
        includeValueOnMove: false
    },
    textDiff: {
        minLength: 60
    },
    propertyFilter: function(name: string, context: any) {
        return name.slice(0, 1) !== "$";
    },
    cloneDiffValues: false
});

/**
 * SchemaForm的hook实现
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
// tslint:disable-next-line:max-line-length
export function useSchemaForm<T extends ISchemaFormData<any>>(key: string, schema: JSONSchema6, initialValue?: T, onFormDataChanged?: (data: T, delta: any) => void) {
    const [ oldFormData, setOldFormData ] = useSetState<T>({ ...initialValue } as any);
    const [ formData, setFormData ] = useSetState<T>(initialValue);
    const schemaFormData = useContext(SchemaFormContext);
    let resolve: ResolveLib | null = null;

    if (!key) {
        throw new Error("key不能为空");
    }

    if (!schema) {
        throw new Error("schema不能为空");
    }

    resolve = new ResolveLib(schema as any);

    const delta = jsonDiffPatch.diff(oldFormData, formData);

    useEffect(
        () => {
            if (!delta) {
                return;
            }

            setOldFormData(formData);
            // schemaFormData[key] = formData as any;
            if (onFormDataChanged) {
                onFormDataChanged(formData, delta);
            }
        },
        [ delta ]
    );

    return {
        formData,
        setFormData
    };
}
