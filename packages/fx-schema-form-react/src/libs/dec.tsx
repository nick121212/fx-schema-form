
import React, { PureComponent } from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import Immutable from "immutable";
import ajv, { Ajv, ErrorObject, ValidationError } from "ajv";
import { schemaFieldFactory, schemaKeysFactory } from "fx-schema-form-core";

import { DefaultProps } from "../components";
import { FxUiSchema, RC, schemaFormTypes } from "../models/index";
import { hocFactory, reducerFactory } from "../factory";
import { TreeMap } from "./tree";
import { SchemaFormActions } from "../reducers/schema.form";
import { UtilsHocOutProps } from "../hocs/utils";

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

    reducerKey: string;
    formKey: string;
    initData?: any;
}

export interface SchemaFormHocOutProps {
    validateAll?: ($async?: boolean) => Promise<any>;
    resetForm?: () => void;
}

/**
 * 提供全部验证等功能
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export default (settings: SchemaFormHocSettings = { rootReducerKey: [], parentKeys: [] }) => {
    return (Component: any): RC<SchemaFormProps, any> => {
        @(compose(
            hocFactory.get("utils")(),
            connect((state: Immutable.Map<string, any>) => {
                let rootKeys = settings.rootReducerKey.concat(settings.parentKeys),
                    dataKeys = rootKeys.concat(["data"]),
                    metaKeys = rootKeys.concat(["meta"]),
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
                validateAll: (props: SchemaFormProps) => {
                    let { updateItemMeta } = reducerFactory.get(props.reducerKey).actions, timeId: any;

                    return async (async?: boolean) => {
                        let root = props.root as TreeMap,
                            validate = props.ajv.getSchema(props.schemaId),
                            $validateBeforeData = Immutable.fromJS({
                                dirty: true,
                                isValid: true,
                                isLoading: true
                            }),
                            $validateAfterData = Immutable.fromJS({ isLoading: false, dirty: true }),
                            normalizeDataPath = props.normalizeDataPath;

                        if (!root) {
                            return;
                        }

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

                            let valRes = await validate(props.data.toJS());

                            if (!valRes) {
                                throw new (ValidationError as any)(validate.errors);
                            }

                            root.value = root.value.merge({
                                isValid: true
                            });

                            updateItemMeta({
                                parentKeys: settings.parentKeys,
                                keys: [],
                                meta: root.value
                            });

                        } catch (e) {
                            if (!(e instanceof (ValidationError as any))) {
                                return console.error(e);
                            }
                            if (!root) {
                                return;
                            }
                            // 处理错误
                            e.errors.forEach((element: ErrorObject) => {
                                let dataKeys = root.getCurrentKeys().concat(normalizeDataPath(props.schemaId, element.dataPath));
                                let childNode = root.addChild(dataKeys, Immutable.fromJS({}));

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
                    };
                },
                resetForm: (props: SchemaFormProps) => {
                    return () => {
                        if (props.formKey) {
                            let { createForm } = reducerFactory.get(props.reducerKey).actions;

                            createForm({
                                key: props.formKey,
                                data: props.initData || {}
                            });
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
                const { errors, isValid = false, isValidating = false, getRequiredKeys, getOptions, schemaId } = this.props;
                const options = getOptions(this.props, schemaFormTypes.hoc, "schemaFormDec");
                const extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);

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
