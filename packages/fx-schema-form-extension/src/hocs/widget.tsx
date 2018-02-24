import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";
import { shallowEqual, compose, shouldUpdate, onlyUpdateForKeys, lifecycle, pure } from "recompose";
import { connect } from "react-redux";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ThemeHocOutProps } from "fx-schema-form-react/dist/typings/hocs/theme";
import { TreeMap } from "fx-schema-form-react/dist/typings/libs/tree";
import schemaFormReact from "fx-schema-form-react";

const { SchemaForm, schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, ThemeHocOutProps, UtilsHocOutProps {
    formItemNode?: TreeMap;
}

export const name = "extraWidget";

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
                    const { uiSchema, getOptions, currentTheme, formItemNode, arrayLevel, arrayIndex, getTitle, getPathKeys,
                        parentKeys, getRequiredKeys, children, globalOptions, schemaId, reducerKey } = this.props,
                        options = getOptions(this.props, schemaFormTypes.hoc, name),
                        extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys),
                        { widget = null } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {};

                    if (widget && currentTheme.widgetFactory.has(widget.key)) {
                        let WidgetComponent = hocFactory.get("data")({
                            meta: true,
                            metaKeys: ["options"]
                        })(currentTheme.widgetFactory.get(widget.key));

                        return <Component {...extraProps} >
                            <WidgetComponent key={widget.key}
                                schemaId={schemaId}
                                reducerKey={reducerKey}
                                uiSchema={uiSchema}
                                arrayLevel={arrayLevel}
                                arrayIndex={arrayIndex}
                                getOptions={getOptions}
                                parentKeys={[...parentKeys]}
                                getTitle={getTitle}
                                getPathKeys={getPathKeys}
                                globalOptions={globalOptions} />
                            {children}
                        </Component>;
                    }

                    return <Component {...extraProps} />;
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
