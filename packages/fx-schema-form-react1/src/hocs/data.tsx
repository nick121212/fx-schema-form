
import React from "react";
import { compose } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";
import { createSelector } from "reselect";
import Immutable from "immutable";

import { DefaultProps, RC, FxUiSchema } from "../components";

export interface DataHocOutProps extends DefaultProps {

}

export interface DataHocSettings {
    rootReducerKey: string[];
    data?: boolean;
    dataLength?: boolean;
}

export default (hocFactory: BaseFactory<RC<DefaultProps, {}>>, settings: DataHocSettings = {
    data: true,
    rootReducerKey: ["schemaForm"]
}) => {

    const getItemDataHoc = (keys: string[]) => {
        return (state: Immutable.Map<string, any>) => {
            if (!state.hasIn(settings.rootReducerKey.concat(keys)) && settings.data) {
                return {};
            }

            let formItemData = state.getIn(settings.rootReducerKey.concat(keys));

            if (!settings.dataLength) {
                return {
                    formItemData
                };
            }

            if (formItemData) {
                return {
                    formItemData: formItemData.size
                };
            }

            return {};
        };
    };

    /**
     * 用于获取数据的hoc
     * @param hocFactory  hoc的工厂方法
     * @param Component   需要包装的组件
     * 加入属性
     * arrayItems
     */
    return (Component: any): RC<DataHocOutProps, any> => {
        class DataComponentHoc extends React.PureComponent<DataHocOutProps, any> {
            public render(): JSX.Element {
                const { keys } = this.props.uiSchema as FxUiSchema,
                    ComponentWithHoc = connect(getItemDataHoc([...this.props.parentKeys, ...keys]))(Component);

                return <ComponentWithHoc {...this.props} />;
            }
        }

        return DataComponentHoc as any;
    };
};
