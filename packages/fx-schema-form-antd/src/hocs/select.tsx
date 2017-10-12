
import React from "react";
import { connect, Dispatch } from "react-redux";
import *  as jpp from "json-pointer";
import { createSelector } from "reselect";
import cloneDeep from "lodash.clonedeep";

import { SchemaFormItemBaseProps } from "../components/formitem/props";
import { SchemaFormMeta, MetaData } from "../libs/meta";

/**
 * 获取formData的数据
 * @param state state
 * @param props 属性
 */
export const getAllData = (state: any, props: SchemaFormItemBaseProps) => {
    let { data = {} } = state[props.schemaKey];

    return data;
};

/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export const getData = (state: any, props: SchemaFormItemBaseProps) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {} } = state[props.schemaKey];

    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};

/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export const getMetaData = (state: any, props: SchemaFormItemBaseProps): SchemaFormMeta => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    const { meta } = state[props.schemaKey];

    return meta.getMeta(keys, mergeSchema.type !== "array");
};

/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
export const getActions = (state: any, props: SchemaFormItemBaseProps) => {
    const { schemaKey } = props;
    const { data = {}, meta = { actions: {} } } = state[schemaKey];

    if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
        (meta as MetaData).init(props.schemaFormOptions, props.schemaKey);
    }

    return meta.actions;
};

/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export const mapMetaStateToProps = createSelector(
    [getMetaData, getData, getAllData],
    (meta: any, formItemData: any, formData: any) => {
        return { meta, formData, formItemData };
    }
);

/**
 * 返回actions
 */
export const mapActionsStateToProps = createSelector(
    [getActions],
    (actions: any) => {
        return { actions };
    }
);
