
import React, { PureComponent } from "react";
import { BaseFactory, MergeLib, FxJsonSchema, UiSchema } from "fx-schema-form-core";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";

import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models";

/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    mergeSchemaList?: FxUiSchema[];
}

export interface MergeHocProps extends DefaultProps {
    uiSchemas: Array<string | UiSchema>;
}

let totalTime = 0, timeid;

/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * mergeSchemaList    合并之后的数据
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: RC<any, any>): RC<MergeHocProps, any> => {
        class MergeComponentHoc extends PureComponent<MergeHocProps, any> {
            private _mergeUiSchemaList: FxUiSchema[];

            /**
             * 合并schema和uiSchema生成 mergeUiSchemaList
             * @param props props
             */
            constructor(props: MergeHocProps) {
                super(props);

                const uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : null;

                if (uiSchema) {
                    uiSchema.keys = uiSchema.originKeys;
                }

                const merge = new MergeLib(props.ajv, props.schemaId, uiSchema, props.uiSchemas as any);

                this._mergeUiSchemaList = merge.mergeUiSchemaList.map((v: any) => {
                    return this.mergeKeys(v);
                });
            }

            /**
             * 解析keys
             * 1. 遍历keys中的元素，如果遇到-，则替换成数字
             * @param mergeSchema 合并过后的FxUiSchema
             */
            private mergeKeys(mergeSchema: any) {
                const { arrayLevel = [] } = this.props;
                const arrayLevelCopy = arrayLevel.concat([]);

                mergeSchema = Object.assign({}, mergeSchema);
                mergeSchema.originKeys = [].concat(mergeSchema.keys);
                mergeSchema.keys = mergeSchema.keys.reverse().map((key: string) => {
                    if (key === "-") {
                        return arrayLevelCopy.pop();
                    }

                    return key;
                });
                mergeSchema.keys.reverse();

                return mergeSchema;
            }

            public render(): JSX.Element {
                const { uiSchemas, uiSchema, ...extraProps } = this.props;

                return (
                    <Component
                        mergeSchemaList={this._mergeUiSchemaList}
                        {...extraProps}
                    />
                );
            }
        }

        return MergeComponentHoc as any;
    };
};
