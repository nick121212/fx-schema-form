(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("reselect"), require("redux-act"), require("redux"), require("prop-types"), require("ajv"));
	else if(typeof define === 'function' && define.amd)
		define("SchemaFormReact", ["react", "recompose", "immutable", "fx-schema-form-core", "react-redux", "resolve-pathname", "reselect", "redux-act", "redux", "prop-typese", "ajv"], factory);
	else if(typeof exports === 'object')
		exports["SchemaFormReact"] = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("reselect"), require("redux-act"), require("redux"), require("prop-types"), require("ajv"));
	else
		root["SchemaFormReact"] = factory(root["React"], root["recompose"], root["Immutable"], root["SchemaFormCore"], root["react-redux"], root["resolve-pathname"], root["reselect"], root["redux-act"], root["Redux"], root["prop-types"], root["Ajv"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_92__, __WEBPACK_EXTERNAL_MODULE_100__, __WEBPACK_EXTERNAL_MODULE_107__, __WEBPACK_EXTERNAL_MODULE_114__, __WEBPACK_EXTERNAL_MODULE_116__, __WEBPACK_EXTERNAL_MODULE_122__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(84);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(56);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(74);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hocFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hocs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(101);



var reducerFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
var hocFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
var themeFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
__WEBPACK_IMPORTED_MODULE_1__hocs__["a" /* hocs */].forEach(function (hoc) {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});
reducerFactory.add("schemaForm", __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* schemaFormReducer */]);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(41);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(63);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(32)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(12);
var ctx = __webpack_require__(40);
var hide = __webpack_require__(13);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(62);
var enumBugKeys = __webpack_require__(33);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(67).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(16)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(16);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(12);
var LIBRARY = __webpack_require__(26);
var wksExt = __webpack_require__(35);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });


__WEBPACK_IMPORTED_MODULE_0__component__["a" /* SchemaForm */].propTypes = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default_props__["a" /* DefaultPropsTypeCheck */]);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var $export = __webpack_require__(18);
var redefine = __webpack_require__(43);
var hide = __webpack_require__(13);
var has = __webpack_require__(10);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(61);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(68);
var ITERATOR = __webpack_require__(16)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(60);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(64)(false);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(44);
var hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(27);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(41);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);

var TreeMap = function () {
    function TreeMap(key, value, parent) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TreeMap);

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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPropsTypeCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(116);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_tree__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_dec__ = __webpack_require__(121);







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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hocs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__merge__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__make__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__temp__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data__ = __webpack_require__(99);









var hocs = [__WEBPACK_IMPORTED_MODULE_0__merge__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__field__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__array__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__validate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__make__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__temp__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__data__["a" /* default */]];

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__);



var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var name = "merge";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return function (Component) {
            var MergeComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MergeComponentHoc, _PureComponent);

                function MergeComponentHoc(props) {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MergeComponentHoc);

                    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.call(this, props));

                    var uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : undefined;
                    if (uiSchema) {
                        uiSchema.keys = uiSchema.originKeys;
                    }
                    var merge = new __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__["MergeLib"](props.ajv, props.schemaId, uiSchema, props.uiSchemas);
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
                        extraProps = __rest(_a, ["uiSchemas", "uiSchema"]);
                    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps));
                };

                return MergeComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);

            return MergeComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(70);
module.exports = __webpack_require__(35).f('iterator');


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(59)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(29);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(16)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(30);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(45);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(65);
var toAbsoluteIndex = __webpack_require__(66);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(69);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var global = __webpack_require__(6);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(16)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(73);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(83);
module.exports = __webpack_require__(12).Symbol;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(18);
var redefine = __webpack_require__(43);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(32);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(23);
var wks = __webpack_require__(16);
var wksExt = __webpack_require__(35);
var wksDefine = __webpack_require__(36);
var enumKeys = __webpack_require__(78);
var isArray = __webpack_require__(79);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(14);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(27);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(29);
var gOPNExt = __webpack_require__(80);
var $GOPD = __webpack_require__(48);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(30);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f = $propertyIsEnumerable;
  __webpack_require__(46).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(26)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(46);
var pIE = __webpack_require__(37);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(45);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(47).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('asyncIterator');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('observable');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(12).Object.setPrototypeOf;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(18);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(19);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(40)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var $Object = __webpack_require__(12).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(18);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(29) });


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_resolve_pathname__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_resolve_pathname___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_resolve_pathname__);







var name = "utils";
var hoc = function hoc(hocFactory) {
    return function () {
        return function (Component) {
            var ComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ComponentHoc, _PureComponent);

                function ComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
                }

                ComponentHoc.prototype.render = function render() {
                    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object.assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions, normalizeDataPath: this.normalizeDataPath, getRequiredKeys: this.getRequiredKeys }, this.props));
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
                            if (__WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__["schemaKeysFactory"].has(keys.join("/"))) {
                                var schema = __WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__["schemaFieldFactory"].get(__WEBPACK_IMPORTED_MODULE_4_fx_schema_form_core__["schemaKeysFactory"].get(keys.join("/")));
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
                            if (!__WEBPACK_IMPORTED_MODULE_5_immutable___default.a.Map.isMap(next)) {
                                next = __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS(next);
                            }
                            return next.merge(prev);
                        }
                        return prev;
                    }, __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS({})).toJS();
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
                    var keysResolve = __WEBPACK_IMPORTED_MODULE_6_resolve_pathname___default()(path, keysCopy.join("/")).split("/");
                    keysResolve.shift();
                    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                        keysResolve.pop();
                    }
                    return keysResolve;
                };

                return ComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);

            return ComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_92__;

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factory__ = __webpack_require__(7);





var name = "theme";
var hoc = function hoc(hocFactory) {
    return function () {
        return function (Component) {
            var defualtKey = "default";

            var ThemeComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ThemeComponentHoc, _PureComponent);

                function ThemeComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ThemeComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
                }

                ThemeComponentHoc.prototype.render = function render() {
                    var theme = this.props.uiSchema.theme;

                    var nsFactory = void 0;
                    if (__WEBPACK_IMPORTED_MODULE_4__factory__["c" /* themeFactory */].has(theme || defualtKey)) {
                        nsFactory = __WEBPACK_IMPORTED_MODULE_4__factory__["c" /* themeFactory */].get(theme || defualtKey);
                    } else {
                        throw new Error("\u6CA1\u6709\u627E\u5230" + (theme || defualtKey) + "\u7684\u6837\u5F0F\uFF01");
                    }
                    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object.assign({ currentTheme: nsFactory }, this.props));
                };

                return ThemeComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);

            return ThemeComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);




var name = "field";
var hoc = function hoc(hocFactory) {
    return function () {
        return function (Component) {
            var defaultKey = "default";

            var FieldComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(FieldComponentHoc, _PureComponent);

                function FieldComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, FieldComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
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
                    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object.assign({}, this.props, { FieldComponent: FieldComponent, WidgetComponent: WidgetComponent }));
                };

                return FieldComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);

            return FieldComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__factory__ = __webpack_require__(7);





var _this = this;

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var name = "array";
var hoc = function hoc(hocFactory) {
    return function () {
        var commHoc = Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["withHandlers"])({
            addItem: function addItem(propsCur) {
                return function (props, data) {
                    return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                                        __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.addItem({
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
                    __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get(propsCur.reducerKey || "schemaForm").actions.removeItem({
                        parentKeys: parentKeys,
                        keys: keys,
                        index: index
                    });
                };
            },
            moveItem: function moveItem(propsCur) {
                return function (parentKeys, keys, curIndex, toIndex) {
                    __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get(propsCur.reducerKey || "schemaForm").actions.moveToItem({
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
                        extraProps = __rest(props, ["ArrayComponent", "ArrayItemComponent"]),
                        uiSchema = props.uiSchema;

                    if (uiSchema.type === "array") {
                        return ArrayComponent ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ArrayComponent, Object.assign({}, extraProps)) : null;
                    }
                    return ArrayItemComponent ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ArrayItemComponent, Object.assign({}, extraProps)) : null;
                };
            }
        }));
        var arrayHoc = function arrayHoc(Component) {
            var ArrayComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ArrayComponentHoc, _PureComponent);

                function ArrayComponentHoc(props, context) {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ArrayComponentHoc);

                    var _this2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.call(this, props, context));

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
                    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object.assign({}, this.props, props));
                };

                return ArrayComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]);
            ArrayComponentHoc = __decorate([commHoc, __metadata("design:paramtypes", [Object, Object])], ArrayComponentHoc);
            return ArrayComponentHoc;
        };
        var pureHoc = function pureHoc(Component) {
            var ArrayPureComponentHoc = function (_React$PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ArrayPureComponentHoc, _React$PureComponent);

                function ArrayPureComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ArrayPureComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$PureComponent.apply(this, arguments));
                }

                ArrayPureComponentHoc.prototype.render = function render() {
                    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object.assign({}, this.props));
                };

                return ArrayPureComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_4_react___default.a.PureComponent);
            ArrayPureComponentHoc = __decorate([commHoc], ArrayPureComponentHoc);
            return ArrayPureComponentHoc;
        };
        return Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["branch"])(function (props) {
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
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__factory__ = __webpack_require__(7);





var _this2 = this;

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



var name = "validate";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return function (Component) {
            var ArrayComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ArrayComponentHoc, _PureComponent);

                function ArrayComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ArrayComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
                }

                ArrayComponentHoc.prototype.render = function render() {
                    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object.assign({}, this.props));
                };

                return ArrayComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]);
            ArrayComponentHoc = __decorate([Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["withHandlers"])({
                validate: function validate(propsCur) {
                    return function (props, data) {
                        return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var result, timeId, validateResult, error;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            result = { dirty: true, isValid: false, isLoading: false };
                                            timeId = setTimeout(function () {
                                                __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.updateItemMeta({
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

                                            result.errorText = _context.t0.errors ? props.ajv.errorsText(_context.t0.errors, {
                                                dataVar: props.getTitle(props).toString()
                                            }) : _context.t0.message;

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
            }), Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["withHandlers"])({
                updateItemData: function updateItemData(propsCur) {
                    return function (props, data, meta) {
                        __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions.updateItemData({
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
                        return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            _context2.t0 = __WEBPACK_IMPORTED_MODULE_6__factory__["b" /* reducerFactory */].get(props.reducerKey || "schemaForm").actions;
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
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_index__ = __webpack_require__(11);







var name = "make";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return function (Component) {
            var MakeComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MakeComponentHoc, _PureComponent);

                function MakeComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MakeComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
                }

                MakeComponentHoc.prototype.render = function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions;
                    var type = uiSchema.type,
                        field = uiSchema.field;

                    var fieldOptions = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_6__models_index__["a" /* schemaFormTypes */].field, field || type, __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS(uiSchema.hocs ? { hocs: uiSchema.hocs } : {}), __WEBPACK_IMPORTED_MODULE_5_immutable___default.a.fromJS(settings || {}));
                    var hocs = fieldOptions.hocs || ["utils", "theme", "field", "validate", "array", "temp"];
                    var ComponentWithHocs = __WEBPACK_IMPORTED_MODULE_4_recompose__["compose"].apply(undefined, [].concat(hocs).map(function (hoc1) {
                        if (typeof hoc1 !== "string") {
                            return hoc1;
                        }
                        return hocFactory.get(hoc1)();
                    }))(Component);
                    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ComponentWithHocs, Object.assign({}, this.props));
                };

                return MakeComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);

            return MakeComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__(11);






var name = "temp";
var hoc = function hoc(hocFactory) {
    return function () {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            tempField: "temps",
            templates: []
        };

        return function (Component) {
            var TempComponentHoc = function (_PureComponent) {
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(TempComponentHoc, _PureComponent);

                function TempComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TempComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
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

                        var tempOptions = getOptions(_this2.props, __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* schemaFormTypes */].template, key),
                            TempWithHoc = __WEBPACK_IMPORTED_MODULE_4_recompose__["compose"].apply(undefined, tempOptions.tempHocs || [])(Temp);
                        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(TempWithHoc, { tempKey: key, ajv: _this2.props.ajv, uiSchema: _this2.props.uiSchema, schemaId: _this2.props.schemaId, arrayLevel: _this2.props.arrayLevel, reducerKey: reducerKey, arrayIndex: _this2.props.arrayIndex, globalOptions: _this2.props.globalOptions, ArrayComponent: _this2.props.ArrayComponent, ArrayItemComponent: _this2.props.ArrayItemComponent, initArrayComponent: _this2.props.initArrayComponent, parentKeys: _this2.props.parentKeys, getTitle: _this2.props.getTitle, getOptions: _this2.props.getOptions, getPathKeys: _this2.props.getPathKeys, children: prev });
                    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object.assign({}, this.props)));
                };

                TempComponentHoc.prototype.getTemplates = function getTemplates() {
                    var _props2 = this.props,
                        uiSchema = _props2.uiSchema,
                        currentTheme = _props2.currentTheme,
                        getOptions = _props2.getOptions,
                        keys = uiSchema.keys,
                        type = uiSchema.type,
                        typeDefaultOptions = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* schemaFormTypes */].field, type),
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
            }(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);

            return TempComponentHoc;
        };
    };
};
/* harmony default export */ __webpack_exports__["a"] = ({
    name: name,
    hoc: hoc
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export hoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reselect__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_immutable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_index__ = __webpack_require__(11);




var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var fxSelectorCreator = Object(__WEBPACK_IMPORTED_MODULE_7_reselect__["createSelectorCreator"])(__WEBPACK_IMPORTED_MODULE_7_reselect__["defaultMemoize"], __WEBPACK_IMPORTED_MODULE_8_immutable__["is"]);
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
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(DataComponentHoc, _PureComponent);

                function DataComponentHoc() {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DataComponentHoc);

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
                }

                DataComponentHoc.prototype.render = function render() {
                    var _props = this.props,
                        uiSchema = _props.uiSchema,
                        getOptions = _props.getOptions,
                        _ref = this.props.uiSchema || {},
                        _ref$keys = _ref.keys,
                        keys = _ref$keys === undefined ? [] : _ref$keys,
                        options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_9__models_index__["a" /* schemaFormTypes */].hoc, name);

                    if (!options.rootReducerKey || options.rootReducerKey.constructor !== Array) {
                        console.error("dataHoc missing property rootReducerKey.should be a Array.");
                    }
                    var hocWithData = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(getItemDataHoc(this.props.parentKeys, options.rootReducerKey, keys)),
                        ComponentWithHoc = hocWithData(Component);
                    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ComponentWithHoc, Object.assign({}, this.props));
                };

                return DataComponentHoc;
            }(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]);
            DataComponentHoc = __decorate([Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["shouldUpdate"])(function () {
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
/* 100 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_schema_form__ = __webpack_require__(102);


var schemaFormReducer = new __WEBPACK_IMPORTED_MODULE_1__reducers_schema_form__["a" /* SchemaFormReducer */](Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}));

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_act__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_act___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_act__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_tree__ = __webpack_require__(50);






var b = __WEBPACK_IMPORTED_MODULE_4__reducer__["a"];
var SchemaFormReducer = function () {
    function SchemaFormReducer(initialState) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SchemaFormReducer);

        this.initialState = initialState;
        this.createForm = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("创建一个表单数据");
        this.updateItemData = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("更新一个表单数据");
        this.updateItemMeta = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("更新一个表单元数据");
        this.addItem = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("添加一个数据");
        this.removeItem = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("删除一个数据");
        this.moveToItem = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("元素移位");
        this.removeItemData = Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createAction"])("删除一个字段的数据以及meta数据");
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
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["List"])());
                    } else {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["Map"])());
                    }
                }
            } else if (i < n) {
                var data = state.getIn(mKeys);
                if (!__WEBPACK_IMPORTED_MODULE_3_immutable__["Map"].isMap(data) && !__WEBPACK_IMPORTED_MODULE_3_immutable__["List"].isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["List"])());
                    } else {
                        state = state.setIn(mKeys, Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["Map"])());
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
        var meta = new __WEBPACK_IMPORTED_MODULE_5__libs_tree__["a" /* TreeMap */](key, Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])({}));
        var stateData = Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["Map"])({
            meta: meta,
            data: Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])(data)
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
        state = state.setIn(dataKeys, Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])(data));
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
        formItemData = state.getIn(dataKeys) || Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["List"])();
        formItemData = formItemData.push(Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])(data));
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
        if (!formItemData || !__WEBPACK_IMPORTED_MODULE_3_immutable__["List"].isList(formItemData)) {
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
        var childNode = rootNode.addChild(keys);
        var value = childNode ? childNode.value : null;
        if (childNode) {
            if (value) {
                childNode.value = childNode.value.merge(meta);
            } else {
                childNode.value = Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])(meta);
            }
        }
        if (noChange) {
            return state;
        }
        var newRoot = new __WEBPACK_IMPORTED_MODULE_5__libs_tree__["a" /* TreeMap */](rootNode.getKey(), rootNode.value);
        newRoot.children = rootNode.children;
        return state.setIn(metaKeys, newRoot);
    };

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SchemaFormReducer, [{
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

            return Object(__WEBPACK_IMPORTED_MODULE_2_redux_act__["createReducer"])((_createReducer = {}, _createReducer[this.createForm] = this.createFormHandle.bind(this), _createReducer[this.updateItemData] = this.updateItemDataHandle.bind(this), _createReducer[this.updateItemMeta] = this.updateItemMetaHandle.bind(this), _createReducer[this.addItem] = this.addItemDataHandle.bind(this), _createReducer[this.removeItem] = this.removeItemHandle.bind(this), _createReducer[this.moveToItem] = this.moveItemHandle.bind(this), _createReducer[this.removeItemData] = this.removeItemDataMetaHandle.bind(this), _createReducer), this.initialState);
        }
    }]);

    return SchemaFormReducer;
}();

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(104);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
var $Object = __webpack_require__(12).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(18);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
var a = 1;

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formitem_index__ = __webpack_require__(112);




var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var SchemaForm = function (_PureComponent) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SchemaForm, _PureComponent);

    function SchemaForm() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SchemaForm);

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
    }

    SchemaForm.prototype.render = function render() {
        var _a = this.props,
            schemaId = _a.schemaId,
            mergeSchemaList = _a.mergeSchemaList,
            arrayLevel = _a.arrayLevel,
            RootComponent = _a.RootComponent,
            children = _a.children,
            extraProps = __rest(_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
        var formItemList = mergeSchemaList ? mergeSchemaList.map(function (uiScehma, idx) {
            var arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__formitem_index__["a" /* SchemaFormItem */], Object.assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
        }) : [];
        if (RootComponent) {
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RootComponent, null, formItemList, children);
        }
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", null, formItemList, children);
    };

    return SchemaForm;
}(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]);
SchemaForm = __decorate([__WEBPACK_IMPORTED_MODULE_5__container__["a" /* hoc */]], SchemaForm);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(7);


var hoc = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["shouldUpdate"])(function () {
  return false;
}), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("utils")(), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("merge")());

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_props__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });


__WEBPACK_IMPORTED_MODULE_0__component__["a" /* SchemaFormItem */].propTypes = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default_props__["a" /* DefaultPropsTypeCheck */]);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container__ = __webpack_require__(115);




var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var SchemaFormItem = function (_PureComponent) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SchemaFormItem, _PureComponent);

    function SchemaFormItem() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SchemaFormItem);

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
    }

    SchemaFormItem.prototype.render = function render() {
        var _a = this.props,
            FieldComponent = _a.FieldComponent,
            uiSchema = _a.uiSchema,
            extraProps = __rest(_a, ["FieldComponent", "uiSchema"]);
        var options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
        var FieldComponentWithHoc = FieldComponent;
        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }
        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = __WEBPACK_IMPORTED_MODULE_5_redux__["compose"].apply(undefined, options.fieldHocs || [])(FieldComponent);
        }
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
    };

    return SchemaFormItem;
}(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]);
SchemaFormItem = __decorate([__WEBPACK_IMPORTED_MODULE_6__container__["a" /* hoc */]], SchemaFormItem);


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_114__;

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(7);


var hoc = Object(__WEBPACK_IMPORTED_MODULE_0_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("utils")(), __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* hocFactory */].get("make")());

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_116__;

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normal__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(120);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__normal__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__object__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]]);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export NormalField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__(11);




var _name$default;

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var name = "normal";
var NormalField = function (_PureComponent) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(NormalField, _PureComponent);

    function NormalField(props, context) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, NormalField);

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.call(this, props, context));
    }

    NormalField.prototype.render = function render() {
        var _a = this.props,
            WidgetComponent = _a.WidgetComponent,
            FieldComponent = _a.FieldComponent,
            formItemMeta = _a.formItemMeta,
            formItemData = _a.formItemData,
            extraProps = __rest(_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
        var fieldOptions = extraProps.getOptions(this.props, __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* schemaFormTypes */].field, name);
        var keys = extraProps.uiSchema.keys;

        var WidgetComponentWithHoc = WidgetComponent;
        if (!WidgetComponent || !keys) {
            return null;
        }
        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
            WidgetComponentWithHoc = __WEBPACK_IMPORTED_MODULE_4_recompose__["compose"].apply(undefined, fieldOptions.widgetHocs)(WidgetComponent);
        }
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(WidgetComponentWithHoc, Object.assign({ key: keys.join(".") }, extraProps));
    };

    return NormalField;
}(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (_name$default = {}, _name$default[name] = NormalField, _name$default.default = NormalField, _name$default);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export ObjectField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_recompose__);




var _name;





var name = "object";
var ObjectField = function (_PureComponent) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ObjectField, _PureComponent);

    function ObjectField() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ObjectField);

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.apply(this, arguments));
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
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = __WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* SchemaForm */];
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = __WEBPACK_IMPORTED_MODULE_6_recompose__["compose"].apply(undefined, options.formHocs)(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* SchemaForm */]);
        }
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(SchemaFormWithHoc, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
    };

    return ObjectField;
}(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (_name = {}, _name[name] = ObjectField, _name);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export ArrayField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form__ = __webpack_require__(38);




var _name;





var arrayFieldStyle = {
    width: "100%",
    height: "100%"
};

var ArrayFieldComponent = function (_React$PureComponent) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ArrayFieldComponent, _React$PureComponent);

    function ArrayFieldComponent() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ArrayFieldComponent);

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$PureComponent.apply(this, arguments));
    }

    ArrayFieldComponent.prototype.render = function render() {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", { style: arrayFieldStyle }, this.props.children);
    };

    return ArrayFieldComponent;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.PureComponent);

var name = "array";
var ArrayField = function (_PureComponent) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ArrayField, _PureComponent);

    function ArrayField(props) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ArrayField);

        var _this2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.call(this, props));

        _this2.SchemaFormWithHoc = ArrayFieldComponent;
        _this2.initComponent();
        return _this2;
    }

    ArrayField.prototype.initComponent = function initComponent() {
        var _props = this.props,
            uiSchema = _props.uiSchema,
            formItemData = _props.formItemData,
            getOptions = _props.getOptions,
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = null,
            SchemaFormItemWithHoc = null;
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = __WEBPACK_IMPORTED_MODULE_4_recompose__["compose"].apply(undefined, options.formHocs)(ArrayFieldComponent);
        }
        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            SchemaFormItemWithHoc = __WEBPACK_IMPORTED_MODULE_4_recompose__["compose"].apply(undefined, options.formItemHocs)(__WEBPACK_IMPORTED_MODULE_6__components_form__["a" /* SchemaForm */]);
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
            uiSchema = this.props.uiSchema;

        var SchemaFormWithHoc = this.SchemaFormItemWithHoc || __WEBPACK_IMPORTED_MODULE_6__components_form__["a" /* SchemaForm */];
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(SchemaFormWithHoc, { key: idx, index: idx, arrayIndex: idx, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), reducerKey: reducerKey, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv });
    };

    ArrayField.prototype.render = function render() {
        var _props3 = this.props,
            uiSchema = _props3.uiSchema,
            formItemData = _props3.formItemData,
            getOptions = _props3.getOptions,
            getRequiredKeys = _props3.getRequiredKeys,
            child = [],
            options = getOptions(this.props, __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* schemaFormTypes */].field, name);

        var SchemaFormWithHoc = this.SchemaFormWithHoc;
        var extraProps = getRequiredKeys(this.props, options.fieldIncludeKeys, options.fieldExcludeKeys);
        for (var i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(SchemaFormWithHoc, Object.assign({ children: child }, extraProps));
    };

    return ArrayField;
}(__WEBPACK_IMPORTED_MODULE_3_react__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (_name = {}, _name[name] = ArrayField, _name);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ajv__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ajv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__factory__ = __webpack_require__(7);





var _this2 = this;

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/* harmony default export */ __webpack_exports__["a"] = (function () {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { rootReducerKey: [], parentKeys: [] };

    return function (Component) {
        var SchemaFormComponentHoc = function (_PureComponent) {
            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SchemaFormComponentHoc, _PureComponent);

            function SchemaFormComponentHoc(props) {
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SchemaFormComponentHoc);

                var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _PureComponent.call(this, props));

                _this._validateAll = _this.props.validateAll.bind(_this);
                if (props.formKey) {
                    var actions = __WEBPACK_IMPORTED_MODULE_9__factory__["b" /* reducerFactory */].get(props.reducerKey).actions;
                    actions.createForm({
                        key: props.formKey,
                        data: props.initData || {}
                    });
                }
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
                    getOptions = _props.getOptions;

                var options = getOptions(this.props, "hoc", "schemaFormDec");
                var extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object.assign({ validateAll: this._validateAll, parentKeys: settings.parentKeys }, extraProps));
            };

            return SchemaFormComponentHoc;
        }(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]);
        SchemaFormComponentHoc = __decorate([Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_9__factory__["a" /* hocFactory */].get("utils")(), Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(function (state) {
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
        }), Object(__WEBPACK_IMPORTED_MODULE_5_recompose__["withHandlers"])({
            validateAll: function validateAll(props) {
                var actions = __WEBPACK_IMPORTED_MODULE_9__factory__["b" /* reducerFactory */].get(props.reducerKey).actions;
                return function (async) {
                    return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var root, validate, $validateBeforeData, $validateAfterData, normalizeDataPath, valRes;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        root = props.root, validate = props.ajv.getSchema(props.schemaId), $validateBeforeData = __WEBPACK_IMPORTED_MODULE_7_immutable___default.a.fromJS({
                                            dirty: true,
                                            isValid: true,
                                            isLoading: true
                                        }), $validateAfterData = __WEBPACK_IMPORTED_MODULE_7_immutable___default.a.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = props.normalizeDataPath;

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
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            meta: root.value
                                        });
                                        _context.next = 10;
                                        return validate(props.data.toJS());

                                    case 10:
                                        valRes = _context.sent;

                                        if (valRes) {
                                            _context.next = 13;
                                            break;
                                        }

                                        throw new __WEBPACK_IMPORTED_MODULE_8_ajv__["ValidationError"](validate.errors);

                                    case 13:
                                        root.value = root.value.merge({
                                            isValid: true
                                        });
                                        actions.updateItemMeta({
                                            parentKeys: settings.parentKeys,
                                            keys: [],
                                            meta: root.value
                                        });
                                        _context.next = 25;
                                        break;

                                    case 17:
                                        _context.prev = 17;
                                        _context.t0 = _context["catch"](5);

                                        if (_context.t0 instanceof __WEBPACK_IMPORTED_MODULE_8_ajv__["ValidationError"]) {
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
                                            var childNode = root.addChild(dataKeys, __WEBPACK_IMPORTED_MODULE_7_immutable___default.a.fromJS({}));
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
                                        return _context.finish(25);

                                    case 29:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[5, 17, 25, 29]]);
                    }));
                };
            }
        })), __metadata("design:paramtypes", [Object])], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
});

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=index.js.map