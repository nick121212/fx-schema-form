"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keys_1 = require("../keys");
exports.default = function (schema, parentKey, options) {
    if (schema.properties) {
        Object.keys(schema.properties).forEach(function (key) {
            var schemaPathKey = options.schemaPathKey.concat(["properties", key]);
            var keys = parentKey.concat([key]);
            if (options.depth > options.maxDepth) {
                return;
            }
            var currentSchema = keys_1.default(Object.assign({}, schema.properties[key], {
                isRequired: (!!schema.required && schema.required.indexOf(key) !== -1),
                schemaPathKey: schemaPathKey,
                keys: [].concat(keys),
                resolve: true,
                depth: options.depth
            }), options);
            if (!options.map.has(keys.join("/"))) {
                options.map.add(keys.join("/"), currentSchema);
            }
            options.compileSchema(keys, Object.assign({}, currentSchema), Object.assign({}, options, { depth: options.depth + 1, schemaPathKey: schemaPathKey }));
        });
    }
};
//# sourceMappingURL=object.js.map