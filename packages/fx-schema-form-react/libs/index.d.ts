/// <reference types="react" />
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { FxReducer } from "./reducers/reducer";
import { SchemaForm, DefaultProps } from "./components";
import { RC, SchemaFormNs } from "./models";
import { TreeMap } from "./libs/tree";
import { SchemaFormHocSettings } from "./libs/dec";
import { SchemaFormProps } from "./libs/dec";
declare const _default: {
    themeFactory: BaseFactory<SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>>;
    defaultTheme: {
        tempFactory: BaseFactory<RC<DefaultProps, any>>;
        fieldFactory: BaseFactory<RC<DefaultProps, any>>;
        widgetFactory: BaseFactory<RC<DefaultProps, any>>;
    };
    schemaFormDec: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps & DefaultProps, any>;
    TreeMap: typeof TreeMap;
    reducerFactory: BaseFactory<FxReducer>;
    SchemaForm: typeof SchemaForm;
    hocFactory: BaseFactory<(settings?: any) => new () => React.PureComponent<DefaultProps, any>>;
    schemaFormTypes: {
        hoc: string;
        widget: string;
        template: string;
        field: string;
    };
    merge: (param1: any, param2: any, schema?: any) => any;
};
export default _default;
