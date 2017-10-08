"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiMerge = (function () {
    function UiMerge() {
    }
    UiMerge.prototype.getKey = function (keyProp) {
        if (typeof keyProp === "string") {
            return keyProp;
        }
        if (keyProp.join) {
            return keyProp.join("/");
        }
        if (keyProp.key) {
            return keyProp.key;
        }
        if (keyProp.keys) {
            return keyProp.keys.join("/");
        }
        if (keyProp.uiSchema) {
            return keyProp.uiSchema.key;
        }
        return "";
    };
    UiMerge.prototype.mergeNormal = function (keyProp, map, keys, options) {
        var key = this.getKey(keyProp);
        var uiSchema = null;
        if (map.has(key)) {
            keys[key] = true;
            uiSchema = Object.assign({}, map.get(key), typeof keyProp === "string" ? { uiSchema: {} } : { uiSchema: keyProp });
            if (uiSchema.uiSchema.items) {
                uiSchema.uiSchema.items = this.merge(map, [], uiSchema.items, uiSchema.uiSchema.items, options);
            }
            delete uiSchema.$ref;
            return uiSchema;
        }
    };
    UiMerge.prototype.mergeObject = function (keyProp, map, parentKeys, keys) {
        var keyPath = parentKeys.concat([keyProp]);
        if (map.has(keyPath.join("/")) && !keys[keyProp]) {
            var uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));
            delete uiSchema.$ref;
            return uiSchema;
        }
    };
    UiMerge.prototype.mergeArray = function (map, parentKeys, schema, uiSchemas, options) {
        if (schema.items.type === "object") {
            if (options.depth < options.maxDepth) {
                return this.schemaMerge(options.key, schema.items, uiSchemas, Object.assign({}, options, {
                    parentKeys: options.parentKeys.concat(["-"])
                }));
            }
        }
        if (schema.items.type !== "object") {
            var keyProps = "-";
            var keyPath = parentKeys.concat([keyProps]);
            if (map.has(keyPath.join("/")) && !keyPath[keyProps]) {
                var uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));
                delete uiSchema.$ref;
                return uiSchema;
            }
        }
    };
    UiMerge.prototype.init = function (schemaMerge) {
        this.schemaMerge = schemaMerge;
    };
    UiMerge.prototype.merge = function (map, parentKeys, schema, uiSchemas, options) {
        var _this = this;
        var idx = uiSchemas.indexOf("*");
        var uiSchemasFirst = [], uiSchemasLast = [];
        var keys = {};
        if (idx >= 0) {
            uiSchemas.slice(0, idx).forEach(function (keyProp) {
                var uiSchema = _this.mergeNormal(keyProp, map, keys, options);
                if (uiSchema) {
                    uiSchemasFirst.push(uiSchema);
                }
            });
        }
        uiSchemas.slice(idx + 1).forEach(function (keyProp) {
            var uiSchema = _this.mergeNormal(keyProp, map, keys, options);
            if (uiSchema) {
                uiSchemasLast.push(uiSchema);
            }
        });
        if (idx >= 0 && schema.type === "object" && schema.properties) {
            Object.keys(schema.properties).forEach(function (keyProp) {
                var uiSchema = _this.mergeObject(keyProp, map, parentKeys, keys);
                if (uiSchema) {
                    uiSchemasFirst.push(uiSchema);
                }
            });
        }
        if (idx >= 0 && schema.type === "array" && schema.items) {
            var uiSchema = this.mergeArray(map, parentKeys, schema, uiSchemas, options);
            if (uiSchema) {
                if (uiSchema.length) {
                    uiSchemasFirst = uiSchemasFirst.concat(uiSchema);
                }
                else {
                    uiSchemasFirst.push(uiSchema);
                }
            }
        }
        return [].concat(uiSchemasFirst.concat(uiSchemasLast));
    };
    return UiMerge;
}());
exports.UiMerge = UiMerge;
//# sourceMappingURL=ui.js.map