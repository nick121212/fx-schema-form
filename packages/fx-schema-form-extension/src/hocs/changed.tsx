
import React from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import schemaFormReact from "fx-schema-form-react";
import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
import { fromJS } from "immutable";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
}

export const name = "changed";

export interface ChangedSettings {
    // 需要监听的字段值
    paths?: string[];
    // 变化事件
    onChanged?: (props: DefaultProps, data: any) => void;
    // condition的配置
    condition?: ConditionHocSettings;
}

/**
 * changed
 * 监听数据的变化，处理逻辑
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: ChangedSettings = {}) => {

        const innerHoc = (Component: any): RC<Props, any> => {
            @hocFactory.get("data")({
                meta: true,
                metaKeys: ["isMountChanged"]
            })
            class ComponentHoc extends React.PureComponent<Props, any> {

                /**
                 * 当condition属性变化的时候触发
                 * 遍历数组，数组元素的每一项数据合并到meta
                 * @param props  当前的props
                 * @param isInit 是否是第一次
                 */
                public dataToMeta(props: Props, isInit: boolean = false) {
                    const { getOptions, condition, uiSchema } = props;
                    const normalOptions = getOptions(props, schemaFormTypes.hoc, name, fromJS(settings || {}));

                    if (normalOptions.onChanged && condition && uiSchema && uiSchema.keys) {
                        // 去掉了normalOptions.paths的定义，没有什么意思，直接从condition中获取字段就行了

                        // 从condition中提取配置中需要的字段值
                        // normalOptions.paths.forEach((path: string) => {
                        //     let pathKeys = getPathKeys(uiSchema.keys as string[], path),
                        //         pathStr = pathKeys.join("/");

                        //     if (condition.has(pathStr)) {
                        //         meta = meta.set(pathStr, condition.get(pathStr));
                        //     }
                        // });
                        // 触发onChanged事件
                        if (normalOptions.onChanged) {
                            normalOptions.onChanged(props, condition.toJS(), isInit);
                        }
                    }
                }

                /**
                 * 第一次mount的时候触发一次onChange操作
                 * 更新标志位
                 */
                public componentWillMount() {
                    const { formItemMeta, updateItemMeta } = this.props;
                    const isMountChanged = formItemMeta ? formItemMeta.get("isMountChanged") : false;

                    // 只有第一次mount的时候才会触发一次数据的变更
                    if (!isMountChanged) {
                        // 塞入数据
                        this.dataToMeta(this.props, true);
                        // 更改标志位
                        updateItemMeta(this.props, null, {
                            isMountChanged: true
                        });
                    }
                }

                /**
                 * 当收到新的数据的时候触发更新
                 * @param props 新的props
                 */
                public componentWillReceiveProps(props: Props) {
                    // 每次数据变更的时候
                    if (props.condition !== this.props.condition) {
                        this.dataToMeta(props);
                    }
                }

                public render(): JSX.Element {
                    const { getOptions, getRequiredKeys } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);

                    return <Component {...extraProps} />;
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
