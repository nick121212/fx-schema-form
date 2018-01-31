"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fx_schema_form_core_1 = require("fx-schema-form-core");
var hocs_1 = require("./hocs");
var reducer_1 = require("./reducer");
exports.reducerFactory = new fx_schema_form_core_1.BaseFactory();
exports.hocFactory = new fx_schema_form_core_1.BaseFactory();
exports.themeFactory = new fx_schema_form_core_1.BaseFactory();
exports.hocFactory.add("utils", hocs_1.utils.bind(hocs_1.utils, exports.hocFactory));
exports.hocFactory.add("merge", hocs_1.merge.bind(hocs_1.merge, exports.hocFactory));
exports.hocFactory.add("field", hocs_1.field.bind(hocs_1.field, exports.hocFactory));
exports.hocFactory.add("theme", hocs_1.theme.bind(hocs_1.theme, exports.hocFactory));
exports.hocFactory.add("array", hocs_1.array.bind(hocs_1.array, exports.hocFactory));
exports.hocFactory.add("validate", hocs_1.validate.bind(hocs_1.validate, exports.hocFactory));
exports.hocFactory.add("make", hocs_1.make.bind(hocs_1.make, exports.hocFactory));
exports.hocFactory.add("temp", hocs_1.temp.bind(hocs_1.temp, exports.hocFactory));
exports.hocFactory.add("data", hocs_1.data.bind(hocs_1.data, exports.hocFactory));
exports.reducerFactory.add("schemaForm", reducer_1.schemaFormReducer);
//# sourceMappingURL=factory.js.map