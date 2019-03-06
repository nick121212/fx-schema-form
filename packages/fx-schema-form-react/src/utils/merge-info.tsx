import { MergeLib, getSchemaId, getDataKeys } from "fx-schema-form-core";
import mergeKeys from "./merge-keys";
import { useMemo } from "react";

export function getMergeInfo(key: string, indexList: number[] = []) {
    return useMemo(
        () => {
            const schemaId: string = getSchemaId(key);
            const dataKeys: string[] = [ ...mergeKeys(getDataKeys(key), indexList) ];
            const merge = new MergeLib(schemaId, undefined, [ getDataKeys(key).join("/") ]);
            const schema = merge.mergeUiSchemaList[0];

            return { schema, dataKeys, schemaId };
        },
        [ key, indexList.join("") ]
    );
}
