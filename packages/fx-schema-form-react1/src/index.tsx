import { BaseFactory } from "fx-schema-form-core";

import { SchemaFormReducer } from "./reducers/schema.form";
import { reducerFactory, hocFactory, themeFactory } from "./factory";
import { FxReducer } from "./reducers/reducer";
import { SchemaFormActions } from "./reducers/schema.form";
import { SchemaForm, DefaultProps, RC } from "./components";

import { NormalField, ObjectField, ArrayField } from "./fields";
import { NoneTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget } from "./widgets";

/**
 * 默认样式配置
 * 每个样式包含temp，field和widget三个factory
 */
export const defaultTheme = {
    tempFactory: new BaseFactory<RC<any, any>>(),
    fieldFactory: new BaseFactory<RC<any, any>>(),
    widgetFactory: new BaseFactory<RC<any, any>>()
};

defaultTheme.fieldFactory.add("default", NormalField);
defaultTheme.fieldFactory.add("string", NormalField);
defaultTheme.fieldFactory.add("number", NormalField);
defaultTheme.fieldFactory.add("integer", NormalField);
defaultTheme.fieldFactory.add("boolean", NormalField);
defaultTheme.fieldFactory.add("null", NormalField);
defaultTheme.fieldFactory.add("object", ObjectField);
defaultTheme.fieldFactory.add("array", ArrayField);

defaultTheme.tempFactory.add("default", NoneTemp);

defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget);
defaultTheme.widgetFactory.add("string", AntdInputWidget);
defaultTheme.widgetFactory.add("text", AntdInputWidget);

themeFactory.add("default", defaultTheme);

export {
    FxReducer,
    SchemaFormActions,
    reducerFactory,
    SchemaForm,
    hocFactory,
    DefaultProps
};
