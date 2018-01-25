import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle, pure } from "recompose";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";

import { RC, DefaultProps, FxUiSchema } from "../components";
import { ThemeHocOutProps } from "./theme";
import { MakeHocOutProps } from "./make";
import { UtilsHocOutProps } from "./utils";

/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */

export default (hocFactory: BaseFactory<any>, settings: any = {
    tempField: "temps",
    templates: [],
    tempHoc: (TempComponent) => TempComponent
}) => {
    return (Component: any): RC<DefaultProps & ThemeHocOutProps, any> => {
        /**
        * 获取模板的components
        * @param uiSchema 合并后的数据
        */
        class TempComponentHoc extends React.PureComponent<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any> {
            public render(): JSX.Element {
                const { uiSchema, globalOptions } = this.props;
                const { options: uiSchemaOptions, keys } = uiSchema as FxUiSchema;
                const TempComponents = this.getTemplates();

                return TempComponents.reduce((prev: JSX.Element, { key, Temp }) => {
                    let TempWithHoc = settings.tempHoc(Temp);

                    return <TempWithHoc
                        tempKey={key}
                        key={keys.join(".") + key}
                        {...this.props}
                        children={prev} />;
                }, <Component key={keys.join(".")} {...this.props} />);
            }

            /**
            * 获取模板的components
            */
            private getTemplates(): Array<{ key: string, Temp: RC<any, any> }> {
                const { uiSchema, currentTheme, getOptions } = this.props,
                    { keys, type } = uiSchema as FxUiSchema,
                    typeDefaultOptions = getOptions(this.props, "temp", type as string),
                    TempComponent = [];
                let template;

                if (settings.templates && settings.templates.length > 0) {
                    template = settings.templates;
                } else {
                    template = typeDefaultOptions[settings.tempField] || "default";
                }

                const getTemplate = (tmp: any): void => {
                    switch (tmp.constructor) {
                        case String:
                            if (!currentTheme.tempFactory.has(tmp)) {
                                console.error(`不存在${tmp}的temp！`);
                            } else {
                                TempComponent.push({
                                    key: tmp,
                                    Temp: currentTheme.tempFactory.get(tmp)
                                });
                            }
                            break;
                        case Object:
                            TempComponent.push({
                                key: tmp.name,
                                Temp: tmp
                            });
                            break;
                        case Array:
                            [].concat(template).reverse().forEach((tml, idx) => {
                                getTemplate(tml);
                            });
                            break;
                    }
                };

                getTemplate(template);

                return TempComponent;
            }
        }

        return TempComponentHoc as any;
    };
};
