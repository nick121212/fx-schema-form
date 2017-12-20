import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle, pure } from "recompose";
import { pick } from "recompose/utils/pick";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";

import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { MakeHocOutProps } from "./make";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";

const metaConnect = compose<SchemaFormItemBaseProps & ThemeHocOutProps & MakeHocOutProps, any>(
    shouldUpdate(() => false),
    connect(mapMetaStateToProps),
    shouldUpdate((curProps: SchemaFormItemBaseProps, nextProps: SchemaFormItemBaseProps) => {
        return !isEqual(curProps.meta, nextProps.meta);
    })
);

/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */

export default (hocFactory: BaseFactory<any>, settings: any = {
    tempField: "ui:temp",
    templates: [],
    tempHoc: (TempComponent) => TempComponent
}) => {
    return (Component: any): RC<SchemaFormItemBaseProps & ThemeHocOutProps, any> => {
        /**
        * 获取模板的components
        * @param uiSchema 合并后的数据
        */
        // @(settings.tempHoc || metaConnect)
        class TempComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
            public render(): JSX.Element {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema = { options: {} }, keys } = mergeSchema;
                const TempComponents = this.getTemplates();
                const uiSchemaOptions = uiSchema.options || {};

                return TempComponents.reduce((prev: JSX.Element, { key, Temp }) => {
                    // let TempWithHoc = (Temp);
                    let TempWithHoc = settings.tempHoc(Temp);
                    return <TempWithHoc
                        globalOptions={globalOptions}
                        tempKey={key}
                        uiSchemaOptions={uiSchemaOptions}
                        key={keys.join(".") + key}
                        {...this.props}
                        children={prev} />;
                }, <Component key={keys.join(".")} uiSchemaOptions={uiSchemaOptions} {...this.props} />);
            }

            /**
            * 获取模板的components
            */
            private getTemplates(): Array<{ key: string, Temp: RC<any, any> }> {
                const { mergeSchema, globalOptions, currentTheme } = this.props;
                const { uiSchema = { options: {} }, keys, type } = mergeSchema;
                const { field = {} } = globalOptions || {};
                const typeDefaultOptions = field[type] || {};

                let template = uiSchema[settings.tempField] ||
                    typeDefaultOptions[settings.tempField] || "default",
                    TempComponent = [];

                if (settings.templates && settings.templates.length > 0) {
                    template = settings.templates;
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

        return TempComponentHoc;
    };
};
