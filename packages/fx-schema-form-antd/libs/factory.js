import { BaseFactory } from "fx-schema-form-core";
import { nsFactory } from "./libs/ns.factory";
import fields from "./fields";
var defaultTheme = {
    tempFactory: new BaseFactory(),
    fieldFactory: new BaseFactory(),
    widgetFactory: new BaseFactory()
};
nsFactory.add("default", defaultTheme);
for (var key in fields) {
    if (fields.hasOwnProperty(key)) {
        var field = fields[key];
        defaultTheme.fieldFactory.add(key, field);
        defaultTheme.fieldFactory.lock(key);
    }
}
// for (let key in widgets) {
//     if (widgets.hasOwnProperty(key)) {
//         let widget = widgets[key];
//         defaultTheme.widgetFactory.add(key, widget);
//     }
// }
// for (let key in templates) {
//     if (templates.hasOwnProperty(key)) {
//         let template = templates[key];
//         defaultTheme.tempFactory.add(key, template);
//         defaultTheme.tempFactory.lock(key);
//     }
// }
export { nsFactory, defaultTheme };
//# sourceMappingURL=factory.js.map