
import React from "react";
import { onlyUpdateForKeys, compose } from "recompose";
import Immutable from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps } from "./condition";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/libs/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
import schemaFormReact from "fx-schema-form-react";

const { SchemaForm, schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps {
    formItemNode: TreeMap;
}
export const name = "extraForm";
/**
 * oneof装饰器
 * 这里解析一种特殊的schema字段oneof
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
        return (Component: any): RC<Props, any> => {

            /**
             * 生成普通的表单
             * 1. 遍历temps模板配置
             * 2. widget配置
             */
            class EditFormComponent extends React.PureComponent<any, any> {
                public render() {
                    const { formItemNode, schemaId, uiSchema, parentKeys, getOptions, ajv,
                        arrayLevel, arrayIndex, reducerKey } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        { temps = [], widget = null } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {},
                        dataKeys = uiSchema && uiSchema.originKeys ? uiSchema.originKeys.slice(0, uiSchema.originKeys.length - 1) : [],
                        forms = [...temps, widget];

                    return <div className="ba b-dashed">
                        {
                            forms.map((temp: { key: string, schemaId: string, type: string, uiSchemas: any[] }) => {
                                if (!temp) {
                                    return null;
                                }
                                return <SchemaForm
                                    key={temp.key}
                                    schemaId={temp.schemaId || ""}
                                    uiSchema={Object.assign({}, uiSchema, {
                                        originKeys: [...dataKeys,
                                            "data", "options", temp.type || "temp", temp.key, "options"]
                                    })}
                                    reducerKey={reducerKey}
                                    arrayLevel={arrayLevel}
                                    arrayIndex={arrayIndex}
                                    uiSchemas={temp.uiSchemas || ["*"]}
                                    parentKeys={[...parentKeys]}
                                    globalOptions={Immutable.fromJS(options.globalOptions)}
                                    ajv={ajv}
                                />;
                            })
                        }
                    </div>;
                }
            }

            @(compose(
                hocFactory.get("data")({
                    treeNode: true
                })
            ) as any)
            class ComponentHoc extends React.PureComponent<Props, any> {
                public render(): JSX.Element | null {
                    const { formItemNode, schemaId, uiSchema, parentKeys, getOptions, ajv, arrayLevel, arrayIndex } = this.props;

                    if (formItemNode && formItemNode.value && uiSchema && uiSchema.originKeys) {
                        return <div>
                            <Component {...this.props} />
                            <EditFormComponent {...this.props} />
                        </div>;
                    }

                    return <Component {...this.props} />;
                }
            }

            return ComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
