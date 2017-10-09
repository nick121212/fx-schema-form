
import React from "react";
import { schemaMerge } from "fx-schema-form-core";
// import { schemaMerge } from "../../../../../fx-schema-form-core/src";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate } from "recompose";

import { RC } from "../../../types";
import { SchemaFormBaseProps } from "../props";
import { mapActionsStateToProps } from "../../select";

/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    schemaFormOptions: any;
    mergeSchemaList: any;
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormBaseProps) => {
    const { actions } = ownProps;

    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];

            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }

    return { actions };
};


/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param Component 需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
export const MergeHoc = (Component: RC<any, any>): RC<SchemaFormBaseProps, any> => {
    @(compose<SchemaFormBaseProps, any>(
        connect(mapActionsStateToProps),
        connect(null, mapDispatchToProps)
    ) as any)
    class Hoc extends React.Component<SchemaFormBaseProps, any> {
        public render(): JSX.Element {
            let { schema, uiSchema, parentKeys, schemaFormOptions, schemaKey, actions } = this.props, mergeSchemaList;

            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            // 设置默认值
            schemaFormOptions = schemaFormOptions || {
                avjOptions: {
                    allErrors: true,
                    jsonPointers: true,
                    errorDataPath: "property"
                }
            };
            schemaFormOptions.parentKeys = parentKeys || [];
            // 合并schema和uiSchema
            mergeSchemaList = schemaMerge.merge(schemaKey, schema, uiSchema, schemaFormOptions);

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

    return Hoc;
};
