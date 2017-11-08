"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fx_schema_form_core_1 = require("fx-schema-form-core");
var merge_1 = require("./form/merge");
var temp_1 = require("./item/temp");
var field_1 = require("./item/field");
var theme_1 = require("./item/theme");
var validate_1 = require("./item/validate");
var array_1 = require("./item/array");
var make_1 = require("./item/make");
var condition_1 = require("./item/condition");
var hocFactory = new fx_schema_form_core_1.BaseFactory();
exports.hocFactory = hocFactory;
var hocs = {
    merge: merge_1.MergeHoc.bind(merge_1.MergeHoc, hocFactory),
    temp: temp_1.TempHoc.bind(temp_1.TempHoc, hocFactory),
    field: field_1.FieldHoc.bind(field_1.FieldHoc, hocFactory),
    theme: theme_1.ThemeHoc.bind(theme_1.ThemeHoc, hocFactory),
    validate: validate_1.ValidateHoc.bind(validate_1.ValidateHoc, hocFactory),
    array: array_1.ArrayHoc.bind(array_1.ArrayHoc, hocFactory),
    make: make_1.MakeHoc.bind(make_1.MakeHoc, hocFactory),
    condition: condition_1.ConditionHoc.bind(condition_1.ConditionHoc, hocFactory)
};
for (var key in hocs) {
    if (hocs.hasOwnProperty(key)) {
        var hoc = hocs[key];
        hocFactory.add(key, hoc);
        hocFactory.lock(key);
    }
}
//# sourceMappingURL=index.js.map