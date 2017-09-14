import React from "react";
import { connect } from "react-redux";
import * as jpp from "json-pointer";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle } from "recompose";
import pick from "recompose/utils/pick";

import { RC } from "../../../types";
import { ThemeHocOutProps } from "./theme";
import { SchemaFormItemBaseProps } from "../props";
import { ValidateHoc } from "./validate";
import { mapMetaStateToProps } from "./meta";

const metaConnect = compose<SchemaFormItemBaseProps & ThemeHocOutProps, any>(
    connect(mapMetaStateToProps),
    lifecycle({
        shouldComponentUpdate: function (nextProps: SchemaFormItemBaseProps, nextState) {
            console.group(nextProps.mergeSchema.keys + "---temp中比较formData和Meta的值得变化");
            console.log("formData", pick(nextProps, ["formData"]), pick(this.props, ["formData"]));
            console.log("meta", pick(nextProps, ["meta"]), pick(this.props, ["meta"]));
            console.groupEnd();

            return !shallowEqual(pick(nextProps, ["formData"]).formData, pick(this.props, ["formData"]).formData) ||
                !shallowEqual(pick(nextProps, ["meta"]).meta, pick(this.props, ["meta"]).meta);
        },
        componentDidUpdate: function () {
            console.log(this.props.mergeSchema.keys + "---DidUpdate");
        },
        componentDidMount: function () {
            console.log("form item mounted!", this.props);
        }
    }),
    // shouldUpdate(
    //     (props, nextProps) => {
    //         console.group("temp中比较formData和Meta的值得变化");
    //         console.log("formData", !shallowEqual(pick(nextProps, ["formData"]), pick(props, ["formData"])));
    //         console.log("meta", pick(nextProps, ["meta", "formData"]), pick(props, ["meta"]), !shallowEqual(pick(nextProps, ["meta"]), pick(props, ["meta"])));
    //         console.groupEnd();
    //         return !shallowEqual(pick(nextProps, ["formData", "meta"]), pick(props, ["formData", "meta"]));
    //     }
    // )
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
    const getTemplate = (currentTheme, uiSchema: any, globalOptions: any = {}): Array<{ key: string, Temp: RC<any, any> }> => {
        let template = uiSchema["ui:temp"] || globalOptions["ui:temp"] || "default", TempComponent = [];
        let setMeta = false;

        // 获取模板的数据，单个模板
        if (typeof template === "string") {
            TempComponent.push({
                key: template,
                Temp: (currentTheme.tempFactory.get(template))
            });
        } else {
            // 多个模板
            template.reverse().forEach((tml, idx) => {
                if (!currentTheme.tempFactory.has(tml || "default")) {
                    console.error(`不存在${tml}的temp！`);
                } else {
                    TempComponent.push({
                        key: tml,
                        Temp: setMeta ? currentTheme.tempFactory.get(tml || "default") :
                            (currentTheme.tempFactory.get(tml || "default"))
                    });
                    setMeta = true;
                }
            });
        }

        return TempComponent;
    };

    @(metaConnect as any)
    class Hoc extends React.Component<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
        public componentDidMount(): void {
            console.log("temp mounted!");
        }
        public render(): JSX.Element {
            const { mergeSchema, globalOptions, currentTheme } = this.props;
            const { uiSchema = { options: {} }, keys } = mergeSchema;
            const TempComponents = getTemplate(currentTheme, uiSchema, globalOptions);
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
    }

    return Hoc;
};
