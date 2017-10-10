import { BaseFactory } from "fx-schema-form-core";
import { SchemaForm } from "./components/form";
import { SchemaFormItem } from "./components/formitem";
import { nsFactory } from "./libs/ns.factory";
import hocs from "./hocs";
import fields from "./fields";
import templates from "./templates";
import widgets from "./widgets";
import { FormReducer } from "./reducer/form";
const defaultTheme = {
    tempFactory: new BaseFactory(),
    fieldFactory: new BaseFactory(),
    widgetFactory: new BaseFactory(),
    hocFactory: new BaseFactory(),
};
nsFactory.add("default", defaultTheme);
for (let key in fields) {
    if (fields.hasOwnProperty(key)) {
        let field = fields[key];
        defaultTheme.fieldFactory.add(key, field);
        defaultTheme.fieldFactory.lock(key);
    }
}
for (let key in widgets) {
    if (widgets.hasOwnProperty(key)) {
        let widget = widgets[key];
        defaultTheme.widgetFactory.add(key, widget);
    }
}
for (let key in hocs) {
    if (hocs.hasOwnProperty(key)) {
        let hoc = hocs[key];
        defaultTheme.hocFactory.add(key, hoc);
        defaultTheme.hocFactory.lock(key);
    }
}
for (let key in templates) {
    if (templates.hasOwnProperty(key)) {
        let template = templates[key];
        defaultTheme.tempFactory.add(key, template);
        defaultTheme.tempFactory.lock(key);
    }
}
export { default as createForms } from "./libs/create";
export { nsFactory, SchemaForm, SchemaFormItem, defaultTheme, FormReducer };
//# sourceMappingURL=index.js.map