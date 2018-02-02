(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SchemaFormCore"] = factory();
	else
		root["SchemaFormCore"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __webpack_require__(1);
var regexp = /#$/g;
var ResolveLib = (function () {
    function ResolveLib(ajv, schema, $id) {
        if ($id === void 0) { $id = ""; }
        this.ajv = ajv;
        this.$id = $id;
        this.mergeSchema = {};
        if (!$id) {
            this.initSchema(ajv, schema);
        }
        this.compileSchema(schema, $id || schema.$ref || "");
    }
    ResolveLib.prototype.initSchema = function (ajv, schema) {
        var $id = schema.$id;
        if (!$id && !schema.$ref) {
            throw new Error("id is required by fx-schema-form-core.");
        }
        if (!ajv.validateSchema(schema)) {
            throw ajv.errors;
        }
        if ($id && !ajv.getSchema($id)) {
            ajv.addSchema(schema);
        }
        return schema;
    };
    ResolveLib.prototype.compileSchema = function (schema, $id) {
        schema = factory_1.schemaTypeFactory.get("undefined")(schema, $id || (schema.$id + "#"), this.ajv);
        this.mergeSchema = schema;
        if (!schema.type || schema.$ref) {
            return;
        }
        if (schema.type.constructor !== String) {
            throw new Error("schema type[" + schema.type + "] can only be string.");
        }
        var type = schema.type.toString();
        if (factory_1.schemaTypeFactory.has(type)) {
            this.mergeSchema = factory_1.schemaTypeFactory.get(type)(schema, $id || (schema.$id + "#"), this.ajv);
        }
    };
    ResolveLib.getDataKeys = function (schemaKey, keepFirst) {
        if (keepFirst === void 0) { keepFirst = false; }
        var keys = schemaKey.split("/").map(function (key, index) {
            if (index === 0 && regexp.test(key)) {
                regexp.lastIndex = 0;
                return keepFirst ? key.replace(regexp, "") : null;
            }
            if (key === "properties") {
                return null;
            }
            if (key === "items") {
                return "-";
            }
            return key;
        });
        return keys.filter(function (key) {
            return key !== null;
        });
    };
    ResolveLib.getSchemaId = function (schemaKey) {
        var keys = schemaKey.split("/");
        if (!keys.length) {
            throw new Error(schemaKey + " not a valid schemaPath.");
        }
        return keys[0].replace(regexp, "");
    };
    return ResolveLib;
}());
exports.default = ResolveLib;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __webpack_require__(2);
exports.schemaFieldFactory = new factory_1.BaseFactory();
exports.schemaKeyWordFactory = new factory_1.BaseFactory();
exports.schemaTypeFactory = new factory_1.BaseFactory();
exports.schemaKeysFactory = new factory_1.BaseFactory();
exports.convertKeys = function (schema, ajv) {
    exports.schemaKeyWordFactory.forEach(function (key, val) {
        schema = val(schema, ajv);
    });
    return schema;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseFactory = (function () {
    function BaseFactory() {
        this.instances = {};
        this.protectedInstances = {};
    }
    BaseFactory.prototype.add = function (name, intance, override) {
        if (override === void 0) { override = false; }
        if (this.protectedInstances.hasOwnProperty(name)) {
            return console.error("name=\u3010" + name + "\u3011has locked!");
        }
        if (!override && this.has(name)) {
            return console.error("\u3010" + name + "\u3011exist!");
        }
        this.instances[name] = intance;
        return true;
    };
    BaseFactory.prototype.has = function (name) {
        return this.instances.hasOwnProperty(name);
    };
    BaseFactory.prototype.get = function (name) {
        if (this.has(name)) {
            return this.instances[name];
        }
        throw new Error("name=[" + name + "]not exist");
    };
    BaseFactory.prototype.lock = function (name) {
        if (this.has(name)) {
            this.protectedInstances[name] = true;
        }
    };
    BaseFactory.prototype.unLock = function (name) {
        if (this.has(name)) {
            delete this.protectedInstances[name];
        }
    };
    BaseFactory.prototype.forEach = function (func) {
        if (!func) {
            return;
        }
        for (var key in this.instances) {
            if (this.instances.hasOwnProperty(key)) {
                var element = this.instances[key];
                if (func(key, element) === false) {
                    break;
                }
            }
        }
    };
    BaseFactory.prototype.clear = function () {
        this.instances = {};
        this.protectedInstances = {};
    };
    return BaseFactory;
}());
exports.BaseFactory = BaseFactory;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
var index_2 = __webpack_require__(7);
var factory_1 = __webpack_require__(2);
exports.BaseFactory = factory_1.BaseFactory;
var factory_2 = __webpack_require__(1);
exports.schemaFieldFactory = factory_2.schemaFieldFactory;
exports.schemaKeyWordFactory = factory_2.schemaKeyWordFactory;
exports.schemaTypeFactory = factory_2.schemaTypeFactory;
exports.schemaKeysFactory = factory_2.schemaKeysFactory;
var resolve_1 = __webpack_require__(0);
exports.ResolveLib = resolve_1.default;
var merge_1 = __webpack_require__(11);
exports.MergeLib = merge_1.default;
factory_2.schemaKeyWordFactory.add("ref", index_1.ref);
factory_2.schemaKeyWordFactory.add("oneof", index_1.oneof);
factory_2.schemaTypeFactory.add("array", index_2.array);
factory_2.schemaTypeFactory.add("string", index_2.none);
factory_2.schemaTypeFactory.add("undefined", index_2.none);
factory_2.schemaTypeFactory.add("number", index_2.none);
factory_2.schemaTypeFactory.add("null", index_2.none);
factory_2.schemaTypeFactory.add("any", index_2.none);
factory_2.schemaTypeFactory.add("integer", index_2.none);
factory_2.schemaTypeFactory.add("boolean", index_2.none);
factory_2.schemaTypeFactory.add("object", index_2.object);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ref_1 = __webpack_require__(5);
exports.ref = ref_1.default;
var oneof_1 = __webpack_require__(6);
exports.oneof = oneof_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = __webpack_require__(0);
exports.default = (function (schema, ajv) {
    if (schema && schema.$ref) {
        var validate = ajv.getSchema(schema.$ref);
        if (validate && validate.schema) {
            var schemaAjv = Object.assign({}, validate.schema);
            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;
            Object.assign(schemaAjv, {
                refKeys: resolve_1.default.getDataKeys(schema.$ref)
            });
            return schemaAjv;
        }
        else {
            throw new Error("${schema.$ref} not exist.");
        }
    }
    return schema;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = __webpack_require__(0);
exports.default = (function (schema, ajv) {
    if (!schema) {
        return schema;
    }
    var oneOf = schema.oneOf;
    if (oneOf && oneOf.constructor === Array) {
        schema.oneOf = oneOf.map(function (schemaOfOne) {
            var mergeSchema = new resolve_1.default(ajv, schemaOfOne).mergeSchema;
            return mergeSchema;
        });
    }
    return schema;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __webpack_require__(8);
exports.array = array_1.default;
var object_1 = __webpack_require__(9);
exports.object = object_1.default;
var none_1 = __webpack_require__(10);
exports.none = none_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = __webpack_require__(0);
exports.default = (function (schema, schemaKey, ajv) {
    if (schema.items) {
        var propertySchemaResolve = new resolve_1.default(ajv, schema.items, [schemaKey, "items"].join("/"));
        var keys = resolve_1.default.getDataKeys([schemaKey, "items"].join("/"));
        Object.assign(propertySchemaResolve.mergeSchema, {
            keys: keys
        });
    }
    return schema;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = __webpack_require__(0);
exports.default = (function (schema, schemaKey, ajv) {
    if (schema.properties && !schema.$ref) {
        Object.keys(schema.properties).forEach(function (key) {
            if (["properties", "items"].indexOf(key) >= 0) {
                throw new Error(key + "\u4E3A\u4FDD\u7559\u5173\u952E\u5B57.");
            }
            if (!schema.properties || !schema.properties[key]) {
                return;
            }
            var propertySchemaResolve = new resolve_1.default(ajv, schema.properties[key], [schemaKey, "properties", key].join("/"));
            var keys = resolve_1.default.getDataKeys([schemaKey, "properties", key].join("/"));
            Object.assign(propertySchemaResolve.mergeSchema, {
                keys: keys
            });
        });
    }
    return schema;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __webpack_require__(1);
var resolve_1 = __webpack_require__(0);
exports.default = (function (schema, schemaKey, ajv) {
    var currentSchema = factory_1.convertKeys(schema, ajv);
    var keys = resolve_1.default.getDataKeys(schemaKey);
    var $id = resolve_1.default.getSchemaId(schemaKey);
    if (factory_1.schemaFieldFactory.has(schemaKey)) {
        if (currentSchema) {
            currentSchema.resolve = true;
        }
        return currentSchema || schema;
    }
    factory_1.schemaFieldFactory.add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys: keys,
        schemaPath: schemaKey
    }));
    factory_1.schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);
    return currentSchema || schema;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uischema_1 = __webpack_require__(12);
var factory_1 = __webpack_require__(1);
var resolve_1 = __webpack_require__(0);
var MergeLib = (function () {
    function MergeLib(ajv, schemaPath, parent, uiSchemas) {
        if (parent === void 0) { parent = null; }
        if (uiSchemas === void 0) { uiSchemas = ["*"]; }
        this.schemaPath = schemaPath;
        this.parent = parent;
        this.uiSchemas = uiSchemas;
        if (!ajv.validate(uischema_1.uiSchemaSchema, uiSchemas)) {
            throw ajv.errors;
        }
        var keyPath = resolve_1.default.getDataKeys(schemaPath, true).join("/");
        if (!factory_1.schemaKeysFactory.has(keyPath)) {
            throw new Error(keyPath + " not exist or " + keyPath + " did not resolve yet.");
        }
        this.curSchema = factory_1.schemaFieldFactory.get(factory_1.schemaKeysFactory.get(keyPath));
        if (this.curSchema.$id) {
            this.curSchema.$ref = this.curSchema.$id;
            this.curSchema.$id = undefined;
        }
        this.mergeUiSchemaList = this.mergeUiSchema();
    }
    MergeLib.prototype.getParentSchemaKeys = function () {
        if (this.parent) {
            if (this.parent.keys) {
                return this.parent.keys;
            }
        }
        return [];
    };
    MergeLib.prototype.getUiSchemaKeyRecursion = function (uiSchemaKeys, parentKeys) {
        while (uiSchemaKeys.length) {
            var key = uiSchemaKeys.shift() || "";
            var keys = key ? parentKeys.concat([key]) : parentKeys;
            var keysStr = keys.join("/").replace(/\/$/, "");
            if (!factory_1.schemaKeysFactory.has(keysStr)) {
                console.log(factory_1.schemaKeysFactory);
                throw new Error(keys.join("/") + " did not found. do you forget to resolve schema first.");
            }
            var schema = factory_1.schemaFieldFactory.get(factory_1.schemaKeysFactory.get(keysStr));
            if (schema.$ref) {
                parentKeys = resolve_1.default.getDataKeys(schema.$ref, true);
            }
            else {
                parentKeys = keys;
            }
        }
        return parentKeys.join("/");
    };
    MergeLib.prototype.getCurrentSchemaKey = function (uiSchema) {
        var $id = resolve_1.default.getSchemaId(this.schemaPath);
        var uiSchemaKeys = uiSchema.key.split("/");
        if (this.parent && resolve_1.default.getSchemaId(this.parent.key) === $id) {
            return this.getUiSchemaKeyRecursion(uiSchemaKeys, this.parent.key.split("/"));
        }
        return this.getUiSchemaKeyRecursion(uiSchemaKeys, [$id]);
    };
    MergeLib.prototype.initUiSchema = function (uiSchema) {
        var parentKeys = this.getParentSchemaKeys(), keys;
        keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);
        return Object.assign({}, uiSchema, {
            key: this.getCurrentSchemaKey(uiSchema),
            keys: keys
        });
    };
    MergeLib.prototype.mergeUiSchemaToArray = function (uiSchema) {
        if (!factory_1.schemaKeysFactory.has(uiSchema.key)) {
            throw new Error(uiSchema.key + " did not found. do you forget to resolve schema first.");
        }
        var schemaKey = factory_1.schemaKeysFactory.get(uiSchema.key);
        var schema = factory_1.schemaFieldFactory.get(schemaKey);
        return Object.assign({}, schema, uiSchema);
    };
    MergeLib.prototype.mergeUiSchema = function () {
        var _this = this;
        var idx = this.uiSchemas.indexOf("*");
        var uiSchemasFirst = [], uiSchemasLast = [];
        var curSchema = this.curSchema, types = ["object", "array"];
        if (this.uiSchemas.lastIndexOf("*") !== idx) {
            throw new Error("uiSchema can only has one *.");
        }
        if (idx < 0) {
            this.uiSchemas.slice(idx + 1).map(function (us) {
                var uiSchema = _this.initUiSchema(us.constructor === String ? { key: us } : us);
                uiSchemasFirst.push(_this.mergeUiSchemaToArray(uiSchema));
            });
            return uiSchemasFirst;
        }
        this.uiSchemas.slice(0, idx).forEach(function (us) {
            var uiSchema = _this.initUiSchema(us.constructor === String ? { key: us } : us);
            uiSchemasFirst.push(_this.mergeUiSchemaToArray(uiSchema));
        });
        this.uiSchemas.slice(idx + 1).forEach(function (us) {
            var uiSchema = _this.initUiSchema(us.constructor === String ? { key: us } : us);
            uiSchemasLast.push(_this.mergeUiSchemaToArray(uiSchema));
        });
        if (curSchema.type === types[0] && curSchema.properties) {
            Object.keys(curSchema.properties).forEach(function (us) {
                var uiSchema = _this.initUiSchema({ key: us });
                if (!uiSchemasFirst.concat(uiSchemasLast).filter(function (val) {
                    return val.key === uiSchema.key;
                }).length) {
                    uiSchema = _this.mergeUiSchemaToArray(uiSchema);
                    uiSchemasFirst.push(uiSchema);
                }
            });
        }
        if (curSchema.type === types[1] && curSchema.items) {
            var uiSchema_1 = this.initUiSchema({
                key: resolve_1.default.getDataKeys(curSchema.schemaPath || "").join("/")
            });
            if (!uiSchemasFirst.concat(uiSchemasLast).filter(function (val) {
                return val.key === uiSchema_1.key;
            }).length) {
                uiSchema_1 = this.mergeUiSchemaToArray(uiSchema_1);
                uiSchemasFirst.push(uiSchema_1);
            }
        }
        if (types.indexOf(curSchema.type) < 0) {
            console.log(curSchema, resolve_1.default.getDataKeys(curSchema.schemaPath || "").join("/"));
            var uiSchema_2 = this.initUiSchema({
                key: resolve_1.default.getDataKeys(curSchema.schemaPath || "", false).join("/")
            });
            console.log(uiSchema_2);
            if (!uiSchemasFirst.concat(uiSchemasLast).filter(function (val) {
                return val.key === uiSchema_2.key;
            }).length) {
                uiSchema_2 = this.mergeUiSchemaToArray(uiSchema_2);
                uiSchemasFirst.push(uiSchema_2);
            }
        }
        return uiSchemasFirst.concat(uiSchemasLast);
    };
    return MergeLib;
}());
exports.default = MergeLib;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsonschema_1 = __webpack_require__(13);
var string = "string";
exports.uiSchemaSchema = {
    type: "array",
    items: {
        anyOf: [{
                type: string,
                minLength: jsonschema_1.a
            }, {
                type: "object",
                required: ["key"],
                properties: {
                    key: { type: string }
                }
            }]
    }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.a = 1;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map