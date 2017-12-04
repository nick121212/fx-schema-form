
import React from "react";
import { schemaMerge, BaseFactory } from "fx-schema-form-core";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";

import { RC } from "../../types";
import { SchemaFormBaseProps } from "../../components/form/props";
import { mapActionsStateToProps, mapActionsDispatchToProps } from "../select";
import { SchemaFormCreate } from "../../libs/create";

/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    schemaFormOptions: any;
    mergeSchemaList: any;
    formDefaultData?: any;
}

export interface MergeHocProps extends SchemaFormBaseProps {
    metaState: { isLoading: boolean; isValid: boolean; };
}

/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: RC<any, any>): RC<MergeHocProps, any> => {
        @(compose<MergeHocProps, any>(
            onlyUpdateForKeys(["schema"]),
            connect(mapActionsStateToProps),
            connect(null, mapActionsDispatchToProps),
        ) as any)
        class MergeComponentHoc extends React.PureComponent<MergeHocProps, any> {
            public render(): JSX.Element {
                let { schema, uiSchema, parentKeys, schemaFormOptions, schemaKey } = this.props, mergeSchemaList;
                let formDefaultData = {}, mergeSchema = schema;
                let metaData = SchemaFormCreate.metas[schemaKey];

                if (!schemaKey) {
                    schemaKey = (Date.now() + Math.random()).toString();
                }
                // 设置默认值
                schemaFormOptions = schemaFormOptions || {
                    avjOptions: {}
                };

                // 判断schema的keys是否有值，为空则标志，这只是一个容器组件
                if (parentKeys && !parentKeys.length) {
                    schemaFormOptions.parentKeys = schemaFormOptions.parentKeys || [];
                    if (schemaFormOptions.map.has(schemaFormOptions.parentKeys.join("/"))) {
                        mergeSchema = schemaFormOptions.map.get(schemaFormOptions.parentKeys.join("/"));
                    }
                } else {
                    schemaFormOptions.parentKeys = parentKeys || [];
                }
                // 合并schema和uiSchema
                mergeSchemaList = schemaMerge.merge(schemaKey, mergeSchema, uiSchema, schemaFormOptions);

                // 初始化meta
                if (schemaFormOptions && schemaFormOptions.ajv) {
                    metaData.init(schemaFormOptions, schemaKey);
                }

                return (
                    <Component
                        schemaFormOptions={schemaFormOptions || {}}
                        schemaKey={schemaKey}
                        mergeSchemaList={mergeSchemaList}
                        {...this.props}>
                    </Component>
                );
            }
        }

        return MergeComponentHoc;
    };
};
