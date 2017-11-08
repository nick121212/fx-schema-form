
import React from "react";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, pure } from "recompose";
import ajv from "ajv";
import * as jpp from "json-pointer";
import { BaseFactory } from "fx-schema-form-core";

import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { mapActionsStateToProps } from "../select";


export interface ValidateHocOutProps {
    validate?: (data: any) => void;
    updateItemData?: (data: any) => void;
}

/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormItemBaseProps & { actions: any }) => {
    const { mergeSchema, actions, schemaFormOptions, schemaKey, formData } = ownProps;
    const { keys } = mergeSchema;
    const validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, id: null }));

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
        updateItemData: (data: any) => {
            actions.updateItem({ keys, data, meta: {} });
        },
        validate: (data: any) => {
            // 验证操作
            let result = {
                dirty: true,
                isValid: false,
                isLoading: false,
                errorText: ""
            };

            let timeId = setTimeout(() => {
                actions.updateItemMeta({ keys, meta: { isLoading: true, isValid: false, errorText: false } });
            }, 50);
            validate(data).then(() => {
                clearTimeout(timeId);
                result.isValid = true;
                actions.updateItemMeta({ keys, meta: result });
            }).catch((err) => {
                clearTimeout(timeId);
                result.errorText = err.errors ?
                    schemaFormOptions.ajv.errorsText(err.errors, { dataVar: "/" + keys.join("/") })
                    : err.message;
                actions.updateItemMeta({ keys, meta: result });
            });
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
    @(compose<SchemaFormItemBaseProps, any>(
        connect(mapActionsStateToProps),
        connect(null, mapDispatchToProps),
        shouldUpdate(() => false)
    ) as any)
    class ValidateComponentHoc extends React.PureComponent<SchemaFormItemBaseProps, any> {
        public render(): JSX.Element {
            return <Component {...this.props} />;
        }
    }

    return ValidateComponentHoc;
};
