
import React, { PureComponent } from "react";
import { withHandlers, compose } from "recompose";
import { BaseFactory, schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";

import { MakeHocOutProps } from "./make";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models/index";
import { reducerFactory } from "../factory";

export interface ValidateHocOutProps {
    updateItemData: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMeta: (props: DefaultProps, data: any, meta?: any, noChange?: boolean) => void;
    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
}
export const name = "validate";

/**
 * 包装validate的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: any = {}) => {
        return (Component: any): RC<DefaultProps, any> => {
            @(compose(
                withHandlers({
                    /**
                     * 验证单个数据
                     * 使用当前组件中的uiSchema，以及传递过来的数据做验证
                     * 这里可能有远程验证
                     */
                    validate: (propsCur: DefaultProps) => {
                        return async (props: DefaultProps & UtilsHocOutProps, data: any) => {
                            const result: any = { dirty: true, isValid: false, isLoading: false };
                            const schema = Object.assign({}, props.uiSchema);
                            const timeId = setTimeout(() => {
                                reducerFactory.get(props.reducerKey || "schemaForm").actions.updateItemMeta({
                                    parentKeys: props.parentKeys,
                                    keys: (schema as any).keys,
                                    meta: { isLoading: true, isValid: false, errorText: false }
                                });
                            }, 200);

                            // 这里做一层try catch处理
                            try {
                                let validateFunc;

                                // 使用schema.schemaPath来确定schema
                                if (schema.schemaPath && props.ajv.getSchema(schema.schemaPath)) {
                                    validateFunc = props.ajv.getSchema(schema.schemaPath);
                                } else if (schema.$id) {
                                    validateFunc = props.ajv.getSchema(schema.$id);
                                } else {
                                    let schemaInCache = Object.assign({}, schemaFieldFactory.get(schema.schemaPath));

                                    delete schemaInCache.$id;
                                    delete schemaInCache.$ref;

                                    validateFunc = props.ajv.compile(schemaInCache);
                                }

                                result.isValid = await validateFunc(data);

                                // 如果验证出错，则抛出错误
                                if (!result.isValid) {
                                    let error: any = new Error();

                                    error.errors = validateFunc.errors;

                                    throw error;
                                }
                            } catch (err) {
                                // 处理错误消息
                                result.errorText = err.errors ?
                                    props.ajv.errorsText(err.errors, {
                                        dataVar: props.getTitle(props).toString()
                                    }) : err.message;
                            }
                            finally {
                                clearTimeout(timeId);
                            }

                            return result;
                        };
                    }
                }),
                withHandlers({
                    /**
                     * 更新一个数据
                     */
                    updateItemData: (propsCur: DefaultProps) => {
                        return (props: DefaultProps, data: any, meta?: any) => {
                            reducerFactory.get(props.reducerKey || "schemaForm").actions.updateItemData({
                                parentKeys: props.parentKeys,
                                keys: (props.uiSchema as any).keys,
                                data: data,
                                meta
                            });
                        };
                    },
                    /**
                     * 更新一个元数据
                     */
                    updateItemMeta: (propsCur: ValidateHocOutProps) => {
                        return async (props: DefaultProps, data: any, meta: any = null, noChange = false) => {
                            reducerFactory.get(props.reducerKey || "schemaForm").actions.updateItemMeta({
                                parentKeys: props.parentKeys,
                                keys: (props.uiSchema as any).keys,
                                meta: meta || await propsCur.validate(props, data),
                                noChange: noChange
                            });
                        };
                    }
                })) as any)
            class ArrayComponentHoc extends PureComponent<DefaultProps, any> {
                public render(): JSX.Element {
                    return <Component {...this.props} />;
                }
            }

            return ArrayComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
