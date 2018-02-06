
import React, { PureComponent } from "react";
import { compose, shouldUpdate } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";
import { createSelector, createSelectorCreator, defaultMemoize } from "reselect";
import Immutable, { is } from "immutable";

import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models/index";
import { UtilsHocOutProps } from "./utils";
import { TreeMap } from "../libs/tree";

export interface DataHocOutProps extends DefaultProps {

}

export interface DataHocSettings {
    data?: boolean;
    dataLength?: boolean;
    meta?: boolean;
    metaKeys?: string[];
    treeNode?: boolean;
}

// 自定义选择器创建函数
const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);

/**
 * 与reduce相关的数据操作
 * 获取formItemData数据
 * 获取formItemMeta数据
 */
export default (hocFactory: BaseFactory<RC<DefaultProps, {}>>, settings: DataHocSettings = {
    data: true
}) => {

    const getItemDataHoc = (parentKeys: string[], rootReducerKey: string[], keys: Array<string | number>) => {
        /**
         * 获取FormItemData的数据
         * @param state 当前的state树
         */
        let getFormItemData = (state: Immutable.Map<string, any>) => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "data", ...keys];

            if (settings.data && state.hasIn(dataKeys)) {
                let formItemData = state.getIn(dataKeys);

                if (formItemData !== undefined) {
                    if (!settings.dataLength) {
                        return formItemData;
                    } else {
                        return formItemData.size;
                    }
                }
            }
        };

        /**
        * 获取FormItemMeta的数据
        * @param state 当前的state树
        */
        let getFormItemMeta = (state: Immutable.Map<string, any>) => {
            let metaKeys = [...rootReducerKey, ...parentKeys, "meta"];

            if (settings.meta && state.hasIn(metaKeys)) {
                let rootNode = state.getIn(metaKeys),
                    childNode = rootNode.containPath([...keys]);

                if (childNode && childNode.value) {
                    if (settings.metaKeys) {
                        return childNode.value.filter((val: any, key: string) => {
                            return settings.metaKeys.indexOf(key) >= 0;
                        });
                    }
                    return childNode.value;
                }
            }
        };

        /**
        * 获取FormItemMeta的根数据
        * @param state 当前的state树
        */
        let getRoot = (state: Immutable.Map<string, any>) => {
            if (!settings.treeNode) {
                return null;
            }

            let metaKeys = [...rootReducerKey, ...parentKeys, "meta"];
            let rootNode: TreeMap = state.getIn(metaKeys);

            return rootNode.addChild([...keys]);
        };

        return fxSelectorCreator(
            [getFormItemData, getFormItemMeta, getRoot],
            (formItemData: any, formItemMeta: any, formItemNode: TreeMap) => {
                const rtn: { formItemData?: any, formItemMeta?: any, formItemNode?: TreeMap } = {};

                if (formItemData) {
                    rtn.formItemData = formItemData;
                }
                if (formItemMeta) {
                    rtn.formItemMeta = formItemMeta;
                }
                if (formItemNode) {
                    rtn.formItemNode = formItemNode;
                }

                return rtn;
            }
        );
    };

    /**
     * 用于获取数据的hoc
     * @param hocFactory  hoc的工厂方法
     * @param Component   需要包装的组件
     * 加入属性
     * arrayItems
     */
    return (Component: any): RC<DefaultProps, any> => {
        @(shouldUpdate(() => false) as any)
        class DataComponentHoc extends PureComponent<DefaultProps & UtilsHocOutProps, any> {
            // private ComponentWithHoc;

            public render(): JSX.Element {
                const { uiSchema, getOptions } = this.props,
                    { keys = [] } = this.props.uiSchema || {},
                    options = getOptions(this.props, "hoc", "data");


                if (!options.rootReducerKey || options.rootReducerKey.constructor !== Array) {
                    console.error("dataHoc missing property rootReducerKey.should be a Array.");
                }

                const hoc = connect(getItemDataHoc(this.props.parentKeys, options.rootReducerKey, keys)),
                    ComponentWithHoc: any = hoc(Component);

                return <ComponentWithHoc {...this.props} />;
            }
        }

        return DataComponentHoc as any;
    };
};
