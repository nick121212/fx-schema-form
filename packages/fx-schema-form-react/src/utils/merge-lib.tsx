import { MergeLib, BaseFactory } from "fx-schema-form-core";
import { UiSchema } from "fx-schema-form-core/src/models/uischema";
import { useMemo } from "react";

function recursionMerge(schemaKey: string, useFormItem: (uiSchema: UiSchema, indexList: number[]) => any, uiSchemas: string[] = [ "*" ], parent?: UiSchema) {
    const factory = new BaseFactory<UiSchema>();

    useMemo(
        () => {
            const merge: MergeLib = new MergeLib(schemaKey, parent, uiSchemas);

            merge.mergeUiSchemaList.forEach((uiSchema: UiSchema) => {
                switch (uiSchema.type) {
                    case "array":
                        // recursionMerge(uiSchema.schemaPath || "", useFormItem, [ "-" ], uiSchema).forEach((key: string, val: UiSchema) => {
                        //     factory.add(key, val);
                        // });
                        // break;
                    case "object":
                        recursionMerge(uiSchema.schemaPath || "", useFormItem, undefined, uiSchema).forEach((key: string, val: UiSchema) => {
                            factory.add(key, val);
                        });
                        // break;
                    default:
                        factory.add(uiSchema.key, useFormItem(uiSchema, []));
                }
            });
        },
        [ schemaKey ]
    );

    return factory;
}

export default recursionMerge;
