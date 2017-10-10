import { BaseFactory } from "fx-schema-form-core";
import { ComponentEnhancer } from "recompose";
import ajv from "ajv";

export interface SchemaFormNs<F, T, W> {
    fieldFactory: BaseFactory<F>;
    tempFactory: BaseFactory<T>;
    widgetFactory: BaseFactory<W>;
    hocFactory?: BaseFactory<ComponentEnhancer<any, any>>;
}

/**
 * meta数据
 */
export interface SchemaFormMeta {
    isShow?: boolean;
    dirty?: boolean;
    isValid?: boolean;
    errors?: ajv.ErrorObject[];
    errorText?: string;
}


export type RC<P, T> = new () => React.Component<P, T>;
export type NsFactory = SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>;
