import React from "react";

import { SchemaFormBaseProps } from "./props";
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { MergeHocOutProps } from "../../hocs/form/merge";
import { SchemaFormBlock } from "../block";

/**
 * form组建的props
 */
export interface SchemaFormProps extends SchemaFormBaseProps {

}

/**
 * SchemaForm组件
 * 通过schema和uiSchea生成表单元素
 */
class SchemaFormComponent extends React.Component<SchemaFormProps & MergeHocOutProps, any> {
    /**
     * render
     */
    public render(): JSX.Element {
        const { children,
            mergeSchemaList,
            schemaKey,
            arrayItems,
            arrayIndex,
            globalOptions,
            RootComponent,
            schemaFormOptions,
            formDefaultData
        } = this.props;

        let RootComponentHock = RootComponent;

        // 计算顶部容器，如果有RootComponent，则使用，否则使用默认的容器组件
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }

        return (
            <RootComponentHock>
                {
                    mergeSchemaList.map((mergeSchema: any, idx: number) => {
                        let find = false;

                        if (typeof arrayIndex === "number") {
                            mergeSchema.keys = mergeSchema.keys.map((key: string) => {
                                if (find) {
                                    return key;
                                }

                                if (key === "-") {
                                    return arrayIndex;
                                }

                                return key;
                            });
                        }
                        return <SchemaFormItem
                            key={`${schemaKey}-${idx.toString()}`}
                            schemaKey={schemaKey}
                            arrayIndex={arrayIndex}
                            arrayItems={arrayItems}
                            formDefaultData={formDefaultData}
                            mergeSchemaList={mergeSchemaList}
                            mergeSchema={mergeSchema}
                            schemaFormOptions={schemaFormOptions}
                            globalOptions={globalOptions}>
                        </SchemaFormItem>;
                    })
                }
                {children}
            </RootComponentHock>
        );
    }
}

export const SchemaForm = hoc(SchemaFormComponent);
