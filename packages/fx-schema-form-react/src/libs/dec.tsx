
import React, { PureComponent } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Immutable from "immutable";
import { Ajv, ErrorObject, ValidationError } from "ajv";
import { schemaFieldFactory, schemaKeysFactory } from "fx-schema-form-core";

import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models";
import { hocFactory, reducerFactory } from "../factory";
import { TreeMap } from "./tree";
import { SchemaFormActions } from "../reducers/schema.form";

export interface SchemaFormHocOutProps {
    validateAll: () => Promise<any>;
}

export interface SchemaFormHocSettings {
    rootReducerKey: string[];
    parentKeys: string[];
}

export interface SchemaFormProps extends DefaultProps {
    root?: TreeMap;
    data?: any;
    errors?: any;
    isValid?: boolean;
    isValidating?: boolean;
}

const actions: SchemaFormActions = reducerFactory.get("schemaForm").actions;

/**
 * 提供验证等功能
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export default (settings: SchemaFormHocSettings = { rootReducerKey: [], parentKeys: [] }) => {
    return (Component: any): RC<SchemaFormProps, any> => {
        @(connect((state: Immutable.Map<string, any>) => {
            let dataKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["data"]),
                metaKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["meta"]),
                root = state.getIn(metaKeys);

            return {
                data: state.getIn(dataKeys),
                root: root,
                isValid: root.value.get("isValid"),
                errors: root.value.get("errors"),
                isValidating: root.value.get("isLoading")
            };
        }) as any)
        class SchemaFormComponentHoc extends PureComponent<SchemaFormProps, any> {
            private _validateAll: () => Promise<void>;

            constructor(props: SchemaFormProps) {
                super(props);

                this._validateAll = this.validateAll.bind(this);
            }

            private async validateAll() {
                let root = this.props.root as TreeMap,
                    validate = this.props.ajv.getSchema(this.props.schemaId),
                    $validateBeforeData = Immutable.fromJS({
                        dirty: true,
                        isValid: true,
                        isLoading: true
                    }),
                    $validateAfterData = Immutable.fromJS({ isLoading: false, dirty: true }),
                    normalizeDataPath = this.normalizeDataPath;

                if (!root) {
                    return;
                }

                if (!validate) {
                    throw new Error(`没有找到对应的${this.props.schemaId};`);
                }

                try {
                    root.forEach((node: TreeMap) => {
                        if (node.value) {
                            return node.value.merge($validateBeforeData);
                        }

                        return $validateBeforeData;
                    }, true);
                    actions.updateItemMeta({
                        parentKeys: settings.parentKeys,
                        keys: [],
                        data: root.value
                    });

                    await validate(this.props.data.toJS());

                    root.value = root.value.merge({
                        isValid: true
                    });

                    actions.updateItemMeta({
                        parentKeys: settings.parentKeys,
                        keys: [],
                        data: root.value
                    });

                } catch (e) {
                    if (!(e instanceof (ValidationError as any))) {
                        return console.error(e);
                    }
                    if (!root) {
                        return;
                    }
                    e.errors.forEach((element: ErrorObject) => {
                        let dataKeys = root.getCurrentKeys().concat(normalizeDataPath(this.props.schemaId, element.dataPath));
                        let childNode = root.addChild(dataKeys, Immutable.fromJS({}));

                        if (childNode) {
                            childNode.value = childNode.value.merge($validateAfterData).merge({
                                isValid: false,
                                errorText: element.message
                            });
                        }
                    });

                    root.value = root.value.merge({
                        isValid: false,
                        errors: e.errors
                    });
                } finally {
                    root.forEach((node: TreeMap) => {
                        if (node.value) {
                            return node.value.merge($validateAfterData);
                        }

                        return node.value;
                    }, true);

                    console.log(root.value);

                    actions.updateItemMeta({
                        parentKeys: settings.parentKeys,
                        keys: [],
                        data: root.value
                    });
                }
            }

            /**
             * dataPath中的key格式化；
             * dataPath中可能有数组的格式，所以需要把数字转换成数字，而不是字符换
             * 遍历所有的key，发现是数字字符，则查找父级的schema，如果父级的type是array，则把当前key转换成数字
             * @param schemaId schemaId
             * @param dataPath 当前的数据路径字符串
             */
            private normalizeDataPath(schemaId: string, dataPath: string): Array<string | number> {
                let dataKeys: Array<string | number> = dataPath.substring(1).split("/");

                dataKeys = dataKeys.map((key: string | number, index: number) => {
                    if (Number.isInteger(+key)) {
                        let keys: Array<string | number> = dataKeys.slice(0, index);

                        keys.unshift(schemaId);

                        if (schemaKeysFactory.has(keys.join("/"))) {
                            let schema = schemaFieldFactory.get(schemaKeysFactory.get(keys.join("/")));

                            if (schema.type === "array") {
                                return +key;
                            }
                        }
                    }

                    return key;
                });

                return dataKeys;
            }

            public render(): JSX.Element | null {
                const { errors, isValid = false, isValidating = false } = this.props;

                return (
                    <div>
                        <Component validateAll={this._validateAll} {...this.props} />
                        {isValid.toString() + isValidating.toString()}
                        {
                            isValid ? null : errors ? errors.map((e: Immutable.Map<string, any>) => {
                                return <div key={e.get("dataPath")}>{e.get("message")}</div>;
                            }) : null
                        }
                    </div>
                );
            }
        }

        return SchemaFormComponentHoc as any;
    };
};
