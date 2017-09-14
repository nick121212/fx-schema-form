"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (schema, options) {
    if (schema.$ref) {
        return options.ajv.getSchema(options.key + schema.$ref).schema;
    }
    return schema;
};
//# sourceMappingURL=ref.js.map