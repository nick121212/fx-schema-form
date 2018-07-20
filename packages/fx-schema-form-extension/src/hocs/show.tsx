
import React from "react";

import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";

import { ConditionHocOutProps, ConditionHocSettings } from "./condition";

export interface Props extends DefaultProps, ConditionHocOutProps, UtilsHocOutProps {
}

export interface ShowHideHocOutSettings {
    paths?: string[];
    renderNothing?: boolean;
    // condition的配置
    condition?: ConditionHocSettings;
}

export const name = "show";

/**
 * condition
 * 显示/隐藏元素
 * 配置：
 *  paths:          字段的路径以及数据处理规则，路径使用相对或者决定路径
 *  renderNothing:  如果条件不满足，则返回null，不然则隐藏元素
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (_settings: ShowHideHocOutSettings = {}) => {
        const innerHoc = (Component: any): RC<Props, any> => {
            class ComponentHoc extends React.PureComponent<Props, any> {
                /**
                 * 渲染组件
                 * 1. 如果配置中【paths，condition，uiSchema，uiSchema.keys】中的任何一项不存在，直接返回null
                 * 2. 如果paths中的任何一项为false，则隐藏组件
                 * 3. 否则正常显示组件
                 */
                public render(): JSX.Element | null {
                    const { condition, uiSchema } = this.props;
                    let show = true;

                    if (condition && uiSchema && uiSchema.keys) {
                        show = condition.some((val: any) => {
                            return !!val;
                        });
                    }

                    // 去掉了normalOptions.paths的定义，没啥用

                    // if (normalOptions.paths && condition && uiSchema && uiSchema.keys) {
                    //     show = normalOptions.paths.reduce((prev: boolean, path: string) => {
                    //         if (!prev) {
                    //             return false;
                    //         }
                    //         // 从condition中获取数据，判断是否为空
                    //         let pathKeys = getPathKeys(uiSchema.keys as string[], path);

                    //         if (!condition.has(pathKeys.join("/"))) {
                    //             return false;
                    //         }

                    //         let data = condition.get(pathKeys.join("/"));

                    //         if (!data) {
                    //             return false;
                    //         }

                    //         // 如果是列表，判断名下size
                    //         if (Immutable.List.isList(data) && !data.size) {
                    //             return false;
                    //         }

                    //         return true;
                    //     }, show);
                    // }


                    if (show) {
                        return <Component {...this.props} />;
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
