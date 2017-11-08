import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle } from "recompose";
import { pick } from "recompose/utils/pick";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";

import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { MakeHocOutProps } from "./make";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";

const metaConnect = compose<SchemaFormItemBaseProps & ThemeHocOutProps & MakeHocOutProps, any>(
    connect(mapMetaStateToProps),
    onlyUpdateForKeys(["meta"]),
    shouldUpdate((curProps: SchemaFormItemBaseProps, nextProps: SchemaFormItemBaseProps) => {
        return !isEqual(curProps.meta, nextProps.meta);
    })
);

/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const TempHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps & ThemeHocOutProps, any> => {

    /**
    * 获取模板的components
    * @param uiSchema 合并后的数据
    */
    @(compose<any, any>(shouldUpdate(() => false)) as any)
    class TempComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
        private tempField = "ui:temp";

        public render(): JSX.Element {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys } = mergeSchema;
            const TempComponents = this.getTemplates();
            const uiSchemaOptions = uiSchema.options || {};
            const ComponentWithHoc = compose<any, any>(
                connect(mapFormItemDataProps)
            )(Component);
            let index = 0;

            return TempComponents.reduce((prev: JSX.Element, { key, Temp }) => {
                let TempWithHoc = metaConnect(Temp);

                return <TempWithHoc
                    globalOptions={globalOptions}
                    tempKey={key}
                    uiSchemaOptions={uiSchemaOptions}
                    key={keys.join(".") + key + index++}
                    {...this.props}
                    children={prev} />;
            }, <ComponentWithHoc key={keys.join(".")} uiSchemaOptions={uiSchemaOptions} {...this.props} />);
        }

        /**
        * 获取模板的components
        */
        private getTemplates(): Array<{ key: string, Temp: RC<any, any> }> {
            const { mergeSchema, globalOptions, currentTheme } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const template = uiSchema[this.tempField] ||
                typeDefaultOptions[this.tempField] ||
                globalOptions[this.tempField] || "default",
                TempComponent = [];

            // 获取模板的数据，单个模板
            if (typeof template === "string") {
                TempComponent.push({
                    key: template,
                    Temp: (currentTheme.tempFactory.get(template))
                });
            } else {
                // 多个模板
                [].concat(template).reverse().forEach((tml, idx) => {
                    if (!currentTheme.tempFactory.has(tml || "default")) {
                        console.error(`不存在${tml}的temp！`);
                    } else {
                        TempComponent.push({
                            key: tml,
                            Temp: currentTheme.tempFactory.get(tml || "default")
                        });
                    }
                });
            }

            return TempComponent;
        }
    }

    return TempComponentHoc;
};
