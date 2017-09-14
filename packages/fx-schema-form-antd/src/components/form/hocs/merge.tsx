
import React from "react";
import { merge } from "fx-schema-form-core";

import { RC } from "../../../types";
import { SchemaFormProps } from "../props";

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
export const MergeHoc = (Component: RC<any, any>): RC<SchemaFormProps, any> => {
    class Hoc extends React.Component<SchemaFormProps, any> {

        public componentDidMount(): void {
            console.log("merge mounted!");
        }

        public render(): JSX.Element {
            let { schema, uiSchema, globalOptions, parentKeys, schemaFormOptions, schemaKey } = this.props, mergeSchemaList;

            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }

            schemaFormOptions = schemaFormOptions || {};
            schemaFormOptions.parentKeys = parentKeys || [];

            mergeSchemaList = merge(schemaKey, schema, uiSchema, schemaFormOptions);

            return (
                <Component
                    schemaFormOptions={schemaFormOptions || {}}
                    schemaKey={schemaKey}
                    mergeSchemaList={mergeSchemaList}
                    {...this.props}>
                </Component>);
        }
    }

    return Hoc;
};
