"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (schema, options) {
    if (schema.$ref) {
        schema.$ref = schema.$ref;
        schema = options.ajv.getSchema(schema.$ref).schema;
    }
    delete schema.$id;
    return schema;
};
//# sourceMappingURL=ref.js.map