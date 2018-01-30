/// <reference types="react" />
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { FxReducer } from "./reducers/reducer";
import { DefaultProps } from "./components";
import { RC, SchemaFormNs } from "./models";
export declare const reducerFactory: BaseFactory<FxReducer>;
export declare const hocFactory: BaseFactory<(settings?: any) => new () => React.PureComponent<DefaultProps, any>>;
export declare const themeFactory: BaseFactory<SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>>;
