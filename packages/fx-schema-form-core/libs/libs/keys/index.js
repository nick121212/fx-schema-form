"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ref_1 = require("./ref");
exports.default = function (schema, ajv) {
    var a = [ref_1.default].reduce(function (prev, next) {
        return Object.assign({}, next(prev, ajv), prev);
    }, schema);
    return a;
};
//# sourceMappingURL=index.js.map