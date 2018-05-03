import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";
import { compose} from "recompose";
import { RC } from "fx-schema-form-react/libs/models";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ThemeHocOutProps } from "fx-schema-form-react/libs/hocs/theme";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
import schemaFormReact from "fx-schema-form-react";


const { SchemaForm, schemaFormTypes } = schemaFormReact;
export interface Props extends DefaultProps, ThemeHocOutProps, UtilsHocOutProps {
    formItemNode?: TreeMap;
}

export const name = "extraTemp";

/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */

export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
        return (Component: any): RC<Props, any> => {
            /**
            * 获取模板的components
            * @param uiSchema 合并后的数据
            */
            @(hocFactory.get("data")({
                treeNode: true
            }))
            class TempComponentHoc extends PureComponent<Props, any> {
                /**
                 * 渲染组件
                 * 1. 获取meta数据中的temps字段
                 * 2. 遍历temps，拼接temps，渲染temps组件
                 * 3. 渲染Component组件作为temps的children
                 */
                public render(): JSX.Element {
                    const { uiSchema, getOptions, currentTheme, formItemNode, getRequiredKeys } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys),
                        { temps = [] } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {};

                    return temps.map((temp: { key: string }) => {
                        return {
                            key: temp.key,
                            Temp: currentTheme.tempFactory.get(temp.key)
                        };
                    }).reduce((prev: JSX.Element, { key, Temp }: any) => {
                        const { reducerKey, ajv, arrayLevel, arrayIndex, schemaId,
                            globalOptions, parentKeys, getTitle, getPathKeys } = this.props;
                        const tempOptions = getOptions(this.props, schemaFormTypes.template, key),
                            TempWithHoc: any = compose(...(tempOptions.tempHocs || []))(Temp);

                        return <TempWithHoc
                            key={key}
                            tempKey={key}
                            reducerKey={reducerKey}
                            ajv={ajv}
                            uiSchema={uiSchema}
                            schemaId={schemaId}
                            arrayLevel={arrayLevel}
                            arrayIndex={arrayIndex}
                            globalOptions={globalOptions}
                            parentKeys={parentKeys}
                            getTitle={getTitle}
                            getOptions={getOptions}
                            getPathKeys={getPathKeys}
                            children={prev} />;
                    }, <Component {...extraProps} />);
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
