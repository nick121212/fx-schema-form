
import React from "react";
import { onlyUpdateForKeys } from "recompose";
import Immutable from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps } from "./condition";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/dist/typings/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";

export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps {
}

export interface OneHocOutSettings {
    path: string;
    key: "anyOf" | "oneOf";
    uiSchemas?: { [key: string]: FxUiSchema };
}

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
export default (hocFactory: BaseFactory<any>, settings: OneHocOutSettings = { path: "", key: "oneOf" }) => {
    return (Component: any): RC<Props, any> => {
        class ComponentHoc extends React.PureComponent<Props, any> {
            public componentWillUpdate(props: Props) {
                const { uiSchema, updateItemData } = props;

                updateItemData(props, null, null);
            }

            public render(): JSX.Element | null {
                const { getPathKeys, uiSchema, getOptions } = this.props,
                    { condition, ...extraProps } = this.props,
                    { keys = null } = uiSchema || {},
                    options = getOptions(this.props, "hoc", "oneof", Immutable.fromJS(settings || {}));

                if (!options.path || !condition || !keys || !uiSchema || !options.uiSchemas) {
                    return null;
                }

                let pathKeys = getPathKeys(keys as string[], options.path);
                let data = condition.get(pathKeys.join("/"));
                let someOf: Array<any> = (uiSchema as any)[options.key || "oneOf"];

                if (!someOf) {
                    return null;
                }

                if (someOf && options.uiSchemas[data]) {
                    let { index, uiSchema: uiSchemaInOneof } = options.uiSchemas[data];

                    if (!someOf[index]) {
                        return null;
                    }

                    uiSchemaInOneof = Object.assign({}, uiSchema, uiSchemaInOneof, someOf[index], {
                        keys: keys,
                        schemaPath: someOf[index].$id || someOf[index].$ref || uiSchema.schemaPath
                    });

                    return <Component {...extraProps} uiSchema={uiSchemaInOneof} />;
                }

                return null;
            }
        }

        return ComponentHoc as any;
    };
};
