
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import schemaFormReact from "fx-schema-form-react";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
}

export const name = "wrapper";

export interface WrapperHocSettings {
    condition?: ConditionHocSettings;
    hoc?: any;
    hocName?: string;
}

/**
 * 用于包装condition的hoc
 * condition需要配置下一层的hoc，这里做了简单处理
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: WrapperHocSettings = {}) => {
        return (Component: any): RC<Props, any> => {
            class WrapperComponentHoc extends React.PureComponent<Props, any> {
                private ComponentWithHoc: any = Component;

                /**
                 * 构造函数
                 * @param props 属性
                 */
                constructor(props: any) {
                    super(props);

                    const { getOptions } = this.props,
                        options: WrapperHocSettings = getOptions(this.props, schemaFormTypes.hoc, settings.hocName || "");

                    // 使用conditionhoc包装当前的hoc
                    if (options.condition && settings.hoc && settings.hocName) {
                        options.condition.hoc = settings.hoc;
                        // 得到实际的hoc
                        this.ComponentWithHoc = hocFactory.get("condition")(options.condition)(Component);
                    }
                }

                public render(): JSX.Element {
                    const ComponentWithHoc = this.ComponentWithHoc;

                    return <ComponentWithHoc {...this.props} formItemData={null} formItemMeta={null} />;
                }
            }

            return WrapperComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
