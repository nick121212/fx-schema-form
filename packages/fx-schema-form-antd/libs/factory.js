"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fx_schema_form_core_1 = require("fx-schema-form-core");
var ns_factory_1 = require("./libs/ns.factory");
exports.nsFactory = ns_factory_1.nsFactory;
var fields_1 = require("./fields");
var defaultTheme = {
    tempFactory: new fx_schema_form_core_1.BaseFactory(),
    fieldFactory: new fx_schema_form_core_1.BaseFactory(),
    widgetFactory: new fx_schema_form_core_1.BaseFactory()
};
exports.defaultTheme = defaultTheme;
ns_factory_1.nsFactory.add("default", defaultTheme);
for (var key in fields_1.default) {
    if (fields_1.default.hasOwnProperty(key)) {
        var field = fields_1.default[key];
        defaultTheme.fieldFactory.add(key, field);
        defaultTheme.fieldFactory.lock(key);
    }
}
//# sourceMappingURL=factory.js.map