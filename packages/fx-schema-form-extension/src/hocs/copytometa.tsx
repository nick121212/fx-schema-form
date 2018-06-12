
import React from "react";
import Immutable, { is } from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
import schemaFormReact from "fx-schema-form-react";

import { ConditionHocOutProps, ConditionHocSettings } from "./condition";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
    formItemNode?: TreeMap;
}

export const name = "copyToMeta";


export interface CopyToMetaPath {
    path: string;
    to: string[];
    defaultValue?: any;
}

export interface CopyToMetaSettings {
    paths?: Array<CopyToMetaPath>;
    condition?: ConditionHocSettings;
}

/**
 * data
 * 将data中的字段塞到meta中
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: CopyToMetaSettings = {}) => {
        const innerHoc = (Component: any): RC<Props, any> => {
            @hocFactory.get("data")({
                meta: true,
                metaKeys: ["isMountCopyToMeta"]
            })
            class ComponentHoc extends React.PureComponent<Props, any> {

                /**
                 * 这里把数据塞到了meta中，便于后面的组件使用
                 * 遍历数组，数组元素的每一项数据合并到meta
                 * @param props 当前的props
                 */
                public dataToMeta(props: Props) {
                    const { getOptions, condition, uiSchema, getPathKeys, updateItemMeta, updateItemData, schemaId } = props;
                    const normalOptions = getOptions(props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {})) as CopyToMetaSettings;
                    let meta = Immutable.fromJS({});
                    let isSet = false;

                    // 遍历配置项，把数据添加到meta
                    if (normalOptions.paths && normalOptions.paths.length && condition && uiSchema && uiSchema.keys) {
                        normalOptions.paths.forEach(({ path, to, defaultValue }) => {
                            let pathKeys = getPathKeys(uiSchema.keys as string[], path, schemaId);

                            isSet = true;
                            meta = meta.setIn(to, defaultValue);
                            if (condition.has(pathKeys.join("/"))) {
                                meta = meta.setIn(to, condition.get(pathKeys.join("/")));
                            }
                        });
                    }

                    // 更新标志位
                    if (isSet) {
                        // updateItemData(this.props, undefined, meta.toJS());
                        updateItemMeta(this.props, null, meta.toJS());
                    }
                }

                public componentDidMount() {
                    const { formItemMeta, updateItemMeta } = this.props;
                    const isMountCopyToMeta = formItemMeta ? formItemMeta.get("isMountCopyToMeta") : false;

                    // 只有第一次mount的时候才会触发一次数据的变更
                    if (!isMountCopyToMeta) {
                        // 塞入数据
                        this.dataToMeta(this.props);
                        // 更改标志位
                        updateItemMeta(this.props, null, {
                            isMountCopyToMeta: true
                        });
                    }
                }

                /**
                 * 当数据变更的时候进行设置
                 * @param props 新的props
                 */
                public componentWillReceiveProps(props: Props) {
                    if (props.condition !== this.props.condition) {
                        this.dataToMeta(props);
                    }
                }

                /**
                 * render
                 */
                public render(): JSX.Element {
                    const { getOptions, getRequiredKeys, uiSchema } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);

                    return <Component {...extraProps} />;
                }
            }

            return ComponentHoc as any;
        };

        /**
         * 包装wrapper
         */
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
