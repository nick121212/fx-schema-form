
import React from "react";
import { connect, Dispatch } from "react-redux";
import *  as jpp from "json-pointer";
import { createSelector } from "reselect";
// import { } from "react-act";

import { SchemaFormItemProps } from "../components/formitem";
import { RC } from "../types";


const getData = (state: any, props: SchemaFormItemProps) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {}, meta = {} } = state[props.schemaKey];

    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};

const getMetaData = (state: any, props: SchemaFormItemProps) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { meta = {} } = state[props.schemaKey];

    return jpp.has(meta, jpp.compile(keys)) ? jpp.get(meta, jpp.compile(keys)) : { dirty: false };
};

const mapStateToProps = createSelector(
    [getData, getMetaData],
    (formData: any, meta: any) => {
        return { formData, meta };
    }
);

/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const DataHoc = (Component: any): RC<SchemaFormItemProps, any> => {
    class Hoc extends React.Component<SchemaFormItemProps, any> {
        public render(): JSX.Element {
            const ComponentWithHoc = connect(mapStateToProps)(Component);

            console.log("data hoc rendred");

            return <ComponentWithHoc {...this.props} />;
        }
    }

    return Hoc;
};
