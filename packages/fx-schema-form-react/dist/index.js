(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("redux-act"), require("reselect"), require("redux"), require("prop-types"), require("ajv"));
	else if(typeof define === 'function' && define.amd)
		define("SchemaFormReact", ["react", "recompose", "immutable", "fx-schema-form-core", "react-redux", "resolve-pathname", "redux-act", "reselect", "redux", "prop-typese", "ajv"], factory);
	else if(typeof exports === 'object')
		exports["SchemaFormReact"] = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("redux-act"), require("reselect"), require("redux"), require("prop-types"), require("ajv"));
	else
		root["SchemaFormReact"] = factory(root["React"], root["recompose"], root["Immutable"], root["SchemaFormCore"], root["react-redux"], root["resolve-pathname"], root["redux-act"], root["reselect"], root["Redux"], root["prop-types"], root["Ajv"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_41__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeFactory = exports.hocFactory = exports.reducerFactory = undefined;

var _fxSchemaFormCore = __webpack_require__(5);

var _hocs = __webpack_require__(12);

var _reducer = __webpack_require__(6);

var reducerFactory = exports.reducerFactory = new _fxSchemaFormCore.BaseFactory();
var hocFactory = exports.hocFactory = new _fxSchemaFormCore.BaseFactory();
var themeFactory = exports.themeFactory = new _fxSchemaFormCore.BaseFactory();
hocFactory.add("utils", _hocs.utils.bind(_hocs.utils, hocFactory));
hocFactory.add("merge", _hocs.merge.bind(_hocs.merge, hocFactory));
hocFactory.add("field", _hocs.field.bind(_hocs.field, hocFactory));
hocFactory.add("theme", _hocs.theme.bind(_hocs.theme, hocFactory));
hocFactory.add("array", _hocs.array.bind(_hocs.array, hocFactory));
hocFactory.add("validate", _hocs.validate.bind(_hocs.validate, hocFactory));
hocFactory.add("make", _hocs.make.bind(_hocs.make, hocFactory));
hocFactory.add("temp", _hocs.temp.bind(_hocs.temp, hocFactory));
hocFactory.add("data", _hocs.data.bind(_hocs.data, hocFactory));
reducerFactory.add("schemaForm", _reducer.schemaFormReducer);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaFormReducer = undefined;

var _immutable = __webpack_require__(3);

var _schema = __webpack_require__(19);

var schemaFormReducer = exports.schemaFormReducer = new _schema.SchemaFormReducer((0, _immutable.fromJS)({}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaForm = undefined;

var _component = __webpack_require__(28);

var _default = __webpack_require__(10);

_component.SchemaForm.propTypes = Object.assign({}, _default.DefaultPropsTypeCheck);
exports.SchemaForm = _component.SchemaForm;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeMap = exports.TreeMap = function () {
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
            var curNode = this;
            var child = null;
            if (!keys.length) {
                return this;
            }
            keys = [].concat(_toConsumableArray(keys));
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
        key: "insertToFromParent",
        value: function insertToFromParent(toIndex) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultPropsTypeCheck = undefined;

var _propTypes = __webpack_require__(34);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultPropsTypeCheck = exports.DefaultPropsTypeCheck = {
    schemaId: _propTypes2.default.string.isRequired,
    uiSchema: _propTypes2.default.object,
    parentKeys: _propTypes2.default.array.isRequired,
    globalOptions: _propTypes2.default.object.isRequired,
    ajv: _propTypes2.default.object.isRequired,
    arrayIndex: _propTypes2.default.number,
    arrayLevel: _propTypes2.default.array,
    formItemData: _propTypes2.default.any,
    formItemMeta: _propTypes2.default.any,
    ArrayItemComponent: _propTypes2.default.any
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fxSchemaFormCore = __webpack_require__(5);

var _factory = __webpack_require__(4);

var _components = __webpack_require__(27);

var _models = __webpack_require__(35);

var _fields = __webpack_require__(36);

var _tree = __webpack_require__(8);

var _dec = __webpack_require__(40);

var _dec2 = _interopRequireDefault(_dec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = _models.models;
var defaultTheme = {
    tempFactory: new _fxSchemaFormCore.BaseFactory(),
    fieldFactory: new _fxSchemaFormCore.BaseFactory(),
    widgetFactory: new _fxSchemaFormCore.BaseFactory()
};
defaultTheme.fieldFactory.add("default", _fields.NormalField);
defaultTheme.fieldFactory.add("object", _fields.ObjectField);
defaultTheme.fieldFactory.add("array", _fields.ArrayField);
_factory.themeFactory.add("default", defaultTheme);
_factory.hocFactory.add("schemaFormDec", _dec2.default.bind(_dec2.default, _factory.hocFactory));
exports.default = {
    themeFactory: _factory.themeFactory,
    defaultTheme: defaultTheme,
    schemaFormDec: _dec2.default,
    TreeMap: _tree.TreeMap,
    reducerFactory: _factory.reducerFactory,
    SchemaForm: _components.SchemaForm,
    hocFactory: _factory.hocFactory
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(13);

Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_merge).default;
  }
});

var _utils = __webpack_require__(14);

Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utils).default;
  }
});

var _theme = __webpack_require__(16);

Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_theme).default;
  }
});

var _field = __webpack_require__(17);

Object.defineProperty(exports, "field", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_field).default;
  }
});

var _array = __webpack_require__(18);

Object.defineProperty(exports, "array", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_array).default;
  }
});

var _validate = __webpack_require__(22);

Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_validate).default;
  }
});

var _make = __webpack_require__(23);

Object.defineProperty(exports, "make", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_make).default;
  }
});

var _temp = __webpack_require__(24);

Object.defineProperty(exports, "temp", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_temp).default;
  }
});

var _data = __webpack_require__(25);

Object.defineProperty(exports, "data", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_data).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fxSchemaFormCore = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var totalTime = 0,
    timeid = void 0;

exports.default = function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var MergeComponentHoc = function (_PureComponent) {
            _inherits(MergeComponentHoc, _PureComponent);

            function MergeComponentHoc(props) {
                _classCallCheck(this, MergeComponentHoc);

                var _this = _possibleConstructorReturn(this, (MergeComponentHoc.__proto__ || Object.getPrototypeOf(MergeComponentHoc)).call(this, props));

                var uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : undefined;
                if (uiSchema) {
                    uiSchema.keys = uiSchema.originKeys;
                }
                var merge = new _fxSchemaFormCore.MergeLib(props.ajv, props.schemaId, uiSchema, props.uiSchemas);
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
                        extraProps = tslib_1.__rest(_a, ["uiSchemas", "uiSchema"]);
                    return _react2.default.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps));
                }
            }]);

            return MergeComponentHoc;
        }(_react.PureComponent);

        return MergeComponentHoc;
    };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fxSchemaFormCore = __webpack_require__(5);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

var _resolvePathname = __webpack_require__(15);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
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
                    return _react2.default.createElement(Component, Object.assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions, normalizeDataPath: this.normalizeDataPath, getRequiredKeys: this.getRequiredKeys }, this.props));
                }
            }, {
                key: "getRequiredKeys",
                value: function getRequiredKeys(props) {
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
                }
            }, {
                key: "normalizeDataPath",
                value: function normalizeDataPath(schemaId, dataPath) {
                    var dataKeys = dataPath.replace(/^\//g, "").split("/");
                    dataKeys = dataKeys.map(function (key, index) {
                        if (Number.isInteger(+key)) {
                            var keys = dataKeys.slice(0, index);
                            keys.unshift(schemaId);
                            if (_fxSchemaFormCore.schemaKeysFactory.has(keys.join("/"))) {
                                var schema = _fxSchemaFormCore.schemaFieldFactory.get(_fxSchemaFormCore.schemaKeysFactory.get(keys.join("/")));
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
                key: "getOptions",
                value: function getOptions(props, category, field) {
                    var _props$uiSchema = props.uiSchema,
                        uiSchema = _props$uiSchema === undefined ? {} : _props$uiSchema,
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

                    for (var _len = arguments.length, extraSettings = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                        extraSettings[_key - 3] = arguments[_key];
                    }

                    optionsArray = optionsArray.concat(extraSettings);
                    var opts = optionsArray.reverse().reduce(function (prev, next) {
                        if (next) {
                            if (!_immutable2.default.Map.isMap(next)) {
                                next = _immutable2.default.fromJS(next);
                            }
                            return next.merge(prev);
                        }
                        return prev;
                    }, _immutable2.default.fromJS({})).toJS();
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
                        return keyTitle !== undefined ? keyTitle.toString() : "";
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
                    var keysResolve = (0, _resolvePathname2.default)(path, keysCopy.join("/")).split("/");
                    keysResolve.shift();
                    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                        keysResolve.pop();
                    }
                    return keysResolve;
                }
            }]);

            return ComponentHoc;
        }(_react.PureComponent);

        return ComponentHoc;
    };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
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
                    if (_factory.themeFactory.has(theme || "default")) {
                        nsFactory = _factory.themeFactory.get(theme || "default");
                    } else {
                        throw new Error("\u6CA1\u6709\u627E\u5230" + (theme || "default") + "\u7684\u6837\u5F0F\uFF01");
                    }
                    return _react2.default.createElement(Component, Object.assign({ currentTheme: nsFactory }, this.props));
                }
            }]);

            return ThemeComponentHoc;
        }(_react.PureComponent);

        return ThemeComponentHoc;
    };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
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
                    return _react2.default.createElement(Component, Object.assign({}, this.props, { FieldComponent: FieldComponent, WidgetComponent: WidgetComponent }));
                }
            }]);

            return FieldComponentHoc;
        }(_react.PureComponent);

        return FieldComponentHoc;
    };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _reducer = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hoc = (0, _recompose.compose)((0, _recompose.withHandlers)({
        addItem: function addItem(propsCur) {
            return function (props, data) {
                return tslib_1.__awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

                                    if (!(propsCur.uiSchema && propsCur.uiSchema.items)) {
                                        _context.next = 20;
                                        break;
                                    }

                                    _context.t1 = propsCur.uiSchema.items.type;
                                    _context.next = _context.t1 === "object" ? 14 : _context.t1 === "array" ? 17 : 19;
                                    break;

                                case 14:
                                    if (!defaultValue.defaultData) {
                                        defaultValue.defaultData = data || {};
                                    }
                                    Object.assign(defaultValue.defaultData, data);
                                    return _context.abrupt("break", 20);

                                case 17:
                                    if (!defaultValue.defaultData) {
                                        defaultValue.defaultData = data || [];
                                    }
                                    return _context.abrupt("break", 20);

                                case 19:
                                    return _context.abrupt("break", 20);

                                case 20:
                                    _reducer.schemaFormReducer.actions.addItem({
                                        parentKeys: props.parentKeys,
                                        keys: props.uiSchema.keys,
                                        data: defaultValue.defaultData
                                    });
                                    return _context.finish(9);

                                case 22:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 6, 9, 22]]);
                }));
            };
        },
        removeItem: function removeItem(propsCur) {
            return function (parentKeys, keys, index) {
                _reducer.schemaFormReducer.actions.removeItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    index: index
                });
            };
        },
        moveItem: function moveItem(propsCur) {
            return function (parentKeys, keys, curIndex, toIndex) {
                _reducer.schemaFormReducer.actions.moveToItem({
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
                    extraProps = tslib_1.__rest(props, ["ArrayComponent", "ArrayItemComponent"]),
                    uiSchema = props.uiSchema;

                if (uiSchema.type === "array") {
                    return ArrayComponent ? _react2.default.createElement(ArrayComponent, Object.assign({}, extraProps)) : null;
                }
                return ArrayItemComponent ? _react2.default.createElement(ArrayItemComponent, Object.assign({}, extraProps)) : null;
            };
        }
    }));
    var arrayHoc = function arrayHoc(Component) {
        var ArrayComponentHoc = function (_PureComponent) {
            _inherits(ArrayComponentHoc, _PureComponent);

            function ArrayComponentHoc(props, context) {
                _classCallCheck(this, ArrayComponentHoc);

                var _this = _possibleConstructorReturn(this, (ArrayComponentHoc.__proto__ || Object.getPrototypeOf(ArrayComponentHoc)).call(this, props, context));

                _this.initArrayComponents();
                return _this;
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
                    return _react2.default.createElement(Component, Object.assign({}, this.props, props));
                }
            }]);

            return ArrayComponentHoc;
        }(_react.PureComponent);
        ArrayComponentHoc = tslib_1.__decorate([hoc, tslib_1.__metadata("design:paramtypes", [Object, Object])], ArrayComponentHoc);
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
                    return _react2.default.createElement(Component, Object.assign({}, this.props));
                }
            }]);

            return ArrayPureComponentHoc;
        }(_react2.default.PureComponent);
        ArrayPureComponentHoc = tslib_1.__decorate([hoc], ArrayPureComponentHoc);
        return ArrayPureComponentHoc;
    };
    return (0, _recompose.branch)(function (props) {
        var _props$uiSchema = props.uiSchema,
            uiSchema = _props$uiSchema === undefined ? { type: "" } : _props$uiSchema;

        return uiSchema.type === "array";
    }, arrayHoc, pureHoc);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SchemaFormReducer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reduxAct = __webpack_require__(20);

var _immutable = __webpack_require__(3);

var _reducer = __webpack_require__(21);

var _tree = __webpack_require__(8);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var b = _reducer.a;

var SchemaFormReducer = exports.SchemaFormReducer = function () {
    function SchemaFormReducer(initialState) {
        _classCallCheck(this, SchemaFormReducer);

        this.initialState = initialState;
        this.createForm = (0, _reduxAct.createAction)("创建一个表单数据");
        this.updateItemData = (0, _reduxAct.createAction)("更新一个表单数据");
        this.updateItemMeta = (0, _reduxAct.createAction)("更新一个表单元数据");
        this.addItem = (0, _reduxAct.createAction)("添加一个数据");
        this.removeItem = (0, _reduxAct.createAction)("删除一个数据");
        this.moveToItem = (0, _reduxAct.createAction)("元素移位");
        this.removeItemData = (0, _reduxAct.createAction)("删除一个字段的数据以及meta数据");
    }

    _createClass(SchemaFormReducer, [{
        key: "init",
        value: function init(store) {
            for (var key in this.actions) {
                if (this.actions.hasOwnProperty(key)) {
                    var action = this.actions[key];
                    if (!action.assigned()) {
                        action.assignTo(store);
                    }
                }
            }
        }
    }, {
        key: "removeItemDataMetaHandle",
        value: function removeItemDataMetaHandle(state, _ref) {
            var parentKeys = _ref.parentKeys,
                keys = _ref.keys,
                meta = _ref.meta;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys)));
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
        }
    }, {
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
                            state = state.setIn(mKeys, (0, _immutable.List)());
                        } else {
                            state = state.setIn(mKeys, (0, _immutable.Map)());
                        }
                    }
                } else if (i < n) {
                    var data = state.getIn(mKeys);
                    if (!_immutable.Map.isMap(data) && !_immutable.List.isList(data)) {
                        if (keys[i + 1].constructor === Number) {
                            state = state.setIn(mKeys, (0, _immutable.List)());
                        } else {
                            state = state.setIn(mKeys, (0, _immutable.Map)());
                        }
                    }
                }
            }
            return state;
        }
    }, {
        key: "createFormHandle",
        value: function createFormHandle(state, _ref2) {
            var key = _ref2.key,
                data = _ref2.data;

            if (state.has(key)) {
                state = state.remove(key);
            }
            var meta = new _tree.TreeMap(key, (0, _immutable.fromJS)({}));
            var stateData = (0, _immutable.Map)({
                meta: meta,
                data: (0, _immutable.fromJS)(data)
            });
            return state.set(key, stateData);
        }
    }, {
        key: "updateItemDataHandle",
        value: function updateItemDataHandle(state, _ref3) {
            var parentKeys = _ref3.parentKeys,
                keys = _ref3.keys,
                data = _ref3.data,
                meta = _ref3.meta;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys)));
            state = this.resolveKeys(state, dataKeys);
            state = state.setIn(dataKeys, (0, _immutable.fromJS)(data));
            if (meta) {
                state = this.updateItemMetaHandle(state, { parentKeys: parentKeys, keys: keys, meta: meta });
            }
            return state;
        }
    }, {
        key: "addItemDataHandle",
        value: function addItemDataHandle(state, _ref4) {
            var parentKeys = _ref4.parentKeys,
                keys = _ref4.keys,
                data = _ref4.data;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys))),
                metaKeys = parentKeys.concat(["meta"]),
                rootNode = state.getIn(metaKeys),
                childNode = rootNode.containPath(keys);
            var formItemData = void 0;
            state = this.resolveKeys(state, dataKeys);
            formItemData = state.getIn(dataKeys) || (0, _immutable.List)();
            formItemData = formItemData.push((0, _immutable.fromJS)(data));
            if (childNode && childNode.value) {
                childNode.value = childNode.value.merge({
                    collapsing: false
                });
            }
            return state.setIn(dataKeys, formItemData);
        }
    }, {
        key: "removeItemHandle",
        value: function removeItemHandle(state, _ref5) {
            var parentKeys = _ref5.parentKeys,
                keys = _ref5.keys,
                index = _ref5.index;

            var dataKeys = parentKeys.concat(["data"].concat(_toConsumableArray(keys))),
                metaKeys = parentKeys.concat(["meta"]),
                rootNode = state.getIn(metaKeys),
                childNode = rootNode.addChild(keys.concat([index]));
            var formItemData = void 0;
            state = this.resolveKeys(state, dataKeys);
            formItemData = state.getIn(dataKeys);
            if (!formItemData || !_immutable.List.isList(formItemData)) {
                return state;
            }
            if (childNode) {
                childNode.removeFromParent();
            }
            return state.setIn(dataKeys, formItemData.remove(index));
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
        }
    }, {
        key: "updateItemMetaHandle",
        value: function updateItemMetaHandle(state, _ref7) {
            var parentKeys = _ref7.parentKeys,
                keys = _ref7.keys,
                meta = _ref7.meta,
                noChange = _ref7.noChange;

            var metaKeys = parentKeys.concat(["meta"]);
            var rootNode = state.getIn(metaKeys);
            var childNode = rootNode.addChild(keys);
            var value = childNode ? childNode.value : null;
            if (childNode) {
                if (value) {
                    childNode.value = childNode.value.merge(meta);
                } else {
                    childNode.value = (0, _immutable.fromJS)(meta);
                }
            }
            if (noChange) {
                return state;
            }
            var newRoot = new _tree.TreeMap(rootNode.getKey(), rootNode.value);
            newRoot.children = rootNode.children;
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
                removeItemData: this.removeItemData
            };
        }
    }, {
        key: "reducer",
        get: function get() {
            var _createReducer;

            return (0, _reduxAct.createReducer)((_createReducer = {}, _defineProperty(_createReducer, this.createForm, this.createFormHandle.bind(this)), _defineProperty(_createReducer, this.updateItemData, this.updateItemDataHandle.bind(this)), _defineProperty(_createReducer, this.updateItemMeta, this.updateItemMetaHandle.bind(this)), _defineProperty(_createReducer, this.addItem, this.addItemDataHandle.bind(this)), _defineProperty(_createReducer, this.removeItem, this.removeItemHandle.bind(this)), _defineProperty(_createReducer, this.moveToItem, this.moveItemHandle.bind(this)), _defineProperty(_createReducer, this.removeItemData, this.removeItemDataMetaHandle.bind(this)), _createReducer), this.initialState);
        }
    }]);

    return SchemaFormReducer;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = exports.a = 1;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _reducer = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
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
                    return _react2.default.createElement(Component, Object.assign({}, this.props));
                }
            }]);

            return ArrayComponentHoc;
        }(_react.PureComponent);
        ArrayComponentHoc = tslib_1.__decorate([(0, _recompose.compose)((0, _recompose.withHandlers)({
            validate: function validate(propsCur) {
                return function (props, data) {
                    return tslib_1.__awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var result, timeId, validateResult, error;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        result = { dirty: true, isValid: false, isLoading: false };
                                        timeId = setTimeout(function () {
                                            _reducer.schemaFormReducer.actions.updateItemMeta({
                                                parentKeys: props.parentKeys,
                                                keys: props.uiSchema.keys,
                                                meta: { isLoading: true, isValid: false, errorText: false }
                                            });
                                        }, 200);
                                        _context.prev = 2;
                                        validateResult = void 0;

                                        if (!props.uiSchema.$id) {
                                            _context.next = 10;
                                            break;
                                        }

                                        _context.next = 7;
                                        return props.ajv.getSchema(props.uiSchema.$id)(data);

                                    case 7:
                                        validateResult = _context.sent;
                                        _context.next = 13;
                                        break;

                                    case 10:
                                        _context.next = 12;
                                        return props.ajv.validate(props.uiSchema, data);

                                    case 12:
                                        validateResult = _context.sent;

                                    case 13:
                                        result.isValid = validateResult;

                                        if (validateResult) {
                                            _context.next = 18;
                                            break;
                                        }

                                        error = new Error();

                                        error.errors = props.ajv.errors;
                                        throw error;

                                    case 18:
                                        _context.next = 23;
                                        break;

                                    case 20:
                                        _context.prev = 20;
                                        _context.t0 = _context["catch"](2);

                                        result.errorText = _context.t0.errors ? props.ajv.errorsText(_context.t0.errors, { dataVar: props.getTitle(props).toString() }) : _context.t0.message;

                                    case 23:
                                        _context.prev = 23;

                                        clearTimeout(timeId);
                                        return _context.finish(23);

                                    case 26:
                                        return _context.abrupt("return", result);

                                    case 27:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[2, 20, 23, 26]]);
                    }));
                };
            }
        }), (0, _recompose.withHandlers)({
            updateItemData: function updateItemData(propsCur) {
                return function (props, data, meta) {
                    _reducer.schemaFormReducer.actions.updateItemData({
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
                    return tslib_1.__awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        _context2.t0 = _reducer.schemaFormReducer.actions;
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
            }
        }))], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (Component) {
        var MakeComponentHoc = function (_PureComponent) {
            _inherits(MakeComponentHoc, _PureComponent);

            function MakeComponentHoc() {
                _classCallCheck(this, MakeComponentHoc);

                return _possibleConstructorReturn(this, (MakeComponentHoc.__proto__ || Object.getPrototypeOf(MakeComponentHoc)).apply(this, arguments));
            }

            _createClass(MakeComponentHoc, [{
                key: "render",
                value: function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions;
                    var type = uiSchema.type,
                        field = uiSchema.field;

                    var fieldOptions = getOptions(this.props, "field", field || type, _immutable2.default.fromJS(uiSchema.hocs ? { hocs: uiSchema.hocs } : {}), _immutable2.default.fromJS(settings || {}));
                    var hocs = fieldOptions.hocs || ["theme", "field", "validate", "array", "temp"];
                    hocs.unshift("utils");
                    var ComponentWithHocs = _recompose.compose.apply(undefined, _toConsumableArray([].concat(_toConsumableArray(hocs)).map(function (hoc) {
                        if (typeof hoc !== "string") {
                            return hoc;
                        }
                        return hocFactory.get(hoc)();
                    })))(Component);
                    return _react2.default.createElement(ComponentWithHocs, Object.assign({}, this.props));
                }
            }]);

            return MakeComponentHoc;
        }(_react.PureComponent);

        return MakeComponentHoc;
    };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (hocFactory) {
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
                            TempWithHoc = _recompose.compose.apply(undefined, _toConsumableArray(tempOptions.tempHocs || []))(Temp);
                        return _react2.default.createElement(TempWithHoc, { tempKey: key, ajv: _this2.props.ajv, uiSchema: _this2.props.uiSchema, schemaId: _this2.props.schemaId, arrayLevel: _this2.props.arrayLevel, arrayIndex: _this2.props.arrayIndex, globalOptions: _this2.props.globalOptions, ArrayComponent: _this2.props.ArrayComponent, ArrayItemComponent: _this2.props.ArrayItemComponent, initArrayComponent: _this2.props.initArrayComponent, parentKeys: _this2.props.parentKeys, getTitle: _this2.props.getTitle, getOptions: _this2.props.getOptions, getPathKeys: _this2.props.getPathKeys, children: prev });
                    }, _react2.default.createElement(Component, Object.assign({}, this.props)));
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
        }(_react.PureComponent);

        return TempComponentHoc;
    };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _reactRedux = __webpack_require__(9);

var _reselect = __webpack_require__(26);

var _immutable = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fxSelectorCreator = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _immutable.is);

exports.default = function (hocFactory) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        data: true
    };

    var getItemDataHoc = function getItemDataHoc(parentKeys, rootReducerKey, keys) {
        var getFormItemData = function getFormItemData(state) {
            var dataKeys = [].concat(_toConsumableArray(rootReducerKey), _toConsumableArray(parentKeys), ["data"], _toConsumableArray(keys));
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
            var metaKeys = [].concat(_toConsumableArray(rootReducerKey), _toConsumableArray(parentKeys), ["meta"]);
            if (settings.meta && state.hasIn(metaKeys)) {
                var rootNode = state.getIn(metaKeys),
                    childNode = rootNode.containPath([].concat(_toConsumableArray(keys)));
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
            var metaKeys = [].concat(_toConsumableArray(rootReducerKey), _toConsumableArray(parentKeys), ["meta"]);
            var rootNode = state.getIn(metaKeys);
            var childNode = rootNode.containPath([].concat(_toConsumableArray(keys)));
            if (childNode) {
                return childNode;
            }
            return rootNode.addChild([].concat(_toConsumableArray(keys)));
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

                return _possibleConstructorReturn(this, (DataComponentHoc.__proto__ || Object.getPrototypeOf(DataComponentHoc)).apply(this, arguments));
            }

            _createClass(DataComponentHoc, [{
                key: "render",
                value: function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions,
                        _ref = this.props.uiSchema || {},
                        _ref$keys = _ref.keys,
                        keys = _ref$keys === undefined ? [] : _ref$keys,
                        options = getOptions(this.props, "hoc", "data");

                    if (!options.rootReducerKey || options.rootReducerKey.constructor !== Array) {
                        console.error("dataHoc missing property rootReducerKey.should be a Array.");
                    }
                    var hoc = (0, _reactRedux.connect)(getItemDataHoc(this.props.parentKeys, options.rootReducerKey, keys)),
                        ComponentWithHoc = hoc(Component);
                    return _react2.default.createElement(ComponentWithHoc, Object.assign({}, this.props));
                }
            }]);

            return DataComponentHoc;
        }(_react.PureComponent);
        DataComponentHoc = tslib_1.__decorate([(0, _recompose.shouldUpdate)(function () {
            return false;
        })], DataComponentHoc);
        return DataComponentHoc;
    };
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(7);

Object.defineProperty(exports, "SchemaForm", {
  enumerable: true,
  get: function get() {
    return _form.SchemaForm;
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SchemaForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(29);

var _index = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
                extraProps = tslib_1.__rest(_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
            var formItemList = mergeSchemaList ? mergeSchemaList.map(function (uiScehma, idx) {
                var arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
                return _react2.default.createElement(_index.SchemaFormItem, Object.assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
            }) : [];
            if (RootComponent) {
                return _react2.default.createElement(RootComponent, null, formItemList, children);
            }
            return _react2.default.createElement("div", null, formItemList, children);
        }
    }]);

    return SchemaForm;
}(_react.PureComponent);
exports.SchemaForm = SchemaForm = tslib_1.__decorate([_container.hoc], SchemaForm);
exports.SchemaForm = SchemaForm;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoc = undefined;

var _recompose = __webpack_require__(1);

var _factory = __webpack_require__(4);

var hoc = exports.hoc = (0, _recompose.compose)((0, _recompose.shouldUpdate)(function () {
  return false;
}), _factory.hocFactory.get("utils")(), _factory.hocFactory.get("merge")());

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaFormItem = undefined;

var _component = __webpack_require__(31);

var _default = __webpack_require__(10);

_component.SchemaFormItem.propTypes = Object.assign({}, _default.DefaultPropsTypeCheck);
exports.SchemaFormItem = _component.SchemaFormItem;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SchemaFormItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(32);

var _container = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SchemaFormItem = function (_PureComponent) {
    _inherits(SchemaFormItem, _PureComponent);

    function SchemaFormItem() {
        _classCallCheck(this, SchemaFormItem);

        return _possibleConstructorReturn(this, (SchemaFormItem.__proto__ || Object.getPrototypeOf(SchemaFormItem)).apply(this, arguments));
    }

    _createClass(SchemaFormItem, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                FieldComponent = _a.FieldComponent,
                uiSchema = _a.uiSchema,
                extraProps = tslib_1.__rest(_a, ["FieldComponent", "uiSchema"]);
            var options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
            var FieldComponentWithHoc = FieldComponent;
            if (!FieldComponent) {
                console.log(uiSchema, "没有找到匹配的field");
                return null;
            }
            if (options.fieldHocs && options.fieldHocs.length) {
                FieldComponentWithHoc = _redux.compose.apply(undefined, _toConsumableArray(options.fieldHocs || []))(FieldComponent);
            }
            return _react2.default.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
        }
    }]);

    return SchemaFormItem;
}(_react.PureComponent);
exports.SchemaFormItem = SchemaFormItem = tslib_1.__decorate([_container.hoc], SchemaFormItem);
exports.SchemaFormItem = SchemaFormItem;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoc = undefined;

var _recompose = __webpack_require__(1);

var _factory = __webpack_require__(4);

var hoc = exports.hoc = (0, _recompose.compose)(_factory.hocFactory.get("utils")(), _factory.hocFactory.get("make")());

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var models = exports.models = 1;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normal = __webpack_require__(37);

Object.defineProperty(exports, "NormalField", {
  enumerable: true,
  get: function get() {
    return _normal.NormalField;
  }
});

var _object = __webpack_require__(38);

Object.defineProperty(exports, "ObjectField", {
  enumerable: true,
  get: function get() {
    return _object.ObjectField;
  }
});

var _array = __webpack_require__(39);

Object.defineProperty(exports, "ArrayField", {
  enumerable: true,
  get: function get() {
    return _array.ArrayField;
  }
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NormalField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NormalField = exports.NormalField = function (_PureComponent) {
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
                extraProps = tslib_1.__rest(_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
            var fieldOptions = extraProps.getOptions(this.props, "field", "normal");
            var keys = extraProps.uiSchema.keys;

            var WidgetComponentWithHoc = WidgetComponent;
            if (!WidgetComponent || !keys) {
                return null;
            }
            if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
                WidgetComponentWithHoc = _recompose.compose.apply(undefined, _toConsumableArray(fieldOptions.widgetHocs))(WidgetComponent);
            }
            return _react2.default.createElement(WidgetComponentWithHoc, Object.assign({ key: keys.join(".") }, extraProps));
        }
    }]);

    return NormalField;
}(_react.PureComponent);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObjectField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(7);

var _recompose = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectField = exports.ObjectField = function (_PureComponent) {
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
                schemaId = _props.schemaId,
                getOptions = _props.getOptions,
                options = getOptions(this.props, "field", "object");
            var SchemaFormWithHoc = _form.SchemaForm;
            if (uiSchema.children === null || !uiSchema.schemaPath) {
                return null;
            }
            if (options.formHocs && options.formHocs.constructor === Array) {
                SchemaFormWithHoc = _recompose.compose.apply(undefined, _toConsumableArray(options.formHocs))(_form.SchemaForm);
            }
            return _react2.default.createElement(SchemaFormWithHoc, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
        }
    }]);

    return ObjectField;
}(_react.PureComponent);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrayField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _form = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

        return _possibleConstructorReturn(this, (ArrayFieldComponent.__proto__ || Object.getPrototypeOf(ArrayFieldComponent)).apply(this, arguments));
    }

    _createClass(ArrayFieldComponent, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { style: arrayFieldStyle }, this.props.children);
        }
    }]);

    return ArrayFieldComponent;
}(_react2.default.PureComponent);

var ArrayField = exports.ArrayField = function (_PureComponent) {
    _inherits(ArrayField, _PureComponent);

    function ArrayField(props) {
        _classCallCheck(this, ArrayField);

        var _this2 = _possibleConstructorReturn(this, (ArrayField.__proto__ || Object.getPrototypeOf(ArrayField)).call(this, props));

        _this2.SchemaFormWithHoc = ArrayFieldComponent;
        _this2.initComponent();
        return _this2;
    }

    _createClass(ArrayField, [{
        key: "initComponent",
        value: function initComponent() {
            var _props = this.props,
                uiSchema = _props.uiSchema,
                formItemData = _props.formItemData,
                getOptions = _props.getOptions,
                options = getOptions(this.props, "field", "array");

            var SchemaFormWithHoc = null,
                SchemaFormItemWithHoc = null;
            if (options.formHocs && options.formHocs.constructor === Array) {
                SchemaFormWithHoc = _recompose.compose.apply(undefined, _toConsumableArray(options.formHocs))(ArrayFieldComponent);
            }
            if (options.formItemHocs && options.formItemHocs.constructor === Array) {
                SchemaFormItemWithHoc = _recompose.compose.apply(undefined, _toConsumableArray(options.formItemHocs))(_form.SchemaForm);
            }
            this.SchemaFormWithHoc = SchemaFormWithHoc;
            this.SchemaFormItemWithHoc = SchemaFormItemWithHoc;
        }
    }, {
        key: "renderItem",
        value: function renderItem(idx) {
            var _props2 = this.props,
                parentKeys = _props2.parentKeys,
                globalOptions = _props2.globalOptions,
                getOptions = _props2.getOptions,
                _props2$arrayLevel = _props2.arrayLevel,
                arrayLevel = _props2$arrayLevel === undefined ? [] : _props2$arrayLevel,
                getRequiredKeys = _props2.getRequiredKeys,
                ajv = _props2.ajv,
                ArrayItemComponent = _props2.ArrayItemComponent,
                uiSchema = this.props.uiSchema;

            var SchemaFormWithHoc = this.SchemaFormItemWithHoc || _form.SchemaForm;
            if (uiSchema.children === null || !uiSchema.schemaPath) {
                return null;
            }
            return _react2.default.createElement(SchemaFormWithHoc, { key: idx, index: idx, arrayIndex: idx, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                uiSchema = _props3.uiSchema,
                formItemData = _props3.formItemData,
                getOptions = _props3.getOptions,
                getRequiredKeys = _props3.getRequiredKeys,
                child = [],
                options = getOptions(this.props, "field", "array");

            var SchemaFormWithHoc = this.SchemaFormWithHoc;
            var extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);
            for (var i = 0; i < +formItemData; i++) {
                child.push(this.renderItem(i));
            }
            return _react2.default.createElement(SchemaFormWithHoc, Object.assign({ children: child }, extraProps));
        }
    }]);

    return ArrayField;
}(_react.PureComponent);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(2);

var tslib_1 = _interopRequireWildcard(_tslib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _reactRedux = __webpack_require__(9);

var _immutable = __webpack_require__(3);

var _immutable2 = _interopRequireDefault(_immutable);

var _ajv = __webpack_require__(41);

var _factory = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actions = _factory.reducerFactory.get("schemaForm").actions;

exports.default = function () {
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
                value: function validateAll(async) {
                    return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var root, validate, $validateBeforeData, $validateAfterData, normalizeDataPath;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        root = this.props.root, validate = this.props.ajv.getSchema(this.props.schemaId), $validateBeforeData = _immutable2.default.fromJS({
                                            dirty: true,
                                            isValid: true,
                                            isLoading: true
                                        }), $validateAfterData = _immutable2.default.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = this.props.normalizeDataPath;

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
                                            meta: root.value
                                        });
                                        validate.$async = !!async;
                                        _context.next = 11;
                                        return validate(this.props.data.toJS());

                                    case 11:
                                        root.value = root.value.merge({
                                            isValid: true
                                        });
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            meta: root.value
                                        });
                                        _context.next = 23;
                                        break;

                                    case 15:
                                        _context.prev = 15;
                                        _context.t0 = _context["catch"](5);

                                        if (_context.t0 instanceof _ajv.ValidationError) {
                                            _context.next = 19;
                                            break;
                                        }

                                        return _context.abrupt("return", console.error(_context.t0));

                                    case 19:
                                        if (root) {
                                            _context.next = 21;
                                            break;
                                        }

                                        return _context.abrupt("return");

                                    case 21:
                                        _context.t0.errors.forEach(function (element) {
                                            var dataKeys = root.getCurrentKeys().concat(normalizeDataPath(_this2.props.schemaId, element.dataPath));
                                            var childNode = root.addChild(dataKeys, _immutable2.default.fromJS({}));
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

                                    case 23:
                                        _context.prev = 23;

                                        root.forEach(function (node) {
                                            if (node.value) {
                                                return node.value.merge($validateAfterData);
                                            }
                                            return node.value;
                                        }, true);
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            meta: root.value
                                        });
                                        return _context.finish(23);

                                    case 27:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[5, 15, 23, 27]]);
                    }));
                }
            }, {
                key: "render",
                value: function render() {
                    var _props = this.props,
                        errors = _props.errors,
                        _props$isValid = _props.isValid,
                        isValid = _props$isValid === undefined ? false : _props$isValid,
                        _props$isValidating = _props.isValidating,
                        isValidating = _props$isValidating === undefined ? false : _props$isValidating,
                        getRequiredKeys = _props.getRequiredKeys,
                        getOptions = _props.getOptions;

                    var options = getOptions(this.props, "hoc", "schemaFormDec");
                    var extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);
                    return _react2.default.createElement(Component, Object.assign({ validateAll: this._validateAll, parentKeys: settings.parentKeys }, extraProps));
                }
            }]);

            return SchemaFormComponentHoc;
        }(_react.PureComponent);
        SchemaFormComponentHoc = tslib_1.__decorate([(0, _recompose.compose)(_factory.hocFactory.get("utils")(), (0, _reactRedux.connect)(function (state) {
            var rootKeys = settings.rootReducerKey.concat(settings.parentKeys),
                dataKeys = rootKeys.concat(["data"]),
                metaKeys = rootKeys.concat(["meta"]),
                root = state.getIn(metaKeys);
            return {
                data: state.getIn(dataKeys),
                root: root,
                isValid: root.value.get("isValid"),
                errors: root.value.get("errors"),
                isValidating: root.value.get("isLoading")
            };
        })), tslib_1.__metadata("design:paramtypes", [Object])], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=index.js.map