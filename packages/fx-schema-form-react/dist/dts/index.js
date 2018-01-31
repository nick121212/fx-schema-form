import { BaseFactory } from "fx-schema-form-core";
import { reducerFactory, hocFactory, themeFactory } from "./factory";
import { SchemaForm, props } from "./components";
import { models } from "./models";
import { NormalField, ObjectField, ArrayField } from "./fields";
import { TreeMap } from "./libs/tree";
import { default as schemaFormDec } from "./libs/dec";
let total = props + models;
const defaultTheme = {
    tempFactory: new BaseFactory(),
    fieldFactory: new BaseFactory(),
    widgetFactory: new BaseFactory()
};
defaultTheme.fieldFactory.add("default", NormalField);
defaultTheme.fieldFactory.add("object", ObjectField);
defaultTheme.fieldFactory.add("array", ArrayField);
themeFactory.add("default", defaultTheme);
export { defaultTheme, schemaFormDec, TreeMap, reducerFactory, SchemaForm, hocFactory };
//# sourceMappingURL=index.js.map