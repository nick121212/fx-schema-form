
import React from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { JSONSchema6 } from "json-schema";
import { ResolveLib, MergeLib, schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";

import { curAjv } from "../../sf/init";
import { getSchema } from "../../modelproxy";

/**
 * data
 * 将data中的字段塞到meta中
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export default () => {
    return (Component: any): RC<any, any> => {
        class ComponentHoc extends React.PureComponent<any, any> {

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
