
import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Map, fromJS } from "immutable";
import { Ajv, ErrorObject, ValidationError } from "ajv";

import { RC, DefaultProps, FxUiSchema } from "../components";
import { hocFactory, reducerFactory } from "../factory";
import { TreeMap } from "./tree";
import { SchemaFormActions } from "../reducers/schema.form";

export interface SchemaFormHocOutProps {
    validateAll: () => Promise<any>;
}

export interface SchemaFormHocSettings {
    rootReducerKey?: string[];
    parentKeys?: string[];
}

export interface SchemaFormProps extends DefaultProps {
    root?: TreeMap;
    data?: any;
}

const actions: SchemaFormActions = reducerFactory.get("schemaForm").actions;


/**
 * 提供验证等功能
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export default (settings: SchemaFormHocSettings = {}) => {
    return (Component: any): RC<SchemaFormProps, any> => {
        @(connect((state: Map<string, any>) => {
            let dataKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["data"]);
            let metaKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["meta"]);

            return {
                data: state.getIn(dataKeys),
                root: state.getIn(metaKeys)
            };
        }) as any)
        class SchemaFormComponentHoc extends React.PureComponent<SchemaFormProps, any> {

            private async validateAll() {
                let root = this.props.root;
                let validate = this.props.ajv.getSchema(this.props.schemaId);
                let $validateBeforeData = fromJS({
                    dirty: true,
                    isValid: true,
                    isLoading: true
                }), $validateAfterData = fromJS({ isLoading: false, dirty: true });
                if (!validate) {
                    throw new Error(`没有找到对应的${this.props.schemaId};`);
                }

                try {
                    root.forEach((node: TreeMap) => {
                        if (node.value) {
                            return node.value.merge($validateBeforeData);
                        }

                        return $validateBeforeData;
                    });
                    await validate(this.props.data.toJS());

                    actions.updateItemMeta({
                        parentKeys: settings.parentKeys,
                        keys: [],
                        data: root.value
                    });

                } catch (e) {
                    if (!(e instanceof (ValidationError as any))) {
                        throw e;
                    }

                    e.errors.forEach((element: ErrorObject) => {
                        let dataKeys = root.getCurrentKeys().concat(element.dataPath.substring(1).split("/"));
                        let childNode = root.addChild(dataKeys, fromJS({}));

                        childNode.value = childNode.value.merge($validateAfterData).merge({
                            isValid: false,
                            errorText: element.message
                        });

                        console.log(childNode.value.toJS());
                    });
                } finally {
                    root.forEach((node: TreeMap) => {
                        if (node.value) {
                            return node.value.merge($validateAfterData);
                        }

                        return node.value;
                    });

                    actions.updateItemMeta({
                        parentKeys: settings.parentKeys,
                        keys: [],
                        data: root.value
                    });
                }
            }

            public render(): JSX.Element | null {
                return <Component validateAll={this.validateAll} {...this.props} />;
            }
        }

        return SchemaFormComponentHoc as any;
    };
};
