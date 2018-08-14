(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SFC"] = factory();
	else
		root["SFC"] = factory();
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);


const getDataKeys = (schemaKey, keepFirst = false) => {
    let keys = schemaKey.split("/").map((key, index) => {
        const regexp = /#$/g;
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
    return keys.filter(key => {
        return key !== null;
    });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getDataKeys;

const getSchemaId = schemaKey => {
    const keys = schemaKey.split("/");
    const regexp = /#$/g;
    if (!keys.length) {
        if (true) {
            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* warn */])(`${schemaKey} not a valid schemaPath.`);
        }
        return "";
    }
    return keys[0].replace(regexp, "");
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getSchemaId;

class ResolveLib {
    constructor(ajv, schema, $id = "") {
        this.ajv = ajv;
        this.$id = $id;
        this.mergeSchema = {};
        if (!$id) {
            this.initSchema(ajv, schema);
        }
        this.compileSchema(schema, $id || schema.$ref || "");
    }
    initSchema(ajv, schema) {
        let $id = schema.$id;
        if (!$id && !schema.$ref) {
            if (true) {
                console.log(schema);
                Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* warn */])("id is required");
            }
            return schema;
        }
        if (!ajv.validateSchema(schema)) {
            throw ajv.errors;
        }
        if ($id && !ajv.getSchema($id)) {
            ajv.addSchema(schema);
        }
        return schema;
    }
    compileSchema(schema, $id) {
        schema = __WEBPACK_IMPORTED_MODULE_0__factory__["e" /* schemaTypeFactory */].get("undefined")(schema, $id || (schema.$id || "") + "#", this.ajv);
        this.mergeSchema = schema;
        if (!schema.type || schema.$ref) {
            return;
        }
        if (schema.type.constructor !== String) {
            if (true) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* warn */])(`schema type[${schema.type}] can only be string.`);
            }
            return;
        }
        let type = schema.type.toString();
        if (__WEBPACK_IMPORTED_MODULE_0__factory__["e" /* schemaTypeFactory */].has(type)) {
            this.mergeSchema = __WEBPACK_IMPORTED_MODULE_0__factory__["e" /* schemaTypeFactory */].get(type)(schema, $id || (schema.$id || "") + "#", this.ajv);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ResolveLib;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const warn = message => {
    console.error(message);
    throw new Error(message);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = warn;

const hasOwnProperty = Object.prototype.hasOwnProperty;
/* harmony export (immutable) */ __webpack_exports__["a"] = hasOwnProperty;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_factory__ = __webpack_require__(3);

const schemaFieldFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
/* harmony export (immutable) */ __webpack_exports__["b"] = schemaFieldFactory;

const schemaKeyWordFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
/* harmony export (immutable) */ __webpack_exports__["c"] = schemaKeyWordFactory;

const schemaTypeFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
/* harmony export (immutable) */ __webpack_exports__["e"] = schemaTypeFactory;

const schemaKeysFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
/* harmony export (immutable) */ __webpack_exports__["d"] = schemaKeysFactory;

const convertKeys = ($id, schema, ajv) => {
    schemaKeyWordFactory.forEach((key, val) => {
        schema = val($id, schema, ajv);
    });
    return schema;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = convertKeys;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);

class BaseFactory {
    constructor() {
        this.i = {};
        this.pi = {};
    }
    add(name, intance, override = false) {
        if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* hasOwnProperty */].call(this.pi, name) || !override && this.has(name)) {
            return false;
        }
        this.i[name] = intance;
        return true;
    }
    has(key) {
        return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* hasOwnProperty */].call(this.i, key);
    }
    get(key) {
        if (this.has(key)) {
            return this.i[key];
        }
        return null;
    }
    lock(key) {
        if (this.has(key)) {
            this.pi[key] = true;
        }
    }
    unLock(key) {
        if (this.has(key)) {
            delete this.pi[key];
        }
    }
    forEach(func) {
        if (!func) {
            return;
        }
        for (const key in this.i) {
            if (this.has(key)) {
                const element = this.i[key];
                if (func(key, element) === false) {
                    break;
                }
            }
        }
    }
    clear() {
        this.i = {};
        this.pi = {};
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseFactory;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_factory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_resolve__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveLib", function() { return __WEBPACK_IMPORTED_MODULE_4__libs_resolve__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaId", function() { return __WEBPACK_IMPORTED_MODULE_4__libs_resolve__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDataKeys", function() { return __WEBPACK_IMPORTED_MODULE_4__libs_resolve__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_merge__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeLib", function() { return __WEBPACK_IMPORTED_MODULE_5__libs_merge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__libs_factory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaKeysFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaFieldFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaKeyWordFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaTypeFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["e"]; });






__WEBPACK_IMPORTED_MODULE_3__factory__["c" /* schemaKeyWordFactory */].add("definitions", __WEBPACK_IMPORTED_MODULE_0__keys_index__["b" /* definitions */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["c" /* schemaKeyWordFactory */].add("ref", __WEBPACK_IMPORTED_MODULE_0__keys_index__["d" /* ref */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["c" /* schemaKeyWordFactory */].add("oneof", __WEBPACK_IMPORTED_MODULE_0__keys_index__["c" /* oneof */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["c" /* schemaKeyWordFactory */].add("anyof", __WEBPACK_IMPORTED_MODULE_0__keys_index__["a" /* anyof */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("array", __WEBPACK_IMPORTED_MODULE_1__types_index__["a" /* array */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("string", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("undefined", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("number", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("null", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("any", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("integer", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("boolean", __WEBPACK_IMPORTED_MODULE_1__types_index__["b" /* none */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["e" /* schemaTypeFactory */].add("object", __WEBPACK_IMPORTED_MODULE_1__types_index__["c" /* object */]);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__ref__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oneof__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__oneof__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anyof__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__anyof__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defined__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__defined__["a"]; });





/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (($id, schema, ajv) => {
    if (schema && schema.$ref) {
        const schemaId = Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["c" /* getSchemaId */])(schema.$ref);
        if (schema.$id) {
            schema.$ref = schema.$id + schema.$ref;
        } else if (!schemaId) {
            schema.$ref = Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["c" /* getSchemaId */])($id) + schema.$ref;
        }
        const validate = ajv.getSchema(schema.$ref);
        if (validate && validate.schema) {
            let schemaAjv = Object.assign({}, validate.schema);
            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;
            Object.assign(schemaAjv, {
                refKeys: Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["b" /* getDataKeys */])(schema.$ref)
            });
            return schemaAjv;
        }
        if (true) {
            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* warn */])(`${schema.$ref} not exist.`);
        }
    }
    return schema;
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (($id, schema, ajv) => {
    if (!schema) {
        return schema;
    }
    let oneOf = schema.oneOf;
    if (oneOf && oneOf.constructor === Array) {
        schema.oneOf = oneOf.map(schemaOfOne => {
            let { mergeSchema } = new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, schemaOfOne);
            return mergeSchema;
        });
    }
    return schema;
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (($id, schema, ajv) => {
    if (!schema) {
        return schema;
    }
    let anyOf = schema.anyOf;
    if (anyOf && anyOf.constructor === Array) {
        schema.anyOf = anyOf.map((schemaOfOne, index) => {
            let { mergeSchema } = new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, schemaOfOne, schema.$id || Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["c" /* getSchemaId */])(schema.$ref || "") ? undefined : Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["c" /* getSchemaId */])($id));
            return mergeSchema;
        });
    }
    return schema;
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (($id, schema, ajv) => {
    if (!schema) {
        return schema;
    }
    const definitions = schema.definitions;
    if (definitions) {
        for (const key in definitions) {
            if (definitions.hasOwnProperty(key)) {
                const element = definitions[key];
                if (element !== false && element !== true) {
                    new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, element, `${schema.$id}#/definitions/${key}`);
                }
            }
        }
    }
    return schema;
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__none__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__none__["a"]; });




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

const itemsName = "items";
/* harmony default export */ __webpack_exports__["a"] = ((schema, schemaKey, ajv) => {
    let { items } = schema;
    if (items) {
        const propertySchemaResolve = new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, items, [schemaKey, itemsName].join("/")),
              keys = Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["b" /* getDataKeys */])([schemaKey, itemsName].join("/"));
        Object.assign(propertySchemaResolve.mergeSchema, {
            keys
        });
    }
    return schema;
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);


const pro = "properties";
/* harmony default export */ __webpack_exports__["a"] = ((schema, schemaKey, ajv) => {
    const { properties, required = [], $ref } = schema;
    if (properties && !$ref) {
        Object.keys(properties).forEach(key => {
            if ([pro, "items"].indexOf(key) >= 0) {
                if (true) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* warn */])(`${key}can not be key words.`);
                }
                return;
            }
            if (!properties || !properties[key]) {
                return;
            }
            Object.assign(properties[key], {
                isRequired: required.indexOf(key) >= 0
            });
            const propertySchemaResolve = new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, properties[key], [schemaKey, pro, key].join("/")),
                  keys = Object(__WEBPACK_IMPORTED_MODULE_0__libs_resolve__["b" /* getDataKeys */])([schemaKey, pro, key].join("/"));
            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }
    return schema;
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_resolve__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ((schema, schemaKey, ajv) => {
    let keys = Object(__WEBPACK_IMPORTED_MODULE_1__libs_resolve__["b" /* getDataKeys */])(schemaKey, false),
        $id = Object(__WEBPACK_IMPORTED_MODULE_1__libs_resolve__["c" /* getSchemaId */])(schemaKey),
        currentSchema = Object(__WEBPACK_IMPORTED_MODULE_0__factory__["a" /* convertKeys */])(schemaKey, schema, ajv);
    if (__WEBPACK_IMPORTED_MODULE_0__factory__["b" /* schemaFieldFactory */].has(schemaKey)) {
        return currentSchema || schema;
    }
    if (!$id) {
        $id = schema.$id || "";
    }
    if (schema.$id && schema.$ref) {
        __WEBPACK_IMPORTED_MODULE_0__factory__["d" /* schemaKeysFactory */].add(schema.$id, schema.$ref);
    }
    __WEBPACK_IMPORTED_MODULE_0__factory__["b" /* schemaFieldFactory */].add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    __WEBPACK_IMPORTED_MODULE_0__factory__["d" /* schemaKeysFactory */].add([$id].concat(keys).join("/"), schemaKey);
    return currentSchema || schema;
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_uischema__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);




const getUiSchemaKeyRecursion = (uiSchemaKeys, parentSchemaPath) => {
    let parentKeysWithDef = Object(__WEBPACK_IMPORTED_MODULE_2__resolve__["b" /* getDataKeys */])(parentSchemaPath, true);
    while (uiSchemaKeys.length) {
        const key = uiSchemaKeys.shift() || "";
        parentKeysWithDef = parentKeysWithDef.concat(key ? [key] : []);
        const keysStr = parentKeysWithDef.join("/").replace(/\/$/, "");
        if (!__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(keysStr)) {
            if (true) {
                Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* warn */])(`${keysStr} did not found.`);
            }
            return "";
        }
        const schema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(keysStr));
        if (schema.$ref) {
            parentKeysWithDef = Object(__WEBPACK_IMPORTED_MODULE_2__resolve__["b" /* getDataKeys */])(schema.$ref, true);
        } else {
            parentKeysWithDef = parentKeysWithDef;
        }
    }
    return parentKeysWithDef.join("/");
};
const getParentSchemaKeys = parent => {
    if (parent && parent.keys) {
        return parent.keys;
    }
    return [];
};
const getCurrentSchemaKey = (parent, schemaPath, uiSchema) => {
    const $id = Object(__WEBPACK_IMPORTED_MODULE_2__resolve__["c" /* getSchemaId */])(schemaPath);
    let uiSchemaKeys = uiSchema.key.split("/");
    if (parent && Object(__WEBPACK_IMPORTED_MODULE_2__resolve__["c" /* getSchemaId */])(parent.key) === $id) {
        return getUiSchemaKeyRecursion(uiSchemaKeys, parent.schemaPath || "");
    }
    return getUiSchemaKeyRecursion(uiSchemaKeys, schemaPath);
};
const mergeUiSchemaToArray = uiSchema => {
    if (!__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(uiSchema.key)) {
        if (true) {
            console.log(__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */]);
            Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* warn */])(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        }
        return uiSchema;
    }
    let schemaKey = __WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(uiSchema.key);
    let schema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(schemaKey);
    return Object.assign({}, schema, uiSchema);
};
const initUiSchema = (parent, schemaPath, uiSchema) => {
    let parentKeys = getParentSchemaKeys(parent),
        key = getCurrentSchemaKey(parent, schemaPath, uiSchema),
        keys,
        isRequired = false,
        originSchema = {},
        schemaKey;
    keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);
    if (__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(key)) {
        schemaKey = __WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(key);
        if (__WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].has(schemaKey)) {
            originSchema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(schemaKey);
        }
    }
    return Object.assign({ isRequired }, originSchema, uiSchema, {
        key,
        keys
    });
};
const pushMergeResult = (uiSchemasFirst, uiSchemasLast, uiSchema) => {
    if (!uiSchemasFirst.concat(uiSchemasLast).filter(val => {
        return val.key === uiSchema.key;
    }).length) {
        uiSchema = mergeUiSchemaToArray(uiSchema);
        uiSchemasFirst.push(uiSchema);
    }
};
const initMergeSchema = (parent, schemaPath, uiSchemas, curSchema) => {
    let idx = uiSchemas.indexOf("*"),
        uiSchemasFirst = [],
        uiSchemasLast = [],
        types = ["object", "array"];
    if (uiSchemas.lastIndexOf("*") !== idx) {
        if (true) {
            Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* warn */])("uiSchema can only has one *.");
        }
        return [];
    }
    if (idx < 0) {
        uiSchemas.slice(idx + 1).map(us => {
            let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
            uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
        });
        return uiSchemasFirst;
    }
    uiSchemas.slice(0, idx).forEach(us => {
        let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });
    uiSchemas.slice(idx + 1).forEach(us => {
        let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
    });
    if (curSchema.type === types[0] && curSchema.properties) {
        Object.keys(curSchema.properties).forEach(us => {
            const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
                key: us,
                isRequired: curSchema.required ? curSchema.required.indexOf(us) >= 0 : false
            });
            pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
        });
    }
    if (curSchema.type === types[1] && curSchema.items) {
        const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
            key: "-"
        });
        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }
    if (types.indexOf(curSchema.type) < 0) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: Object(__WEBPACK_IMPORTED_MODULE_2__resolve__["b" /* getDataKeys */])(curSchema.schemaPath || "", false).join("/")
        });
        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }
    return uiSchemasFirst.concat(uiSchemasLast);
};
class MergeLib {
    constructor(ajv, schemaPath, parent, uiSchemas) {
        this.mergeUiSchemaList = [];
        uiSchemas = uiSchemas || ["*"];
        if (!ajv.validate(__WEBPACK_IMPORTED_MODULE_0__models_uischema__["a" /* uiSchemaSchema */], uiSchemas)) {
            throw ajv.errors;
        }
        let keyPath = Object(__WEBPACK_IMPORTED_MODULE_2__resolve__["b" /* getDataKeys */])(schemaPath, true).join("/");
        if (!__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(keyPath)) {
            if (true) {
                Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* warn */])(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
            }
            return;
        }
        const curSchema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(keyPath));
        if (curSchema.$id) {
            if (!curSchema.$ref) {
                curSchema.$ref = curSchema.$id;
            }
            curSchema.$id = undefined;
            delete curSchema.$id;
        }
        this.mergeUiSchemaList = initMergeSchema(parent, schemaPath, uiSchemas, curSchema);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MergeLib;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonschema__ = __webpack_require__(16);

let string = "string";
const uiSchemaSchema = {
    type: "array",
    items: {
        anyOf: [{
            type: string,
            minLength: __WEBPACK_IMPORTED_MODULE_0__jsonschema__["a"]
        }, {
            type: "object",
            required: ["key"],
            properties: {
                key: { type: string }
            }
        }]
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = uiSchemaSchema;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const a = 1;
/* harmony export (immutable) */ __webpack_exports__["a"] = a;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.dev.js.map