import { BaseFactory } from "fx-schema-form-core";
import { reducerFactory, hocFactory } from "./factory";
import { FxReducer } from "./reducers/reducer";
import { SchemaFormActions } from "./reducers/schema.form";
import { SchemaForm, DefaultProps, RC } from "./components";
export declare const defaultTheme: {
    tempFactory: BaseFactory<RC<DefaultProps, any>>;
    fieldFactory: BaseFactory<RC<DefaultProps, any>>;
    widgetFactory: BaseFactory<RC<DefaultProps, any>>;
};
export { FxReducer, SchemaFormActions, reducerFactory, SchemaForm, hocFactory, DefaultProps };
