(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fxSchemaFormCore"] = factory();
	else
		root["fxSchemaFormCore"] = factory();
})(this, function() {
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.schemaTypeFactory = exports.schemaKeyWordFactory = exports.schemaFieldFactory = exports.schemaKeysFactory = exports.BaseFactory = exports.MergeLib = exports.ResolveLib = undefined;

	var _resolve = __webpack_require__(1);

	Object.defineProperty(exports, "ResolveLib", {
	  enumerable: true,
	  get: function get() {
	    return _resolve.ResolveLib;
	  }
	});

	var _merge = __webpack_require__(7);

	Object.defineProperty(exports, "MergeLib", {
	  enumerable: true,
	  get: function get() {
	    return _merge.MergeLib;
	  }
	});

	var _keys = __webpack_require__(4);

	var _types = __webpack_require__(10);

	var _factory = __webpack_require__(3);

	var _factory2 = __webpack_require__(2);

	_factory2.schemaKeyWordFactory.add("ref", _keys.ref);
	_factory2.schemaKeyWordFactory.add("oneof", _keys.oneof);
	_factory2.schemaTypeFactory.add("array", _types.array);
	_factory2.schemaTypeFactory.add("string", _types.none);
	_factory2.schemaTypeFactory.add("undefined", _types.none);
	_factory2.schemaTypeFactory.add("number", _types.none);
	_factory2.schemaTypeFactory.add("null", _types.none);
	_factory2.schemaTypeFactory.add("any", _types.none);
	_factory2.schemaTypeFactory.add("integer", _types.none);
	_factory2.schemaTypeFactory.add("boolean", _types.none);
	_factory2.schemaTypeFactory.add("object", _types.object);
	exports.BaseFactory = _factory.BaseFactory;
	exports.schemaKeysFactory = _factory2.schemaKeysFactory;
	exports.schemaFieldFactory = _factory2.schemaFieldFactory;
	exports.schemaKeyWordFactory = _factory2.schemaKeyWordFactory;
	exports.schemaTypeFactory = _factory2.schemaTypeFactory;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ResolveLib = undefined;

	var _factory = __webpack_require__(2);

	/**
	 * 解析schema中的字段，缓存到【schemaFieldFactory】中    static getSchemaId(arg0: any): any {
	        throw new Error("Method not implemented.");
	    }    static getSchemaId: any;


	 * 1. 验证schema的合法性
	 * 2. 提取成map
	 */
	var ResolveLib = /** @class */function () {
	    function ResolveLib(ajv, schema, $id) {
	        if ($id === void 0) {
	            $id = "";
	        }
	        this.ajv = ajv;
	        this.schema = schema;
	        this.$id = $id;
	        // 验证schema的完整性
	        if (!$id) {
	            this.initSchema(ajv, schema);
	        }
	        // 生成map
	        this.compileSchema(schema, $id);
	    }
	    /**
	     * 初始化schema
	     * 1. 判断$id，如果不存在，报错
	     * 2. 验证schema的结构是否正确，不正确报错
	     * 3. 若果ajv中不存在schema，则添加进ajv
	     * @param ajv     ajv的实例
	     * @param schema  schema
	     */
	    ResolveLib.prototype.initSchema = function (ajv, schema) {
	        // 如果没有$id, 直接报错
	        if (!schema.$id) {
	            throw new Error("id is required by fx-schema-form-core.");
	        }
	        // 验证schema的正确性
	        if (!ajv.validateSchema(schema)) {
	            throw ajv.errors;
	        }
	        // 把schema加入到ajv
	        if (!ajv.getSchema(schema.$id)) {
	            ajv.addSchema(schema);
	        }
	        return schema;
	    };
	    /**
	     * 遍历schema，生成map
	     * 1. 如果schema.type不是string，报错
	     * 2. 调用【schemaTypeFactory
	     * @param schema  schema
	     */
	    ResolveLib.prototype.compileSchema = function (schema, $id) {
	        _factory.schemaTypeFactory.get("undefined")(schema, $id || schema.$id + "#", this.ajv);
	        this.mergeSchema = schema;
	        // 如果不存在type，则直接返回
	        if (!schema.type) {
	            return;
	        }
	        // 这里只解析type为字符串的结构，不支持数组类型的type
	        if (schema.type.constructor !== String) {
	            throw new Error("schema type[" + schema.type + "] can only be string.");
	        }
	        var type = schema.type.toString();
	        // 这里调用相对应的type的方法，来解析schema
	        if (_factory.schemaTypeFactory.has(type)) {
	            this.mergeSchema = _factory.schemaTypeFactory.get(type)(schema, $id || schema.$id + "#", this.ajv);
	        }
	    };
	    /**
	     * 解析path成成数据的路径
	     * 最终schema需要与uiSchema做合并，uiSchema中的key配置的是数组 ["appType', '-','type']，所以需要做一下转换
	     * 1. 去掉properties，items关键字转换成【 - 】
	     * 2. 第一个字符去掉末尾的【 # 】
	     * @example design#/properties/appType => ["appType']
	     * @example design#/properties/appType/type => ["appType','type']
	     * @example design#/properties/appType/items/properties/type => ["appType', '-','type']
	     * @param schemaKey schema的path
	     * @param keepFirst 是否需要保留第一个
	     */
	    ResolveLib.getDataKeys = function (schemaKey, keepFirst) {
	        if (keepFirst === void 0) {
	            keepFirst = false;
	        }
	        var filterKeyWords = ["items", "properties"];
	        var keys = schemaKey.split("/").map(function (key, index) {
	            // 第一个替换末尾的#
	            if (index === 0 && /#$/g.test(key)) {
	                return keepFirst ? key.replace(/#$/g, "") : null;
	            }
	            // 去掉properties
	            if (key === "properties") {
	                return null;
	            }
	            // 转换items成-
	            if (key === "items") {
	                return "-";
	            }
	            return key;
	        });
	        return keys.filter(function (key) {
	            return !!key;
	        });
	    };
	    /**
	     * 从schemaPath中获取$id
	     * @param schemaKey 当前schema的path
	     */
	    ResolveLib.getSchemaId = function (schemaKey) {
	        var keys = schemaKey.split("/");
	        if (!keys.length) {
	            throw new Error(schemaKey + " not a valid schemaPath.");
	        }
	        return keys[0].replace(/#$/g, "");
	    };
	    return ResolveLib;
	}();
	exports.ResolveLib = ResolveLib;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.convertKeys = exports.schemaKeysFactory = exports.schemaTypeFactory = exports.schemaKeyWordFactory = exports.schemaFieldFactory = undefined;

	var _factory = __webpack_require__(3);

	var schemaFieldFactory = exports.schemaFieldFactory = new _factory.BaseFactory();
	var schemaKeyWordFactory = exports.schemaKeyWordFactory = new _factory.BaseFactory();
	var schemaTypeFactory = exports.schemaTypeFactory = new _factory.BaseFactory();
	var schemaKeysFactory = exports.schemaKeysFactory = new _factory.BaseFactory();
	var convertKeys = exports.convertKeys = function convertKeys(schema, ajv) {
	    schemaKeyWordFactory.forEach(function (key, val) {
	        schema = val(schema, ajv);
	    });
	    return schema;
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 实例的工厂类
	 */
	var BaseFactory = /** @class */function () {
	    function BaseFactory() {
	        this.instances = {};
	        this.protectedInstances = {};
	    }
	    /**
	     * 添加一个实例
	     * @param name     {string}    实例的名称
	     * @param engine   {IEngine}   实例
	     * @param override {boolean}   是否覆盖
	     * @return         {void}
	     */
	    BaseFactory.prototype.add = function (name, intance, override) {
	        if (override === void 0) {
	            override = false;
	        }
	        if (this.protectedInstances.hasOwnProperty(name)) {
	            return console.error("name=\u3010" + name + "\u3011has locked!");
	        }
	        if (!override && this.has(name)) {
	            return console.error("\u3010" + name + "\u3011exist!");
	        }
	        this.instances[name] = intance;
	    };
	    BaseFactory.prototype.has = function (name) {
	        return this.instances.hasOwnProperty(name);
	    };
	    /**
	     * 获取一个实例
	     * @param name    {String}  实例标志
	     */
	    BaseFactory.prototype.get = function (name) {
	        if (this.has(name)) {
	            return this.instances[name];
	        }
	        throw new Error("name=[" + name + "]not exist");
	    };
	    /**
	     * 锁定实例
	     * @param name 实例名称
	     */
	    BaseFactory.prototype.lock = function (name) {
	        if (this.has(name)) {
	            this.protectedInstances[name] = true;
	        }
	    };
	    /**
	     * 解锁实例
	     * @param name 实例名称
	     */
	    BaseFactory.prototype.unLock = function (name) {
	        if (this.has(name)) {
	            delete this.protectedInstances[name];
	        }
	    };
	    /**
	     * 遍历所有的元素
	     * @param func 遍历方法
	     */
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
	    return BaseFactory;
	}();
	exports.BaseFactory = BaseFactory;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ref = __webpack_require__(6);

	Object.defineProperty(exports, "ref", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ref).default;
	  }
	});

	var _oneof = __webpack_require__(5);

	Object.defineProperty(exports, "oneof", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_oneof).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (schema, ajv) {
	    if (schema && schema.oneOf) {
	        schema.oneOf.map(function (schemaOfOne) {
	            var resolve = new _resolve.ResolveLib(ajv, schemaOfOne);
	            return resolve.mergeSchema;
	        });
	    }
	    return schema;
	};

	var _resolve = __webpack_require__(1);

	;
	/**
	 * 解析schema中的关键字 oneOf
	 * 如果发现有oneOf关键字，遍历替换成schema
	 */
	module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	/**
	 * 解析schema中的关键字 ref
	 * 如果有$ref关键字，则从ajv中获取$ref的schema
	 * 如果ajv中发现了schema，则添加$ref和refKeys，返回schema
	 */


	exports.default = function (schema, ajv) {
	    if (schema && schema.$ref) {
	        var validate = ajv.getSchema(schema.$ref);
	        if (validate.schema) {
	            var schemaAjv = validate.schema;
	            schemaAjv.$ref = schema.$ref;
	            _extends(schemaAjv, {
	                refKeys: _resolve.ResolveLib.getDataKeys(schema.$ref)
	            });
	            return schemaAjv;
	        } else {
	            throw new Error("没有发现${schema.$ref}的schema。");
	        }
	    }
	    return schema;
	};

	var _resolve = __webpack_require__(1);

	;
	module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MergeLib = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _uischema = __webpack_require__(8);

	var _factory = __webpack_require__(2);

	var _resolve = __webpack_require__(1);

	/**
	 * 用来转换uiSchema的类
	 *
	 */
	var MergeLib = /** @class */function () {
	    /**
	     * 构造函数
	     * 1. 验证uiSchema的正确性
	     * 2. 处理uiSchema中带*号的数据
	     * 3. 返回合并后的数据
	     * @param ajv         当前的ajv实例
	     * @param $id         schema的$id
	     * @param parentKeys  父亲的keys 暂时没用到
	     * @param uiSchemas   uiSchema
	     */
	    function MergeLib(ajv, schemaPath, parentKeys, uiSchemas) {
	        this.ajv = ajv;
	        this.schemaPath = schemaPath;
	        this.parentKeys = parentKeys;
	        this.uiSchemas = uiSchemas;
	        if (!ajv.validate(_uischema.uiSchemaSchema, uiSchemas)) {
	            throw ajv.errors;
	        }
	        var keyPath = _resolve.ResolveLib.getDataKeys(schemaPath, true).join("/");
	        if (!_factory.schemaKeysFactory.has(keyPath)) {
	            throw new Error(keyPath + " not exist or " + keyPath + " did not resolve yet.");
	        }
	        this.curSchema = _factory.schemaFieldFactory.get(_factory.schemaKeysFactory.get(keyPath));
	        this.mergeUiSchemaList = this.mergeUiSchema();
	    }
	    /**
	     * 初始化uiSchema
	     * 如果是字符串；用$id合并之后，获取schema
	     * 如果是【UiSchema】；合并key之后，获取schema
	     * @param uiSchema uiSchema
	     */
	    MergeLib.prototype.initUiSchema = function (uiSchema) {
	        var $id = _resolve.ResolveLib.getSchemaId(this.schemaPath);
	        if (uiSchema.constructor === String) {
	            if (!uiSchema) {
	                return { key: $id };
	            }
	            return {
	                key: [$id, uiSchema].join("/")
	            };
	        }
	        return {
	            key: [$id, uiSchema.key].join("/")
	        };
	    };
	    /**
	     * 如果在【schemaKeysFactory】中没有发现uiSchema.key,则报错
	     * 从【schemaKeysFactory】获取对应的schema，与uiSchema合并之后返回
	     * @param uiSchema uiSchema
	     */
	    MergeLib.prototype.mergeUiSchemaToArray = function (uiSchema) {
	        if (!_factory.schemaKeysFactory.has(uiSchema.key)) {
	            throw new Error(uiSchema.key + " did not found. do you forget to resolve schema first.");
	        }
	        var schemaKey = _factory.schemaKeysFactory.get(uiSchema.key);
	        var schema = _factory.schemaFieldFactory.get(schemaKey);
	        return _extends({}, schema, uiSchema);
	    };
	    /**
	     * 合并uiSchema
	     * 1. 先判断uiSchema中是否存在*
	     * 2. 如果没有*号，则遍历uiSchema，合并数据
	     * 3. 如果存在*号；先合并*之前和*之后的uiSchema
	     * 4. 遍历当前的schema：
	     *    如果是object，则遍历properties，然后合并数据
	     *    如果是array，则直接返回items，然后合并数据
	     */
	    MergeLib.prototype.mergeUiSchema = function () {
	        var _this = this;
	        var idx = this.uiSchemas.indexOf("*");
	        var uiSchemasFirst = [],
	            uiSchemasLast = [];
	        // 如果存在多个*，则报错
	        if (this.uiSchemas.lastIndexOf("*") !== idx) {
	            throw new Error("uiSchema can only has one *.");
	        }
	        // 不存在*号的情况
	        if (idx < 0) {
	            this.uiSchemas.slice(idx + 1).map(function (us) {
	                var uiSchema = _this.initUiSchema(us);
	                uiSchemasFirst.push(_this.mergeUiSchemaToArray(uiSchema));
	            });
	            return uiSchemasFirst;
	        }
	        // 处理*之前的数据
	        this.uiSchemas.slice(0, idx).forEach(function (us) {
	            var uiSchema = _this.initUiSchema(us);
	            uiSchemasFirst.push(_this.mergeUiSchemaToArray(uiSchema));
	        });
	        // 处理*之后的数据
	        this.uiSchemas.slice(idx + 1).forEach(function (us) {
	            var uiSchema = _this.initUiSchema(us);
	            uiSchemasLast.push(_this.mergeUiSchemaToArray(uiSchema));
	        });
	        // 如果是object类型，遍历properties属性，与之前的数据去重后添加到数组
	        if (this.curSchema.type === "object" && this.curSchema.properties) {
	            Object.keys(this.curSchema.properties).forEach(function (us) {
	                var uiSchema = _this.initUiSchema([].concat(_resolve.ResolveLib.getDataKeys(_this.curSchema.schemaPath).concat([us])).join("/"));
	                if (!uiSchemasFirst.concat(uiSchemasLast).filter(function (val) {
	                    return val.key === uiSchema.key;
	                }).length) {
	                    uiSchema = _this.mergeUiSchemaToArray(uiSchema);
	                    uiSchemasFirst.push(uiSchema);
	                }
	            });
	        }
	        // 如果是数组，获取下一级的key，然后做对比处理
	        if (this.curSchema.type === "array" && this.curSchema.items) {
	            var uiSchema_1 = this.initUiSchema([].concat(_resolve.ResolveLib.getDataKeys(this.curSchema.schemaPath).concat(["-"])).join("/"));
	            if (!uiSchemasFirst.concat(uiSchemasLast).filter(function (val) {
	                return val.key === uiSchema_1.key;
	            }).length) {
	                uiSchema_1 = this.mergeUiSchemaToArray(uiSchema_1);
	                uiSchemasFirst.push(uiSchema_1);
	            }
	        }
	        return uiSchemasFirst.concat(uiSchemasLast);
	    };
	    return MergeLib;
	}();
	exports.MergeLib = MergeLib;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * uiSchema的模型schema
	 */
	var uiSchemaSchema = exports.uiSchemaSchema = {
	    type: "array",
	    items: {
	        anyOf: [{
	            type: "string",
	            minLength: 1
	        }, {
	            additionalProperties: true,
	            type: "object",
	            required: ["key"],
	            properties: {
	                key: { type: "string" }
	            }
	        }]
	    }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	/**
	 * 解析schema中的type=array的结构
	 * 如果存在items,则继续解析schema.item
	 */


	exports.default = function (schema, schemaKey, ajv) {
	    if (schema.items) {
	        var propertySchemaResolve = new _resolve.ResolveLib(ajv, schema.items, [schemaKey, "items"].join("/"));
	        var keys = _resolve.ResolveLib.getDataKeys([schemaKey, "items"].join("/"));
	        _extends(propertySchemaResolve.mergeSchema, {
	            keys: keys
	        });
	    }
	    return schema;
	};

	var _resolve = __webpack_require__(1);

	;
	module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _array = __webpack_require__(9);

	Object.defineProperty(exports, "array", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_array).default;
	  }
	});

	var _object = __webpack_require__(12);

	Object.defineProperty(exports, "object", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_object).default;
	  }
	});

	var _none = __webpack_require__(11);

	Object.defineProperty(exports, "none", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_none).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (schema, schemaKey, ajv) {
	    var currentSchema = (0, _factory.convertKeys)(schema, ajv);
	    var keys = _resolve.ResolveLib.getDataKeys(schemaKey);
	    var $id = _resolve.ResolveLib.getSchemaId(schemaKey);
	    if (_factory.schemaFieldFactory.has(schemaKey)) {
	        return schema;
	    }
	    _factory.schemaFieldFactory.add(schemaKey, _extends({}, currentSchema || schema, {
	        keys: keys,
	        schemaPath: schemaKey
	    }));
	    _factory.schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);
	    return schema;
	};

	var _factory = __webpack_require__(2);

	var _resolve = __webpack_require__(1);

	;
	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	/**
	 * 解析schema中的type=object的结构
	 * 如果存在schema.properties,则遍历properties，继续解析schema.properties[key]
	 */


	exports.default = function (schema, schemaKey, ajv) {
	    if (schema.properties) {
	        Object.keys(schema.properties).forEach(function (key) {
	            if (["properties", "items"].indexOf(key) >= 0) {
	                throw new Error(key + "\u4E3A\u4FDD\u7559\u5173\u952E\u5B57.");
	            }
	            var propertySchemaResolve = new _resolve.ResolveLib(ajv, schema.properties[key], [schemaKey, "properties", key].join("/"));
	            var keys = _resolve.ResolveLib.getDataKeys([schemaKey, "properties", key].join("/"));
	            _extends(propertySchemaResolve.mergeSchema, {
	                keys: keys
	            });
	        });
	    }
	    return schema;
	};

	var _resolve = __webpack_require__(1);

	;
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;