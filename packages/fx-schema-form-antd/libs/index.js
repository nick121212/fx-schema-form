"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_1 = require("./components/form");
exports.SchemaForm = form_1.SchemaForm;
var formitem_1 = require("./components/formitem");
exports.SchemaFormItem = formitem_1.SchemaFormItem;
var form_2 = require("./reducer/form");
exports.FormReducer = form_2.FormReducer;
var factory_1 = require("./factory");
exports.defaultTheme = factory_1.defaultTheme;
exports.nsFactory = factory_1.nsFactory;
var create_1 = require("./libs/create");
exports.createForms = create_1.default;
exports.SchemaFormCreate = create_1.SchemaFormCreate;
var hocs_1 = require("./hocs");
exports.hocFactory = hocs_1.hocFactory;
var json_pointer_1 = require("json-pointer");
json_pointer_1.default.set = function set(obj, pointer, value) {
    var refTokens = Array.isArray(pointer) ? pointer : json_pointer_1.default.parse(pointer), nextTok = refTokens[0];
    for (var i = 0, n = refTokens.length; i < n - 1; ++i) {
        var tok = refTokens[i];
        if (tok === "-" && Array.isArray(obj)) {
            tok = obj.length;
        }
        nextTok = refTokens[i + 1];
        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            }
            else {
                obj[tok] = {};
            }
        }
        if (!obj[tok] && nextTok) {
            // let keys = refTokens.concat([]).splice(i);
            obj[tok] = !Number.isNaN(nextTok * 1) ? [] : {};
        }
        obj = obj[tok];
    }
    if (nextTok === "-" && Array.isArray(obj)) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};
// jpp({}).set("/a", 1);
//# sourceMappingURL=index.js.map