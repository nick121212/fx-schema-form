import { MergeLib, getSchemaId, getDataKeys } from "fx-schema-form-core";
import * as jpp from "json-pointer";

// tslint:disable-next-line:max-line-length
export function useSchemaFormItem(key: string, formData: any, setFormData: (data: any) => void) {
    const formKey: string = getSchemaId(key);
    const dataKeys: string[] = getDataKeys(key);
    const jppDataKeys = jpp.compile(dataKeys);
    let value = undefined;
    let merge = new MergeLib(formKey, undefined, [ getDataKeys(key).join("/") ]);

    if (jpp.has(formData, jppDataKeys)) {
        value = jpp.get(formData, jppDataKeys);
    }

    return {
        value,
        onChange: (e: any) => {
            jpp.set(formData, jppDataKeys, e.target.value);
            setFormData(formData);
        },
        dataKeys,
        formKey,
        schema: merge.mergeUiSchemaList[0]
    };
}
