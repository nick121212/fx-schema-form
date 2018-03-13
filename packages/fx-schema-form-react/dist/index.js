(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("reselect"), require("redux-act"), require("redux"), require("prop-types"), require("ajv"));
	else if(typeof define === 'function' && define.amd)
		define("SFR", ["react", "recompose", "immutable", "fx-schema-form-core", "react-redux", "resolve-pathname", "reselect", "redux-act", "redux", "prop-typese", "ajv"], factory);
	else if(typeof exports === 'object')
		exports["SFR"] = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("reselect"), require("redux-act"), require("redux"), require("prop-types"), require("ajv"));
	else
		root["SFR"] = factory(root["React"], root["recompose"], root["Immutable"], root["SFC"], root["react-redux"], root["resolve-pathname"], root["reselect"], root["redux-act"], root["Redux"], root["prop-types"], root["Ajv"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_45__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["d"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["b"] = __decorate;
/* unused harmony export __param */
/* harmony export (immutable) */ __webpack_exports__["c"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["a"] = __awaiter;
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaFormTypes; });
var schemaFormTypes = {
    hoc: "hoc",
    widget: "widget",
    template: "temp",
    field: "field"
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hocFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hocs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(28);



var reducerFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
var hocFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
var themeFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
__WEBPACK_IMPORTED_MODULE_1__hocs__["a" /* hocs */].forEach(function (hoc) {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});
reducerFactory.add("schemaForm", __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* schemaFormReducer */]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });


__WEBPACK_IMPORTED_MODULE_0__component__["a" /* SchemaForm */].propTypes = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default_props__["a" /* DefaultPropsTypeCheck */]);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeMap; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeMap = function () {
    function TreeMap(key, value, parent) {
        _classCallCheck(this, TreeMap);

        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    TreeMap.prototype.addChild = function addChild(keys, value) {
        var curNode = this;
        var child = null;
        if (!keys.length) {
            return this;
        }
        keys = [].concat(keys);
        while (keys.length) {
            var key = keys.shift();
            var isNumber = key.constructor === Number;
            child = curNode.contains(key);
            if (!child) {
                if (isNumber) {
                    child = new TreeMap("-", null, curNode);
                    curNode.children[key] = child;
                } else {
                    child = new TreeMap(key.toString(), null, curNode);
                    curNode.children.push(child);
                }
            }
            curNode = child;
        }
        if (child) {
            child.value = value;
        }
        return child;
    };

    TreeMap.prototype.getKey = function getKey() {
        if (!this.key || this.key === "-") {
            return this.getIndexInParent().toString();
        }
        return this.key;
    };

    TreeMap.prototype.getCurrentKeys = function getCurrentKeys() {
        var keys = [];
        if (this.parent) {
            keys = keys.concat(this.parent.getCurrentKeys());
        }
        return keys.concat([this.key]);
    };

    TreeMap.prototype.getIndexInParent = function getIndexInParent() {
        if (this.parent) {
            var children = this.parent.children;
            for (var i = 0, n = children.length; i < n; i++) {
                var child = children[i];
                if (child && child === this) {
                    return i;
                }
            }
        }
        return -1;
    };

    TreeMap.prototype.contains = function contains(key) {
        var isNumber = key.constructor === Number;
        if (isNumber) {
            if (this.children.length > key) {
                var child = this.children[key];
                if (!child) {
                    this.children[key] = new TreeMap("-", null, this);
                    child = this.children[key];
                }
                return child;
            }
            return null;
        }
        if (this.getKey() === key) {
            return this;
        }
        if (!this.children || this.children.length === 0) {
            return null;
        }
        for (var i = 0; i < this.children.length; i++) {
            var _child = this.children[i];
            if (_child && _child.contains(key)) {
                return _child;
            }
        }
        return null;
    };

    TreeMap.prototype.containPath = function containPath(keys) {
        var node = this;
        keys.forEach(function (key) {
            if (!node) {
                return null;
            }
            node = node.contains(key);
            if (!node) {
                return null;
            }
        });
        return node;
    };

    TreeMap.prototype.removeFromParent = function removeFromParent() {
        var index = this.getIndexInParent();
        if (this.parent) {
            this.parent.children.splice(index, 1);
        }
    };

    TreeMap.prototype.insertToFromParent = function insertToFromParent(toIndex) {
        var curIndex = this.getIndexInParent();
        var offset = toIndex > curIndex && false ? 1 : 0;
        var splitIndex = toIndex;
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }
        if (this.parent.children.length <= toIndex) {
            this.parent.addChild([toIndex]);
        }
        this.removeFromParent();
        this.parent.children = this.parent.children.concat([]).splice(0, splitIndex - offset).concat([this]).concat(this.parent.children.splice(splitIndex - offset));
    };

    TreeMap.prototype.forEach = function forEach(clearFunc) {
        var currentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (currentNode) {
            this.value = clearFunc(this);
        }
        if (!this.children) {
            return;
        }
        for (var i = 0, n = this.children.length; i < n; i++) {
            if (this.children[i]) {
                this.children[i].value = clearFunc(this.children[i]);
                this.children[i].forEach(clearFunc);
            }
        }
    };

    return TreeMap;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPropsTypeCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var DefaultPropsTypeCheck = {
    schemaId: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
    uiSchema: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
    parentKeys: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array.isRequired,
    globalOptions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
    ajv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
    arrayIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    arrayLevel: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array,
    formItemData: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
    formItemMeta: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
    ArrayItemComponent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_tree__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_dec__ = __webpack_require__(44);







var defaultTheme = {
    tempFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"](),
    fieldFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"](),
    widgetFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]()
};
__WEBPACK_IMPORTED_MODULE_4__fields__["a" /* default */].forEach(function (field) {
    for (var key in field) {
        if (field.hasOwnProperty(key)) {
            defaultTheme.fieldFactory.add(key, field[key]);
        }
    }
});
__WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */].add("default", defaultTheme);
__WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].add("schemaFormDec", __WEBPACK_IMPORTED_MODULE_6__libs_dec__["a" /* default */].bind(__WEBPACK_IMPORTED_MODULE_6__libs_dec__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */]));
/* harmony default export */ __webpack_exports__["default"] = ({
    themeFactory: __WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */],
    defaultTheme: defaultTheme,
    schemaFormDec: __WEBPACK_IMPORTED_MODULE_6__libs_dec__["a" /* default */],
    TreeMap: __WEBPACK_IMPORTED_MODULE_5__libs_tree__["a" /* TreeMap */],
    reducerFactory: __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* reducerFactory */],
    SchemaForm: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* SchemaForm */],
    hocFactory: __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */],
    schemaFormTypes: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* schemaFormTypes */]
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hocs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__merge__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__make__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__temp__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data__ = __webpack_require__(26);









var hocs = [__WEBPACK_IMPORTED_MODULE_0__merge__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__field__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__array__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__validate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__make__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__temp__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__data__["a" /* default */]];

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var name = "merge";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return function (Component) {
            var MergeComponentHoc = function (_PureComponent) {
                _inherits(MergeComponentHoc, _PureComponent);

                function MergeComponentHoc(props) {
                    _classCallCheck(this, MergeComponentHoc);

                    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

                    var uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : undefined;
                    if (uiSchema) {
                        uiSchema.keys = uiSchema.originKeys;
                    }
                    var merge = new __WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core__["MergeLib"](props.ajv, props.schemaId, uiSchema, props.uiSchemas);
                    _this._mergeUiSchemaList = merge.mergeUiSchemaList.map(function (v) {
                        return _this.mergeKeys(v);
                    });
                    return _this;
                }

                MergeComponentHoc.prototype.mergeKeys = function mergeKeys(mergeSchema) {
                    var _props$arrayLevel = this.props.arrayLevel,
                        arrayLevel = _props$arrayLevel === undefined ? [] : _props$arrayLevel;

                    var arrayLevelCopy = arrayLevel.concat([]);
                    mergeSchema = Object.assign({}, mergeSchema);
                    mergeSchema.originKeys = [].concat(mergeSchema.keys);
                    mergeSchema.keys = mergeSchema.keys.reverse().map(function (key) {
                        if (key === "-") {
                            return arrayLevelCopy.pop();
                        }
                        return key;
                    });
                    mergeSchema.keys.reverse();
                    return mergeSchema;
                };

                MergeComponentHoc.prototype.render = function render() {
                    var _a = this.props,
                        uiSchemas = _a.uiSchemas,
                        uiSchema = _a.uiSchema,
                        extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["uiSchemas", "uiSchema"]);
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps));
                };

                return MergeComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);

            return MergeComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fx_schema_form_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_resolve_pathname__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_resolve_pathname___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_resolve_pathname__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_index__ = __webpack_require__(3);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var name = "utils";
var hoc = function hoc(hocFactory) {
    return function () {
        return function (Component) {
            var ComponentHoc = function (_PureComponent) {
                _inherits(ComponentHoc, _PureComponent);

                function ComponentHoc() {
                    _classCallCheck(this, ComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                ComponentHoc.prototype.render = function render() {
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, Object.assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions, normalizeDataPath: this.normalizeDataPath, getRequiredKeys: this.getRequiredKeys, getDefaultData: this.getDefaultData }, this.props));
                };

                ComponentHoc.prototype.getRequiredKeys = function getRequiredKeys(props) {
                    var includeKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    var excludeKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

                    var extraProps = {};
                    if (includeKeys && includeKeys.constructor === Array && includeKeys.length) {
                        includeKeys.forEach(function (key) {
                            if (props.hasOwnProperty(key)) {
                                extraProps[key] = props[key];
                            }
                        });
                    } else {
                        extraProps = Object.assign({}, props);
                    }
                    if (excludeKeys && excludeKeys.constructor === Array && excludeKeys.length) {
                        excludeKeys.forEach(function (key) {
                            if (extraProps.hasOwnProperty(key)) {
                                delete extraProps[key];
                            }
                        });
                    }
                    return extraProps;
                };

                ComponentHoc.prototype.normalizeDataPath = function normalizeDataPath(schemaId, dataPath) {
                    var dataKeys = dataPath.replace(/^\//g, "").split("/");
                    dataKeys = dataKeys.map(function (key, index) {
                        if (Number.isInteger(+key)) {
                            var keys = dataKeys.slice(0, index);
                            keys.unshift(schemaId);
                            if (__WEBPACK_IMPORTED_MODULE_3_fx_schema_form_core__["schemaKeysFactory"].has(keys.join("/"))) {
                                var schema = __WEBPACK_IMPORTED_MODULE_3_fx_schema_form_core__["schemaFieldFactory"].get(__WEBPACK_IMPORTED_MODULE_3_fx_schema_form_core__["schemaKeysFactory"].get(keys.join("/")));
                                if (schema.type === "array") {
                                    return +key;
                                }
                            }
                        }
                        return key;
                    });
                    return dataKeys;
                };

                ComponentHoc.prototype.getOptions = function getOptions(props, category, field) {
                    var _props$uiSchema = props.uiSchema,
                        uiSchema = _props$uiSchema === undefined ? {} : _props$uiSchema,
                        globalOptions = props.globalOptions;

                    var options = uiSchema.options,
                        _uiSchema$type = uiSchema.type,
                        type = _uiSchema$type === undefined ? "" : _uiSchema$type,
                        optionsArray = [],
                        getOptions = function getOptions(o, ks) {
                        if (o) {
                            if (!__WEBPACK_IMPORTED_MODULE_4_immutable___default.a.Map.isMap(o)) {
                                o = __WEBPACK_IMPORTED_MODULE_4_immutable___default.a.fromJS(o);
                            }
                            if (o.hasIn(ks)) {
                                optionsArray.push(o.getIn(ks));
                            }
                        }
                    };

                    getOptions(globalOptions, [category, "default"]);
                    getOptions(globalOptions, [category, field]);
                    getOptions(globalOptions, [__WEBPACK_IMPORTED_MODULE_6__models_index__["a" /* schemaFormTypes */].field, type.toString(), "options", category, field]);
                    getOptions(options, [category, field]);

                    for (var _len = arguments.length, extraSettings = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                        extraSettings[_key - 3] = arguments[_key];
                    }

                    optionsArray = optionsArray.concat(extraSettings);
                    var opts = optionsArray.reverse().reduce(function (prev, next) {
                        if (next) {
                            if (!__WEBPACK_IMPORTED_MODULE_4_immutable___default.a.Map.isMap(next)) {
                                next = __WEBPACK_IMPORTED_MODULE_4_immutable___default.a.fromJS(next);
                            }
                            return next.merge(prev);
                        }
                        return prev;
                    }, __WEBPACK_IMPORTED_MODULE_4_immutable___default.a.fromJS({})).toJS();
                    return opts;
                };

                ComponentHoc.prototype.getTitle = function getTitle(props) {
                    var uiSchema = props.uiSchema;
                    var title = uiSchema.title,
                        keys = uiSchema.keys;

                    for (var _len2 = arguments.length, extraSettings = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        extraSettings[_key2 - 1] = arguments[_key2];
                    }

                    if (!title && extraSettings && extraSettings.length) {
                        extraSettings.forEach(function (sets) {
                            if (sets && !title && sets.get("title")) {
                                title = sets.get("title");
                            }
                        });
                    }
                    if (title !== undefined) {
                        return title;
                    }
                    if (keys && keys.length) {
                        var keysCopy = [].concat(keys),
                            keyTitle = keysCopy.pop();
                        return keyTitle !== undefined ? keyTitle.toString() : "";
                    }
                    if (props.arrayIndex) {
                        return props.arrayIndex.toString();
                    }
                    return "";
                };

                ComponentHoc.prototype.getPathKeys = function getPathKeys(keys, path) {
                    var keysCopy = [""].concat(keys.concat([""]));
                    var keysResolve = __WEBPACK_IMPORTED_MODULE_5_resolve_pathname___default()(path, keysCopy.join("/")).split("/");
                    keysResolve.shift();
                    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                        keysResolve.pop();
                    }
                    return keysResolve;
                };

                ComponentHoc.prototype.getDefaultData = function getDefaultData(ajv, schema, data) {
                    var merge = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                    return __WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __awaiter */](this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                        var itemSchema, defaultValue, type, mergeData;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        itemSchema = {}, defaultValue = {}, type = schema.type, mergeData = function mergeData(dataOfType) {
                                            if (!merge) {
                                                return defaultValue.defaultData;
                                            }
                                            if (type === "object") {
                                                return __WEBPACK_IMPORTED_MODULE_4_immutable___default.a.fromJS({}).merge(defaultValue.defaultData).merge(dataOfType).toJS();
                                            }
                                            return __WEBPACK_IMPORTED_MODULE_4_immutable___default.a.fromJS([]).merge(defaultValue.defaultData).merge(dataOfType).toJS();
                                        };
                                        _context.prev = 1;
                                        _context.next = 4;
                                        return ajv.validate({
                                            type: "object",
                                            properties: {
                                                defaultData: schema
                                            }
                                        }, defaultValue);

                                    case 4:
                                        _context.next = 10;
                                        break;

                                    case 6:
                                        _context.prev = 6;
                                        _context.t0 = _context["catch"](1);

                                        console.log(_context.t0);
                                        return _context.abrupt("return", data);

                                    case 10:
                                        _context.prev = 10;
                                        _context.t1 = type;
                                        _context.next = _context.t1 === "object" ? 14 : _context.t1 === "array" ? 17 : 20;
                                        break;

                                    case 14:
                                        if (!defaultValue.defaultData) {
                                            defaultValue.defaultData = data || {};
                                        }
                                        defaultValue.defaultData = mergeData(data || {});
                                        return _context.abrupt("break", 21);

                                    case 17:
                                        if (!defaultValue.defaultData) {
                                            defaultValue.defaultData = data || [];
                                        }
                                        defaultValue.defaultData = mergeData(data || []);
                                        return _context.abrupt("break", 21);

                                    case 20:
                                        defaultValue.defaultData = data || defaultValue.defaultData;

                                    case 21:
                                        return _context.finish(10);

                                    case 22:
                                        return _context.abrupt("return", defaultValue.defaultData);

                                    case 23:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[1, 6, 10, 22]]);
                    }));
                };

                return ComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);

            return ComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(18);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var name = "theme";
var hoc = function hoc(hocFactory) {
    return function () {
        return function (Component) {
            var defualtKey = "default";

            var ThemeComponentHoc = function (_PureComponent) {
                _inherits(ThemeComponentHoc, _PureComponent);

                function ThemeComponentHoc() {
                    _classCallCheck(this, ThemeComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                ThemeComponentHoc.prototype.render = function render() {
                    var theme = this.props.uiSchema.theme;

                    var nsFactory = void 0;
                    if (__WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */].has(theme || defualtKey)) {
                        nsFactory = __WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */].get(theme || defualtKey);
                    } else {
                        throw new Error("\u6CA1\u6709\u627E\u5230" + (theme || defualtKey) + "\u7684\u6837\u5F0F\uFF01");
                    }
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({ currentTheme: nsFactory }, this.props));
                };

                return ThemeComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

            return ThemeComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var name = "field";
var hoc = function hoc(hocFactory) {
    return function () {
        return function (Component) {
            var defaultKey = "default";

            var FieldComponentHoc = function (_PureComponent) {
                _inherits(FieldComponentHoc, _PureComponent);

                function FieldComponentHoc() {
                    _classCallCheck(this, FieldComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                FieldComponentHoc.prototype.render = function render() {
                    var _props = this.props,
                        currentTheme = _props.currentTheme,
                        getOptions = _props.getOptions,
                        uiSchema = _props.uiSchema,
                        field = uiSchema.field,
                        widget = uiSchema.widget,
                        type = uiSchema.type;

                    var FieldComponent = void 0,
                        WidgetComponent = void 0;
                    var calcField = field || type;
                    if (currentTheme.fieldFactory.has(calcField)) {
                        FieldComponent = currentTheme.fieldFactory.get(calcField);
                    } else {
                        if (currentTheme.fieldFactory.has(defaultKey)) {
                            FieldComponent = currentTheme.fieldFactory.get(defaultKey);
                        } else {
                            console.error("\u627E\u4E0D\u5230field\uFF1A" + (field || type));
                            return null;
                        }
                    }
                    if (currentTheme.widgetFactory.has(widget || type)) {
                        WidgetComponent = currentTheme.widgetFactory.get(widget || type);
                    } else {
                        if (currentTheme.widgetFactory.has(defaultKey)) {
                            WidgetComponent = currentTheme.widgetFactory.get(defaultKey);
                        } else {
                            console.warn("\u627E\u4E0D\u5230widget\uFF1A" + (widget || type), uiSchema);
                        }
                    }
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({}, this.props, { FieldComponent: FieldComponent, WidgetComponent: WidgetComponent }));
                };

                return FieldComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

            return FieldComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factory__ = __webpack_require__(4);


var _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var name = "array";
var hoc = function hoc(hocFactory) {
    return function () {
        var commHoc = Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withHandlers"])({
            addItem: function addItem(propsCur) {
                return function (props, data) {
                    return __WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __awaiter */](_this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                        var defaultData;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (!(!props.uiSchema || !props.uiSchema.items)) {
                                            _context.next = 2;
                                            break;
                                        }

                                        return _context.abrupt("return");

                                    case 2:
                                        _context.next = 4;
                                        return props.getDefaultData(props.ajv, props.uiSchema.items, data);

                                    case 4:
                                        defaultData = _context.sent;

                                        __WEBPACK_IMPORTED_MODULE_4__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.addItem({
                                            parentKeys: props.parentKeys,
                                            keys: props.uiSchema.keys,
                                            data: defaultData
                                        });

                                    case 6:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                };
            },
            removeItem: function removeItem(propsCur) {
                return function (parentKeys, keys, index) {
                    __WEBPACK_IMPORTED_MODULE_4__factory__["b" /* reducerFactory */].get(propsCur.reducerKey || "schemaForm").actions.removeItem({
                        parentKeys: parentKeys,
                        keys: keys,
                        index: index
                    });
                };
            },
            moveItem: function moveItem(propsCur) {
                return function (parentKeys, keys, curIndex, toIndex) {
                    __WEBPACK_IMPORTED_MODULE_4__factory__["b" /* reducerFactory */].get(propsCur.reducerKey || "schemaForm").actions.moveToItem({
                        parentKeys: parentKeys,
                        keys: keys,
                        curIndex: curIndex,
                        toIndex: toIndex
                    });
                };
            },
            initArrayComponent: function initArrayComponent(propsCur) {
                return function (props, index) {
                    var ArrayComponent = props.ArrayComponent,
                        ArrayItemComponent = props.ArrayItemComponent,
                        extraProps = __WEBPACK_IMPORTED_MODULE_1_tslib__["d" /* __rest */](props, ["ArrayComponent", "ArrayItemComponent"]),
                        uiSchema = props.uiSchema;

                    if (uiSchema.type === "array") {
                        return ArrayComponent ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ArrayComponent, Object.assign({}, extraProps)) : null;
                    }
                    return ArrayItemComponent ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ArrayItemComponent, Object.assign({}, extraProps)) : null;
                };
            }
        }));
        var arrayHoc = function arrayHoc(Component) {
            var ArrayComponentHoc = function (_PureComponent) {
                _inherits(ArrayComponentHoc, _PureComponent);

                function ArrayComponentHoc(props, context) {
                    _classCallCheck(this, ArrayComponentHoc);

                    var _this2 = _possibleConstructorReturn(this, _PureComponent.call(this, props, context));

                    _this2.initArrayComponents();
                    return _this2;
                }

                ArrayComponentHoc.prototype.initArrayComponents = function initArrayComponents() {
                    var getOptions = this.props.getOptions;

                    var hocOptions = getOptions(this.props, "hoc", name);
                    if (hocOptions.ArrayComponent) {
                        this.ArrayComponent = hocOptions.ArrayComponent;
                    }
                    if (hocOptions.ArrayItemComponent) {
                        this.ArrayItemComponent = hocOptions.ArrayItemComponent;
                    }
                };

                ArrayComponentHoc.prototype.render = function render() {
                    var props = {};
                    if (this.ArrayComponent) {
                        props.ArrayComponent = this.ArrayComponent;
                    }
                    if (this.ArrayItemComponent) {
                        props.ArrayItemComponent = this.ArrayItemComponent;
                    }
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, Object.assign({}, this.props, props));
                };

                return ArrayComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);
            ArrayComponentHoc = __WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __decorate */]([commHoc, __WEBPACK_IMPORTED_MODULE_1_tslib__["c" /* __metadata */]("design:paramtypes", [Object, Object])], ArrayComponentHoc);
            return ArrayComponentHoc;
        };
        var pureHoc = function pureHoc(Component) {
            var ArrayPureComponentHoc = function (_React$PureComponent) {
                _inherits(ArrayPureComponentHoc, _React$PureComponent);

                function ArrayPureComponentHoc() {
                    _classCallCheck(this, ArrayPureComponentHoc);

                    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
                }

                ArrayPureComponentHoc.prototype.render = function render() {
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, Object.assign({}, this.props));
                };

                return ArrayPureComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_2_react___default.a.PureComponent);
            ArrayPureComponentHoc = __WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __decorate */]([commHoc], ArrayPureComponentHoc);
            return ArrayPureComponentHoc;
        };
        return Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["branch"])(function (props) {
            var _props$uiSchema = props.uiSchema,
                uiSchema = _props$uiSchema === undefined ? { type: "" } : _props$uiSchema;

            return uiSchema.type === "array";
        }, arrayHoc, pureHoc);
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__factory__ = __webpack_require__(4);


var _this2 = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var name = "validate";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return function (Component) {
            var ArrayComponentHoc = function (_PureComponent) {
                _inherits(ArrayComponentHoc, _PureComponent);

                function ArrayComponentHoc() {
                    _classCallCheck(this, ArrayComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                ArrayComponentHoc.prototype.render = function render() {
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, Object.assign({}, this.props));
                };

                return ArrayComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);
            ArrayComponentHoc = __WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __decorate */]([Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withHandlers"])({
                validate: function validate(propsCur) {
                    return function (props, data) {
                        return __WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __awaiter */](_this2, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                            var result, schema, timeId, validateFunc, schemaInCache, error;
                            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            result = { dirty: true, isValid: false, isLoading: false };
                                            schema = Object.assign({}, props.uiSchema);
                                            timeId = setTimeout(function () {
                                                __WEBPACK_IMPORTED_MODULE_5__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.updateItemMeta({
                                                    parentKeys: props.parentKeys,
                                                    keys: schema.keys,
                                                    meta: { isLoading: true, isValid: false, errorText: false }
                                                });
                                            }, 200);
                                            _context.prev = 3;
                                            validateFunc = void 0;

                                            if (schema.schemaPath && props.ajv.getSchema(schema.schemaPath)) {
                                                validateFunc = props.ajv.getSchema(schema.schemaPath);
                                            } else if (schema.$id) {
                                                validateFunc = props.ajv.getSchema(schema.$id);
                                            } else {
                                                schemaInCache = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__["schemaFieldFactory"].get(schema.schemaPath));

                                                delete schemaInCache.$id;
                                                delete schemaInCache.$ref;
                                                validateFunc = props.ajv.compile(schemaInCache);
                                            }
                                            _context.next = 8;
                                            return validateFunc(data);

                                        case 8:
                                            result.isValid = _context.sent;

                                            if (result.isValid) {
                                                _context.next = 13;
                                                break;
                                            }

                                            error = new Error();

                                            error.errors = validateFunc.errors;
                                            throw error;

                                        case 13:
                                            _context.next = 18;
                                            break;

                                        case 15:
                                            _context.prev = 15;
                                            _context.t0 = _context["catch"](3);

                                            result.errorText = _context.t0.errors ? props.ajv.errorsText(_context.t0.errors, {
                                                dataVar: props.getTitle(props).toString()
                                            }) : _context.t0.message;

                                        case 18:
                                            _context.prev = 18;

                                            clearTimeout(timeId);
                                            return _context.finish(18);

                                        case 21:
                                            return _context.abrupt("return", result);

                                        case 22:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this, [[3, 15, 18, 21]]);
                        }));
                    };
                }
            }), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withHandlers"])({
                updateItemData: function updateItemData(propsCur) {
                    return function (props, data, meta) {
                        __WEBPACK_IMPORTED_MODULE_5__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.updateItemData({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            data: data,
                            meta: meta
                        });
                    };
                },
                updateItemMeta: function updateItemMeta(propsCur) {
                    return function (props, data) {
                        var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                        var noChange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                        return __WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __awaiter */](_this2, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            _context2.t0 = __WEBPACK_IMPORTED_MODULE_5__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions;
                                            _context2.t1 = props.parentKeys;
                                            _context2.t2 = props.uiSchema.keys;
                                            _context2.t3 = meta;

                                            if (_context2.t3) {
                                                _context2.next = 8;
                                                break;
                                            }

                                            _context2.next = 7;
                                            return propsCur.validate(props, data);

                                        case 7:
                                            _context2.t3 = _context2.sent;

                                        case 8:
                                            _context2.t4 = _context2.t3;
                                            _context2.t5 = noChange;
                                            _context2.t6 = {
                                                parentKeys: _context2.t1,
                                                keys: _context2.t2,
                                                meta: _context2.t4,
                                                noChange: _context2.t5
                                            };

                                            _context2.t0.updateItemMeta.call(_context2.t0, _context2.t6);

                                        case 12:
                                        case "end":
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));
                    };
                },
                removeItemData: function removeItemData(propsCur) {
                    return function (props) {
                        var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                        return __WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __awaiter */](_this2, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
                            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                                while (1) {
                                    switch (_context3.prev = _context3.next) {
                                        case 0:
                                            __WEBPACK_IMPORTED_MODULE_5__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.removeItemData({
                                                parentKeys: props.parentKeys,
                                                keys: props.uiSchema.keys,
                                                meta: meta
                                            });

                                        case 1:
                                        case "end":
                                            return _context3.stop();
                                    }
                                }
                            }, _callee3, this);
                        }));
                    };
                }
            }))], ArrayComponentHoc);
            return ArrayComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var name = "make";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return function (Component) {
            var MakeComponentHoc = function (_PureComponent) {
                _inherits(MakeComponentHoc, _PureComponent);

                function MakeComponentHoc() {
                    _classCallCheck(this, MakeComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                MakeComponentHoc.prototype.render = function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions;
                    var type = uiSchema.type,
                        field = uiSchema.field;

                    var fieldOptions = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* schemaFormTypes */].field, field || type, __WEBPACK_IMPORTED_MODULE_2_immutable___default.a.fromJS(uiSchema.hocs ? { hocs: uiSchema.hocs } : {}), __WEBPACK_IMPORTED_MODULE_2_immutable___default.a.fromJS(settings || {}));
                    var hocs = fieldOptions.hocs || ["utils", "theme", "field", "validate", "array", "temp"];
                    var ComponentWithHocs = __WEBPACK_IMPORTED_MODULE_1_recompose__["compose"].apply(undefined, [].concat(hocs).map(function (hoc1) {
                        if (typeof hoc1 !== "string") {
                            return hoc1;
                        }
                        return hocFactory.get(hoc1)();
                    }))(Component);
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentWithHocs, Object.assign({}, this.props));
                };

                return MakeComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

            return MakeComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var name = "temp";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            tempField: "temps",
            templates: []
        };

        return function (Component) {
            var TempComponentHoc = function (_PureComponent) {
                _inherits(TempComponentHoc, _PureComponent);

                function TempComponentHoc() {
                    _classCallCheck(this, TempComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                TempComponentHoc.prototype.render = function render() {
                    var _this2 = this;

                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions,
                        reducerKey = _props.reducerKey;
                    var uiSchemaOptions = uiSchema.options,
                        keys = uiSchema.keys;

                    var TempComponents = this.getTemplates();
                    return TempComponents.reduce(function (prev, _ref) {
                        var key = _ref.key,
                            Temp = _ref.Temp;

                        var tempOptions = getOptions(_this2.props, __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* schemaFormTypes */].template, key),
                            TempWithHoc = __WEBPACK_IMPORTED_MODULE_1_recompose__["compose"].apply(undefined, [hocFactory.get("utils")()].concat(tempOptions.tempHocs || []))(Temp);
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TempWithHoc, { tempKey: key, ajv: _this2.props.ajv, uiSchema: _this2.props.uiSchema, schemaId: _this2.props.schemaId, arrayLevel: _this2.props.arrayLevel, reducerKey: reducerKey, arrayIndex: _this2.props.arrayIndex, globalOptions: _this2.props.globalOptions, ArrayComponent: _this2.props.ArrayComponent, ArrayItemComponent: _this2.props.ArrayItemComponent, initArrayComponent: _this2.props.initArrayComponent, parentKeys: _this2.props.parentKeys, children: prev });
                    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({}, this.props)));
                };

                TempComponentHoc.prototype.getTemplates = function getTemplates() {
                    var _props2 = this.props,
                        uiSchema = _props2.uiSchema,
                        currentTheme = _props2.currentTheme,
                        getOptions = _props2.getOptions,
                        keys = uiSchema.keys,
                        type = uiSchema.type,
                        temps = uiSchema.temps,
                        typeDefaultOptions = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* schemaFormTypes */].field, type),
                        TempComponent = [];

                    var template = void 0;
                    if (temps) {
                        template = temps;
                    } else if (settings.templates && settings.templates.length > 0) {
                        template = settings.templates;
                    } else {
                        template = typeDefaultOptions[settings.tempField] || "default";
                    }
                    var getTemplate = function getTemplate(tmp) {
                        switch (tmp.constructor) {
                            case String:
                                if (!currentTheme.tempFactory.has(tmp)) {
                                    console.error("\u4E0D\u5B58\u5728" + tmp + "\u7684temp\uFF01");
                                } else {
                                    TempComponent.push({
                                        key: tmp,
                                        Temp: currentTheme.tempFactory.get(tmp)
                                    });
                                }
                                break;
                            case Object:
                                TempComponent.push({
                                    key: tmp.name,
                                    Temp: tmp
                                });
                                break;
                            case Array:
                                [].concat(template).reverse().forEach(function (tml, idx) {
                                    getTemplate(tml);
                                });
                                break;
                        }
                    };
                    getTemplate(template);
                    return TempComponent;
                };

                return TempComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

            return TempComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_index__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var fxSelectorCreator = Object(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelectorCreator"])(__WEBPACK_IMPORTED_MODULE_4_reselect__["defaultMemoize"], __WEBPACK_IMPORTED_MODULE_5_immutable__["is"]);
var name = "data";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            data: true
        };

        var getItemDataHoc = function getItemDataHoc(parentKeys, rootReducerKey, keys) {
            var getFormItemData = function getFormItemData(state) {
                var dataKeys = [].concat(rootReducerKey, parentKeys, ["data"], keys);
                if (settings.data && state.hasIn(dataKeys)) {
                    var formItemData = state.getIn(dataKeys);
                    if (formItemData !== undefined) {
                        if (!settings.dataLength) {
                            return formItemData;
                        } else {
                            return formItemData.size;
                        }
                    }
                }
            };
            var getFormItemMeta = function getFormItemMeta(state) {
                var metaKeys = [].concat(rootReducerKey, parentKeys, ["meta"]);
                if (settings.meta && state.hasIn(metaKeys)) {
                    var rootNode = state.getIn(metaKeys),
                        childNode = rootNode.containPath([].concat(keys));
                    if (childNode && childNode.value) {
                        if (settings.metaKeys) {
                            return childNode.value.filter(function (val, key) {
                                return settings.metaKeys.indexOf(key) >= 0;
                            });
                        }
                        return childNode.value;
                    }
                }
            };
            var getRoot = function getRoot(state) {
                if (!settings.treeNode) {
                    return null;
                }
                var metaKeys = [].concat(rootReducerKey, parentKeys, ["meta"]);
                var rootNode = state.getIn(metaKeys);
                var childNode = rootNode.containPath([].concat(keys));
                if (childNode) {
                    return childNode;
                }
                return rootNode.addChild([].concat(keys));
            };
            return fxSelectorCreator([getFormItemData, getFormItemMeta, getRoot], function (formItemData, formItemMeta, formItemNode) {
                var rtn = {};
                if (formItemData !== undefined && formItemData !== null) {
                    rtn.formItemData = formItemData;
                }
                if (formItemMeta !== undefined && formItemData !== null) {
                    rtn.formItemMeta = formItemMeta;
                }
                if (formItemNode !== undefined && formItemData !== null) {
                    rtn.formItemNode = formItemNode;
                }
                return rtn;
            });
        };
        return function (Component) {
            var DataComponentHoc = function (_PureComponent) {
                _inherits(DataComponentHoc, _PureComponent);

                function DataComponentHoc() {
                    _classCallCheck(this, DataComponentHoc);

                    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
                }

                DataComponentHoc.prototype.render = function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions,
                        _ref = this.props.uiSchema || {},
                        _ref$keys = _ref.keys,
                        keys = _ref$keys === undefined ? [] : _ref$keys,
                        options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_6__models_index__["a" /* schemaFormTypes */].hoc, name);

                    if (!options.rootReducerKey || options.rootReducerKey.constructor !== Array) {
                        console.error("dataHoc missing property rootReducerKey.should be a Array.");
                    }
                    var hocWithData = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(getItemDataHoc(this.props.parentKeys, options.rootReducerKey, keys)),
                        ComponentWithHoc = hocWithData(Component);
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComponentWithHoc, Object.assign({}, this.props));
                };

                return DataComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
            DataComponentHoc = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function () {
                return false;
            })], DataComponentHoc);
            return DataComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_schema_form__ = __webpack_require__(29);


var schemaFormReducer = new __WEBPACK_IMPORTED_MODULE_1__reducers_schema_form__["a" /* SchemaFormReducer */](Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_act__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_act___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_act__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_tree__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var b = __WEBPACK_IMPORTED_MODULE_2__reducer__["a"];
var SchemaFormReducer = function () {
    function SchemaFormReducer(initialState) {
        _classCallCheck(this, SchemaFormReducer);

        this.initialState = initialState;
        this.createForm = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("创建一个表单数据");
        this.updateItemData = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更新一个表单数据");
        this.updateItemMeta = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更新一个表单元数据");
        this.addItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("添加一个数据");
        this.removeItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("删除一个数据");
        this.moveToItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("元素移位");
        this.removeItemData = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("删除一个字段的数据以及meta数据");
    }

    SchemaFormReducer.prototype.init = function init(store) {
        for (var key in this.actions) {
            if (this.actions.hasOwnProperty(key)) {
                var action = this.actions[key];
                if (!action.assigned()) {
                    action.assignTo(store);
                }
            }
        }
    };

    SchemaFormReducer.prototype.removeItemDataMetaHandle = function removeItemDataMetaHandle(state, _ref) {
        var parentKeys = _ref.parentKeys,
            keys = _ref.keys,
            meta = _ref.meta;

        var dataKeys = parentKeys.concat(["data"].concat(keys));
        var metaKeys = parentKeys.concat(["meta"]);
        var rootNode = state.getIn(metaKeys);
        var childNode = rootNode.containPath(keys);
        state = this.resolveKeys(state, dataKeys);
        if (state.hasIn(dataKeys)) {
            state = state.removeIn(dataKeys);
        }
        if (childNode && meta) {
            childNode.removeFromParent();
        }
        return state;
    };

    SchemaFormReducer.prototype.resolveKeys = function resolveKeys(state, keys) {
        if (state.hasIn(keys)) {
            return state;
        }
        for (var i = 0, n = keys.length; i < n; i++) {
            var mKeys = [].concat(keys).splice(0, i + 1);
            if (!state.hasIn(mKeys)) {
                mKeys.pop();
                if (!state.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])());
                    } else {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])());
                    }
                }
            } else if (i < n) {
                var data = state.getIn(mKeys);
                if (!__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(data) && !__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])());
                    } else {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])());
                    }
                }
            }
        }
        return state;
    };

    SchemaFormReducer.prototype.createFormHandle = function createFormHandle(state, _ref2) {
        var key = _ref2.key,
            data = _ref2.data;

        if (state.has(key)) {
            state = state.remove(key);
        }
        var meta = new __WEBPACK_IMPORTED_MODULE_3__libs_tree__["a" /* TreeMap */](key, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({}));
        var stateData = Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])({
            meta: meta,
            data: Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(data)
        });
        return state.set(key, stateData);
    };

    SchemaFormReducer.prototype.updateItemDataHandle = function updateItemDataHandle(state, _ref3) {
        var parentKeys = _ref3.parentKeys,
            keys = _ref3.keys,
            data = _ref3.data,
            meta = _ref3.meta;

        var dataKeys = parentKeys.concat(["data"].concat(keys));
        state = this.resolveKeys(state, dataKeys);
        state = state.setIn(dataKeys, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(data));
        if (meta) {
            state = this.updateItemMetaHandle(state, { parentKeys: parentKeys, keys: keys, meta: meta });
        }
        return state;
    };

    SchemaFormReducer.prototype.addItemDataHandle = function addItemDataHandle(state, _ref4) {
        var parentKeys = _ref4.parentKeys,
            keys = _ref4.keys,
            data = _ref4.data;

        var dataKeys = parentKeys.concat(["data"].concat(keys)),
            metaKeys = parentKeys.concat(["meta"]),
            rootNode = state.getIn(metaKeys),
            childNode = rootNode.containPath(keys);
        var formItemData = void 0;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys) || Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
        formItemData = formItemData.push(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(data));
        if (childNode && childNode.value) {
            childNode.value = childNode.value.merge({
                collapsing: false
            });
        }
        return state.setIn(dataKeys, formItemData);
    };

    SchemaFormReducer.prototype.removeItemHandle = function removeItemHandle(state, _ref5) {
        var parentKeys = _ref5.parentKeys,
            keys = _ref5.keys,
            index = _ref5.index;

        var dataKeys = parentKeys.concat(["data"].concat(keys)),
            metaKeys = parentKeys.concat(["meta"]),
            rootNode = state.getIn(metaKeys),
            childNode = rootNode.addChild(keys.concat([index]));
        var formItemData = void 0;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || !__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(formItemData)) {
            return state;
        }
        if (childNode) {
            childNode.removeFromParent();
        }
        return state.setIn(dataKeys, formItemData.remove(index));
    };

    SchemaFormReducer.prototype.moveItemHandle = function moveItemHandle(state, _ref6) {
        var parentKeys = _ref6.parentKeys,
            keys = _ref6.keys,
            curIndex = _ref6.curIndex,
            toIndex = _ref6.toIndex;

        var dataKeys = parentKeys.concat(["data"].concat(keys)),
            metaKeys = parentKeys.concat(["meta"]),
            rootNode = state.getIn(metaKeys),
            offset = toIndex > curIndex && false ? 1 : 0;
        var oldFormItemData = state.getIn(dataKeys),
            formItemData = state.getIn(dataKeys),
            childNode = rootNode.containPath(keys.concat([curIndex])),
            childNodeTo = rootNode.containPath(keys.concat([toIndex]));
        state = this.resolveKeys(state, dataKeys);
        if (!formItemData || toIndex < 0) {
            return state;
        }
        var curItemData = formItemData.get(curIndex);
        formItemData = formItemData.remove(curIndex);
        formItemData = formItemData.insert(toIndex - offset, curItemData);
        if (childNode) {
            childNode.insertToFromParent(toIndex);
        } else {
            if (childNodeTo) {
                childNodeTo.insertToFromParent(curIndex);
            }
        }
        return state.setIn(dataKeys, formItemData);
    };

    SchemaFormReducer.prototype.updateItemMetaHandle = function updateItemMetaHandle(state, _ref7) {
        var parentKeys = _ref7.parentKeys,
            keys = _ref7.keys,
            meta = _ref7.meta,
            noChange = _ref7.noChange;

        var metaKeys = parentKeys.concat(["meta"]);
        var rootNode = state.getIn(metaKeys);
        var childNode = rootNode.containPath(keys);
        var value = childNode ? childNode.value : null;
        if (!childNode) {
            childNode = rootNode.addChild(keys);
        }
        if (childNode) {
            if (value) {
                childNode.value = childNode.value.merge(meta);
            } else {
                childNode.value = Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(meta);
            }
        }
        if (noChange) {
            return state;
        }
        var newRoot = new __WEBPACK_IMPORTED_MODULE_3__libs_tree__["a" /* TreeMap */](rootNode.getKey(), rootNode.value);
        newRoot.children = rootNode.children;
        return state.setIn(metaKeys, newRoot);
    };

    _createClass(SchemaFormReducer, [{
        key: "actions",
        get: function get() {
            return {
                createForm: this.createForm,
                updateItemData: this.updateItemData,
                updateItemMeta: this.updateItemMeta,
                addItem: this.addItem,
                removeItem: this.removeItem,
                moveToItem: this.moveToItem,
                removeItemData: this.removeItemData
            };
        }
    }, {
        key: "reducer",
        get: function get() {
            var _createReducer;

            return Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createReducer"])((_createReducer = {}, _createReducer[this.createForm] = this.createFormHandle.bind(this), _createReducer[this.updateItemData] = this.updateItemDataHandle.bind(this), _createReducer[this.updateItemMeta] = this.updateItemMetaHandle.bind(this), _createReducer[this.addItem] = this.addItemDataHandle.bind(this), _createReducer[this.removeItem] = this.removeItemHandle.bind(this), _createReducer[this.moveToItem] = this.moveItemHandle.bind(this), _createReducer[this.removeItemData] = this.removeItemDataMetaHandle.bind(this), _createReducer), this.initialState);
        }
    }]);

    return SchemaFormReducer;
}();

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
var a = 1;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formitem_index__ = __webpack_require__(35);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SchemaForm = function (_PureComponent) {
    _inherits(SchemaForm, _PureComponent);

    function SchemaForm() {
        _classCallCheck(this, SchemaForm);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    SchemaForm.prototype.render = function render() {
        var _a = this.props,
            schemaId = _a.schemaId,
            mergeSchemaList = _a.mergeSchemaList,
            arrayLevel = _a.arrayLevel,
            RootComponent = _a.RootComponent,
            children = _a.children,
            extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
        var formItemList = mergeSchemaList ? mergeSchemaList.map(function (uiScehma, idx) {
            var arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__formitem_index__["a" /* SchemaFormItem */], Object.assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
        }) : [];
        if (RootComponent) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(RootComponent, null, formItemList, children);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, formItemList, children);
    };

    return SchemaForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
SchemaForm = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([__WEBPACK_IMPORTED_MODULE_2__container__["a" /* hoc */]], SchemaForm);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(4);


var hoc = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["shouldUpdate"])(function () {
  return false;
}), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("utils")(), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("merge")());

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });


__WEBPACK_IMPORTED_MODULE_0__component__["a" /* SchemaFormItem */].propTypes = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default_props__["a" /* DefaultPropsTypeCheck */]);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container__ = __webpack_require__(38);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SchemaFormItem = function (_PureComponent) {
    _inherits(SchemaFormItem, _PureComponent);

    function SchemaFormItem() {
        _classCallCheck(this, SchemaFormItem);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    SchemaFormItem.prototype.render = function render() {
        var _a = this.props,
            FieldComponent = _a.FieldComponent,
            uiSchema = _a.uiSchema,
            extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["FieldComponent", "uiSchema"]);
        var options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
        var FieldComponentWithHoc = FieldComponent;
        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }
        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = __WEBPACK_IMPORTED_MODULE_2_redux__["compose"].apply(undefined, options.fieldHocs || [])(FieldComponent);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
    };

    return SchemaFormItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
SchemaFormItem = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([__WEBPACK_IMPORTED_MODULE_3__container__["a" /* hoc */]], SchemaFormItem);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(4);


var hoc = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("utils")(), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("make")());

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(43);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__normal__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__object__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]]);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export NormalField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__(3);
var _name$default;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var name = "normal";
var NormalField = function (_PureComponent) {
    _inherits(NormalField, _PureComponent);

    function NormalField(props, context) {
        _classCallCheck(this, NormalField);

        return _possibleConstructorReturn(this, _PureComponent.call(this, props, context));
    }

    NormalField.prototype.render = function render() {
        var _a = this.props,
            WidgetComponent = _a.WidgetComponent,
            FieldComponent = _a.FieldComponent,
            formItemMeta = _a.formItemMeta,
            formItemData = _a.formItemData,
            extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
        var fieldOptions = extraProps.getOptions(this.props, __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* schemaFormTypes */].field, name);
        var keys = extraProps.uiSchema.keys;

        var WidgetComponentWithHoc = WidgetComponent;
        if (!WidgetComponent || !keys) {
            return null;
        }
        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
            WidgetComponentWithHoc = __WEBPACK_IMPORTED_MODULE_2_recompose__["compose"].apply(undefined, fieldOptions.widgetHocs)(WidgetComponent);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(WidgetComponentWithHoc, Object.assign({ key: keys.join(".") }, extraProps));
    };

    return NormalField;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (_name$default = {}, _name$default[name] = NormalField, _name$default.default = NormalField, _name$default);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export ObjectField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
var _name;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var name = "object";
var ObjectField = function (_PureComponent) {
    _inherits(ObjectField, _PureComponent);

    function ObjectField() {
        _classCallCheck(this, ObjectField);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    ObjectField.prototype.render = function render() {
        var _props = this.props,
            arrayIndex = _props.arrayIndex,
            arrayLevel = _props.arrayLevel,
            parentKeys = _props.parentKeys,
            globalOptions = _props.globalOptions,
            ajv = _props.ajv,
            schemaId = _props.schemaId,
            getOptions = _props.getOptions,
            reducerKey = _props.reducerKey,
            uiSchema = _props.uiSchema,
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = __WEBPACK_IMPORTED_MODULE_1__components_form__["a" /* SchemaForm */];
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = __WEBPACK_IMPORTED_MODULE_3_recompose__["compose"].apply(undefined, options.formHocs)(__WEBPACK_IMPORTED_MODULE_1__components_form__["a" /* SchemaForm */]);
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SchemaFormWithHoc, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, RootComponent: options.Root, reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
    };

    return ObjectField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (_name = {}, _name[name] = ObjectField, _name);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export ArrayField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form__ = __webpack_require__(8);
var _name;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var arrayFieldStyle = {
    width: "100%",
    height: "100%"
};

var ArrayFieldComponent = function (_React$PureComponent) {
    _inherits(ArrayFieldComponent, _React$PureComponent);

    function ArrayFieldComponent() {
        _classCallCheck(this, ArrayFieldComponent);

        return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
    }

    ArrayFieldComponent.prototype.render = function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: arrayFieldStyle }, this.props.children);
    };

    return ArrayFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

var name = "array";
var ArrayField = function (_PureComponent) {
    _inherits(ArrayField, _PureComponent);

    function ArrayField(props) {
        _classCallCheck(this, ArrayField);

        var _this2 = _possibleConstructorReturn(this, _PureComponent.call(this, props));

        _this2.SchemaFormWithHoc = ArrayFieldComponent;
        _this2.initComponent();
        return _this2;
    }

    ArrayField.prototype.initComponent = function initComponent() {
        var _props = this.props,
            uiSchema = _props.uiSchema,
            formItemData = _props.formItemData,
            getOptions = _props.getOptions,
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = null,
            SchemaFormItemWithHoc = null;
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = __WEBPACK_IMPORTED_MODULE_1_recompose__["compose"].apply(undefined, options.formHocs)(options.ArrayFieldComponent || ArrayFieldComponent);
        }
        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            SchemaFormItemWithHoc = __WEBPACK_IMPORTED_MODULE_1_recompose__["compose"].apply(undefined, options.formItemHocs)(__WEBPACK_IMPORTED_MODULE_3__components_form__["a" /* SchemaForm */]);
        }
        this.SchemaFormWithHoc = SchemaFormWithHoc;
        this.SchemaFormItemWithHoc = SchemaFormItemWithHoc;
    };

    ArrayField.prototype.renderItem = function renderItem(idx) {
        var _props2 = this.props,
            parentKeys = _props2.parentKeys,
            globalOptions = _props2.globalOptions,
            getOptions = _props2.getOptions,
            _props2$arrayLevel = _props2.arrayLevel,
            arrayLevel = _props2$arrayLevel === undefined ? [] : _props2$arrayLevel,
            getRequiredKeys = _props2.getRequiredKeys,
            ajv = _props2.ajv,
            reducerKey = _props2.reducerKey,
            ArrayItemComponent = _props2.ArrayItemComponent,
            uiSchema = this.props.uiSchema,
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = this.SchemaFormItemWithHoc || __WEBPACK_IMPORTED_MODULE_3__components_form__["a" /* SchemaForm */];
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SchemaFormWithHoc, { key: idx, index: idx, arrayIndex: idx, uiSchema: uiSchema, RootComponent: options.Root, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
    };

    ArrayField.prototype.render = function render() {
        var _props3 = this.props,
            uiSchema = _props3.uiSchema,
            formItemData = _props3.formItemData,
            getOptions = _props3.getOptions,
            getRequiredKeys = _props3.getRequiredKeys,
            child = [],
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = this.SchemaFormWithHoc;
        var extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);
        for (var i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SchemaFormWithHoc, Object.assign({ children: child }, extraProps));
    };

    return ArrayField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (_name = {}, _name[name] = ArrayField, _name);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ajv__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ajv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__factory__ = __webpack_require__(4);


var _this2 = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/* harmony default export */ __webpack_exports__["a"] = (function () {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { rootReducerKey: [], parentKeys: [] };

    return function (Component) {
        var SchemaFormComponentHoc = function (_PureComponent) {
            _inherits(SchemaFormComponentHoc, _PureComponent);

            function SchemaFormComponentHoc(props) {
                _classCallCheck(this, SchemaFormComponentHoc);

                var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

                _this._validateAll = props.validateAll.bind(_this);
                props.resetForm();
                return _this;
            }

            SchemaFormComponentHoc.prototype.render = function render() {
                var _props = this.props,
                    errors = _props.errors,
                    _props$isValid = _props.isValid,
                    isValid = _props$isValid === undefined ? false : _props$isValid,
                    _props$isValidating = _props.isValidating,
                    isValidating = _props$isValidating === undefined ? false : _props$isValidating,
                    getRequiredKeys = _props.getRequiredKeys,
                    getOptions = _props.getOptions,
                    schemaId = _props.schemaId;

                var options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_7__models_index__["a" /* schemaFormTypes */].hoc, "schemaFormDec");
                var extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, Object.assign({ validateAll: this._validateAll, parentKeys: settings.parentKeys, schemaId: schemaId }, extraProps));
            };

            return SchemaFormComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);
        SchemaFormComponentHoc = __WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __decorate */]([Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_8__factory__["a" /* hocFactory */].get("utils")(), Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
            var rootKeys = settings.rootReducerKey.concat(settings.parentKeys),
                dataKeys = rootKeys.concat(["data"]),
                metaKeys = rootKeys.concat(["meta"]),
                root = state.getIn(metaKeys);
            return {
                data: state.getIn(dataKeys),
                root: root,
                isValid: root ? root.value.get("isValid") : true,
                errors: root ? root.value.get("errors") : null,
                isValidating: root ? root.value.get("isLoading") : false
            };
        }), Object(__WEBPACK_IMPORTED_MODULE_3_recompose__["withHandlers"])({
            validateAll: function validateAll(props) {
                var updateItemMeta = __WEBPACK_IMPORTED_MODULE_8__factory__["b" /* reducerFactory */].get(props.reducerKey).actions.updateItemMeta,
                    timeId = void 0;
                return function (async) {
                    return __WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __awaiter */](_this2, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                        var root, validate, $validateBeforeData, $validateAfterData, normalizeDataPath, valRes;
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        root = props.root, validate = props.ajv.getSchema(props.schemaId), $validateBeforeData = __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS({
                                            dirty: true,
                                            isValid: true,
                                            isLoading: true
                                        }), $validateAfterData = __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = props.normalizeDataPath;

                                        if (root) {
                                            _context.next = 3;
                                            break;
                                        }

                                        return _context.abrupt("return");

                                    case 3:
                                        if (validate) {
                                            _context.next = 5;
                                            break;
                                        }

                                        throw new Error("\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684" + props.schemaId + ";");

                                    case 5:
                                        _context.prev = 5;

                                        root.forEach(function (node) {
                                            if (node.value) {
                                                return node.value.merge($validateBeforeData);
                                            }
                                            return $validateBeforeData;
                                        }, true);
                                        timeId = setTimeout(function () {
                                            updateItemMeta({
                                                parentKeys: settings.parentKeys,
                                                keys: [],
                                                meta: root.value
                                            });
                                        }, 200);
                                        _context.next = 10;
                                        return validate(props.data.toJS());

                                    case 10:
                                        valRes = _context.sent;

                                        if (valRes) {
                                            _context.next = 13;
                                            break;
                                        }

                                        throw new __WEBPACK_IMPORTED_MODULE_6_ajv__["ValidationError"](validate.errors);

                                    case 13:
                                        root.value = root.value.merge({
                                            isValid: true
                                        });
                                        updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            meta: root.value
                                        });
                                        _context.next = 25;
                                        break;

                                    case 17:
                                        _context.prev = 17;
                                        _context.t0 = _context["catch"](5);

                                        if (_context.t0 instanceof __WEBPACK_IMPORTED_MODULE_6_ajv__["ValidationError"]) {
                                            _context.next = 21;
                                            break;
                                        }

                                        return _context.abrupt("return", console.error(_context.t0));

                                    case 21:
                                        if (root) {
                                            _context.next = 23;
                                            break;
                                        }

                                        return _context.abrupt("return");

                                    case 23:
                                        _context.t0.errors.forEach(function (element) {
                                            var dataKeys = root.getCurrentKeys().concat(normalizeDataPath(props.schemaId, element.dataPath));
                                            var childNode = root.containPath(dataKeys);
                                            if (!childNode) {
                                                childNode = root.addChild(dataKeys, __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS({}));
                                            }
                                            if (childNode) {
                                                childNode.value = childNode.value.merge($validateAfterData).merge({
                                                    isValid: false,
                                                    errorText: dataKeys.pop() + " " + element.message
                                                });
                                            }
                                        });
                                        root.value = root.value.merge({
                                            isValid: false,
                                            errors: _context.t0.errors
                                        });

                                    case 25:
                                        _context.prev = 25;

                                        clearTimeout(timeId);
                                        root.forEach(function (node) {
                                            if (node.value) {
                                                return node.value.merge($validateAfterData);
                                            }
                                            return node.value;
                                        }, true);
                                        updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            meta: root.value
                                        });
                                        return _context.finish(25);

                                    case 30:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[5, 17, 25, 30]]);
                    }));
                };
            },
            resetForm: function resetForm(props) {
                return function () {
                    if (props.formKey) {
                        var createForm = __WEBPACK_IMPORTED_MODULE_8__factory__["b" /* reducerFactory */].get(props.reducerKey).actions.createForm;

                        createForm({
                            key: props.formKey,
                            data: props.initData || {}
                        });
                    }
                };
            }
        })), __WEBPACK_IMPORTED_MODULE_1_tslib__["c" /* __metadata */]("design:paramtypes", [Object])], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
});

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=index.js.map