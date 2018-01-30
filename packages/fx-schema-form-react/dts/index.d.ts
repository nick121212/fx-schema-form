/// <reference types="react" />
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { FxReducer } from "./reducers/reducer";
import { SchemaFormActions } from "./reducers/schema.form";
import { SchemaForm, DefaultProps, RC, FxUiSchema } from "./components";
import { TreeMap } from "./libs/tree";
import { SchemaFormHocSettings } from "./libs/dec";
import { SchemaFormProps } from "./libs/dec";
export { SchemaFormProps, FxReducer, FxUiSchema, SchemaFormActions, DefaultProps };
declare const _default: {
    defaultTheme: {
        tempFactory: BaseFactory<RC<DefaultProps, any>>;
        fieldFactory: BaseFactory<RC<DefaultProps, any>>;
        widgetFactory: BaseFactory<RC<DefaultProps, any>>;
    };
    schemaFormDec: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps, any>;
    TreeMap: typeof TreeMap;
    reducerFactory: BaseFactory<FxReducer>;
    SchemaForm: typeof SchemaForm;
    hocFactory: BaseFactory<(settings?: any) => React.PureComponent<DefaultProps, any>>;
};
export default _default;
