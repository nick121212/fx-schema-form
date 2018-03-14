
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
 * proxy装饰器
 * 用于拉取接口，为select，autocomplete等组件提供数据支持
 * 必须接口conditionHoc使用
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: ProxyHocSetting = {}) => {
        return (Component: any): RC<Props, any> => {
            @(onlyUpdateForKeys(["condition"]) as any)
            @(hocFactory.get("data")({
                meta: true,
                metaKeys: ["isProxyLoaded"]
            }) as any)
            class ComponentHoc extends React.PureComponent<Props, any> {

                private execute(props: Props, executeOptions?: IExecute) {
                    const { getOptions, updateItemMeta } = props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings));
                    let params, timeId: number;

                    if (!options.proxyApi || !options.dataTo) {
                        return;
                    }

                    timeId = setTimeout(() => {
                        // 更改当前meta，表示正在loading
                        updateItemMeta(props, null, {
                            isLoading: true,
                        });
                    }, 200);

                    // 合并数据
                    params = Immutable.fromJS(options.options || {});

                    if (executeOptions) {
                        params = params.mergeDeep(executeOptions);
                    }

                    // 调用接口
                    options.proxyApi.execute(params.toJS()).then((data: any) => {
                        let dataTo = Immutable.fromJS({});

                        clearTimeout(timeId);
                        // 数据的设置
                        dataTo = dataTo.setIn(options.dataTo, options.dataFilter ? options.dataFilter(data) : data);
                        // 更新meta
                        updateItemMeta(props, null, {
                            isLoading: false,
                            ...dataTo.toJS()
                        });
                    }).catch((e: Error) => {
                        clearTimeout(timeId);
                        // 报错
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
                    const { formItemMeta } = props,
                        isProxyLoaded = formItemMeta ? formItemMeta.get("isProxyLoaded") : false;

                    if (!isProxyLoaded) {
                        this.execute(props);
                    }
                }

                public componentWillMount() {
                    this.componentDidUpdate(this.props);
                }

                /**
                 * 渲染组件
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

