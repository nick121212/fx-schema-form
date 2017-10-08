
import React from "react";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import *  as jpp from "json-pointer";

import { SchemaFormItemBaseProps } from "../props";
import { RC } from "../../../types";
import validateFunc from "../../../libs/validate";
import { mapActionsStateToProps } from "../../select";


export interface ValidateHocOutProps {
    validate?: (data: any) => void;
}

/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormItemBaseProps & { actions: any }) => {
    const { mergeSchema, actions, schemaFormOptions } = ownProps;
    const { keys } = mergeSchema;
    let timeId: NodeJS.Timer;

    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];

            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }

    // 返回validae方法，这里更新字段的值
    return {
        validate: (data: any) => {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            actions.updateItem({ keys, data, meta: validateFunc(mergeSchema, schemaFormOptions.ajv, data) });
        }
    };
};

/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const ValidateHoc = (Component: any): RC<SchemaFormItemBaseProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps, any> {
        public render(): JSX.Element {
            const ComponentWithHoc = compose(
                connect(mapActionsStateToProps),
                connect(null, mapDispatchToProps),
                shouldUpdate(
                    (props, nextProps) => {
                        return false;
                    }
                )
            )(Component);

            return <ComponentWithHoc {...this.props} />;
        }
    }

    return Hoc;
};
