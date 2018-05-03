
import React from "react";
import { onlyUpdateForKeys } from "recompose";
import Immutable from "immutable";
import { BaseFactory, MergeLib, schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/libs/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";

const { SchemaForm, schemaFormTypes } = schemaFormReact;
export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps { }

export interface OneHocOutSettings {
    path: string;
    key: "anyOf" | "oneOf";
    uiSchemas?: {
        [key: string]: {
            schemaId: string;
            uiSchemas: Array<FxUiSchema | string>;
        }
    };
    condition?: ConditionHocSettings;
}

export const name = "oneOf";

/**
 * oneof装饰器
 * 这里解析一种特殊的schema字段oneof
 * {
 *  "name":{
 *      "oneOf":[{"type":"string"},{"type":"number"}]
 *                   or
 *      "anyOf":[{"type":"string"},{"type":"number"}]
 *  }
 * }
 * 必须接口conditionHoc使用
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: OneHocOutSettings) => {
        const innerHoc = (Component: any): RC<Props, any> => {
            class ComponentHoc extends React.PureComponent<Props, any> {

                private currentSchema: any = null;

                /**
                 * 数据更改的时候清除掉当前数据
                 * @param props props
                 */
                public async componentDidUpdate(props: Props) {
                    const { uiSchema, updateItemDataRaw, getDefaultData, removeItemDataRaw, combineActions, ajv } = props,
                        actions: any = [];

                    // 清除meta数据
                    actions.push(updateItemDataRaw(props, true));
                    if (!this.currentSchema) {
                        actions.push(updateItemDataRaw(props, null));
                    } else {
                        // 更新当前的数据为schema的默认数据
                        actions.push(updateItemDataRaw(props, await getDefaultData(ajv, this.currentSchema, null)));
                    }

                    combineActions(...actions);
                }

                /**
                 * 渲染组件
                 * 1. 获取参数
                 * 2. 如果【path，condition，keys，uiSchema，options.uiSchemas】中任何一个不存在，则返回空
                 * 3. 从condition属性中查找配置的path的数据
                 * 4. 根据数据获得配置uiSchemas的uiSchema
                 * 5. 更改当前的uiSchema，渲染Component组件
                 */
                public render(): JSX.Element | null {
                    const { getPathKeys, uiSchema, getOptions, schemaId, reducerKey,
                        arrayLevel, arrayIndex, globalOptions, parentKeys, ajv } = this.props,
                        { condition, ...extraProps } = this.props,
                        { keys = null } = uiSchema || {},
                        options = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {})) as OneHocOutSettings;

                    if (!options.path || !condition || !keys || !uiSchema || !options.uiSchemas) {
                        return null;
                    }

                    // 获取配置的字段的key，获取字段数据
                    let pathKeys = getPathKeys(keys as string[], options.path);
                    let data = condition.get(pathKeys.join("/"));

                    // 如果配置中配置了字段值对应的配置
                    if (options.uiSchemas[data]) {
                        const { schemaId: oneOfScehmaId, uiSchemas: uiSchemaInOneof } = options.uiSchemas[data];

                        // 获取配置中的schemaId，用于渲染新的表单组件
                        if (!oneOfScehmaId || !schemaKeysFactory.has(oneOfScehmaId)) {
                            return null;
                        }

                        // 获取当前的schema，生成默认的数据
                        this.currentSchema = schemaFieldFactory.get(schemaKeysFactory.get(oneOfScehmaId));

                        return <SchemaForm
                            key={oneOfScehmaId}
                            schemaId={oneOfScehmaId}
                            uiSchema={uiSchema}
                            reducerKey={reducerKey}
                            arrayLevel={arrayLevel}
                            arrayIndex={arrayIndex}
                            uiSchemas={uiSchemaInOneof}
                            parentKeys={[...parentKeys]}
                            globalOptions={globalOptions}
                            ajv={ajv}
                        />;
                    }

                    return null;
                }
            }

            return ComponentHoc as any;
        };

        return hocFactory.get("wrapper")({
            hoc: innerHoc,
            hocName: name
        });
    };
};

export default {
    name,
    hoc
};

