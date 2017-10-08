import React from "react";
import { connect } from "react-redux";
import * as jpp from "json-pointer";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle } from "recompose";
import pick from "recompose/utils/pick";

import { RC } from "../../../types";
import { ThemeHocOutProps } from "./theme";
import { SchemaFormItemBaseProps } from "../props";
import { ValidateHoc } from "./validate";
import { mapMetaStateToProps } from "../../select";

const metaConnect = compose<SchemaFormItemBaseProps & ThemeHocOutProps, any>(
    lifecycle({
        shouldComponentUpdate: function (nextProps: SchemaFormItemBaseProps, nextState) {
            console.group(nextProps.mergeSchema.keys + "---temp中比较formItemData和Meta的值得变化");
            console.log("formItemData", pick(nextProps, ["formItemData"]).formItemData, pick(this.props, ["formItemData"]).formItemData);
            console.log("meta", pick(nextProps, ["meta"]), pick(this.props, ["meta"]));

            let rtn = !shallowEqual(pick(nextProps, ["formItemData"]).formItemData, pick(this.props, ["formItemData"]).formItemData) ||
                !shallowEqual(pick(nextProps.meta, ["isShow", "isValid", "dirty"]), pick(this.props.meta, ["isShow", "isValid", "dirty"]));

            console.log("shouldUpdate", rtn);
            console.groupEnd();
            return rtn;
        }
    })
);

/**
 * 包装Template的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 */
export const TempHoc = (Component: any): RC<SchemaFormItemBaseProps & ThemeHocOutProps, any> => {

    /**
    * 获取模板的components
    * @param uiSchema 合并后的数据
    */

    @(metaConnect as any)
    class Hoc extends React.Component<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
        private tempField = "ui:temp";

        public componentDidMount(): void {
            console.log("temp mounted!");
        }
        public render(): JSX.Element {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys } = mergeSchema;
            const TempComponents = this.getTemplates();
            const uiSchemaOptions = uiSchema.options || {};
            let index = 0;

            return TempComponents.reduce((prev: JSX.Element, { key, Temp }) => {
                return <Temp
                    globalOptions={globalOptions}
                    tempKey={key}
                    uiSchemaOptions={uiSchemaOptions}
                    key={keys.join(".") + key + index++}
                    {...this.props}>
                    {prev}
                </Temp>;
            }, <Component key={keys.join(".")} uiSchemaOptions={uiSchemaOptions} {...this.props}></Component>);
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

    return Hoc;
};
