
import React from "react";
import { BaseFactory, MergeLib, FxJsonSchema } from "fx-schema-form-core";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";

import { DefaultProps, RC, FxUiSchema } from "../components";

/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    mergeSchemaList: FxUiSchema[];
}

export interface MergeHocProps extends DefaultProps {
}

/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * mergeSchemaList    合并之后的数据
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: RC<any, any>): RC<MergeHocProps, any> => {
        // @(compose<MergeHocProps, any>(
        //     // onlyUpdateForKeys(["schema"]),
        //     shouldUpdate(() => false),
        //     connect(mapActionsStateToProps),
        //     connect(null, mapActionsDispatchToProps),
        // ) as any)
        class MergeComponentHoc extends React.PureComponent<MergeHocProps, any> {
            private _merge: MergeLib;
            private _mergeUiSchemaList: FxUiSchema[];

            constructor(props: MergeHocProps) {
                super(props);

                this._merge = new MergeLib(props.ajv, props.schemaId, props.parentKeys, props.uiSchema as any);
                this._mergeUiSchemaList = this._merge.mergeUiSchemaList.map((v: any) => {
                    return this.mergeKeys(v);
                });
            }

            private mergeKeys(mergeSchema: any) {
                const { arrayLevel = [] } = this.props;
                const arrayLevelCopy = arrayLevel.concat([]);

                mergeSchema = Object.assign({}, mergeSchema);

                mergeSchema.originKeys = mergeSchema.keys.concat([]);
                mergeSchema.keys = mergeSchema.keys.map((key: string) => {
                    if (key === "-") {
                        return arrayLevelCopy.shift();
                    }

                    return key;
                });

                return mergeSchema;
            }

            public render(): JSX.Element {
                const { uiSchema, ...extraProps } = this.props;

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
