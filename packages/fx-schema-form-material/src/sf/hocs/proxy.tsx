
import React from "react";
import { onlyUpdateForKeys } from "recompose";
import Immutable from "immutable";
import { BaseFactory, MergeLib } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/dist/typings/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";
import { ConditionHocOutProps } from "fx-schema-form-extension/dist/dts/hocs/condition";
import { IInterfaceModel } from "modelproxy/out/models/interface";
import { IExecute } from "modelproxy/out/models/execute";

const { SchemaForm, schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
}

export const name = "proxy";

export interface ProxyHocSetting {
    proxyApi?: IInterfaceModel;
    options?: IExecute;
    dataTo?: string[];
    dataFilter?: (data: any) => any;
}

export interface ProxyHocOutProps {
    exeucte?: (props: DefaultProps) => void;
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
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: ProxyHocSetting = {}) => {
        return (Component: any): RC<Props, any> => {
            @(onlyUpdateForKeys(["condition"]) as any)
            class ComponentHoc extends React.PureComponent<Props, any> {

                private execute(props: Props) {
                    const { getOptions, updateItemMeta } = props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings));

                    if (!options.proxyApi) {
                        return;
                    }

                    updateItemMeta(props, null, {
                        isLoading: true,
                    });

                    let params = Immutable.fromJS(options.options || {});

                    options.proxyApi.execute(params.toJS()).then((data: any) => {
                        let dataTo = Immutable.fromJS({});

                        dataTo = dataTo.setIn(options.dataTo, options.dataFilter(data));

                        updateItemMeta(props, null, {
                            isLoading: false,
                            ...dataTo.toJS()
                        });
                    }).catch((e: Error) => {
                        updateItemMeta(props, null, {
                            isValid: false,
                            isLoading: false,
                            dirty: true,
                            errorText: `接口请求失败【${e.message}】`
                        });
                    });
                }

                /**
                 * 数据更改的时候清除掉当前数据
                 * @param props props
                 */
                public async componentDidUpdate(props: Props) {
                    this.execute(props);
                }

                public componentWillMount() {
                    this.execute(this.props);
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
                    return <Component {...this.props} execute={this.execute} />;
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

