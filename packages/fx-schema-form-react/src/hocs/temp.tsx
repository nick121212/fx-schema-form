import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";
import { compose } from "recompose";

import { DefaultProps } from "../components";
import { FxUiSchema, RC, schemaFormTypes } from "../models";
import { ThemeHocOutProps } from "./theme";
import { UtilsHocOutProps } from "./utils";
import { ArrayHocOutProps } from "./array";

export const name = "temp";

/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: any = {
        tempField: "temps",
        templates: []
    }) => {
        return (Component: any): RC<DefaultProps & ThemeHocOutProps, any> => {
            /**
            * 获取模板的components
            * @param uiSchema 合并后的数据
            */
            class TempComponentHoc extends PureComponent<DefaultProps & ThemeHocOutProps & UtilsHocOutProps & ArrayHocOutProps, any> {
                public render(): JSX.Element {
                    const { uiSchema, getOptions, reducerKey } = this.props;
                    // const { options: uiSchemaOptions, keys } = uiSchema as FxUiSchema;
                    const TempComponents = this.getTemplates();

                    return TempComponents.reduce((prev: JSX.Element, { key, Temp }) => {
                        const tempOptions = getOptions(this.props, schemaFormTypes.template, key),
                            TempWithHoc: any = compose(hocFactory.get("utils")(), ...(tempOptions.tempHocs || []))(Temp);

                        return <TempWithHoc
                            tempKey={key}
                            ajv={this.props.ajv}
                            uiSchema={this.props.uiSchema}
                            schemaId={this.props.schemaId}
                            arrayLevel={this.props.arrayLevel}
                            reducerKey={reducerKey}
                            arrayIndex={this.props.arrayIndex}
                            globalOptions={this.props.globalOptions}
                            ArrayComponent={this.props.ArrayComponent}
                            ArrayItemComponent={this.props.ArrayItemComponent}
                            initArrayComponent={this.props.initArrayComponent}
                            parentKeys={this.props.parentKeys}
                            children={prev} />;
                    }, <Component {...this.props} />);
                }

                /**
                * 获取模板的components
                */
                private getTemplates(): Array<{ key: string, Temp: RC<any, any> }> {
                    const { uiSchema, currentTheme, getOptions } = this.props,
                        { type, temps } = uiSchema as FxUiSchema,
                        typeDefaultOptions = getOptions(this.props, schemaFormTypes.field, type as string),
                        TempComponent: Array<{ key: string, Temp: RC<any, any> }> = [];
                    let template: Array<any>;

                    if (temps) {
                        template = temps;
                    } else if (settings.templates && settings.templates.length > 0) {
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
                                [...template].reverse().forEach((tml, idx) => {
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
};

export default {
    name,
    hoc
};
