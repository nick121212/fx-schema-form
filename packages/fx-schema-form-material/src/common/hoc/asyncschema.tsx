
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";
import { RC } from "fx-schema-form-react/libs/models";
import { JSONSchema6 } from "json-schema";
import { ResolveLib, MergeLib, schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";

import { curAjv } from "../../sf/init";
import { getSchema } from "../../modelproxy";

/**
 * data
 * 用来获取schema的插件
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default () => {
    return (Component: any): RC<any, any> => {
        class ComponentHoc extends React.PureComponent<any, any> {

            /**
             * 获取指定的schema的json文件
             * 使用fx-schema-form-core中的ResolveLib来编译
             */
            private initSchema(schemaId: string) {
                getSchema.get(null, {
                    params: {
                        id: schemaId + ".json"
                    }
                }).then((schema: JSONSchema6) => {
                    curAjv.compileAsync(schema).then(() => {
                        let resolve = new ResolveLib(curAjv, schema);

                        this.forceUpdate();
                    });
                });
            }

            /**
             * 如果当前的schema不存在，则远程拉取
             */
            public render(): JSX.Element | null {
                const { schemaId, ...extraProps } = this.props;

                if (!schemaKeysFactory.has(schemaId)) {
                    this.initSchema(schemaId);
                    return null;
                }

                return <Component schemaId={schemaId} {...extraProps} />;
            }
        }

        return ComponentHoc as any;
    };
};
