import React from "react";
import { BaseFactory } from "fx-schema-form-core";

import { SchemaFormReducer } from "./reducers/schema.form";
import { reducerFactory, hocFactory, themeFactory } from "./factory";
import { FxReducer } from "./reducers/reducer";
import { SchemaFormActions } from "./reducers/schema.form";
import { SchemaForm, DefaultProps } from "./components";
import { RC, SchemaFormNs, schemaFormTypes } from "./models";

import fields from "./fields";
import { TreeMap } from "./libs/tree";
import { SchemaFormHocSettings, SchemaFormHocOutProps, default as schemaFormDec } from "./libs/dec";
import { SchemaFormProps } from "./libs/dec";

/**
 * 默认样式配置
 * 每个样式包含temp，field和widget三个factory
 */
const defaultTheme = {
    tempFactory: new BaseFactory<RC<DefaultProps, any>>(),
    fieldFactory: new BaseFactory<RC<DefaultProps, any>>(),
    widgetFactory: new BaseFactory<RC<DefaultProps, any>>()
};

/**
 * 添加默认的fields
 */
fields.forEach((field: any) => {
    for (const key in field) {
        if (field.hasOwnProperty(key)) {
            defaultTheme.fieldFactory.add(key, field[key]);
        }
    }
});

themeFactory.add("default", defaultTheme as any);

hocFactory.add("schemaFormDec", schemaFormDec.bind(schemaFormDec, hocFactory));

export default {
    themeFactory,
    defaultTheme,
    schemaFormDec,
    TreeMap,
    reducerFactory,
    SchemaForm,
    hocFactory,
    schemaFormTypes
};

