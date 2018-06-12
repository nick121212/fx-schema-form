/// <reference types="react" />
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { ErrorObject } from "ajv";
import { FxReducer } from "./reducers/reducer";
import { DefaultProps } from "./components";
import { SchemaFormNs } from "./models";
export declare const reducerFactory: BaseFactory<FxReducer>;
export declare const hocFactory: BaseFactory<(settings?: any) => new () => React.PureComponent<DefaultProps, any>>;
export declare const themeFactory: BaseFactory<SchemaFormNs<new () => React.PureComponent<any, any>, new () => React.PureComponent<any, any>, new () => React.PureComponent<any, any>>>;
export declare const errorFactory: BaseFactory<(element: ErrorObject, dataKeys: React.ReactText[]) => string>;
