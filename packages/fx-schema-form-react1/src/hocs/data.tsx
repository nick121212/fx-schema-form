
import React from "react";
import { compose } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";
import { createSelector } from "reselect";
import Immutable from "immutable";

import { DefaultProps, RC, FxUiSchema } from "../components";

export interface ArrayHocOutProps extends DefaultProps {

}

export default (hocFactory: BaseFactory<any>, settings: any = {
    data: true,
    rootReducerKey: ["schemaForm"]
}) => {

    const getItemData = (state: Immutable.Map<string, any>) => {
        console.log(state);

        state.getIn([]);
    };

    const getItemDataHoc = (keys: string[]) => {
        return (state: Immutable.Map<string, any>) => {
            console.log(state.toJS());

            return {
                formItemData: state.getIn(settings.rootReducerKey.concat(keys))
            };
        };
    };

    /**
     * 用于获取数据的hoc
     * @param hocFactory  hoc的工厂方法
     * @param Component   需要包装的组件
     * 加入属性
     * arrayItems
     */
    return (Component: any): RC<ArrayHocOutProps, any> => {
        class DataComponentHoc extends React.PureComponent<ArrayHocOutProps, any> {
            public render(): JSX.Element {
                const { keys } = this.props.uiSchema as FxUiSchema,
                    ComponentWithHoc = connect(getItemDataHoc([...this.props.parentKeys, ...keys]))(Component);

                return <ComponentWithHoc {...this.props} />;
            }
        }

        return DataComponentHoc;
    };
};
