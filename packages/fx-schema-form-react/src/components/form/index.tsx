import React from "react";

import { SchemaFormBaseProps } from "./props";
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { MergeHocOutProps } from "../../hocs/form/merge";
import { UtilsHocOutProps } from "../../hocs/item/utils";

import { SchemaFormBlock } from "../block";



/**
 * form组建的props
 */
export interface SchemaFormProps extends SchemaFormBaseProps, UtilsHocOutProps {

}

/**
 * SchemaForm组件
 * 通过schema和uiSchea生成表单元素
 */
class SchemaFormComponent extends React.PureComponent<SchemaFormProps & MergeHocOutProps, any> {
    /**
     * render
     */
    public render(): JSX.Element {
        const { children,
            mergeSchemaList,
            schemaKey,
            ItemButtons,
            arrayIndex,
            arrayLevel,
            globalOptions,
            RootComponent,
            schemaFormOptions,
            reducerKeys,
            formDefaultData,
            getCurrentState,
            actions
        } = this.props;

        let RootComponentHock = RootComponent;

        // 计算顶部容器，如果有RootComponent，则使用，否则使用默认的容器组件
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }

        // console.log("form component render===========");

        return (
            <RootComponentHock>
                {
                    mergeSchemaList.map((mergeSchema: any, idx: number) => {
                        mergeSchema.keys = this.mergeKeys(mergeSchema);

                        return <SchemaFormItem
                            key={`${schemaKey}-${idx.toString()}}`}
                            getCurrentState={getCurrentState}
                            schemaKey={schemaKey}
                            arrayIndex={arrayIndex}
                            reducerKeys={reducerKeys}
                            arrayLevel={arrayLevel}
                            ItemButtons={ItemButtons}
                            actions={actions}
                            formDefaultData={formDefaultData}
                            mergeSchemaList={mergeSchemaList}
                            mergeSchema={mergeSchema}
                            schemaFormOptions={schemaFormOptions}
                            globalOptions={globalOptions}>
                        </SchemaFormItem>;
                    })
                }
                {children || null}
            </RootComponentHock>
        );
    }

    /**
     * 合并keys，把-替换成数组索引
     */
    private mergeKeys(mergeSchema: any) {
        const { arrayLevel = [] } = this.props;
        let arrayLevelCopy = arrayLevel.concat([]);

        // if (!mergeSchema.keys) {
        //     mergeSchema.keys = [];
        // }

        // console.log("-----", mergeSchema.keys);

        // if (mergeSchema.keys.constructor === Function) {
        //     console.log(mergeSchema.keys());
        // }

        mergeSchema.originKeys = mergeSchema.keys.concat([]);

        return mergeSchema.keys.map((key: string) => {
            if (key === "-") {
                return arrayLevelCopy.shift();
            }

            return key;
        });
    }
}

export const SchemaForm = hoc(SchemaFormComponent);
