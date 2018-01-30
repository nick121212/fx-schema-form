import React from "react";
import { UiSchema } from "fx-schema-form-core/dist/dts/models/uischema";
import { FxJsonSchema } from "fx-schema-form-core/dist/dts/models/jsonschema";
import { Map } from "immutable";
import { BaseFactory } from "fx-schema-form-core";

export { SchemaForm } from "./form";
export { DefaultProps } from "./default.props";

export interface SchemaFormNs<F, T, W> {
    fieldFactory: BaseFactory<F>;
    tempFactory: BaseFactory<T>;
    widgetFactory: BaseFactory<W>;
}

export type RC<P, T> = new () => React.PureComponent<P, T>;
export interface FxUiSchema extends UiSchema {
    options?: Map<string, any>;
    children?: Array<UiSchema | string>;
    theme?: string;
    field?: string;
    widget?: string;
    temps?: string;
    isRequired?: boolean;
    refKeys?: string[];
    originKeys?: string[];
}
export type NsFactory = SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>;
