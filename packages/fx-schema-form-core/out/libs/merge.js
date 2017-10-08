"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ajv = require("ajv");
var uischema_1 = require("./uischema");
var factory_1 = require("./factory");
var types_1 = require("./types");
var ui_1 = require("./ui");
var SchemaMerge = (function () {
    function SchemaMerge(uiMerge) {
        this.uiMerge = uiMerge;
        uiMerge.init(this.merge.bind(this));
    }
    SchemaMerge.prototype.compileSchema = function (keys, schema, options) {
        switch (schema.type) {
            case "object":
                types_1.object(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));
                break;
            case "array":
                types_1.array(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));
                break;
            default:
                break;
        }
    };
    SchemaMerge.prototype.merge = function (key, schema, uiSchema, options) {
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
        this.compileSchema(options.parentKeys || [], schema, {
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
        return this.uiMerge.merge(options.map, options.parentKeys, schema, uiSchema, Object.assign({ depth: 1 }, options, {
            key: key,
            maxDepth: 3,
            schemaPathKey: [key + "#"]
        }));
    };
    return SchemaMerge;
}());
exports.SchemaMerge = SchemaMerge;
exports.schemaMerge = new SchemaMerge(new ui_1.UiMerge());
//# sourceMappingURL=merge.js.map