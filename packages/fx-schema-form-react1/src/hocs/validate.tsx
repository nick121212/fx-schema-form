
import React from "react";
import { withHandlers, compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { MakeHocOutProps } from "./make";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps, RC } from "../components";
import { schemaFormReducer } from "../reducer";

export interface ValidateHocOutProps extends DefaultProps, MakeHocOutProps {
    updateItemData: (props: DefaultProps, data: any) => void;
    updateItemMeta: (props: DefaultProps, meta: any) => void;
    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
}

export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    /**
     * 包装validate的组件HOC
     * @param hocFactory  hoc的工厂方法
     * @param Component   需要包装的组件
     * 加入属性
     */
    return (Component: any): RC<DefaultProps, any> => {
        @(compose(
            withHandlers({
                validate: (propsCur: DefaultProps) => {
                    return async (props: DefaultProps, data: any) => {
                        const result: any = { dirty: true, isValid: false, isLoading: false };
                        const timeId = setTimeout(() => {
                            schemaFormReducer.actions.updateItemMeta({
                                parentKeys: props.parentKeys,
                                keys: (props.uiSchema as any).keys,
                                data: { isLoading: true, isValid: false, errorText: false }
                            });
                        }, 200);

                        try {
                            let validateResult = await props.ajv.validate(props.uiSchema, data);
                            result.isValid = validateResult;

                            if (!validateResult) {
                                let error: any = new Error();

                                error.errors = props.ajv.errors;

                                throw error;
                            }
                        } catch (err) {
                            result.errorText = err.errors ?
                                props.ajv.errorsText(err.errors, { dataVar: "/" + (props.uiSchema as any).keys.join("/") })
                                : err.message;
                        }
                        finally {
                            clearTimeout(timeId);
                        }

                        return result;
                    };
                }
            }),
            withHandlers({
                updateItemData: (propsCur: DefaultProps) => {
                    return (props: DefaultProps, data: any) => {
                        schemaFormReducer.actions.updateItemData({
                            parentKeys: props.parentKeys,
                            keys: (props.uiSchema as any).keys,
                            data: data
                        });
                    };
                },
                updateItemMeta: (propsCur: ValidateHocOutProps) => {
                    return async (props: DefaultProps, data: any, meta?: any) => {
                        schemaFormReducer.actions.updateItemMeta({
                            parentKeys: props.parentKeys,
                            keys: (props.uiSchema as any).keys,
                            data: meta || await propsCur.validate(props, data)
                        });
                    };
                }
            })) as any)
        class ArrayComponentHoc extends React.PureComponent<DefaultProps, any> {
            public render(): JSX.Element {
                return <Component {...this.props} />;
            }
        }

        return ArrayComponentHoc as any;
    };
};
