import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/libs/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";

const { SchemaForm, schemaFormTypes, merge } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const name = "format";

/**
 * format装饰器
 * 根据指定的format来配置相对应的组件
 * 例如：当format=date的时候，使用datetime组件
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
        return (Component: any): RC<Props, any> => {
            class ComponentHoc extends React.PureComponent<Props, any> {
                /**
                 * 渲染组件
                 */
                public render(): JSX.Element | null {
                    const { uiSchema, getOptions } = this.props,
                        { format, widget } = uiSchema as FxUiSchema,
                        hocOptions = getOptions(this.props, schemaFormTypes.hoc, name);
                    let newUiSchema = uiSchema;

                    // 根据当前jsonschema中配置的format
                    // 查看配置中是否有定义，如果有则合并到uiSchema中
                    if (format && hocOptions[format] && !widget) {
                        newUiSchema = merge(fromJS(uiSchema), fromJS(hocOptions[format])).toJS();
                    }

                    return <Component {...this.props} uiSchema={newUiSchema} />;
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
