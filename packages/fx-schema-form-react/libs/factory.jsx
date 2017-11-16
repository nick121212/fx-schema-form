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
export { nsFactory, defaultTheme };
//# sourceMappingURL=factory.jsx.map