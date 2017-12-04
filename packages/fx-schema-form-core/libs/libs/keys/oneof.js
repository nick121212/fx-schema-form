"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (schema, options) {
    if (schema.oneOf) {
        schema.oneOf.map(function (s) {
            if (s.resolve) {
                return s;
            }
            return options.compileSchema(schema.keys, s, options);
        });
    }
    return schema;
};
//# sourceMappingURL=oneof.js.map