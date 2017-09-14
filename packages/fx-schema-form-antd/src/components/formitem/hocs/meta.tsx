
import React from "react";
import { connect, Dispatch } from "react-redux";
import *  as jpp from "json-pointer";
import { createSelector } from "reselect";

import { SchemaFormItemBaseProps } from "../props";

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
export const getMetaData = (state: any, props: SchemaFormItemBaseProps) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { meta = {} } = state[props.schemaKey];

    return jpp.has(meta, jpp.compile(keys)) ? jpp.get(meta, jpp.compile(keys)) : { dirty: false };
};

/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
export const getActions = (state: any, props: SchemaFormItemBaseProps) => {
    const { schemaKey } = props;
    const { data = {}, meta = { actions: {} } } = state[schemaKey];

    return meta.actions;
};

export const mapMetaStateToProps = createSelector(
    [getMetaData, getData],
    (meta: any, formData: any) => {
        return { meta, formData };
    }
);

export const mapActionsStateToProps = createSelector(
    [getActions],
    (actions: any) => {
        return { actions };
    }
);
