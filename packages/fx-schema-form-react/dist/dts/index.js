"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fx_schema_form_core_1 = require("fx-schema-form-core");
var factory_1 = require("./factory");
exports.reducerFactory = factory_1.reducerFactory;
exports.hocFactory = factory_1.hocFactory;
var components_1 = require("./components");
exports.SchemaForm = components_1.SchemaForm;
var models_1 = require("./models");
var fields_1 = require("./fields");
var tree_1 = require("./libs/tree");
exports.TreeMap = tree_1.TreeMap;
var dec_1 = require("./libs/dec");
exports.schemaFormDec = dec_1.default;
var total = components_1.props + models_1.models;
var defaultTheme = {
    tempFactory: new fx_schema_form_core_1.BaseFactory(),
    fieldFactory: new fx_schema_form_core_1.BaseFactory(),
    widgetFactory: new fx_schema_form_core_1.BaseFactory()
};
exports.defaultTheme = defaultTheme;
defaultTheme.fieldFactory.add("default", fields_1.NormalField);
defaultTheme.fieldFactory.add("object", fields_1.ObjectField);
defaultTheme.fieldFactory.add("array", fields_1.ArrayField);
factory_1.themeFactory.add("default", defaultTheme);
//# sourceMappingURL=index.js.map