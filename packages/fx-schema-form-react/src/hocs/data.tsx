
import React from "react";
import { compose, shouldUpdate } from 'recompose';
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";
import { createSelector, createSelectorCreator, defaultMemoize } from "reselect";
import Immutable, { is } from "immutable";

import { DefaultProps, RC, FxUiSchema } from "../components";

export interface DataHocOutProps extends DefaultProps {

}

export interface DataHocSettings {
    rootReducerKey: string[];
    data?: boolean;
    dataLength?: boolean;

    meta?: boolean;
}

// 自定义选择器创建函数
const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);

const maps: any = {};


/**
 * 与reduce相关的数据操作
 * 获取formItemData数据
 * 获取formItemMeta数据
 */
export default (hocFactory: BaseFactory<RC<DefaultProps, {}>>, settings: DataHocSettings = {
    data: true,
    rootReducerKey: ["schemaForm"]
}) => {

    const getItemDataHoc = (parentKeys: string[], keys: string[]) => {
        /**
         * 获取FormItemData的数据
         * @param state 当前的state树
         */
        let getFormItemData = (state: Immutable.Map<string, any>) => {
            let dataKeys = settings.rootReducerKey.concat([...parentKeys, "data", ...keys]);

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
            let metaKeys = settings.rootReducerKey.concat([...parentKeys, "meta"]);

            if (settings.meta && state.hasIn(metaKeys)) {
                let rootNode = state.getIn(metaKeys);
                let childNode = rootNode.containPath([...parentKeys, ...keys]);

                if (childNode && childNode.value) {
                    return childNode.value;
                }
            }
        };

        return fxSelectorCreator(
            [getFormItemData, getFormItemMeta],
            (formItemData: any, formItemMeta: any) => {
                const rtn: { formItemData?: any, formItemMeta?: any } = {};

                if (formItemData) {
                    rtn.formItemData = formItemData;
                }
                if (formItemMeta) {
                    rtn.formItemMeta = formItemMeta;
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
    return (Component: any): RC<DataHocOutProps, any> => {
        @shouldUpdate(() => false)
        class DataComponentHoc extends React.PureComponent<DataHocOutProps, any> {
            private ComponentWithHoc;

            public render(): JSX.Element {
                const { keys } = this.props.uiSchema as FxUiSchema;
                // const mapKeys = [...this.props.parentKeys, ...keys,
                // settings.data, settings.dataLength, settings.meta, ...settings.rootReducerKey].join();

                // if (maps[mapKeys]) {
                //     if (!this.ComponentWithHoc) {
                //         const hoc = maps[mapKeys];
                //         this.ComponentWithHoc = hoc(Component);
                //     }
                // } else {
                const hoc = connect(getItemDataHoc(this.props.parentKeys, keys));
                // maps[mapKeys] = hoc;
                const ComponentWithHoc = hoc(Component);
                // }

                // const ComponentWithHoc = this.ComponentWithHoc;

                return <ComponentWithHoc {...this.props} />;
            }
        }

        return DataComponentHoc as any;
    };
};
