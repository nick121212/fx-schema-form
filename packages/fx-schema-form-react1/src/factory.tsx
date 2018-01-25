import { BaseFactory } from "fx-schema-form-core";
import Immutbale from "immutable";

import { FxReducer } from "./reducers/reducer";
import { SchemaFormReducer } from "./reducers/schema.form";
import { RC, DefaultProps, NsFactory, SchemaFormNs } from "./components";
import { utils, merge, field, theme, array, validate, make, temp } from "./hocs";
import { NormalField } from "./fields";
import { NoneTemp } from "./templates";
import { AntdCheckboxWidget } from "./widgets";

export const reducerFactory = new BaseFactory<FxReducer>();
export const hocFactory = new BaseFactory<(settings?: any) => RC<DefaultProps, any>>();
export const themeFactory = new BaseFactory<NsFactory>();

/**
 * 默认样式配置
 * 每个样式包含temp，field和widget三个factory
 */
const defaultTheme = {
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

defaultTheme.tempFactory.add("default", NoneTemp);

defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget);

hocFactory.add("utils", utils.bind(utils, hocFactory));
hocFactory.add("merge", merge.bind(merge, hocFactory));
hocFactory.add("field", field.bind(field, hocFactory));
hocFactory.add("theme", theme.bind(theme, hocFactory));
hocFactory.add("array", array.bind(array, hocFactory));
hocFactory.add("validate", validate.bind(validate, hocFactory));
hocFactory.add("make", make.bind(make, hocFactory));
hocFactory.add("temp", temp.bind(temp, hocFactory));

reducerFactory.add("schemaForm", new SchemaFormReducer(Immutbale.fromJS({})));
themeFactory.add("default", defaultTheme);
