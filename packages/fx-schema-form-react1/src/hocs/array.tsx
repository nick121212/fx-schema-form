
import React from "react";
import { branch, renderComponent, shouldUpdate, compose, withHandlers, renderNothing, onlyUpdateForKeys } from "recompose";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";

import { MakeHocOutProps } from "./make";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps, RC } from "../components";

export interface ArrayHocOutProps extends DefaultProps, MakeHocOutProps {

}

export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    /**
     * 包装array的组件HOC
     * @param hocFactory  hoc的工厂方法
     * @param Component   需要包装的组件
     * 加入属性
     * arrayItems
     */
    return (Component: any): RC<ArrayHocOutProps, any> => {
        class ArrayComponentHoc extends React.PureComponent<ArrayHocOutProps, any> {
            public render(): JSX.Element {
                return <Component {...this.props} />;
            }
        }

        return ArrayComponentHoc as any;
    };
};
