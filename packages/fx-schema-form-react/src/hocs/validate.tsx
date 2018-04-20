
import React, { PureComponent } from "react";
import { withHandlers, compose } from "recompose";
import { BaseFactory, schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";
import { Action } from "redux-act";

import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
import { reducerFactory } from "../factory";
import { SchemaFormActions } from "../reducers/schema.form";

export interface ValidateHocOutProps {
    updateItemData: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMeta: (props: DefaultProps, data: any, meta?: any, noChange?: boolean) => Promise<void>;
    removeItemData: (props: DefaultProps, meta?: any) => void;

    updateItemDataRaw: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMetaRaw: (props: DefaultProps, data: any, meta?: any, noChange?: boolean) => Promise<void>;
    removeItemDataRaw: (props: DefaultProps, meta?: any) => void;

    combineActions: (...actions: Action<any>[]) => void;

    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
    getActions: (raw?: boolean) => SchemaFormActions;
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
                hocFactory.get("data")({
                    root: true
                }),
                withHandlers({
                    /**
                     * 获取当前的reducer
                     */
                    getActions: (propsCur: DefaultProps) => {
                        return (raw = false) => {
                            let actions = reducerFactory.get(propsCur.reducerKey || "schemaForm").actions;

                            if (raw) {
                                for (const key in actions) {
                                    if (actions.hasOwnProperty(key)) {
                                        const element = actions[key];

                                        actions[key] = element.raw;
                                    }
                                }
                            }

                            return actions;
                        };
                    }
                }),
                withHandlers({
                    /**
                     * 验证单个数据
                     * 使用当前组件中的uiSchema，以及传递过来的数据做验证
                     * 这里可能有远程验证
                     */
                    validate: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return async (props: DefaultProps & UtilsHocOutProps, data: any, meta: any = {}) => {
                            const result: any = { dirty: true, isValid: false, isLoading: false };
                            const { uiSchema, reducerKey, parentKeys, ajv, getTitle } = props;
                            const schema = Object.assign({}, uiSchema);
                            const timeId = setTimeout(() => {
                                propsCur.getActions().updateItemMeta({
                                    parentKeys: parentKeys,
                                    keys: (schema as any).keys,
                                    meta: { isLoading: true, isValid: false, errorText: false }
                                });
                            }, 200);

                            // 这里做一层try catch处理
                            try {
                                let validateFunc;

                                // 使用schema.schemaPath来确定schema
                                if (schema.schemaPath && ajv.getSchema(schema.schemaPath)) {
                                    validateFunc = ajv.getSchema(schema.schemaPath);
                                } else if (schema.$id) {
                                    validateFunc = ajv.getSchema(schema.$id);
                                } else {
                                    let schemaInCache = Object.assign({}, schemaFieldFactory.get(schema.schemaPath));

                                    delete schemaInCache.$id;
                                    delete schemaInCache.$ref;

                                    validateFunc = ajv.compile(schemaInCache);
                                }

                                if (propsCur.formItemData) {
                                    result.isValid = await validateFunc(data, undefined, undefined,
                                        undefined, propsCur.formItemData.toJS());
                                } else {
                                    result.isValid = await validateFunc(data);
                                }

                                // 如果验证出错，则抛出错误
                                if (!result.isValid) {
                                    let error: any = new Error();

                                    error.errors = validateFunc.errors;

                                    throw error;
                                }
                            } catch (err) {
                                // 处理错误消息
                                result.errorText = err.errors ?
                                    ajv.errorsText(err.errors, {
                                        dataVar: getTitle(props).toString()
                                    }) : err.message;
                            }
                            finally {
                                clearTimeout(timeId);
                            }

                            return Object.assign({}, meta, result);
                        };
                    }

                }),
                hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData"]
                }),
                withHandlers({
                    /**
                     * 更新一个数据
                     */
                    updateItemData: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return (raw: boolean, { parentKeys, uiSchema }: DefaultProps, data: any, meta?: any) => {
                            return propsCur.getActions(raw).updateItemData({
                                parentKeys: parentKeys,
                                keys: uiSchema.keys,
                                data: data,
                                meta
                            });
                        };
                    },
                    /**
                     * 更新一个元数据
                     */
                    updateItemMeta: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return async (raw: boolean, props: DefaultProps, data: any, meta: any = null, noChange = false) => {
                            const { parentKeys, uiSchema } = props;

                            return propsCur.getActions(raw).updateItemMeta({
                                parentKeys: parentKeys,
                                keys: uiSchema.keys,
                                meta: meta || await propsCur.validate(props, data),
                                noChange: noChange
                            });
                        };
                    },
                    /**
                     * 删除一个元素的meta和data
                     */
                    removeItemData: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return (raw: boolean, { parentKeys, uiSchema }: DefaultProps, meta = true) => {
                            return propsCur.getActions(raw).removeItemData({
                                parentKeys: parentKeys,
                                keys: uiSchema.keys,
                                meta: meta
                            });
                        };
                    },
                    combineActions: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return (...actions: Action<any>[]) => {
                            return propsCur.getActions().combineActions(actions);
                        };
                    },
                }),
                withHandlers({
                    updateItemData: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemData.bind(null, false);
                    },
                    updateItemMeta: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemMeta.bind(null, false);
                    },
                    removeItemData: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.removeItemData.bind(null, false);
                    },
                    updateItemDataRaw: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemData.bind(null, true);
                    },
                    updateItemMetaRaw: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemMeta.bind(null, true);
                    },
                    removeItemDataRaw: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.removeItemData.bind(null, true);
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
