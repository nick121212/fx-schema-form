import { BaseFactory, merge } from "fx-schema-form-core";
import { ComponentEnhancer } from "recompose";

export interface SchemaFormNs<F, T, W> {
    fieldFactory: BaseFactory<F>;
    tempFactory: BaseFactory<T>;
    widgetFactory: BaseFactory<W>;
    hocFactory: BaseFactory<ComponentEnhancer<any, any>>;
}

export type RC<P, T> = new () => React.Component<P, T>;
export type NsFactory = SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>;
