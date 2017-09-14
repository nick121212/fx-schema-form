"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ajv = require("ajv");
var uischema_1 = require("./uischema");
var factory_1 = require("./factory");
var types_1 = require("./types");
var compileSchema = function (keys, schema, options) {
    switch (schema.type) {
        case "object":
            types_1.object(schema, keys, Object.assign({}, options, { compileSchema: compileSchema }));
            break;
        case "array":
            types_1.array(schema, keys, Object.assign({}, options, { compileSchema: compileSchema }));
            break;
        default:
            break;
    }
};
var mergetUiSchema = function (map, parentKeys, schema, uiSchemas, options) {
    var idx = uiSchemas.indexOf("*");
    var uiSchemasFirst = [], uiSchemasLast = [];
    var keys = {};
    if (idx >= 0) {
        uiSchemas.slice(0, idx).forEach(function (keyProp) {
            var key = keyProp.key || keyProp.join("/");
            var uiSchema = null;
            if (map.has(key)) {
                keys[key] = true;
                uiSchema = Object.assign({}, map.get(key), typeof keyProp === "string" ? { uiSchema: {} } : { uiSchema: keyProp });
                if (uiSchema.uiSchema.items) {
                    uiSchema.uiSchema.items = mergetUiSchema(map, [], uiSchema.items, uiSchema.uiSchema.items, options);
                }
                delete uiSchema.$ref;
                uiSchemasFirst.push(uiSchema);
            }
        });
    }
    uiSchemas.slice(idx + 1).forEach(function (keyProp) {
        var key = keyProp.key || keyProp.keys.join("/");
        var uiSchema = null;
        if (map.has(key)) {
            keys[key] = true;
            uiSchema = Object.assign({}, map.get(key), typeof keyProp === "string" ? { uiSchema: {} } : { uiSchema: keyProp });
            if (uiSchema.uiSchema.items) {
                uiSchema.uiSchema.items = mergetUiSchema(map, [], uiSchema.items, uiSchema.uiSchema.items, options);
            }
            delete uiSchema.$ref;
            uiSchemasLast.push(uiSchema);
        }
    });
    if (idx >= 0 && schema.type === "object" && schema.properties) {
        Object.keys(schema.properties).forEach(function (keyProps) {
            var keyPath = parentKeys.concat([keyProps]);
            if (map.has(keyPath.join("/")) && !keys[keyProps]) {
                var uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));
                delete uiSchema.$ref;
                uiSchemasFirst.push(uiSchema);
            }
        });
    }
    if (idx >= 0 && schema.type === "array" && schema.items) {
        if (schema.items.type === "object") {
            if (options.depth < options.maxDepth) {
                uiSchemasFirst = uiSchemasFirst.concat(merge(options.key, schema.items, uiSchemas, Object.assign({}, options, {
                    parentKeys: options.parentKeys.concat(["-"])
                })));
            }
        }
        if (schema.items.type !== "object") {
            var keyProps = "-";
            var keyPath = parentKeys.concat([keyProps]);
            if (map.has(keyPath.join("/")) && !keyPath[keyProps]) {
                var uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));
                delete uiSchema.$ref;
                uiSchemasFirst.push(uiSchema);
            }
        }
    }
    return [].concat(uiSchemasFirst.concat(uiSchemasLast));
};
var merge = function (key, schema, uiSchema, options) {
    if (uiSchema === void 0) { uiSchema = ["*"]; }
    if (options === void 0) { options = {}; }
    if (!options.ajv) {
        options.ajv = new Ajv({ $data: true });
    }
    if (!options.map) {
        options.map = new factory_1.BaseFactory();
    }
    if (!options.ajv.validateSchema(schema)) {
        return console.error("schema", options.ajv.errors);
    }
    if (uiSchema && !options.ajv.validate(uischema_1.uiSchemaSchema, uiSchema)) {
        return console.error("uiSchema", options.ajv.errors);
    }
    if (!options.ajv.getSchema(key)) {
        options.ajv.addSchema(schema, key);
    }
    compileSchema(options.parentKeys || [], schema, {
        map: options.map,
        ajv: options.ajv,
        key: key,
        depth: 1,
        maxDepth: 3,
        schemaPathKey: [key + "#"]
    });
    if (options.depth) {
        options.depth++;
    }
    return mergetUiSchema(options.map, options.parentKeys, schema, uiSchema, Object.assign({ depth: 1 }, options, {
        key: key,
        maxDepth: 3,
        schemaPathKey: [key + "#"]
    }));
};
exports.default = merge;
//# sourceMappingURL=merge.js.map