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
    tempFactory: new BaseFactory<RC<DefaultProps, any>>(),
    fieldFactory: new BaseFactory<RC<DefaultProps, any>>(),
    widgetFactory: new BaseFactory<RC<DefaultProps, any>>()
};

defaultTheme.fieldFactory.add("default", NormalField as any);
defaultTheme.fieldFactory.add("object", ObjectField as any);
defaultTheme.fieldFactory.add("array", ArrayField as any);

defaultTheme.tempFactory.add("default", NoneTemp as any);

defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget as any);
defaultTheme.widgetFactory.add("default", AntdInputWidget as any);

themeFactory.add("default", defaultTheme);

export {
    FxReducer,
    SchemaFormActions,
    reducerFactory,
    SchemaForm,
    hocFactory,
    DefaultProps
};
