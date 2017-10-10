
import React from "react";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import ajv from "ajv";
import * as jpp from "json-pointer";
import { BaseFactory } from "fx-schema-form-core";

import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { mapActionsStateToProps } from "../select";


export interface ValidateHocOutProps {
    validate?: (data: any) => void;
}

/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormItemBaseProps & { actions: any }) => {
    const { mergeSchema, actions, schemaFormOptions, schemaKey, formData } = ownProps;
    const { keys } = mergeSchema;
    const validate = schemaFormOptions.ajv.getSchema(mergeSchema.schemaPathKey.join("/"));

    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];

            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }

    console.log("------------------------initItemMeta-----------------");
    // mergeSchema.type === "array" && actions.initItemMeta({
    //     keys,
    //     meta: {
    //         type: mergeSchema.type
    //     }
    // });

    // 返回validae方法，这里更新字段的值
    return {
        validate: (data: any) => {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }

            // 验证操作
            let isValid = validate(data);
            let result = {
                dirty: true,
                isValid: isValid,
                errorText: schemaFormOptions.ajv.errorsText(validate.errors)
            };

            actions.updateItem({ keys, data, meta: result });
        }
    };
};

/**
 * 包装theme的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const ValidateHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps, any> {
        public render(): JSX.Element {
            const ComponentWithHoc = compose(
                shouldUpdate(
                    (props, nextProps) => {
                        return false;
                    }
                ),
                connect(mapActionsStateToProps),
                connect(null, mapDispatchToProps),
            )(Component);

            return <ComponentWithHoc {...this.props} />;
        }
    }

    return Hoc;
};
