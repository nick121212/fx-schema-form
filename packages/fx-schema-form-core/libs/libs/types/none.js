"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keys_1 = require("../keys");
exports.default = function (schema, parentKey, options) {
    var currentSchema = keys_1.default(Object.assign({}, "", schema), options);
    var keys = parentKey.concat(currentSchema.keys || []);
    Object.assign(schema, currentSchema, { keys: keys, resolve: true, depth: options.depth });
};
//# sourceMappingURL=none.js.map