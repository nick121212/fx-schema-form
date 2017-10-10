/// <reference types="recompose" />
import { ComponentEnhancer } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import { SchemaForm } from "./components/form";
import { SchemaFormItem } from "./components/formitem";
import { RC } from "./types";
import { nsFactory } from "./libs/ns.factory";
import { FormReducer } from "./reducer/form";
declare const defaultTheme: {
    tempFactory: BaseFactory<RC<any, any>>;
    fieldFactory: BaseFactory<RC<any, any>>;
    widgetFactory: BaseFactory<RC<any, any>>;
    hocFactory: BaseFactory<ComponentEnhancer<any, any>>;
};
export { default as createForms } from "./libs/create";
export { nsFactory, SchemaForm, SchemaFormItem, defaultTheme, FormReducer };
