import { BaseFactory } from "fx-schema-form-core";
import { reducerFactory, hocFactory, themeFactory } from "./factory";
import { SchemaForm, SchemaFormItem } from "./components";
import { schemaFormTypes } from "./models";
import fields from "./fields";
import { TreeMap } from "./libs/tree";
import { default as schemaFormDec, name as schemaFormDecName } from "./libs/dec";
import merge from "./libs/merge";
const defaultTheme = {
    tempFactory: new BaseFactory(),
    fieldFactory: new BaseFactory(),
    widgetFactory: new BaseFactory()
};
fields.forEach((field) => {
    for (const key in field) {
        if (field.hasOwnProperty(key)) {
            defaultTheme.fieldFactory.add(key, field[key]);
        }
    }
});
themeFactory.add("default", defaultTheme);
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
//# sourceMappingURL=index.js.map