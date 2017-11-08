"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normal_1 = require("./normal");
var object_1 = require("./object");
var array_1 = require("./array");
exports.default = {
    string: normal_1.NormalField,
    boolean: normal_1.NormalField,
    number: normal_1.NormalField,
    integer: normal_1.NormalField,
    null: normal_1.NormalField,
    object: object_1.ObjectField,
    array: array_1.ArrayField
};
//# sourceMappingURL=index.js.map