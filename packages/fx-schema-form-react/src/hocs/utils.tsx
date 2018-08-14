import React, { PureComponent } from "react";
import { BaseFactory } from "fx-schema-form-core";
import Immutable from "immutable";
import { JSONSchema6 } from "json-schema";
import { Ajv } from "ajv";

import { DefaultProps } from "../components";
import { RC } from "../models";
import { SchemaFormActions } from "../reducers/schema.form";
import {
    getTitle, getPathKeys, getOptions, normalizeDataPath,
    getRequiredKeys, getDefaultData, getActions, getPathProps
} from "../libs/utils";

export const name = "utils";

export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string, ...extraSettings: Immutable.Map<string, any>[])
        => { [key: string]: any };
    getTitle(props: DefaultProps, ...extraSettings: Immutable.Map<string, any>[]): () => string;
    getPathKeys: (keys: string[], path: string, schemaId?: string) => Array<string | number>;
    normalizeDataPath: (schemaId: string, dataPath: string) => Array<string | number>;
    getRequiredKeys: (props: DefaultProps, include: string[], exclude: string[]) => { [key: string]: any };
    getDefaultData: (ajv: Ajv, schema: JSONSchema6, data: any, defaultData?: any, merge?: boolean) => Promise<any>;
    getActions: (props: DefaultProps, raw?: boolean) => SchemaFormActions;
    getPathProps: (props: DefaultProps, path: string) => DefaultProps;
}

/**
 * 包装utils的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return () => {
        return (Component: any): RC<DefaultProps, any> => {
            class ComponentHoc extends PureComponent<UtilsHocOutProps, any> {
                public render(): JSX.Element {
                    return <Component
                        getTitle={getTitle}
                        getPathKeys={getPathKeys}
                        getOptions={getOptions}
                        normalizeDataPath={normalizeDataPath}
                        getRequiredKeys={getRequiredKeys}
                        getDefaultData={getDefaultData}
                        getActions={getActions}
                        getPathProps={getPathProps}
                        {...this.props} />;
                }
            }

            return ComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
