(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("redux-act"), require("reselect"), require("redux"), require("ajv"));
	else if(typeof define === 'function' && define.amd)
		define("fx-schema-form-react", ["React", "recompose", "immutable", "fx-schema-form-core", "react-redux", "resolve-pathname", "redux-act", "reselect", "redux", "ajv"], factory);
	else if(typeof exports === 'object')
		exports["fx-schema-form-react"] = factory(require("React"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("redux-act"), require("reselect"), require("redux"), require("ajv"));
	else
		root["fx-schema-form-react"] = factory(root["React"], root["recompose"], root["Immutable"], root["fx-schema-form-core"], root["react-redux"], root["resolve-pathname"], root["redux-act"], root["reselect"], root["Redux"], root["Ajv"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_39__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hocFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hocs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(6);



var reducerFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
var hocFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
var themeFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
hocFactory.add("utils", __WEBPACK_IMPORTED_MODULE_1__hocs__["h" /* utils */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["h" /* utils */], hocFactory));
hocFactory.add("merge", __WEBPACK_IMPORTED_MODULE_1__hocs__["e" /* merge */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["e" /* merge */], hocFactory));
hocFactory.add("field", __WEBPACK_IMPORTED_MODULE_1__hocs__["c" /* field */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["c" /* field */], hocFactory));
hocFactory.add("theme", __WEBPACK_IMPORTED_MODULE_1__hocs__["g" /* theme */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["g" /* theme */], hocFactory));
hocFactory.add("array", __WEBPACK_IMPORTED_MODULE_1__hocs__["a" /* array */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["a" /* array */], hocFactory));
hocFactory.add("validate", __WEBPACK_IMPORTED_MODULE_1__hocs__["i" /* validate */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["i" /* validate */], hocFactory));
hocFactory.add("make", __WEBPACK_IMPORTED_MODULE_1__hocs__["d" /* make */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["d" /* make */], hocFactory));
hocFactory.add("temp", __WEBPACK_IMPORTED_MODULE_1__hocs__["f" /* temp */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["f" /* temp */], hocFactory));
hocFactory.add("data", __WEBPACK_IMPORTED_MODULE_1__hocs__["b" /* data */].bind(__WEBPACK_IMPORTED_MODULE_1__hocs__["b" /* data */], hocFactory));
reducerFactory.add("schemaForm", __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* schemaFormReducer */]);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_schema_form__ = __webpack_require__(18);


var schemaFormReducer = new __WEBPACK_IMPORTED_MODULE_1__reducers_schema_form__["a" /* SchemaFormReducer */](Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeMap; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeMap = function () {
    function TreeMap(key, value, parent) {
        _classCallCheck(this, TreeMap);

        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    _createClass(TreeMap, [{
        key: "addChild",
        value: function addChild(keys, value) {
            var curKeys = this.getCurrentKeys();
            var curNode = this;
            var child = null;
            keys = keys.splice(curKeys.length);
            if (!keys.length) {
                return this;
            }
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
        }
    }, {
        key: "getKey",
        value: function getKey() {
            if (!this.key || this.key === "-") {
                return this.getIndexInParent().toString();
            }
            return this.key;
        }
    }, {
        key: "getCurrentKeys",
        value: function getCurrentKeys() {
            var keys = [];
            if (this.parent) {
                keys = keys.concat(this.parent.getCurrentKeys());
            }
            return keys.concat([this.key]);
        }
    }, {
        key: "getIndexInParent",
        value: function getIndexInParent() {
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
        }
    }, {
        key: "contains",
        value: function contains(key) {
            var isNumber = key.constructor === Number;
            if (isNumber) {
                if (this.children.length > key) {
                    return this.children[key];
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
                var child = this.children[i];
                if (child && child.contains(key)) {
                    return child;
                }
            }
            return null;
        }
    }, {
        key: "containPath",
        value: function containPath(keys) {
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
        }
    }, {
        key: "removeFromParent",
        value: function removeFromParent() {
            var index = this.getIndexInParent();
            if (this.parent) {
                this.parent.children.splice(index, 1);
            }
        }
    }, {
        key: "switchOneToOneFromParent",
        value: function switchOneToOneFromParent(toIndex) {
            var curIndex = this.getIndexInParent();
            if (!this.parent || !this.parent.children || curIndex < 0) {
                return;
            }
            if (this.parent.children.length < (curIndex > toIndex ? curIndex : toIndex)) {
                return;
            }
            var _ref = [this.parent.children[toIndex], this.parent.children[curIndex]];
            this.parent.children[curIndex] = _ref[0];
            this.parent.children[toIndex] = _ref[1];
        }
    }, {
        key: "insertToFromParent",
        value: function insertToFromParent(toIndex) {
            var curIndex = this.getIndexInParent();
            var offset = toIndex > curIndex && false ? 1 : 0;
            if (!this.parent || !this.parent.children || curIndex < 0) {
                return;
            }
            if (this.parent.children.length <= toIndex) {
                this.parent.addChild(this.parent.getCurrentKeys().concat([toIndex]));
            }
            this.removeFromParent();
            this.parent.children = this.parent.children.concat([]).splice(0, toIndex - offset).concat(this).concat(this.parent.children.splice(toIndex - offset));
        }
    }, {
        key: "forEach",
        value: function forEach(clearFunc) {
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
        }
    }]);

    return TreeMap;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_tree__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_dec__ = __webpack_require__(38);







var total = __WEBPACK_IMPORTED_MODULE_2__components__["b" /* props */] + __WEBPACK_IMPORTED_MODULE_3__models__["a" /* models */];
var defaultTheme = {
    tempFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"](),
    fieldFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"](),
    widgetFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]()
};
defaultTheme.fieldFactory.add("default", __WEBPACK_IMPORTED_MODULE_4__fields__["b" /* NormalField */]);
defaultTheme.fieldFactory.add("object", __WEBPACK_IMPORTED_MODULE_4__fields__["c" /* ObjectField */]);
defaultTheme.fieldFactory.add("array", __WEBPACK_IMPORTED_MODULE_4__fields__["a" /* ArrayField */]);
__WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */].add("default", defaultTheme);
/* harmony default export */ __webpack_exports__["default"] = ({
    themeFactory: __WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */],
    defaultTheme: defaultTheme,
    schemaFormDec: __WEBPACK_IMPORTED_MODULE_6__libs_dec__["a" /* default */],
    TreeMap: __WEBPACK_IMPORTED_MODULE_5__libs_tree__["a" /* TreeMap */],
    reducerFactory: __WEBPACK_IMPORTED_MODULE_1__factory__["b" /* reducerFactory */],
    SchemaForm: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* SchemaForm */],
    hocFactory: __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */]
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__merge__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__theme__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__field__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__make__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__make__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__temp__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__temp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__data__["a"]; });










/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var totalTime = 0,
    timeid = void 0;
/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var MergeComponentHoc = function (_PureComponent) {
            _inherits(MergeComponentHoc, _PureComponent);

            function MergeComponentHoc(props) {
                _classCallCheck(this, MergeComponentHoc);

                var _this = _possibleConstructorReturn(this, (MergeComponentHoc.__proto__ || Object.getPrototypeOf(MergeComponentHoc)).call(this, props));

                var uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : null;
                if (uiSchema) {
                    uiSchema.keys = uiSchema.originKeys;
                }
                var merge = new __WEBPACK_IMPORTED_MODULE_2_fx_schema_form_core__["MergeLib"](props.ajv, props.schemaId, uiSchema, props.uiSchemas);
                _this._mergeUiSchemaList = merge.mergeUiSchemaList.map(function (v) {
                    return _this.mergeKeys(v);
                });
                return _this;
            }

            _createClass(MergeComponentHoc, [{
                key: "mergeKeys",
                value: function mergeKeys(mergeSchema) {
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
                }
            }, {
                key: "render",
                value: function render() {
                    var _a = this.props,
                        uiSchemas = _a.uiSchemas,
                        uiSchema = _a.uiSchema,
                        extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["uiSchemas", "uiSchema"]);
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps));
                }
            }]);

            return MergeComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);

        return MergeComponentHoc;
    };
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resolve_pathname__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resolve_pathname___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_resolve_pathname__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var ComponentHoc = function (_PureComponent) {
            _inherits(ComponentHoc, _PureComponent);

            function ComponentHoc() {
                _classCallCheck(this, ComponentHoc);

                return _possibleConstructorReturn(this, (ComponentHoc.__proto__ || Object.getPrototypeOf(ComponentHoc)).apply(this, arguments));
            }

            _createClass(ComponentHoc, [{
                key: "render",
                value: function render() {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions }, this.props));
                }
            }, {
                key: "getOptions",
                value: function getOptions(props, category, field) {
                    var uiSchema = props.uiSchema,
                        globalOptions = props.globalOptions;
                    var options = uiSchema.options;

                    var optionsArray = [];
                    if (globalOptions && globalOptions.hasIn([category, "default"])) {
                        optionsArray.push(globalOptions.getIn([category, "default"]));
                    }
                    if (globalOptions && globalOptions.hasIn([category, field])) {
                        optionsArray.push(globalOptions.getIn([category, field]));
                    }
                    if (options && options.hasIn([category, field])) {
                        optionsArray.push(options.getIn([category, field]));
                    }
                    var opts = optionsArray.reverse().reduce(function (prev, next) {
                        if (next) {
                            return next.merge(prev);
                        }
                        return prev;
                    }, __WEBPACK_IMPORTED_MODULE_1_immutable___default.a.fromJS({})).toJS();
                    return opts;
                }
            }, {
                key: "getTitle",
                value: function getTitle(props) {
                    var uiSchema = props.uiSchema;
                    var title = uiSchema.title,
                        keys = uiSchema.keys;

                    if (title !== undefined) {
                        return title;
                    }
                    if (keys && keys.length) {
                        var keysCopy = [].concat(_toConsumableArray(keys)),
                            keyTitle = keysCopy.pop();
                        return keyTitle ? keyTitle.toString() : "";
                    }
                    if (props.arrayIndex) {
                        return props.arrayIndex.toString();
                    }
                    return "";
                }
            }, {
                key: "getPathKeys",
                value: function getPathKeys(keys, path) {
                    var keysCopy = [""].concat(keys.concat([""]));
                    var keysResolve = __WEBPACK_IMPORTED_MODULE_2_resolve_pathname___default()(path, keysCopy.join("/")).split("/");
                    keysResolve.shift();
                    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                        keysResolve.pop();
                    }
                    return keysResolve;
                }
            }]);

            return ComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

        return ComponentHoc;
    };
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var ThemeComponentHoc = function (_PureComponent) {
            _inherits(ThemeComponentHoc, _PureComponent);

            function ThemeComponentHoc() {
                _classCallCheck(this, ThemeComponentHoc);

                return _possibleConstructorReturn(this, (ThemeComponentHoc.__proto__ || Object.getPrototypeOf(ThemeComponentHoc)).apply(this, arguments));
            }

            _createClass(ThemeComponentHoc, [{
                key: "render",
                value: function render() {
                    var _props$uiSchema = this.props.uiSchema,
                        theme = _props$uiSchema.theme,
                        field = _props$uiSchema.field;

                    var nsFactory = void 0;
                    if (__WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */].has(theme || "default")) {
                        nsFactory = __WEBPACK_IMPORTED_MODULE_1__factory__["c" /* themeFactory */].get(theme || "default");
                    } else {
                        throw new Error("\u6CA1\u6709\u627E\u5230" + (theme || "default") + "\u7684\u6837\u5F0F\uFF01");
                    }
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({ currentTheme: nsFactory }, this.props));
                }
            }]);

            return ThemeComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

        return ThemeComponentHoc;
    };
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var FieldComponentHoc = function (_PureComponent) {
            _inherits(FieldComponentHoc, _PureComponent);

            function FieldComponentHoc() {
                _classCallCheck(this, FieldComponentHoc);

                return _possibleConstructorReturn(this, (FieldComponentHoc.__proto__ || Object.getPrototypeOf(FieldComponentHoc)).apply(this, arguments));
            }

            _createClass(FieldComponentHoc, [{
                key: "render",
                value: function render() {
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
                        if (currentTheme.fieldFactory.has("default")) {
                            FieldComponent = currentTheme.fieldFactory.get("default");
                        } else {
                            console.error("\u627E\u4E0D\u5230field\uFF1A" + (field || type));
                            return null;
                        }
                    }
                    if (currentTheme.widgetFactory.has(widget || type)) {
                        WidgetComponent = currentTheme.widgetFactory.get(widget || type);
                    } else {
                        if (currentTheme.widgetFactory.has("default")) {
                            WidgetComponent = currentTheme.widgetFactory.get("default");
                        } else {
                            console.warn("\u627E\u4E0D\u5230widget\uFF1A" + (widget || type), uiSchema);
                        }
                    }
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({}, this.props, { FieldComponent: FieldComponent, WidgetComponent: WidgetComponent }));
                }
            }]);

            return FieldComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

        return FieldComponentHoc;
    };
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hoc = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
        addItem: function addItem(propsCur) {
            return function (props, data) {
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var itemSchema, defaultValue, itemUiSchema;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    itemSchema = {}, defaultValue = {}, itemUiSchema = props.uiSchema ? props.uiSchema.items : {};
                                    _context.prev = 1;
                                    _context.next = 4;
                                    return props.ajv.validate({
                                        type: "object",
                                        properties: {
                                            defaultData: itemUiSchema
                                        }
                                    }, defaultValue);

                                case 4:
                                    _context.next = 9;
                                    break;

                                case 6:
                                    _context.prev = 6;
                                    _context.t0 = _context["catch"](1);

                                    console.log(_context.t0);

                                case 9:
                                    _context.prev = 9;

                                    __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions.addItem({
                                        parentKeys: props.parentKeys,
                                        keys: props.uiSchema.keys,
                                        data: defaultValue.defaultData
                                    });
                                    return _context.finish(9);

                                case 12:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 6, 9, 12]]);
                }));
            };
        },
        removeItem: function removeItem(propsCur) {
            return function (parentKeys, keys, index) {
                __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions.removeItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    index: index
                });
            };
        },
        switchItem: function switchItem(propsCur) {
            return function (parentKeys, keys, curIndex, toIndex) {
                __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions.switchItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        moveItem: function moveItem(propsCur) {
            return function (parentKeys, keys, curIndex, toIndex) {
                __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions.moveToItem({
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
                    extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](props, ["ArrayComponent", "ArrayItemComponent"]),
                    uiSchema = props.uiSchema;

                if (uiSchema.type === "array") {
                    return ArrayComponent ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArrayComponent, Object.assign({}, extraProps)) : null;
                }
                return ArrayItemComponent ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArrayItemComponent, Object.assign({}, extraProps)) : null;
            };
        }
    }));
    var arrayHoc = function arrayHoc(Component) {
        var ArrayComponentHoc = function (_PureComponent) {
            _inherits(ArrayComponentHoc, _PureComponent);

            function ArrayComponentHoc(props, context) {
                _classCallCheck(this, ArrayComponentHoc);

                var _this2 = _possibleConstructorReturn(this, (ArrayComponentHoc.__proto__ || Object.getPrototypeOf(ArrayComponentHoc)).call(this, props, context));

                _this2.initArrayComponents();
                return _this2;
            }

            _createClass(ArrayComponentHoc, [{
                key: "initArrayComponents",
                value: function initArrayComponents() {
                    var getOptions = this.props.getOptions;

                    var hocOptions = getOptions(this.props, "hoc", "array");
                    if (hocOptions.ArrayComponent) {
                        this.ArrayComponent = hocOptions.ArrayComponent;
                    }
                    if (hocOptions.ArrayItemComponent) {
                        this.ArrayItemComponent = hocOptions.ArrayItemComponent;
                    }
                }
            }, {
                key: "render",
                value: function render() {
                    var props = {};
                    if (this.ArrayComponent) {
                        props.ArrayComponent = this.ArrayComponent;
                    }
                    if (this.ArrayItemComponent) {
                        props.ArrayItemComponent = this.ArrayItemComponent;
                    }
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, Object.assign({}, this.props, props));
                }
            }]);

            return ArrayComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
        ArrayComponentHoc = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([hoc, __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [Object, Object])], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
    var pureHoc = function pureHoc(Component) {
        var ArrayPureComponentHoc = function (_React$PureComponent) {
            _inherits(ArrayPureComponentHoc, _React$PureComponent);

            function ArrayPureComponentHoc() {
                _classCallCheck(this, ArrayPureComponentHoc);

                return _possibleConstructorReturn(this, (ArrayPureComponentHoc.__proto__ || Object.getPrototypeOf(ArrayPureComponentHoc)).apply(this, arguments));
            }

            _createClass(ArrayPureComponentHoc, [{
                key: "render",
                value: function render() {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, Object.assign({}, this.props));
                }
            }]);

            return ArrayPureComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);
        ArrayPureComponentHoc = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([hoc], ArrayPureComponentHoc);
        return ArrayPureComponentHoc;
    };
    return Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["branch"])(function (props) {
        var _props$uiSchema = props.uiSchema,
            uiSchema = _props$uiSchema === undefined ? { type: "" } : _props$uiSchema;

        return uiSchema.type === "array";
    }, arrayHoc, pureHoc);
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_act__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_act___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_act__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_tree__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SchemaFormReducer = function () {
    function SchemaFormReducer(initialState) {
        _classCallCheck(this, SchemaFormReducer);

        this.initialState = initialState;
        this.createForm = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("创建一个表单数据");
        this.updateItemData = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更新一个表单数据");
        this.updateItemMeta = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更新一个表单元数据");
        this.addItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("添加一个数据");
        this.removeItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("删除一个数据");
        this.switchItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("元素22交换位置");
        this.moveToItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("元素移位");
        this.validateAll = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("验证全部字段");
    }

    _createClass(SchemaFormReducer, [{
        key: "resolveKeys",
        value: function resolveKeys(state, keys) {
            if (state.hasIn(keys)) {
                return state;
            }
            for (var i = 0, n = keys.length; i < n; i++) {
                var mKeys = [].concat(_toConsumableArray(keys)).splice(0, i + 1);
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
        }
    }, {
        key: "createFormHandle",
        value: function createFormHandle(state, _ref) {
            var key = _ref.key,
                data = _ref.data;

            if (state.has(key)) {
                state = state.remove(key);
            }
            var meta = new __WEBPACK_IMPORTED_MODULE_2__libs_tree__["a" /* TreeMap */](key, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({}));
            var stateData = Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])({
                meta: meta,
                data: Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(data)
            });
            return state.set(key, stateData);
        }
    }, {
        key: "updateItemDataHandle",
        value: function updateItemDataHandle(state, _ref2) {
            var parentKeys = _ref2.parentKeys,
                keys = _ref2.keys,
                data = _ref2.data,
                meta = _ref2.meta;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys)));
            state = this.resolveKeys(state, dataKeys);
            state = state.setIn(dataKeys, Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(data));
            if (meta) {
                state = this.updateItemMetaHandle(state, { parentKeys: parentKeys, keys: keys, meta: meta });
            }
            return state;
        }
    }, {
        key: "addItemDataHandle",
        value: function addItemDataHandle(state, _ref3) {
            var parentKeys = _ref3.parentKeys,
                keys = _ref3.keys,
                data = _ref3.data;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys))),
                metaKeys = parentKeys.concat(["meta"]),
                rootNode = state.getIn(metaKeys),
                childNode = rootNode.containPath(parentKeys.concat(keys));
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
        }
    }, {
        key: "removeItemDataHandle",
        value: function removeItemDataHandle(state, _ref4) {
            var parentKeys = _ref4.parentKeys,
                keys = _ref4.keys,
                index = _ref4.index;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys))),
                metaKeys = parentKeys.concat(["meta"]),
                rootNode = state.getIn(metaKeys),
                childNode = rootNode.addChild(parentKeys.concat(keys).concat([index]));
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
        }
    }, {
        key: "switchItemHandle",
        value: function switchItemHandle(state, _ref5) {
            var parentKeys = _ref5.parentKeys,
                keys = _ref5.keys,
                curIndex = _ref5.curIndex,
                toIndex = _ref5.toIndex;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys))),
                metaKeys = parentKeys.concat(["meta"]),
                rootNode = state.getIn(metaKeys);
            var formItemData = void 0,
                childNode = void 0;
            state = this.resolveKeys(state, dataKeys);
            formItemData = state.getIn(dataKeys);
            if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
                return state;
            }
            var curItemData = formItemData.get(curIndex);
            formItemData = formItemData.set(curIndex, formItemData.get(toIndex));
            formItemData = formItemData.set(toIndex, curItemData);
            childNode = rootNode.containPath(parentKeys.concat(keys).concat([curIndex]));
            if (childNode) {
                childNode.switchOneToOneFromParent(toIndex);
            } else {
                childNode = rootNode.containPath(parentKeys.concat(keys).concat([toIndex]));
                if (childNode) {
                    childNode.switchOneToOneFromParent(curIndex);
                }
            }
            return state.setIn(dataKeys, formItemData);
        }
    }, {
        key: "moveItemHandle",
        value: function moveItemHandle(state, _ref6) {
            var parentKeys = _ref6.parentKeys,
                keys = _ref6.keys,
                curIndex = _ref6.curIndex,
                toIndex = _ref6.toIndex;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys))),
                metaKeys = parentKeys.concat(["meta"]),
                rootNode = state.getIn(metaKeys),
                childNode = rootNode.containPath(parentKeys.concat(keys).concat([curIndex])),
                offset = toIndex > curIndex && false ? 1 : 0;
            var formItemData = void 0;
            state = this.resolveKeys(state, dataKeys);
            formItemData = state.getIn(dataKeys);
            if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
                return state;
            }
            var curItemData = formItemData.get(curIndex);
            formItemData = formItemData.remove(curIndex);
            formItemData = formItemData.insert(toIndex - offset, curItemData);
            if (childNode) {
                childNode.insertToFromParent(toIndex);
            }
            return state.setIn(dataKeys, formItemData);
        }
    }, {
        key: "updateItemMetaHandle",
        value: function updateItemMetaHandle(state, _ref7) {
            var parentKeys = _ref7.parentKeys,
                keys = _ref7.keys,
                data = _ref7.data;

            var metaKeys = parentKeys.concat(["meta"]);
            var rootNode = state.getIn(metaKeys);
            var childNode = rootNode.addChild(parentKeys.concat(keys));
            var value = childNode ? childNode.value : null;
            if (childNode) {
                if (value) {
                    childNode.value = childNode.value.merge(data);
                } else {
                    childNode.value = Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(data);
                }
            }
            var newRoot = Object.assign({}, rootNode, __WEBPACK_IMPORTED_MODULE_2__libs_tree__["a" /* TreeMap */].prototype);
            return state.setIn(metaKeys, newRoot);
        }
    }, {
        key: "actions",
        get: function get() {
            return {
                createForm: this.createForm,
                updateItemData: this.updateItemData,
                updateItemMeta: this.updateItemMeta,
                addItem: this.addItem,
                removeItem: this.removeItem,
                moveToItem: this.moveToItem,
                switchItem: this.switchItem
            };
        }
    }, {
        key: "reducer",
        get: function get() {
            var _createReducer;

            return Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createReducer"])((_createReducer = {}, _defineProperty(_createReducer, this.createForm, this.createFormHandle.bind(this)), _defineProperty(_createReducer, this.updateItemData, this.updateItemDataHandle.bind(this)), _defineProperty(_createReducer, this.updateItemMeta, this.updateItemMetaHandle.bind(this)), _defineProperty(_createReducer, this.addItem, this.addItemDataHandle.bind(this)), _defineProperty(_createReducer, this.removeItem, this.removeItemDataHandle.bind(this)), _defineProperty(_createReducer, this.switchItem, this.switchItemHandle.bind(this)), _defineProperty(_createReducer, this.moveToItem, this.moveItemHandle.bind(this)), _createReducer), this.initialState);
        }
    }]);

    return SchemaFormReducer;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(6);
var _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var ArrayComponentHoc = function (_PureComponent) {
            _inherits(ArrayComponentHoc, _PureComponent);

            function ArrayComponentHoc() {
                _classCallCheck(this, ArrayComponentHoc);

                return _possibleConstructorReturn(this, (ArrayComponentHoc.__proto__ || Object.getPrototypeOf(ArrayComponentHoc)).apply(this, arguments));
            }

            _createClass(ArrayComponentHoc, [{
                key: "render",
                value: function render() {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, Object.assign({}, this.props));
                }
            }]);

            return ArrayComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
        ArrayComponentHoc = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
            validate: function validate(propsCur) {
                return function (props, data) {
                    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var result, timeId, validateResult, error;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        result = { dirty: true, isValid: false, isLoading: false };
                                        timeId = setTimeout(function () {
                                            __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions.updateItemMeta({
                                                parentKeys: props.parentKeys,
                                                keys: props.uiSchema.keys,
                                                data: { isLoading: true, isValid: false, errorText: false }
                                            });
                                        }, 200);
                                        _context.prev = 2;
                                        _context.next = 5;
                                        return props.ajv.validate(props.uiSchema, data);

                                    case 5:
                                        validateResult = _context.sent;

                                        result.isValid = validateResult;

                                        if (validateResult) {
                                            _context.next = 11;
                                            break;
                                        }

                                        error = new Error();

                                        error.errors = props.ajv.errors;
                                        throw error;

                                    case 11:
                                        _context.next = 16;
                                        break;

                                    case 13:
                                        _context.prev = 13;
                                        _context.t0 = _context["catch"](2);

                                        result.errorText = _context.t0.errors ? props.ajv.errorsText(_context.t0.errors, { dataVar: props.getTitle(props).toString() }) : _context.t0.message;

                                    case 16:
                                        _context.prev = 16;

                                        clearTimeout(timeId);
                                        return _context.finish(16);

                                    case 19:
                                        return _context.abrupt("return", result);

                                    case 20:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[2, 13, 16, 19]]);
                    }));
                };
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
            updateItemData: function updateItemData(propsCur) {
                return function (props, data, meta) {
                    __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions.updateItemData({
                        parentKeys: props.parentKeys,
                        keys: props.uiSchema.keys,
                        data: data,
                        meta: meta
                    });
                };
            },
            updateItemMeta: function updateItemMeta(propsCur) {
                return function (props, data, meta) {
                    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        _context2.t0 = __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* schemaFormReducer */].actions;
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
                                        _context2.t5 = {
                                            parentKeys: _context2.t1,
                                            keys: _context2.t2,
                                            data: _context2.t4
                                        };

                                        _context2.t0.updateItemMeta.call(_context2.t0, _context2.t5);

                                    case 11:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2, this);
                    }));
                };
            }
        }))], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var MakeComponentHoc = function (_PureComponent) {
            _inherits(MakeComponentHoc, _PureComponent);

            function MakeComponentHoc() {
                _classCallCheck(this, MakeComponentHoc);

                var _this = _possibleConstructorReturn(this, (MakeComponentHoc.__proto__ || Object.getPrototypeOf(MakeComponentHoc)).apply(this, arguments));

                _this.fieldKey = "hocs";
                return _this;
            }

            _createClass(MakeComponentHoc, [{
                key: "render",
                value: function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions;
                    var type = uiSchema.type;

                    var fieldOptions = getOptions(this.props, "field", type);
                    var hocs = settings.hocs || (uiSchema ? uiSchema.hocs : null) || ["theme", "field", "validate", "array", "temp"];
                    hocs.unshift("utils");
                    var ComponentWithHocs = __WEBPACK_IMPORTED_MODULE_1_recompose__["compose"].apply(undefined, _toConsumableArray([].concat(_toConsumableArray(hocs)).map(function (hoc) {
                        if (typeof hoc !== "string") {
                            return hoc;
                        }
                        return hocFactory.get(hoc)();
                    })))(Component);
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentWithHocs, Object.assign({}, this.props));
                }
            }]);

            return MakeComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

        return MakeComponentHoc;
    };
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        tempField: "temps",
        templates: []
    };

    return function (Component) {
        var TempComponentHoc = function (_PureComponent) {
            _inherits(TempComponentHoc, _PureComponent);

            function TempComponentHoc() {
                _classCallCheck(this, TempComponentHoc);

                return _possibleConstructorReturn(this, (TempComponentHoc.__proto__ || Object.getPrototypeOf(TempComponentHoc)).apply(this, arguments));
            }

            _createClass(TempComponentHoc, [{
                key: "render",
                value: function render() {
                    var _this2 = this;

                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions;
                    var uiSchemaOptions = uiSchema.options,
                        keys = uiSchema.keys;

                    var TempComponents = this.getTemplates();
                    return TempComponents.reduce(function (prev, _ref) {
                        var key = _ref.key,
                            Temp = _ref.Temp;

                        var tempOptions = getOptions(_this2.props, "temp", key),
                            TempWithHoc = __WEBPACK_IMPORTED_MODULE_1_recompose__["compose"].apply(undefined, _toConsumableArray(tempOptions.tempHocs || []))(Temp);
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TempWithHoc, { tempKey: key, ajv: _this2.props.ajv, uiSchema: _this2.props.uiSchema, schemaId: _this2.props.schemaId, arrayLevel: _this2.props.arrayLevel, arrayIndex: _this2.props.arrayIndex, globalOptions: _this2.props.globalOptions, ArrayComponent: _this2.props.ArrayComponent, ArrayItemComponent: _this2.props.ArrayItemComponent, initArrayComponent: _this2.props.initArrayComponent, parentKeys: _this2.props.parentKeys, getTitle: _this2.props.getTitle, getOptions: _this2.props.getOptions, getPathKeys: _this2.props.getPathKeys, children: prev });
                    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, Object.assign({}, this.props)));
                }
            }, {
                key: "getTemplates",
                value: function getTemplates() {
                    var _props2 = this.props,
                        uiSchema = _props2.uiSchema,
                        currentTheme = _props2.currentTheme,
                        getOptions = _props2.getOptions,
                        keys = uiSchema.keys,
                        type = uiSchema.type,
                        typeDefaultOptions = getOptions(this.props, "field", type),
                        TempComponent = [];

                    var template = void 0;
                    if (settings.templates && settings.templates.length > 0) {
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
                                [].concat(_toConsumableArray(template)).reverse().forEach(function (tml, idx) {
                                    getTemplate(tml);
                                });
                                break;
                        }
                    };
                    getTemplate(template);
                    return TempComponent;
                }
            }]);

            return TempComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

        return TempComponentHoc;
    };
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







var fxSelectorCreator = Object(__WEBPACK_IMPORTED_MODULE_4_reselect__["createSelectorCreator"])(__WEBPACK_IMPORTED_MODULE_4_reselect__["defaultMemoize"], __WEBPACK_IMPORTED_MODULE_5_immutable__["is"]);
var maps = {};
/* harmony default export */ __webpack_exports__["a"] = (function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        data: true,
        rootReducerKey: ["schemaForm"]
    };

    var getItemDataHoc = function getItemDataHoc(parentKeys, keys) {
        var getFormItemData = function getFormItemData(state) {
            var dataKeys = settings.rootReducerKey.concat([].concat(_toConsumableArray(parentKeys), ["data"], _toConsumableArray(keys)));
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
            var metaKeys = settings.rootReducerKey.concat([].concat(_toConsumableArray(parentKeys), ["meta"]));
            if (settings.meta && state.hasIn(metaKeys)) {
                var rootNode = state.getIn(metaKeys);
                var childNode = rootNode.containPath([].concat(_toConsumableArray(parentKeys), _toConsumableArray(keys)));
                if (childNode && childNode.value) {
                    return childNode.value;
                }
            }
        };
        return fxSelectorCreator([getFormItemData, getFormItemMeta], function (formItemData, formItemMeta) {
            var rtn = {};
            if (formItemData) {
                rtn.formItemData = formItemData;
            }
            if (formItemMeta) {
                rtn.formItemMeta = formItemMeta;
            }
            return rtn;
        });
    };
    return function (Component) {
        var DataComponentHoc = function (_PureComponent) {
            _inherits(DataComponentHoc, _PureComponent);

            function DataComponentHoc() {
                _classCallCheck(this, DataComponentHoc);

                return _possibleConstructorReturn(this, (DataComponentHoc.__proto__ || Object.getPrototypeOf(DataComponentHoc)).apply(this, arguments));
            }

            _createClass(DataComponentHoc, [{
                key: "render",
                value: function render() {
                    var _ref = this.props.uiSchema || {},
                        _ref$keys = _ref.keys,
                        keys = _ref$keys === undefined ? [] : _ref$keys;

                    var hoc = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(getItemDataHoc(this.props.parentKeys, keys));
                    var ComponentWithHoc = hoc(Component);
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComponentWithHoc, Object.assign({}, this.props));
                }
            }]);

            return DataComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
        DataComponentHoc = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function () {
            return false;
        })], DataComponentHoc);
        return DataComponentHoc;
    };
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__default_props__["a"]; });



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formitem_index__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SchemaForm = function (_PureComponent) {
    _inherits(SchemaForm, _PureComponent);

    function SchemaForm() {
        _classCallCheck(this, SchemaForm);

        return _possibleConstructorReturn(this, (SchemaForm.__proto__ || Object.getPrototypeOf(SchemaForm)).apply(this, arguments));
    }

    _createClass(SchemaForm, [{
        key: "render",
        value: function render() {
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
        }
    }]);

    return SchemaForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
SchemaForm = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([__WEBPACK_IMPORTED_MODULE_2__container__["a" /* hoc */]], SchemaForm);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(3);


var hoc = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["shouldUpdate"])(function () {
  return false;
}), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("utils")(), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("merge")());

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SchemaFormItem = function (_PureComponent) {
    _inherits(SchemaFormItem, _PureComponent);

    function SchemaFormItem(props, context) {
        _classCallCheck(this, SchemaFormItem);

        return _possibleConstructorReturn(this, (SchemaFormItem.__proto__ || Object.getPrototypeOf(SchemaFormItem)).call(this, props, context));
    }

    _createClass(SchemaFormItem, [{
        key: "render",
        value: function render() {
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
                FieldComponentWithHoc = __WEBPACK_IMPORTED_MODULE_2_redux__["compose"].apply(undefined, _toConsumableArray(options.fieldHocs || []))(FieldComponent);
            }
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
        }
    }]);

    return SchemaFormItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
SchemaFormItem = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([__WEBPACK_IMPORTED_MODULE_3__container__["a" /* hoc */], __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [Object, Object])], SchemaFormItem);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(3);


var hoc = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("utils")(), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("make")());

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return props; });
var props = 1;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return models; });
var models = 1;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normal__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__normal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__array__["a"]; });




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NormalField = function (_PureComponent) {
    _inherits(NormalField, _PureComponent);

    function NormalField(props, context) {
        _classCallCheck(this, NormalField);

        return _possibleConstructorReturn(this, (NormalField.__proto__ || Object.getPrototypeOf(NormalField)).call(this, props, context));
    }

    _createClass(NormalField, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                WidgetComponent = _a.WidgetComponent,
                FieldComponent = _a.FieldComponent,
                formItemMeta = _a.formItemMeta,
                formItemData = _a.formItemData,
                extraProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
            var fieldOptions = extraProps.getOptions(this.props, "field", "normal");
            var keys = extraProps.uiSchema.keys;

            var WidgetComponentWithHoc = WidgetComponent;
            if (!WidgetComponent || !keys) {
                return null;
            }
            if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
                WidgetComponentWithHoc = __WEBPACK_IMPORTED_MODULE_2_recompose__["compose"].apply(undefined, _toConsumableArray(fieldOptions.widgetHocs))(WidgetComponent);
            }
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(WidgetComponentWithHoc, Object.assign({ key: keys.join(".") }, extraProps));
        }
    }]);

    return NormalField;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ObjectField = function (_PureComponent) {
    _inherits(ObjectField, _PureComponent);

    function ObjectField() {
        _classCallCheck(this, ObjectField);

        return _possibleConstructorReturn(this, (ObjectField.__proto__ || Object.getPrototypeOf(ObjectField)).apply(this, arguments));
    }

    _createClass(ObjectField, [{
        key: "render",
        value: function render() {
            var uiSchema = this.props.uiSchema,
                _props = this.props,
                arrayIndex = _props.arrayIndex,
                arrayLevel = _props.arrayLevel,
                parentKeys = _props.parentKeys,
                globalOptions = _props.globalOptions,
                ajv = _props.ajv,
                schemaId = _props.schemaId;
            if (uiSchema.children === null || !uiSchema.schemaPath) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_form__["a" /* SchemaForm */], { arrayIndex: arrayIndex, arrayLevel: arrayLevel, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
        }
    }]);

    return ObjectField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var arrayFieldStyle = {
    width: "100%",
    height: "100%"
};
var ArrayField = function (_PureComponent) {
    _inherits(ArrayField, _PureComponent);

    function ArrayField() {
        _classCallCheck(this, ArrayField);

        return _possibleConstructorReturn(this, (ArrayField.__proto__ || Object.getPrototypeOf(ArrayField)).apply(this, arguments));
    }

    _createClass(ArrayField, [{
        key: "renderItem",
        value: function renderItem(idx) {
            var _props = this.props,
                parentKeys = _props.parentKeys,
                globalOptions = _props.globalOptions,
                _props$arrayLevel = _props.arrayLevel,
                arrayLevel = _props$arrayLevel === undefined ? [] : _props$arrayLevel,
                ajv = _props.ajv,
                ArrayItemComponent = _props.ArrayItemComponent,
                uiSchema = this.props.uiSchema;

            if (uiSchema.children === null || !uiSchema.schemaPath) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_form__["a" /* SchemaForm */], { key: idx, arrayIndex: idx, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                uiSchema = _props2.uiSchema,
                formItemData = _props2.formItemData,
                child = [];

            for (var i = 0; i < +formItemData; i++) {
                child.push(this.renderItem(i));
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: arrayFieldStyle }, child || null);
        }
    }]);

    return ArrayField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ajv__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ajv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fx_schema_form_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__factory__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var actions = __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get("schemaForm").actions;
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { rootReducerKey: [], parentKeys: [] };

    return function (Component) {
        var SchemaFormComponentHoc = function (_PureComponent) {
            _inherits(SchemaFormComponentHoc, _PureComponent);

            function SchemaFormComponentHoc(props) {
                _classCallCheck(this, SchemaFormComponentHoc);

                var _this = _possibleConstructorReturn(this, (SchemaFormComponentHoc.__proto__ || Object.getPrototypeOf(SchemaFormComponentHoc)).call(this, props));

                _this._validateAll = _this.validateAll.bind(_this);
                return _this;
            }

            _createClass(SchemaFormComponentHoc, [{
                key: "validateAll",
                value: function validateAll() {
                    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __awaiter */](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var root, validate, $validateBeforeData, $validateAfterData, normalizeDataPath;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        root = this.props.root, validate = this.props.ajv.getSchema(this.props.schemaId), $validateBeforeData = __WEBPACK_IMPORTED_MODULE_3_immutable___default.a.fromJS({
                                            dirty: true,
                                            isValid: true,
                                            isLoading: true
                                        }), $validateAfterData = __WEBPACK_IMPORTED_MODULE_3_immutable___default.a.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = this.normalizeDataPath;

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

                                        throw new Error("\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684" + this.props.schemaId + ";");

                                    case 5:
                                        _context.prev = 5;

                                        root.forEach(function (node) {
                                            if (node.value) {
                                                return node.value.merge($validateBeforeData);
                                            }
                                            return $validateBeforeData;
                                        }, true);
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            data: root.value
                                        });
                                        _context.next = 10;
                                        return validate(this.props.data.toJS());

                                    case 10:
                                        root.value = root.value.merge({
                                            isValid: true
                                        });
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            data: root.value
                                        });
                                        _context.next = 22;
                                        break;

                                    case 14:
                                        _context.prev = 14;
                                        _context.t0 = _context["catch"](5);

                                        if (_context.t0 instanceof __WEBPACK_IMPORTED_MODULE_4_ajv__["ValidationError"]) {
                                            _context.next = 18;
                                            break;
                                        }

                                        return _context.abrupt("return", console.error(_context.t0));

                                    case 18:
                                        if (root) {
                                            _context.next = 20;
                                            break;
                                        }

                                        return _context.abrupt("return");

                                    case 20:
                                        _context.t0.errors.forEach(function (element) {
                                            var dataKeys = root.getCurrentKeys().concat(normalizeDataPath(_this2.props.schemaId, element.dataPath));
                                            var childNode = root.addChild(dataKeys, __WEBPACK_IMPORTED_MODULE_3_immutable___default.a.fromJS({}));
                                            if (childNode) {
                                                childNode.value = childNode.value.merge($validateAfterData).merge({
                                                    isValid: false,
                                                    errorText: element.message
                                                });
                                            }
                                        });
                                        root.value = root.value.merge({
                                            isValid: false,
                                            errors: _context.t0.errors
                                        });

                                    case 22:
                                        _context.prev = 22;

                                        root.forEach(function (node) {
                                            if (node.value) {
                                                return node.value.merge($validateAfterData);
                                            }
                                            return node.value;
                                        }, true);
                                        console.log(root.value);
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            data: root.value
                                        });
                                        return _context.finish(22);

                                    case 27:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[5, 14, 22, 27]]);
                    }));
                }
            }, {
                key: "normalizeDataPath",
                value: function normalizeDataPath(schemaId, dataPath) {
                    var dataKeys = dataPath.substring(1).split("/");
                    dataKeys = dataKeys.map(function (key, index) {
                        if (Number.isInteger(+key)) {
                            var keys = dataKeys.slice(0, index);
                            keys.unshift(schemaId);
                            if (__WEBPACK_IMPORTED_MODULE_5_fx_schema_form_core__["schemaKeysFactory"].has(keys.join("/"))) {
                                var schema = __WEBPACK_IMPORTED_MODULE_5_fx_schema_form_core__["schemaFieldFactory"].get(__WEBPACK_IMPORTED_MODULE_5_fx_schema_form_core__["schemaKeysFactory"].get(keys.join("/")));
                                if (schema.type === "array") {
                                    return +key;
                                }
                            }
                        }
                        return key;
                    });
                    return dataKeys;
                }
            }, {
                key: "render",
                value: function render() {
                    var _props = this.props,
                        errors = _props.errors,
                        _props$isValid = _props.isValid,
                        isValid = _props$isValid === undefined ? false : _props$isValid,
                        _props$isValidating = _props.isValidating,
                        isValidating = _props$isValidating === undefined ? false : _props$isValidating;

                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, Object.assign({ validateAll: this._validateAll }, this.props)), isValid.toString() + isValidating.toString(), isValid ? null : errors ? errors.map(function (e) {
                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { key: e.get("dataPath") }, e.get("message"));
                    }) : null);
                }
            }]);

            return SchemaFormComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);
        SchemaFormComponentHoc = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
            var dataKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["data"]),
                metaKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["meta"]),
                root = state.getIn(metaKeys);
            return {
                data: state.getIn(dataKeys),
                root: root,
                isValid: root.value.get("isValid"),
                errors: root.value.get("errors"),
                isValidating: root.value.get("isLoading")
            };
        }), __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [Object])], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
});

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=index.map