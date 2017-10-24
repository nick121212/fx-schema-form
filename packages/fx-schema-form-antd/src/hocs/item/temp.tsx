import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle } from "recompose";
import pick from "recompose/utils/pick";
import isEqual from "lodash.isequal";

import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { MakeHocOutProps } from "./make";

const metaConnect = compose<SchemaFormItemBaseProps & ThemeHocOutProps & MakeHocOutProps, any>(
    lifecycle({
        shouldComponentUpdate: function (nextProps: SchemaFormItemBaseProps & MakeHocOutProps) {
            // let { otherEqualKeys } = this.props;
            let opts = this.props.getHocOptions();
            let metaKeys = ["isShow", "isValid", "errorText", "isLoading"];
            let formItemDataEqual = isEqual(nextProps.formItemData, this.props.formItemData);
            let metaEqual = isEqual(pick(nextProps.meta, metaKeys), pick(this.props.meta, metaKeys));
            let rtn = !formItemDataEqual || !metaEqual;
            let tempOpts = opts.temp || {};

            if (tempOpts.equalKeys && !rtn) {
                let { formData = {} } = nextProps;
                let { formData: formData1 = {} } = this.props;

                rtn = tempOpts.equalKeys.reduce((prev: boolean, next: string) => {
                    return prev && isEqual(formData[next], formData[next]);
                }, rtn);
            }

            if (!__PROD__) {
                console.groupCollapsed(nextProps.mergeSchema.keys + "---temp中比较formItemData和Meta的值得变化;" + rtn);
                console.log("formItemData", formItemDataEqual, nextProps.formItemData, this.props.formItemData);
                console.log("meta", metaEqual, pick(nextProps.meta, metaKeys), pick(this.props.meta, metaKeys));
                console.log("shouldUpdate", formItemDataEqual, metaEqual);
                console.groupEnd();
            }

            return rtn;
        }
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
    @(metaConnect as any)
    class Hoc extends React.Component<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
        private tempField = "ui:temp";

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
