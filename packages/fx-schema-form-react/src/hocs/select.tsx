
import React from "react";
import { connect, Dispatch } from "react-redux";
import Reselect, { createSelector } from "reselect";

import { SchemaFormMeta, MetaData } from "../libs/meta";
import { conFactory } from "../container";

const contaienr = conFactory.get("default");

/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export const mapFormDataToProps = createSelector(
    [contaienr.getAllData.bind(contaienr)],
    (formData: any) => {
        return { formData };
    }
);

/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export const mapMetaStateToProps = createSelector(
    [contaienr.getItemMeta.bind(contaienr)],
    (meta: any) => {
        return { meta };
    }
);

/**
 * 获取单个字段的数据
 */
export const mapFormItemDataProps = createSelector(
    [contaienr.getItemData.bind(contaienr)],
    (formItemData: any) => {
        return { formItemData };
    }
);

/**
 * 返回actions
 */
export const mapActionsStateToProps = createSelector(
    [contaienr.getActions.bind(contaienr)],
    (actions: any) => {
        return { actions };
    }
);

/**
 * 使得actions可以直接调用，绑定到dispatch
 * @param dispatch dispatch
 * @param ownProps 属性
 */
export const mapActionsDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
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
