import { BaseFactory } from "fx-schema-form-core";
import { reducerFactory, hocFactory } from "./factory";
import { SchemaForm, DefaultProps } from "./components";
import { RC } from "./models";
import { TreeMap } from "./libs/tree";
import { default as schemaFormDec } from "./libs/dec";
declare const defaultTheme: {
    tempFactory: BaseFactory<RC<DefaultProps, any>>;
    fieldFactory: BaseFactory<RC<DefaultProps, any>>;
    widgetFactory: BaseFactory<RC<DefaultProps, any>>;
};
export { defaultTheme, schemaFormDec, TreeMap, reducerFactory, SchemaForm, hocFactory };
