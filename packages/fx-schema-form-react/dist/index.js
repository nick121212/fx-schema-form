(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("ajv"), require("redux"), require("redux-act"), require("reselect"), require("resolve-pathname"));
	else if(typeof define === 'function' && define.amd)
		define("fx-schema-form-react", ["react", "recompose", "immutable", "fx-schema-form-core", "react-redux", "ajv", "redux", "redux-act", "reselect", "resolve-pathname"], factory);
	else if(typeof exports === 'object')
		exports["fx-schema-form-react"] = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("ajv"), require("redux"), require("redux-act"), require("reselect"), require("resolve-pathname"));
	else
		root["fx-schema-form-react"] = factory(root["React"], root["recompose"], root["Immutable"], root["fx-schema-form-core"], root["react-redux"], root["Ajv"], root["Redux"], root["redux-act"], root["reselect"], root["resolve-pathname"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var fx_schema_form_core_1 = __webpack_require__(6);
	var factory_1 = __webpack_require__(4);
	exports.reducerFactory = factory_1.reducerFactory;
	exports.hocFactory = factory_1.hocFactory;
	var components_1 = __webpack_require__(16);
	exports.SchemaForm = components_1.SchemaForm;
	var fields_1 = __webpack_require__(18);
	var tree_1 = __webpack_require__(9);
	exports.TreeMap = tree_1.TreeMap;
	var dec_1 = __webpack_require__(31);
	exports.schemaFormDec = dec_1.default;
	exports.defaultTheme = {
	    tempFactory: new fx_schema_form_core_1.BaseFactory(),
	    fieldFactory: new fx_schema_form_core_1.BaseFactory(),
	    widgetFactory: new fx_schema_form_core_1.BaseFactory()
	};
	exports.defaultTheme.fieldFactory.add("default", fields_1.NormalField);
	exports.defaultTheme.fieldFactory.add("object", fields_1.ObjectField);
	exports.defaultTheme.fieldFactory.add("array", fields_1.ArrayField);
	factory_1.themeFactory.add("default", exports.defaultTheme);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
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
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        if (exports !== root) {
	            if (typeof Object.create === "function") {
	                Object.defineProperty(exports, "__esModule", { value: true });
	            }
	            else {
	                exports.__esModule = true;
	            }
	        }
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };

	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };

	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };

	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function (thisArg, body) {
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
	    };

	    __exportStar = function (m, exports) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    };

	    __values = function (o) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	        if (m) return m.call(o);
	        return {
	            next: function () {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    };

	    __read = function (o, n) {
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
	    };

	    __spread = function () {
	        for (var ar = [], i = 0; i < arguments.length; i++)
	            ar = ar.concat(__read(arguments[i]));
	        return ar;
	    };

	    __await = function (v) {
	        return this instanceof __await ? (this.v = v, this) : new __await(v);
	    };

	    __asyncGenerator = function (thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []), i, q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
	        function fulfill(value) { resume("next", value); }
	        function reject(value) { resume("throw", value); }
	        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	    };

	    __asyncDelegator = function (o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	        function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
	    };

	    __asyncValues = function (o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator];
	        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
	    };

	    __makeTemplateObject = function (cooked, raw) {
	        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	        return cooked;
	    };

	    __importStar = function (mod) {
	        if (mod && mod.__esModule) return mod;
	        var result = {};
	        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	        result["default"] = mod;
	        return result;
	    };

	    __importDefault = function (mod) {
	        return (mod && mod.__esModule) ? mod : { "default": mod };
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__await", __await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	    exporter("__makeTemplateObject", __makeTemplateObject);
	    exporter("__importStar", __importStar);
	    exporter("__importDefault", __importDefault);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var fx_schema_form_core_1 = __webpack_require__(6);
	var hocs_1 = __webpack_require__(24);
	var reducer_1 = __webpack_require__(8);
	exports.reducerFactory = new fx_schema_form_core_1.BaseFactory();
	exports.hocFactory = new fx_schema_form_core_1.BaseFactory();
	exports.themeFactory = new fx_schema_form_core_1.BaseFactory();
	exports.hocFactory.add("utils", hocs_1.utils.bind(hocs_1.utils, exports.hocFactory));
	exports.hocFactory.add("merge", hocs_1.merge.bind(hocs_1.merge, exports.hocFactory));
	exports.hocFactory.add("field", hocs_1.field.bind(hocs_1.field, exports.hocFactory));
	exports.hocFactory.add("theme", hocs_1.theme.bind(hocs_1.theme, exports.hocFactory));
	exports.hocFactory.add("array", hocs_1.array.bind(hocs_1.array, exports.hocFactory));
	exports.hocFactory.add("validate", hocs_1.validate.bind(hocs_1.validate, exports.hocFactory));
	exports.hocFactory.add("make", hocs_1.make.bind(hocs_1.make, exports.hocFactory));
	exports.hocFactory.add("temp", hocs_1.temp.bind(hocs_1.temp, exports.hocFactory));
	exports.hocFactory.add("data", hocs_1.data.bind(hocs_1.data, exports.hocFactory));
	exports.reducerFactory.add("schemaForm", reducer_1.schemaFormReducer);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var component_1 = __webpack_require__(11);
	exports.SchemaForm = component_1.SchemaForm;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var immutable_1 = __webpack_require__(5);
	var schema_form_1 = __webpack_require__(32);
	exports.schemaFormReducer = new schema_form_1.SchemaFormReducer(immutable_1.fromJS({}));

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var TreeMap = function () {
	    function TreeMap(key, value, parent) {
	        this.key = key;
	        this.value = value;
	        this.parent = parent;
	        this.children = [];
	    }
	    TreeMap.prototype.addChild = function (keys, value) {
	        var curKeys = this.getCurrentKeys();
	        var curNode = this;
	        var child;
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
	        child.value = value;
	        return child;
	    };
	    TreeMap.prototype.getKey = function () {
	        if (!this.key || this.key === "-") {
	            return this.getIndexInParent().toString();
	        }
	        return this.key;
	    };
	    TreeMap.prototype.getCurrentKeys = function () {
	        var keys = [];
	        if (this.parent) {
	            keys = keys.concat(this.parent.getCurrentKeys());
	        }
	        return keys.concat([this.key]);
	    };
	    TreeMap.prototype.getIndexInParent = function () {
	        var children = this.parent.children;
	        if (this.parent) {
	            for (var i = 0, n = children.length; i < n; i++) {
	                var child = children[i];
	                if (child && child === this) {
	                    return i;
	                }
	            }
	        }
	        return -1;
	    };
	    TreeMap.prototype.contains = function (key) {
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
	    };
	    TreeMap.prototype.containPath = function (keys) {
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
	    TreeMap.prototype.removeFromParent = function () {
	        var index = this.getIndexInParent();
	        this.parent.children.splice(index, 1);
	    };
	    TreeMap.prototype.switchOneToOneFromParent = function (toIndex) {
	        var curIndex = this.getIndexInParent();
	        if (!this.parent || !this.parent.children || curIndex < 0) {
	            return;
	        }
	        if (this.parent.children.length < (curIndex > toIndex ? curIndex : toIndex)) {
	            return;
	        }
	        _a = [this.parent.children[toIndex], this.parent.children[curIndex]], this.parent.children[curIndex] = _a[0], this.parent.children[toIndex] = _a[1];
	        var _a;
	    };
	    TreeMap.prototype.insertToFromParent = function (toIndex) {
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
	    };
	    TreeMap.prototype.forEach = function (clearFunc, currentNode) {
	        if (currentNode === void 0) {
	            currentNode = false;
	        }
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
	exports.TreeMap = TreeMap;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var container_1 = __webpack_require__(12);
	var index_1 = __webpack_require__(15);
	var SchemaForm = function (_super) {
	    tslib_1.__extends(SchemaForm, _super);
	    function SchemaForm() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    SchemaForm.prototype.render = function () {
	        var _a = this.props,
	            schemaId = _a.schemaId,
	            mergeSchemaList = _a.mergeSchemaList,
	            arrayLevel = _a.arrayLevel,
	            RootComponent = _a.RootComponent,
	            children = _a.children,
	            extraProps = tslib_1.__rest(_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
	        var formItemList = mergeSchemaList.map(function (uiScehma, idx) {
	            var arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
	            return react_1.default.createElement(index_1.SchemaFormItem, tslib_1.__assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
	        });
	        if (RootComponent) {
	            return react_1.default.createElement(RootComponent, null, formItemList, children);
	        }
	        return react_1.default.createElement("div", null, formItemList, children);
	    };
	    SchemaForm = tslib_1.__decorate([container_1.hoc], SchemaForm);
	    return SchemaForm;
	}(react_1.PureComponent);
	exports.SchemaForm = SchemaForm;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var recompose_1 = __webpack_require__(3);
	var factory_1 = __webpack_require__(4);
	exports.hoc = recompose_1.compose(recompose_1.shouldUpdate(function () {
	  return false;
	}), factory_1.hocFactory.get("utils")(), factory_1.hocFactory.get("merge")());

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var redux_1 = __webpack_require__(34);
	var container_1 = __webpack_require__(14);
	var SchemaFormItem = function (_super) {
	    tslib_1.__extends(SchemaFormItem, _super);
	    function SchemaFormItem(props, context) {
	        return _super.call(this, props, context) || this;
	    }
	    SchemaFormItem.prototype.render = function () {
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
	            FieldComponentWithHoc = redux_1.compose.apply(void 0, options.fieldHocs || [])(FieldComponent);
	        }
	        return react_1.default.createElement(FieldComponentWithHoc, tslib_1.__assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
	    };
	    SchemaFormItem = tslib_1.__decorate([container_1.hoc, tslib_1.__metadata("design:paramtypes", [Object, Object])], SchemaFormItem);
	    return SchemaFormItem;
	}(react_1.PureComponent);
	exports.SchemaFormItem = SchemaFormItem;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var recompose_1 = __webpack_require__(3);
	var factory_1 = __webpack_require__(4);
	exports.hoc = recompose_1.compose(factory_1.hocFactory.get("utils")(), factory_1.hocFactory.get("make")());

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var component_1 = __webpack_require__(13);
	exports.SchemaFormItem = component_1.SchemaFormItem;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var form_1 = __webpack_require__(7);
	exports.SchemaForm = form_1.SchemaForm;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var form_1 = __webpack_require__(7);
	var arrayFieldStyle = {
	    width: "100%",
	    height: "100%"
	};
	var ArrayField = function (_super) {
	    tslib_1.__extends(ArrayField, _super);
	    function ArrayField() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ArrayField.prototype.renderItem = function (idx) {
	        var _a = this.props,
	            parentKeys = _a.parentKeys,
	            globalOptions = _a.globalOptions,
	            _b = _a.arrayLevel,
	            arrayLevel = _b === void 0 ? [] : _b,
	            ajv = _a.ajv,
	            ArrayItemComponent = _a.ArrayItemComponent,
	            uiSchema = this.props.uiSchema;
	        if (uiSchema.children === null) {
	            return null;
	        }
	        return react_1.default.createElement(form_1.SchemaForm, { key: idx, arrayIndex: idx, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
	    };
	    ArrayField.prototype.render = function () {
	        var _a = this.props,
	            uiSchema = _a.uiSchema,
	            formItemData = _a.formItemData,
	            child = [];
	        for (var i = 0; i < +formItemData; i++) {
	            child.push(this.renderItem(i));
	        }
	        return react_1.default.createElement("div", { style: arrayFieldStyle }, child || null);
	    };
	    return ArrayField;
	}(react_1.PureComponent);
	exports.ArrayField = ArrayField;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var normal_1 = __webpack_require__(19);
	exports.NormalField = normal_1.NormalField;
	var object_1 = __webpack_require__(20);
	exports.ObjectField = object_1.ObjectField;
	var array_1 = __webpack_require__(17);
	exports.ArrayField = array_1.ArrayField;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var recompose_1 = __webpack_require__(3);
	var NormalField = function (_super) {
	    tslib_1.__extends(NormalField, _super);
	    function NormalField(props, context) {
	        return _super.call(this, props, context) || this;
	    }
	    NormalField.prototype.render = function () {
	        var _a = this.props,
	            WidgetComponent = _a.WidgetComponent,
	            FieldComponent = _a.FieldComponent,
	            formItemMeta = _a.formItemMeta,
	            formItemData = _a.formItemData,
	            extraProps = tslib_1.__rest(_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
	        var fieldOptions = extraProps.getOptions(this.props, "field", "normal");
	        var keys = extraProps.uiSchema.keys;
	        var WidgetComponentWithHoc = WidgetComponent;
	        if (!WidgetComponent) {
	            return null;
	        }
	        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
	            WidgetComponentWithHoc = recompose_1.compose.apply(void 0, fieldOptions.widgetHocs)(WidgetComponent);
	        }
	        return react_1.default.createElement(WidgetComponentWithHoc, tslib_1.__assign({ key: keys.join(".") }, extraProps));
	    };
	    return NormalField;
	}(react_1.PureComponent);
	exports.NormalField = NormalField;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var form_1 = __webpack_require__(7);
	var ObjectField = function (_super) {
	    tslib_1.__extends(ObjectField, _super);
	    function ObjectField() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ObjectField.prototype.render = function () {
	        var uiSchema = this.props.uiSchema,
	            _a = this.props,
	            arrayIndex = _a.arrayIndex,
	            arrayLevel = _a.arrayLevel,
	            parentKeys = _a.parentKeys,
	            globalOptions = _a.globalOptions,
	            ajv = _a.ajv,
	            schemaId = _a.schemaId;
	        if (uiSchema.children === null) {
	            return null;
	        }
	        return react_1.default.createElement(form_1.SchemaForm, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
	    };
	    return ObjectField;
	}(react_1.PureComponent);
	exports.ObjectField = ObjectField;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _this = undefined;
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var recompose_1 = __webpack_require__(3);
	var reducer_1 = __webpack_require__(8);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    var hoc = recompose_1.compose(recompose_1.withHandlers({
	        addItem: function addItem(propsCur) {
	            return function (props, data) {
	                return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                    var itemSchema, defaultValue, itemUiSchema, e_1;
	                    return tslib_1.__generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0:
	                                itemSchema = {}, defaultValue = {}, itemUiSchema = props.uiSchema.items;
	                                _a.label = 1;
	                            case 1:
	                                _a.trys.push([1, 3, 4, 5]);
	                                return [4, props.ajv.validate({
	                                    type: "object",
	                                    properties: {
	                                        defaultData: itemUiSchema
	                                    }
	                                }, defaultValue)];
	                            case 2:
	                                _a.sent();
	                                return [3, 5];
	                            case 3:
	                                e_1 = _a.sent();
	                                console.log(e_1);
	                                return [3, 5];
	                            case 4:
	                                reducer_1.schemaFormReducer.actions.addItem({
	                                    parentKeys: props.parentKeys,
	                                    keys: props.uiSchema.keys,
	                                    data: defaultValue.defaultData
	                                });
	                                return [7];
	                            case 5:
	                                return [2];
	                        }
	                    });
	                });
	            };
	        },
	        removeItem: function removeItem(propsCur) {
	            return function (parentKeys, keys, index) {
	                reducer_1.schemaFormReducer.actions.removeItem({
	                    parentKeys: parentKeys,
	                    keys: keys,
	                    index: index
	                });
	            };
	        },
	        switchItem: function switchItem(propsCur) {
	            return function (parentKeys, keys, curIndex, toIndex) {
	                reducer_1.schemaFormReducer.actions.switchItem({
	                    parentKeys: parentKeys,
	                    keys: keys,
	                    curIndex: curIndex,
	                    toIndex: toIndex
	                });
	            };
	        },
	        moveItem: function moveItem(propsCur) {
	            return function (parentKeys, keys, curIndex, toIndex) {
	                reducer_1.schemaFormReducer.actions.moveToItem({
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
	                    return ArrayComponent ? react_1.default.createElement(ArrayComponent, tslib_1.__assign({}, extraProps)) : null;
	                }
	                return ArrayItemComponent ? react_1.default.createElement(ArrayItemComponent, tslib_1.__assign({}, extraProps)) : null;
	            };
	        }
	    }));
	    var arrayHoc = function arrayHoc(Component) {
	        var ArrayComponentHoc = function (_super) {
	            tslib_1.__extends(ArrayComponentHoc, _super);
	            function ArrayComponentHoc(props, context) {
	                var _this = _super.call(this, props, context) || this;
	                _this.initArrayComponents();
	                return _this;
	            }
	            ArrayComponentHoc.prototype.initArrayComponents = function () {
	                var getOptions = this.props.getOptions;
	                var hocOptions = getOptions(this.props, "hoc", "array");
	                if (hocOptions.ArrayComponent) {
	                    this.ArrayComponent = hocOptions.ArrayComponent;
	                }
	                if (hocOptions.ArrayItemComponent) {
	                    this.ArrayItemComponent = hocOptions.ArrayItemComponent;
	                }
	            };
	            ArrayComponentHoc.prototype.render = function () {
	                var props = {};
	                if (this.ArrayComponent) {
	                    props.ArrayComponent = this.ArrayComponent;
	                }
	                if (this.ArrayItemComponent) {
	                    props.ArrayItemComponent = this.ArrayItemComponent;
	                }
	                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props, props));
	            };
	            ArrayComponentHoc = tslib_1.__decorate([hoc, tslib_1.__metadata("design:paramtypes", [Object, Object])], ArrayComponentHoc);
	            return ArrayComponentHoc;
	        }(react_1.PureComponent);
	        return ArrayComponentHoc;
	    };
	    var pureHoc = function pureHoc(Component) {
	        var ArrayPureComponentHoc = function (_super) {
	            tslib_1.__extends(ArrayPureComponentHoc, _super);
	            function ArrayPureComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            ArrayPureComponentHoc.prototype.render = function () {
	                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
	            };
	            ArrayPureComponentHoc = tslib_1.__decorate([hoc], ArrayPureComponentHoc);
	            return ArrayPureComponentHoc;
	        }(react_1.PureComponent);
	        return ArrayPureComponentHoc;
	    };
	    return recompose_1.branch(function (props) {
	        var uiSchema = props.uiSchema;
	        return uiSchema.type === "array";
	    }, arrayHoc, pureHoc);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var recompose_1 = __webpack_require__(3);
	var react_redux_1 = __webpack_require__(10);
	var reselect_1 = __webpack_require__(36);
	var immutable_1 = __webpack_require__(5);
	var fxSelectorCreator = reselect_1.createSelectorCreator(reselect_1.defaultMemoize, immutable_1.is);
	var maps = {};
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {
	            data: true,
	            rootReducerKey: ["schemaForm"]
	        };
	    }
	    var getItemDataHoc = function getItemDataHoc(parentKeys, keys) {
	        var getFormItemData = function getFormItemData(state) {
	            var dataKeys = settings.rootReducerKey.concat(parentKeys.concat(["data"], keys));
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
	            var metaKeys = settings.rootReducerKey.concat(parentKeys.concat(["meta"]));
	            if (settings.meta && state.hasIn(metaKeys)) {
	                var rootNode = state.getIn(metaKeys);
	                var childNode = rootNode.containPath(parentKeys.concat(keys));
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
	        var DataComponentHoc = function (_super) {
	            tslib_1.__extends(DataComponentHoc, _super);
	            function DataComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            DataComponentHoc.prototype.render = function () {
	                var keys = this.props.uiSchema.keys;
	                var hoc = react_redux_1.connect(getItemDataHoc(this.props.parentKeys, keys));
	                var ComponentWithHoc = hoc(Component);
	                return react_1.default.createElement(ComponentWithHoc, tslib_1.__assign({}, this.props));
	            };
	            DataComponentHoc = tslib_1.__decorate([recompose_1.shouldUpdate(function () {
	                return false;
	            })], DataComponentHoc);
	            return DataComponentHoc;
	        }(react_1.PureComponent);
	        return DataComponentHoc;
	    };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var FieldComponentHoc = function (_super) {
	            tslib_1.__extends(FieldComponentHoc, _super);
	            function FieldComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            FieldComponentHoc.prototype.render = function () {
	                var _a = this.props,
	                    currentTheme = _a.currentTheme,
	                    getOptions = _a.getOptions,
	                    uiSchema = _a.uiSchema,
	                    _b = uiSchema,
	                    field = _b.field,
	                    widget = _b.widget,
	                    type = _b.type;
	                var FieldComponent, WidgetComponent;
	                var options = getOptions(this.props, "hoc", "field");
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
	                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props, { FieldComponent: FieldComponent, WidgetComponent: WidgetComponent }));
	            };
	            return FieldComponentHoc;
	        }(react_1.PureComponent);
	        return FieldComponentHoc;
	    };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var merge_1 = __webpack_require__(26);
	exports.merge = merge_1.default;
	var utils_1 = __webpack_require__(29);
	exports.utils = utils_1.default;
	var theme_1 = __webpack_require__(28);
	exports.theme = theme_1.default;
	var field_1 = __webpack_require__(23);
	exports.field = field_1.default;
	var array_1 = __webpack_require__(21);
	exports.array = array_1.default;
	var validate_1 = __webpack_require__(30);
	exports.validate = validate_1.default;
	var make_1 = __webpack_require__(25);
	exports.make = make_1.default;
	var temp_1 = __webpack_require__(27);
	exports.temp = temp_1.default;
	var data_1 = __webpack_require__(22);
	exports.data = data_1.default;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var recompose_1 = __webpack_require__(3);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var MakeComponentHoc = function (_super) {
	            tslib_1.__extends(MakeComponentHoc, _super);
	            function MakeComponentHoc() {
	                var _this = _super !== null && _super.apply(this, arguments) || this;
	                _this.fieldKey = "hocs";
	                return _this;
	            }
	            MakeComponentHoc.prototype.render = function () {
	                var _a = this.props,
	                    uiSchema = _a.uiSchema,
	                    getOptions = _a.getOptions;
	                var type = uiSchema.type;
	                var fieldOptions = getOptions(this.props, "field", type);
	                var hocs = settings.hocs || uiSchema[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];
	                var ComponentWithHocs = recompose_1.compose.apply(void 0, ["utils"].concat(hocs).map(function (hoc) {
	                    if (typeof hoc !== "string") {
	                        return hoc;
	                    }
	                    return hocFactory.get(hoc)();
	                }))(Component);
	                return react_1.default.createElement(ComponentWithHocs, tslib_1.__assign({}, this.props));
	            };
	            MakeComponentHoc = tslib_1.__decorate([recompose_1.shouldUpdate(function () {
	                return false;
	            })], MakeComponentHoc);
	            return MakeComponentHoc;
	        }(react_1.PureComponent);
	        return MakeComponentHoc;
	    };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var fx_schema_form_core_1 = __webpack_require__(6);
	var totalTime = 0,
	    timeid;
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var MergeComponentHoc = function (_super) {
	            tslib_1.__extends(MergeComponentHoc, _super);
	            function MergeComponentHoc(props) {
	                var _this = _super.call(this, props) || this;
	                var uiSchema = props.uiSchema ? _extends({}, props.uiSchema) : null;
	                if (uiSchema) {
	                    uiSchema.keys = uiSchema.originKeys;
	                }
	                var merge = new fx_schema_form_core_1.MergeLib(props.ajv, props.schemaId, uiSchema, props.uiSchemas);
	                _this._mergeUiSchemaList = merge.mergeUiSchemaList.map(function (v) {
	                    return _this.mergeKeys(v);
	                });
	                return _this;
	            }
	            MergeComponentHoc.prototype.mergeKeys = function (mergeSchema) {
	                var _a = this.props.arrayLevel,
	                    arrayLevel = _a === void 0 ? [] : _a;
	                var arrayLevelCopy = arrayLevel.concat([]);
	                mergeSchema = _extends({}, mergeSchema);
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
	            MergeComponentHoc.prototype.render = function () {
	                var _a = this.props,
	                    uiSchemas = _a.uiSchemas,
	                    uiSchema = _a.uiSchema,
	                    extraProps = tslib_1.__rest(_a, ["uiSchemas", "uiSchema"]);
	                return react_1.default.createElement(Component, tslib_1.__assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps));
	            };
	            return MergeComponentHoc;
	        }(react_1.PureComponent);
	        return MergeComponentHoc;
	    };
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var recompose_1 = __webpack_require__(3);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {
	            tempField: "temps",
	            templates: []
	        };
	    }
	    return function (Component) {
	        var TempComponentHoc = function (_super) {
	            tslib_1.__extends(TempComponentHoc, _super);
	            function TempComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            TempComponentHoc.prototype.render = function () {
	                var _this = this;
	                var _a = this.props,
	                    uiSchema = _a.uiSchema,
	                    getOptions = _a.getOptions;
	                var _b = uiSchema,
	                    uiSchemaOptions = _b.options,
	                    keys = _b.keys;
	                var TempComponents = this.getTemplates();
	                return TempComponents.reduce(function (prev, _a) {
	                    var key = _a.key,
	                        Temp = _a.Temp;
	                    var tempOptions = getOptions(_this.props, "temp", key),
	                        TempWithHoc = recompose_1.compose.apply(void 0, tempOptions.tempHocs || [])(Temp);
	                    return react_1.default.createElement(TempWithHoc, { key: keys.join(".") + key, tempKey: key, ajv: _this.props.ajv, uiSchema: _this.props.uiSchema, schemaId: _this.props.schemaId, arrayLevel: _this.props.arrayLevel, arrayIndex: _this.props.arrayIndex, globalOptions: _this.props.globalOptions, ArrayComponent: _this.props.ArrayComponent, ArrayItemComponent: _this.props.ArrayItemComponent, initArrayComponent: _this.props.initArrayComponent, parentKeys: _this.props.parentKeys, getTitle: _this.props.getTitle, getOptions: _this.props.getOptions, getPathKeys: _this.props.getPathKeys, children: prev });
	                }, react_1.default.createElement(Component, tslib_1.__assign({ key: keys.join(".") }, this.props)));
	            };
	            TempComponentHoc.prototype.getTemplates = function () {
	                var _a = this.props,
	                    uiSchema = _a.uiSchema,
	                    currentTheme = _a.currentTheme,
	                    getOptions = _a.getOptions,
	                    _b = uiSchema,
	                    keys = _b.keys,
	                    type = _b.type,
	                    typeDefaultOptions = getOptions(this.props, "field", type),
	                    TempComponent = [];
	                var template;
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
	        }(react_1.PureComponent);
	        return TempComponentHoc;
	    };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var factory_1 = __webpack_require__(4);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var ThemeComponentHoc = function (_super) {
	            tslib_1.__extends(ThemeComponentHoc, _super);
	            function ThemeComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            ThemeComponentHoc.prototype.render = function () {
	                var _a = this.props.uiSchema,
	                    theme = _a.theme,
	                    field = _a.field;
	                var nsFactory;
	                if (factory_1.themeFactory.has(theme || "default")) {
	                    nsFactory = factory_1.themeFactory.get(theme || "default");
	                } else {
	                    throw new Error("\u6CA1\u6709\u627E\u5230" + (theme || "default") + "\u7684\u6837\u5F0F\uFF01");
	                }
	                return react_1.default.createElement(Component, tslib_1.__assign({ currentTheme: nsFactory }, this.props));
	            };
	            return ThemeComponentHoc;
	        }(react_1.PureComponent);
	        return ThemeComponentHoc;
	    };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var resolve_pathname_1 = __webpack_require__(37);
	var immutable_1 = __webpack_require__(5);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var ComponentHoc = function (_super) {
	            tslib_1.__extends(ComponentHoc, _super);
	            function ComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            ComponentHoc.prototype.render = function () {
	                return react_1.default.createElement(Component, tslib_1.__assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions }, this.props));
	            };
	            ComponentHoc.prototype.getOptions = function (props, category, field) {
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
	                }, immutable_1.fromJS({})).toJS();
	                return opts;
	            };
	            ComponentHoc.prototype.getTitle = function (props) {
	                var uiSchema = props.uiSchema;
	                var _a = uiSchema,
	                    title = _a.title,
	                    keys = _a.keys;
	                if (title !== undefined) {
	                    return title;
	                }
	                return [].concat(keys).pop().toString();
	            };
	            ComponentHoc.prototype.getPathKeys = function (keys, path) {
	                var keysCopy = [""].concat(keys.concat([""]));
	                var keysResolve = resolve_pathname_1.default(path, keysCopy.join("/")).split("/");
	                keysResolve.shift();
	                if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
	                    keysResolve.pop();
	                }
	                return keysResolve;
	            };
	            return ComponentHoc;
	        }(react_1.PureComponent);
	        return ComponentHoc;
	    };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _this = undefined;
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var recompose_1 = __webpack_require__(3);
	var reducer_1 = __webpack_require__(8);
	exports.default = function (hocFactory, settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var ArrayComponentHoc = function (_super) {
	            tslib_1.__extends(ArrayComponentHoc, _super);
	            function ArrayComponentHoc() {
	                return _super !== null && _super.apply(this, arguments) || this;
	            }
	            ArrayComponentHoc.prototype.render = function () {
	                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
	            };
	            ArrayComponentHoc = tslib_1.__decorate([recompose_1.compose(recompose_1.withHandlers({
	                validate: function validate(propsCur) {
	                    return function (props, data) {
	                        return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                            var result, timeId, validateResult, error, err_1;
	                            return tslib_1.__generator(this, function (_a) {
	                                switch (_a.label) {
	                                    case 0:
	                                        result = { dirty: true, isValid: false, isLoading: false };
	                                        timeId = setTimeout(function () {
	                                            reducer_1.schemaFormReducer.actions.updateItemMeta({
	                                                parentKeys: props.parentKeys,
	                                                keys: props.uiSchema.keys,
	                                                data: { isLoading: true, isValid: false, errorText: false }
	                                            });
	                                        }, 200);
	                                        _a.label = 1;
	                                    case 1:
	                                        _a.trys.push([1, 3, 4, 5]);
	                                        return [4, props.ajv.validate(props.uiSchema, data)];
	                                    case 2:
	                                        validateResult = _a.sent();
	                                        result.isValid = validateResult;
	                                        if (!validateResult) {
	                                            error = new Error();
	                                            error.errors = props.ajv.errors;
	                                            throw error;
	                                        }
	                                        return [3, 5];
	                                    case 3:
	                                        err_1 = _a.sent();
	                                        result.errorText = err_1.errors ? props.ajv.errorsText(err_1.errors, { dataVar: props.getTitle(props).toString() }) : err_1.message;
	                                        return [3, 5];
	                                    case 4:
	                                        clearTimeout(timeId);
	                                        return [7];
	                                    case 5:
	                                        return [2, result];
	                                }
	                            });
	                        });
	                    };
	                }
	            }), recompose_1.withHandlers({
	                updateItemData: function updateItemData(propsCur) {
	                    return function (props, data, meta) {
	                        reducer_1.schemaFormReducer.actions.updateItemData({
	                            parentKeys: props.parentKeys,
	                            keys: props.uiSchema.keys,
	                            data: data,
	                            meta: meta
	                        });
	                    };
	                },
	                updateItemMeta: function updateItemMeta(propsCur) {
	                    return function (props, data, meta) {
	                        return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                            var _a, _b, _c, _d;
	                            return tslib_1.__generator(this, function (_e) {
	                                switch (_e.label) {
	                                    case 0:
	                                        _b = (_a = reducer_1.schemaFormReducer.actions).updateItemMeta;
	                                        _c = {
	                                            parentKeys: props.parentKeys,
	                                            keys: props.uiSchema.keys
	                                        };
	                                        _d = meta;
	                                        if (_d) return [3, 2];
	                                        return [4, propsCur.validate(props, data)];
	                                    case 1:
	                                        _d = _e.sent();
	                                        _e.label = 2;
	                                    case 2:
	                                        _b.apply(_a, [(_c.data = _d, _c)]);
	                                        return [2];
	                                }
	                            });
	                        });
	                    };
	                }
	            }))], ArrayComponentHoc);
	            return ArrayComponentHoc;
	        }(react_1.PureComponent);
	        return ArrayComponentHoc;
	    };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(1);
	var react_1 = __webpack_require__(2);
	var react_redux_1 = __webpack_require__(10);
	var immutable_1 = __webpack_require__(5);
	var ajv_1 = __webpack_require__(33);
	var fx_schema_form_core_1 = __webpack_require__(6);
	var factory_1 = __webpack_require__(4);
	var actions = factory_1.reducerFactory.get("schemaForm").actions;
	exports.default = function (settings) {
	    if (settings === void 0) {
	        settings = {};
	    }
	    return function (Component) {
	        var SchemaFormComponentHoc = function (_super) {
	            tslib_1.__extends(SchemaFormComponentHoc, _super);
	            function SchemaFormComponentHoc(props) {
	                var _this = _super.call(this, props) || this;
	                _this._validateAll = _this.validateAll.bind(_this);
	                return _this;
	            }
	            SchemaFormComponentHoc.prototype.validateAll = function () {
	                return tslib_1.__awaiter(this, void 0, void 0, function () {
	                    var _this = this;
	                    var root, validate, $validateBeforeData, $validateAfterData, normalizeDataPath, e_1;
	                    return tslib_1.__generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0:
	                                root = this.props.root, validate = this.props.ajv.getSchema(this.props.schemaId), $validateBeforeData = immutable_1.fromJS({
	                                    dirty: true,
	                                    isValid: true,
	                                    isLoading: true
	                                }), $validateAfterData = immutable_1.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = this.normalizeDataPath;
	                                if (!validate) {
	                                    throw new Error("\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684" + this.props.schemaId + ";");
	                                }
	                                _a.label = 1;
	                            case 1:
	                                _a.trys.push([1, 3, 4, 5]);
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
	                                return [4, validate(this.props.data.toJS())];
	                            case 2:
	                                _a.sent();
	                                root.value = root.value.merge({
	                                    isValid: true
	                                });
	                                actions.updateItemMeta({
	                                    parentKeys: settings.parentKeys,
	                                    keys: [],
	                                    data: root.value
	                                });
	                                return [3, 5];
	                            case 3:
	                                e_1 = _a.sent();
	                                if (!(e_1 instanceof ajv_1.ValidationError)) {
	                                    return [2, console.error(e_1)];
	                                }
	                                e_1.errors.forEach(function (element) {
	                                    var dataKeys = root.getCurrentKeys().concat(normalizeDataPath(_this.props.schemaId, element.dataPath));
	                                    var childNode = root.addChild(dataKeys, immutable_1.fromJS({}));
	                                    childNode.value = childNode.value.merge($validateAfterData).merge({
	                                        isValid: false,
	                                        errorText: element.message
	                                    });
	                                });
	                                root.value = root.value.merge({
	                                    isValid: false,
	                                    errors: e_1.errors
	                                });
	                                return [3, 5];
	                            case 4:
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
	                                return [7];
	                            case 5:
	                                return [2];
	                        }
	                    });
	                });
	            };
	            SchemaFormComponentHoc.prototype.normalizeDataPath = function (schemaId, dataPath) {
	                var dataKeys = dataPath.substring(1).split("/");
	                dataKeys = dataKeys.map(function (key, index) {
	                    if (Number.isInteger(+key)) {
	                        var keys = dataKeys.slice(0, index);
	                        keys.unshift(schemaId);
	                        if (fx_schema_form_core_1.schemaKeysFactory.has(keys.join("/"))) {
	                            var schema = fx_schema_form_core_1.schemaFieldFactory.get(fx_schema_form_core_1.schemaKeysFactory.get(keys.join("/")));
	                            if (schema.type === "array") {
	                                return +key;
	                            }
	                        }
	                    }
	                    return key;
	                });
	                return dataKeys;
	            };
	            SchemaFormComponentHoc.prototype.render = function () {
	                var _a = this.props,
	                    errors = _a.errors,
	                    _b = _a.isValid,
	                    isValid = _b === void 0 ? false : _b,
	                    _c = _a.isValidating,
	                    isValidating = _c === void 0 ? false : _c;
	                return react_1.default.createElement("div", null, react_1.default.createElement(Component, tslib_1.__assign({ validateAll: this._validateAll }, this.props)), isValid.toString() + isValidating.toString(), isValid ? null : errors ? errors.map(function (e) {
	                    return react_1.default.createElement("div", { key: e.get("dataPath") }, e.get("message"));
	                }) : null);
	            };
	            SchemaFormComponentHoc = tslib_1.__decorate([react_redux_1.connect(function (state) {
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
	            }), tslib_1.__metadata("design:paramtypes", [Object])], SchemaFormComponentHoc);
	            return SchemaFormComponentHoc;
	        }(react_1.PureComponent);
	        return SchemaFormComponentHoc;
	    };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", { value: true });
	var redux_act_1 = __webpack_require__(35);
	var immutable_1 = __webpack_require__(5);
	var tree_1 = __webpack_require__(9);
	var SchemaFormReducer = function () {
	    function SchemaFormReducer(initialState) {
	        this.initialState = initialState;
	        this.createForm = redux_act_1.createAction("创建一个表单数据");
	        this.updateItemData = redux_act_1.createAction("更新一个表单数据");
	        this.updateItemMeta = redux_act_1.createAction("更新一个表单元数据");
	        this.addItem = redux_act_1.createAction("添加一个数据");
	        this.removeItem = redux_act_1.createAction("删除一个数据");
	        this.switchItem = redux_act_1.createAction("元素22交换位置");
	        this.moveToItem = redux_act_1.createAction("元素移位");
	        this.validateAll = redux_act_1.createAction("验证全部字段");
	    }
	    Object.defineProperty(SchemaFormReducer.prototype, "actions", {
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
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SchemaFormReducer.prototype, "reducer", {
	        get: function get() {
	            return redux_act_1.createReducer((_a = {}, _a[this.createForm] = this.createFormHandle.bind(this), _a[this.updateItemData] = this.updateItemDataHandle.bind(this), _a[this.updateItemMeta] = this.updateItemMetaHandle.bind(this), _a[this.addItem] = this.addItemDataHandle.bind(this), _a[this.removeItem] = this.removeItemDataHandle.bind(this), _a[this.switchItem] = this.switchItemHandle.bind(this), _a[this.moveToItem] = this.moveItemHandle.bind(this), _a), this.initialState);
	            var _a;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SchemaFormReducer.prototype.resolveKeys = function (state, keys) {
	        if (state.hasIn(keys)) {
	            return state;
	        }
	        for (var i = 0, n = keys.length; i < n; i++) {
	            var mKeys = [].concat(keys).splice(0, i + 1);
	            if (!state.hasIn(mKeys)) {
	                mKeys.pop();
	                if (!state.hasIn(mKeys)) {
	                    if (keys[i].constructor === Number) {
	                        state = state.setIn(mKeys, immutable_1.List());
	                    } else {
	                        state = state.setIn(mKeys, immutable_1.Map());
	                    }
	                }
	            } else if (i < n) {
	                var data = state.getIn(mKeys);
	                if (!immutable_1.Map.isMap(data) && !immutable_1.List.isList(data)) {
	                    if (keys[i + 1].constructor === Number) {
	                        state = state.setIn(mKeys, immutable_1.List());
	                    } else {
	                        state = state.setIn(mKeys, immutable_1.Map());
	                    }
	                }
	            }
	        }
	        return state;
	    };
	    SchemaFormReducer.prototype.createFormHandle = function (state, _a) {
	        var key = _a.key,
	            data = _a.data;
	        if (state.has(key)) {
	            state = state.remove(key);
	        }
	        var meta = new tree_1.TreeMap(key, immutable_1.fromJS({}));
	        var stateData = immutable_1.Map({
	            meta: meta,
	            data: immutable_1.fromJS(data)
	        });
	        return state.set(key, stateData);
	    };
	    SchemaFormReducer.prototype.updateItemDataHandle = function (state, _a) {
	        var parentKeys = _a.parentKeys,
	            keys = _a.keys,
	            data = _a.data,
	            meta = _a.meta;
	        var dataKeys = parentKeys.concat(["data"].concat(keys));
	        state = this.resolveKeys(state, dataKeys);
	        state = state.setIn(dataKeys, immutable_1.fromJS(data));
	        if (meta) {
	            state = this.updateItemMetaHandle(state, { parentKeys: parentKeys, keys: keys, meta: meta });
	        }
	        return state;
	    };
	    SchemaFormReducer.prototype.addItemDataHandle = function (state, _a) {
	        var parentKeys = _a.parentKeys,
	            keys = _a.keys,
	            data = _a.data;
	        var dataKeys = parentKeys.concat(["data"].concat(keys)),
	            metaKeys = parentKeys.concat(["meta"]),
	            rootNode = state.getIn(metaKeys),
	            childNode = rootNode.containPath(parentKeys.concat(keys));
	        var formItemData;
	        state = this.resolveKeys(state, dataKeys);
	        formItemData = state.getIn(dataKeys) || immutable_1.List();
	        formItemData = formItemData.push(immutable_1.fromJS(data));
	        if (childNode && childNode.value) {
	            childNode.value = childNode.value.merge({
	                collapsing: false
	            });
	        }
	        return state.setIn(dataKeys, formItemData);
	    };
	    SchemaFormReducer.prototype.removeItemDataHandle = function (state, _a) {
	        var parentKeys = _a.parentKeys,
	            keys = _a.keys,
	            index = _a.index;
	        var dataKeys = parentKeys.concat(["data"].concat(keys)),
	            metaKeys = parentKeys.concat(["meta"]),
	            rootNode = state.getIn(metaKeys),
	            childNode = rootNode.addChild(parentKeys.concat(keys).concat([index]));
	        var formItemData;
	        state = this.resolveKeys(state, dataKeys);
	        formItemData = state.getIn(dataKeys);
	        if (!formItemData || !immutable_1.List.isList(formItemData)) {
	            return state;
	        }
	        if (childNode) {
	            childNode.removeFromParent();
	        }
	        return state.setIn(dataKeys, formItemData.remove(index));
	    };
	    SchemaFormReducer.prototype.switchItemHandle = function (state, _a) {
	        var parentKeys = _a.parentKeys,
	            keys = _a.keys,
	            curIndex = _a.curIndex,
	            toIndex = _a.toIndex;
	        var dataKeys = parentKeys.concat(["data"].concat(keys)),
	            metaKeys = parentKeys.concat(["meta"]),
	            rootNode = state.getIn(metaKeys);
	        var formItemData, childNode;
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
	    };
	    SchemaFormReducer.prototype.moveItemHandle = function (state, _a) {
	        var parentKeys = _a.parentKeys,
	            keys = _a.keys,
	            curIndex = _a.curIndex,
	            toIndex = _a.toIndex;
	        var dataKeys = parentKeys.concat(["data"].concat(keys)),
	            metaKeys = parentKeys.concat(["meta"]),
	            rootNode = state.getIn(metaKeys),
	            childNode = rootNode.addChild(parentKeys.concat(keys).concat([curIndex])),
	            offset = toIndex > curIndex && false ? 1 : 0;
	        var formItemData;
	        state = this.resolveKeys(state, dataKeys);
	        formItemData = state.getIn(dataKeys);
	        if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
	            return state;
	        }
	        var curItemData = formItemData.get(curIndex);
	        formItemData = formItemData.remove(curIndex);
	        formItemData = formItemData.insert(toIndex - offset, curItemData);
	        childNode.insertToFromParent(toIndex);
	        return state.setIn(dataKeys, formItemData);
	    };
	    SchemaFormReducer.prototype.updateItemMetaHandle = function (state, _a) {
	        var parentKeys = _a.parentKeys,
	            keys = _a.keys,
	            data = _a.data;
	        var metaKeys = parentKeys.concat(["meta"]);
	        var rootNode = state.getIn(metaKeys);
	        var childNode = rootNode.addChild(parentKeys.concat(keys));
	        var value = childNode.value;
	        if (childNode.value) {
	            childNode.value = childNode.value.merge(data);
	        } else {
	            childNode.value = immutable_1.fromJS(data);
	        }
	        var newRoot = _extends({}, rootNode, tree_1.TreeMap.prototype);
	        return state.setIn(metaKeys, newRoot);
	    };
	    return SchemaFormReducer;
	}();
	exports.SchemaFormReducer = SchemaFormReducer;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }
/******/ ])
});
;