
import React from "react";
import { onlyUpdateForKeys, compose } from "recompose";
import Immutable from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps } from "./condition";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/dist/typings/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { TreeMap } from "fx-schema-form-react/dist/typings/libs/tree";
import schemaFormReact from "fx-schema-form-react";

const { SchemaForm } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps {
    formItemNode: TreeMap;
}

/**
 * oneof装饰器
 * 这里解析一种特殊的schema字段oneof
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export default (hocFactory: BaseFactory<any>) => {
    return (Component: any): RC<Props, any> => {
        @(compose(
            hocFactory.get("data")({
                treeNode: true
            })
        ) as any)
        class ComponentHoc extends React.PureComponent<Props, any> {
            public render(): JSX.Element | null {
                const { formItemNode, schemaId, uiSchema, parentKeys, getOptions, ajv, arrayLevel, arrayIndex } = this.props,
                    options = getOptions(this.props, "hoc", "extraForm"),
                    { temps = [], widget = null } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {},
                    dataKeys = uiSchema && uiSchema.originKeys ? uiSchema.originKeys.slice(0, uiSchema.originKeys.length - 1) : [];

                if (formItemNode && formItemNode.value && uiSchema && uiSchema.originKeys) {
                    return <div>
                        <Component {...this.props} />

                        {
                            temps.map((temp: { key: string, schemaId: string, uiSchemas: any[] }) => {
                                return <SchemaForm
                                    key={temp.key}
                                    schemaId={temp.schemaId || ""}
                                    uiSchema={Object.assign({}, uiSchema, {
                                        originKeys: [...dataKeys,
                                            "data", "options", "temp", temp.key, "options"]
                                    })}
                                    arrayLevel={arrayLevel}
                                    arrayIndex={arrayIndex}
                                    uiSchemas={temp.uiSchemas || ["*"]}
                                    parentKeys={[...parentKeys]}
                                    globalOptions={Immutable.fromJS(options.globalOptions)}
                                    ajv={ajv}
                                />;
                            })
                        }

                        {
                            widget ? <SchemaForm
                                key={widget.key}
                                schemaId={widget.schemaId || ""}
                                uiSchema={Object.assign({}, uiSchema, {
                                    originKeys: [...dataKeys,
                                        "data", "options", "widget", widget.key, "options"]
                                })}
                                arrayLevel={arrayLevel}
                                arrayIndex={arrayIndex}
                                uiSchemas={widget.uiSchemas || ["*"]}
                                parentKeys={[...parentKeys]}
                                globalOptions={Immutable.fromJS(options.globalOptions)}
                                ajv={ajv}
                            /> : null
                        }
                    </div>;
                }

                return <Component {...this.props} />;
            }
        }

        return ComponentHoc as any;
    };
};
