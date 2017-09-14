
import React from "react";
import { merge } from "fx-schema-form-core";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate } from "recompose";

import { RC } from "../../../types";
import { SchemaFormBaseProps } from "../props";
import { mapActionsStateToProps } from "../../meta";

/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    schemaFormOptions: any;
    mergeSchemaList: any;
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormBaseProps) => {
    const { actions, schemaFormOptions } = ownProps;

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
            let { schema, uiSchema, globalOptions, parentKeys, schemaFormOptions, schemaKey, actions } = this.props, mergeSchemaList;

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
