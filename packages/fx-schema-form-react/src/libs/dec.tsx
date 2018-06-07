
import React, { PureComponent } from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { fromJS, Map, List } from "immutable";
import { Ajv, ErrorObject, ValidationError } from "ajv";
import { schemaFieldFactory, schemaKeysFactory } from "fx-schema-form-core";

import { DefaultProps } from "../components";
import { FxUiSchema, RC, schemaFormTypes } from "../models";
import { hocFactory, reducerFactory } from "../factory";
import { TreeMap } from "./tree";
import { SchemaFormActions } from "../reducers/schema.form";
import { UtilsHocOutProps } from "../hocs/utils";
import { d, m } from "../reducers/reducer";
import { ValidateHocOutProps } from "../hocs/validate";

export interface SchemaFormHocSettings {
    rootReducerKey: string[];
    parentKeys: string[];
}

export interface SchemaFormProps extends DefaultProps, UtilsHocOutProps, SchemaFormHocOutProps {
    root?: TreeMap;
    data?: any;
    errors?: any;
    isValid?: boolean;
    isValidating?: boolean;

    formKey: string;
    initData?: any;
    shouldResetForm?: boolean;
}

export interface SchemaFormHocOutProps {
    validateAll?: ($async?: boolean) => Promise<any>;
    resetForm?: () => Promise<void>;
}

export const name = "schemaFormDec";

/**
 * 提供全部验证等功能
 * @param Component 需要包装的组件
 */
export default (settings: SchemaFormHocSettings = { rootReducerKey: [], parentKeys: [] }) => {
    return (Component: any): RC<SchemaFormProps, any> => {
        @(compose(
            hocFactory.get("utils")(),
            // 绑定数据
            connect((state: Map<string, any>) => {
                let rootKeys = settings.rootReducerKey.concat(settings.parentKeys),
                    dataKeys = rootKeys.concat([d]),
                    metaKeys = rootKeys.concat([m]),
                    root = state.getIn(metaKeys);

                return {
                    data: state.getIn(dataKeys),
                    root: root,
                    isValid: root ? root.value.get("isValid") : true,
                    errors: root ? root.value.get("errors") : null,
                    isValidating: root ? root.value.get("isLoading") : false
                };
            }),
            withHandlers({
                /**
                 * 验证所有的字段
                 */
                validateAll: (props: SchemaFormProps) => {
                    let { updateItemMeta } = props.getActions(props), timeId: any;

                    /**
                     * 验证所有字段
                     * async : boolean 是否是异步的
                     */
                    return async (async?: boolean) => {
                        let root = props.root as TreeMap,
                            curAjv = props.ajv,
                            dataRaw = props.data,
                            validate = props.ajv.getSchema(props.schemaId),
                            $validateBeforeData = fromJS({
                                dirty: true,
                                isValid: true,
                                isLoading: true
                            }),
                            $validateAfterData = fromJS({ isLoading: false, dirty: true }),
                            normalizeDataPath = props.normalizeDataPath;

                        // 如果没有root，则跳出
                        if (!root) {
                            return;
                        }

                        // 如果没有validate，则报错
                        if (!validate) {
                            throw new Error(`没有找到对应的${props.schemaId};`);
                        }

                        try {
                            // 将所有的字段的meta数据标准化
                            root.forEach((node: TreeMap) => {
                                if (node.value) {
                                    return node.value.merge($validateBeforeData);
                                }

                                return $validateBeforeData;
                            }, true);
                            // 验收更新meta数据
                            timeId = setTimeout(() => {
                                updateItemMeta({
                                    parentKeys: settings.parentKeys,
                                    keys: [],
                                    meta: root.value
                                });
                            }, 200);

                            if (Map.isMap(dataRaw) || List.isList(dataRaw)) {
                                dataRaw = dataRaw.toJS();
                            }

                            // 验证数据
                            curAjv.errors = null;
                            if (!await validate(dataRaw)) {
                                throw new (ValidationError as any)(validate.errors.concat(curAjv.errors || []));
                            }

                            // 设置成功的标志位
                            root.value = root.value.merge({
                                isValid: true
                            });

                            // 提交meta数据
                            updateItemMeta({
                                parentKeys: settings.parentKeys,
                                keys: [],
                                meta: root.value
                            });
                        } catch (e) {
                            // 错误的逻辑
                            if (!(e instanceof (ValidationError as any))) {
                                return {
                                    isValid: false,
                                    errMsg: e.message
                                };
                            }

                            // 处理错误
                            e.errors.forEach((element: ErrorObject) => {
                                let dataKeys = root.getCurrentKeys().concat(normalizeDataPath(props.schemaId, element.dataPath));
                                let childNode = root.containPath(dataKeys);

                                if (!childNode) {
                                    childNode = root.addChild(dataKeys, fromJS({}));
                                }

                                if (childNode) {
                                    childNode.value = childNode.value.merge($validateAfterData).merge({
                                        isValid: false,
                                        errorText: dataKeys.pop() + " " + element.message
                                    });
                                }
                            });

                            root.value = root.value.merge({
                                isValid: false,
                                errors: e.errors
                            });
                        } finally {
                            clearTimeout(timeId);
                            root.forEach((node: TreeMap) => {
                                if (node.value) {
                                    return node.value.merge($validateAfterData);
                                }

                                return node.value;
                            }, true);

                            updateItemMeta({
                                parentKeys: settings.parentKeys,
                                keys: [],
                                meta: root.value
                            });
                        }

                        return {
                            isValid: root.value.get("isValid"),
                            data: dataRaw
                        };
                    };
                },
                resetForm: (props: SchemaFormProps) => {
                    return async () => {
                        const { formKey, shouldResetForm, reducerKey, ajv, getDefaultData, initData = {}, schemaId } = props;

                        if (formKey && shouldResetForm !== false) {
                            let { createForm } = props.getActions(props);
                            let schema: any = ajv.getSchema(schemaId).schema;

                            if (createForm && schema) {
                                createForm({
                                    key: formKey,
                                    data: await getDefaultData(ajv, schema, initData, {}, true)
                                });
                            }
                        }
                    };
                }
            })) as any)
        class SchemaFormComponentHoc extends PureComponent<SchemaFormProps, any> {
            private _validateAll: (async?: boolean) => Promise<void>;

            constructor(props: SchemaFormProps) {
                super(props);

                // 绑定当前的方法，可以使用autobind
                this._validateAll = props.validateAll.bind(this);
                // 这里创建一个form，如果当前存在formKey，则覆盖掉当前的数据
                props.resetForm();
            }

            public render(): JSX.Element | null {
                const { errors, isValid = false, isValidating = false, getRequiredKeys, getOptions, schemaId } = this.props,
                    options = getOptions(this.props, schemaFormTypes.hoc, name, fromJS(settings || {})),
                    extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);

                return (
                    <Component
                        validateAll={this._validateAll}
                        parentKeys={settings.parentKeys}
                        schemaId={schemaId}
                        {...extraProps} />
                );
            }
        }

        return SchemaFormComponentHoc as any;
    };
};
