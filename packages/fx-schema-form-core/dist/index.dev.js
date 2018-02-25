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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factory__ = __webpack_require__(1);

const regexp = /#$/g;
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
                throw new Error(`id is required.`);
            }
            return;
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
        schema = __WEBPACK_IMPORTED_MODULE_0__factory__["e" /* schemaTypeFactory */].get("undefined")(schema, $id || schema.$id + "#", this.ajv);
        this.mergeSchema = schema;
        if (!schema.type || schema.$ref) {
            return;
        }
        if (schema.type.constructor !== String) {
            if (true) {
                throw new Error(`schema type[${schema.type}] can only be string.`);
            }
            return;
        }
        let type = schema.type.toString();
        if (__WEBPACK_IMPORTED_MODULE_0__factory__["e" /* schemaTypeFactory */].has(type)) {
            this.mergeSchema = __WEBPACK_IMPORTED_MODULE_0__factory__["e" /* schemaTypeFactory */].get(type)(schema, $id || schema.$id + "#", this.ajv);
        }
    }
    static getDataKeys(schemaKey, keepFirst = false) {
        let keys = schemaKey.split("/").map((key, index) => {
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
    }
    static getSchemaId(schemaKey) {
        const keys = schemaKey.split("/");
        if (!keys.length) {
            if (true) {
                throw new Error(`${schemaKey} not a valid schemaPath.`);
            }
            return;
        }
        return keys[0].replace(regexp, "");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ResolveLib;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schemaFieldFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return schemaKeyWordFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return schemaTypeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return schemaKeysFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertKeys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_factory__ = __webpack_require__(2);

let schemaFieldFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
let schemaKeyWordFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
let schemaTypeFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
let schemaKeysFactory = new __WEBPACK_IMPORTED_MODULE_0__libs_factory__["a" /* BaseFactory */]();
let convertKeys = (schema, ajv) => {
    schemaKeyWordFactory.forEach((key, val) => {
        schema = val(schema, ajv);
    });
    return schema;
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BaseFactory {
    constructor() {
        this.i = {};
        this.pi = {};
    }
    add(name, intance, override = false) {
        if (this.pi.hasOwnProperty(name)) {
            return;
        }
        if (!override && this.has(name)) {
            return;
        }
        this.i[name] = intance;
        return true;
    }
    has(name) {
        return this.i.hasOwnProperty(name);
    }
    get(name) {
        if (this.has(name)) {
            return this.i[name];
        }
        if (true) {
            throw new Error(`name=[${name}]not exist`);
        }
    }
    lock(name) {
        if (this.has(name)) {
            this.pi[name] = true;
        }
    }
    unLock(name) {
        if (this.has(name)) {
            delete this.pi[name];
        }
    }
    forEach(func) {
        if (!func) {
            return;
        }
        for (const key in this.i) {
            if (this.i.hasOwnProperty(key)) {
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_factory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_resolve__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveLib", function() { return __WEBPACK_IMPORTED_MODULE_4__libs_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_merge__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MergeLib", function() { return __WEBPACK_IMPORTED_MODULE_5__libs_merge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__libs_factory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaKeysFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaFieldFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaKeyWordFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaTypeFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["e"]; });






__WEBPACK_IMPORTED_MODULE_3__factory__["c" /* schemaKeyWordFactory */].add("ref", __WEBPACK_IMPORTED_MODULE_0__keys_index__["c" /* ref */]);
__WEBPACK_IMPORTED_MODULE_3__factory__["c" /* schemaKeyWordFactory */].add("oneof", __WEBPACK_IMPORTED_MODULE_0__keys_index__["b" /* oneof */]);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__ref__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oneof__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__oneof__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anyof__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__anyof__["a"]; });




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ((schema, ajv) => {
    if (schema && schema.$ref) {
        let validate = ajv.getSchema(schema.$ref);
        if (validate && validate.schema) {
            let schemaAjv = Object.assign({}, validate.schema);
            schemaAjv.$ref = schema.$ref;
            delete schemaAjv.$id;
            Object.assign(schemaAjv, {
                refKeys: __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */].getDataKeys(schema.$ref)
            });
            return schemaAjv;
        } else {
            if (true) {
                throw new Error("${schema.$ref} not exist.");
            }
        }
    }
    return schema;
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ((schema, ajv) => {
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ((schema, ajv) => {
    if (!schema) {
        return schema;
    }
    let anyOf = schema.anyOf;
    if (anyOf && anyOf.constructor === Array) {
        schema.oneOf = anyOf.map(schemaOfOne => {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__none__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__none__["a"]; });




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

const items = "items";
/* harmony default export */ __webpack_exports__["a"] = ((schema, schemaKey, ajv) => {
    if (schema.items) {
        let propertySchemaResolve = new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, schema.items, [schemaKey, items].join("/"));
        const keys = __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */].getDataKeys([schemaKey, items].join("/"));
        Object.assign(propertySchemaResolve.mergeSchema, {
            keys
        });
    }
    return schema;
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_resolve__ = __webpack_require__(0);

const pro = "properties";
/* harmony default export */ __webpack_exports__["a"] = ((schema, schemaKey, ajv) => {
    if (schema.properties && !schema.$ref) {
        Object.keys(schema.properties).forEach(key => {
            if ([pro, "items"].indexOf(key) >= 0) {
                if (true) {
                    throw new Error(`${key}can not be key words.`);
                }
                return;
            }
            if (!schema.properties || !schema.properties[key]) {
                return;
            }
            let propertySchemaResolve = new __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */](ajv, schema.properties[key], [schemaKey, pro, key].join("/"));
            const keys = __WEBPACK_IMPORTED_MODULE_0__libs_resolve__["a" /* default */].getDataKeys([schemaKey, pro, key].join("/"));
            Object.assign(propertySchemaResolve.mergeSchema, {
                keys
            });
        });
    }
    return schema;
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_resolve__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ((schema, schemaKey, ajv) => {
    const currentSchema = Object(__WEBPACK_IMPORTED_MODULE_0__factory__["a" /* convertKeys */])(schema, ajv);
    const keys = __WEBPACK_IMPORTED_MODULE_1__libs_resolve__["a" /* default */].getDataKeys(schemaKey);
    const $id = __WEBPACK_IMPORTED_MODULE_1__libs_resolve__["a" /* default */].getSchemaId(schemaKey);
    if (__WEBPACK_IMPORTED_MODULE_0__factory__["b" /* schemaFieldFactory */].has(schemaKey)) {
        if (currentSchema) {
            currentSchema.resolve = true;
        }
        return currentSchema || schema;
    }
    __WEBPACK_IMPORTED_MODULE_0__factory__["b" /* schemaFieldFactory */].add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    __WEBPACK_IMPORTED_MODULE_0__factory__["d" /* schemaKeysFactory */].add([$id].concat(keys).join("/"), schemaKey);
    return currentSchema || schema;
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_uischema__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve__ = __webpack_require__(0);



const getUiSchemaKeyRecursion = (uiSchemaKeys, parentKeys) => {
    while (uiSchemaKeys.length) {
        let key = uiSchemaKeys.shift() || "";
        let keys = key ? parentKeys.concat([key]) : parentKeys;
        let keysStr = keys.join("/").replace(/\/$/, "");
        if (!__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(keysStr)) {
            if (true) {
                throw new Error(`${keys.join("/")} did not found.`);
            }
            return;
        }
        let schema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(keysStr));
        if (schema.$ref) {
            parentKeys = __WEBPACK_IMPORTED_MODULE_2__resolve__["a" /* default */].getDataKeys(schema.$ref, true);
        } else {
            parentKeys = keys;
        }
    }
    return parentKeys.join("/");
};
const getParentSchemaKeys = parent => {
    if (parent) {
        if (parent.keys) {
            return parent.keys;
        }
    }
    return [];
};
const getCurrentSchemaKey = (parent, schemaPath, uiSchema) => {
    const $id = __WEBPACK_IMPORTED_MODULE_2__resolve__["a" /* default */].getSchemaId(schemaPath);
    let uiSchemaKeys = uiSchema.key.split("/");
    if (parent && __WEBPACK_IMPORTED_MODULE_2__resolve__["a" /* default */].getSchemaId(parent.key) === $id) {
        return getUiSchemaKeyRecursion(uiSchemaKeys, parent.key.split("/"));
    }
    return getUiSchemaKeyRecursion(uiSchemaKeys, [$id]);
};
const mergeUiSchemaToArray = uiSchema => {
    if (!__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(uiSchema.key)) {
        if (true) {
            throw new Error(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        }
        return;
    }
    let schemaKey = __WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(uiSchema.key);
    let schema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(schemaKey);
    return Object.assign({}, schema, uiSchema);
};
const initUiSchema = (parent, schemaPath, uiSchema) => {
    let parentKeys = getParentSchemaKeys(parent),
        keys;
    keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);
    return Object.assign({}, uiSchema, {
        key: getCurrentSchemaKey(parent, schemaPath, uiSchema),
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
            throw new Error("uiSchema can only has one *.");
        }
        return;
    }
    if (idx < 0) {
        uiSchemas.slice(idx + 1).map(us => {
            let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
            uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
        });
        return uiSchemasFirst;
    }
    uiSchemas.slice(0, idx).forEach(us => {
        let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });
    uiSchemas.slice(idx + 1).forEach(us => {
        let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } : us);
        uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
    });
    if (curSchema.type === types[0] && curSchema.properties) {
        Object.keys(curSchema.properties).forEach(us => {
            let uiSchema = initUiSchema(parent, schemaPath, { key: us });
            pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
        });
    }
    if (curSchema.type === types[1] && curSchema.items) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: __WEBPACK_IMPORTED_MODULE_2__resolve__["a" /* default */].getDataKeys(curSchema.schemaPath || "").join("/")
        });
        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }
    if (types.indexOf(curSchema.type) < 0) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: __WEBPACK_IMPORTED_MODULE_2__resolve__["a" /* default */].getDataKeys(curSchema.schemaPath || "", false).join("/")
        });
        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }
    return uiSchemasFirst.concat(uiSchemasLast);
};
class MergeLib {
    constructor(ajv, schemaPath, parent, uiSchemas) {
        uiSchemas = uiSchemas || ["*"];
        if (!ajv.validate(__WEBPACK_IMPORTED_MODULE_0__models_uischema__["a" /* uiSchemaSchema */], uiSchemas)) {
            throw ajv.errors;
        }
        let keyPath = __WEBPACK_IMPORTED_MODULE_2__resolve__["a" /* default */].getDataKeys(schemaPath, true).join("/");
        if (!__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].has(keyPath)) {
            if (true) {
                throw new Error(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
            }
            return;
        }
        const curSchema = __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* schemaFieldFactory */].get(__WEBPACK_IMPORTED_MODULE_1__factory__["d" /* schemaKeysFactory */].get(keyPath));
        if (curSchema.$id) {
            curSchema.$ref = curSchema.$id;
            curSchema.$id = undefined;
            delete curSchema.$id;
        }
        this.mergeUiSchemaList = initMergeSchema(parent || null, schemaPath, uiSchemas, curSchema);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MergeLib;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonschema__ = __webpack_require__(14);

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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const a = 1;
/* harmony export (immutable) */ __webpack_exports__["a"] = a;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.dev.js.map