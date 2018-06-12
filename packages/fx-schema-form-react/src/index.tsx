import React from "react";
import { BaseFactory } from "fx-schema-form-core";

import { reducerFactory, hocFactory, themeFactory } from "./factory";
import { SchemaForm, DefaultProps, SchemaFormItem } from "./components";
import { RC,  schemaFormTypes, SchemaFormNs } from "./models";

import fields from "./fields";
import { TreeMap } from "./libs/tree";
import {  default as schemaFormDec, name as schemaFormDecName, SchemaFormHocSettings, SchemaFormProps } from "./libs/dec";
import merge from "./libs/merge";
import { FxReducer } from "./reducers/reducer";

/**
 * 默认样式配置
 * 每个样式包含temp，field和widget三个factory
 */
const defaultTheme = {
    tempFactory: new BaseFactory<RC<DefaultProps, any>>(),
    fieldFactory: new BaseFactory<RC<DefaultProps, any>>(),
    widgetFactory: new BaseFactory<RC<DefaultProps, any>>()
};

// const a :SchemaFormProps;

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

hocFactory.add(schemaFormDecName, schemaFormDec.bind(schemaFormDec, hocFactory));

export default {
    themeFactory,
    defaultTheme,
    schemaFormDec,
    TreeMap,
    reducerFactory,
    SchemaForm,
    hocFactory,
    schemaFormTypes,
    SchemaFormItem,
    merge
};

