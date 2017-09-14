"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keys_1 = require("../keys");
exports.default = function (schema, parentKey, options) {
    if (schema.items) {
        var schemaPathKey = options.schemaPathKey.concat(["items"]);
        var keys = parentKey.concat(["-"]);
        if (options.depth > options.maxDepth) {
            return;
        }
        console.log("array", schema);
        var currentSchema = keys_1.default(Object.assign({}, schema.items, {
            isRequired: (!!schema.required && schema.required.indexOf(schema.key) !== -1),
            keys: [].concat(keys),
            schmeaPathKey: schemaPathKey,
            resolve: true,
            depth: options.depth
        }), options);
        if (!options.map.has(keys.join("/"))) {
            options.map.add(keys.join("/"), currentSchema);
        }
        options.compileSchema(keys, currentSchema, Object.assign({}, options, { depth: options.depth + 1, schemaPathKey: schemaPathKey }));
    }
};
//# sourceMappingURL=array.js.map