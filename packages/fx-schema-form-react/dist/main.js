(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("redux-act"), require("reselect"), require("redux"), require("ajv"));
	else if(typeof define === 'function' && define.amd)
		define("fx-schema-form-react", ["react", "recompose", "immutable", "fx-schema-form-core", "react-redux", "resolve-pathname", "redux-act", "reselect", "redux", "ajv"], factory);
	else if(typeof exports === 'object')
		exports["fx-schema-form-react"] = factory(require("react"), require("recompose"), require("immutable"), require("fx-schema-form-core"), require("react-redux"), require("resolve-pathname"), require("redux-act"), require("reselect"), require("redux"), require("ajv"));
	else
		root["fx-schema-form-react"] = factory(root["React"], root["recompose"], root["Immutable"], root["fx-schema-form-core"], root["react-redux"], root["resolve-pathname"], root["redux-act"], root["reselect"], root["Redux"], root["Ajv"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdatefx_schema_form_react"];
/******/ 	window["webpackHotUpdatefx_schema_form_react"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(requestTimeout) { // eslint-disable-line no-unused-vars
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "222e32ee9b22b6aac279"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(10)(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var fx_schema_form_core_1 = __webpack_require__(5);
var hocs_1 = __webpack_require__(11);
var reducer_1 = __webpack_require__(6);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = __webpack_require__(4);
var schema_form_1 = __webpack_require__(18);
exports.schemaFormReducer = new schema_form_1.SchemaFormReducer(immutable_1.fromJS({}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(26);
exports.SchemaForm = component_1.SchemaForm;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var fx_schema_form_core_1 = __webpack_require__(5);
var factory_1 = __webpack_require__(3);
var components_1 = __webpack_require__(25);
var fields_1 = __webpack_require__(32);
var tree_1 = __webpack_require__(8);
var dec_1 = __webpack_require__(36);
var defaultTheme = {
    tempFactory: new fx_schema_form_core_1.BaseFactory(),
    fieldFactory: new fx_schema_form_core_1.BaseFactory(),
    widgetFactory: new fx_schema_form_core_1.BaseFactory()
};
defaultTheme.fieldFactory.add("default", fields_1.NormalField);
defaultTheme.fieldFactory.add("object", fields_1.ObjectField);
defaultTheme.fieldFactory.add("array", fields_1.ArrayField);
factory_1.themeFactory.add("default", defaultTheme);
exports.default = {
    defaultTheme: defaultTheme,
    schemaFormDec: dec_1.default,
    TreeMap: tree_1.TreeMap,
    reducerFactory: factory_1.reducerFactory,
    SchemaForm: components_1.SchemaForm,
    hocFactory: factory_1.hocFactory
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = __webpack_require__(12);
exports.merge = merge_1.default;
var utils_1 = __webpack_require__(13);
exports.utils = utils_1.default;
var theme_1 = __webpack_require__(15);
exports.theme = theme_1.default;
var field_1 = __webpack_require__(16);
exports.field = field_1.default;
var array_1 = __webpack_require__(17);
exports.array = array_1.default;
var validate_1 = __webpack_require__(20);
exports.validate = validate_1.default;
var make_1 = __webpack_require__(21);
exports.make = make_1.default;
var temp_1 = __webpack_require__(22);
exports.temp = temp_1.default;
var data_1 = __webpack_require__(23);
exports.data = data_1.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var fx_schema_form_core_1 = __webpack_require__(5);
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
                var uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : null;
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var resolve_pathname_1 = __webpack_require__(14);
var immutable_1 = __webpack_require__(4);
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
                }, immutable_1.default.fromJS({})).toJS();
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

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var factory_1 = __webpack_require__(3);
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var recompose_1 = __webpack_require__(2);
var reducer_1 = __webpack_require__(6);
exports.default = function (hocFactory, settings) {
    if (settings === void 0) {
        settings = {};
    }
    var hoc = recompose_1.compose(recompose_1.withHandlers({
        addItem: function (propsCur) {
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
        removeItem: function (propsCur) {
            return function (parentKeys, keys, index) {
                reducer_1.schemaFormReducer.actions.removeItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    index: index
                });
            };
        },
        switchItem: function (propsCur) {
            return function (parentKeys, keys, curIndex, toIndex) {
                reducer_1.schemaFormReducer.actions.switchItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        moveItem: function (propsCur) {
            return function (parentKeys, keys, curIndex, toIndex) {
                reducer_1.schemaFormReducer.actions.moveToItem({
                    parentKeys: parentKeys,
                    keys: keys,
                    curIndex: curIndex,
                    toIndex: toIndex
                });
            };
        },
        initArrayComponent: function (propsCur) {
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
    var arrayHoc = function (Component) {
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
    var pureHoc = function (Component) {
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
        }(react_1.default.PureComponent);
        return ArrayPureComponentHoc;
    };
    return recompose_1.branch(function (props) {
        var uiSchema = props.uiSchema;
        return uiSchema.type === "array";
    }, arrayHoc, pureHoc);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_act_1 = __webpack_require__(19);
var Immutable = __webpack_require__(4);
var tree_1 = __webpack_require__(8);
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
        get: function () {
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
        get: function () {
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
                        state = state.setIn(mKeys, Immutable.List());
                    } else {
                        state = state.setIn(mKeys, Immutable.Map());
                    }
                }
            } else if (i < n) {
                var data = state.getIn(mKeys);
                if (!Immutable.Map.isMap(data) && !Immutable.List.isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, Immutable.List());
                    } else {
                        state = state.setIn(mKeys, Immutable.Map());
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
        var meta = new tree_1.TreeMap(key, Immutable.fromJS({}));
        var stateData = Immutable.Map({
            meta: meta,
            data: Immutable.fromJS(data)
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
        state = state.setIn(dataKeys, Immutable.fromJS(data));
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
        formItemData = state.getIn(dataKeys) || Immutable.List();
        formItemData = formItemData.push(Immutable.fromJS(data));
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
        if (!formItemData || !Immutable.List.isList(formItemData)) {
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
            childNode.value = Immutable.fromJS(data);
        }
        var newRoot = Object.assign({}, rootNode, tree_1.TreeMap.prototype);
        return state.setIn(metaKeys, newRoot);
    };
    return SchemaFormReducer;
}();
exports.SchemaFormReducer = SchemaFormReducer;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var recompose_1 = __webpack_require__(2);
var reducer_1 = __webpack_require__(6);
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
                validate: function (propsCur) {
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
                updateItemData: function (propsCur) {
                    return function (props, data, meta) {
                        reducer_1.schemaFormReducer.actions.updateItemData({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            data: data,
                            meta: meta
                        });
                    };
                },
                updateItemMeta: function (propsCur) {
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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var recompose_1 = __webpack_require__(2);
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var recompose_1 = __webpack_require__(2);
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
                var getTemplate = function (tmp) {
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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var recompose_1 = __webpack_require__(2);
var react_redux_1 = __webpack_require__(9);
var reselect_1 = __webpack_require__(24);
var immutable_1 = __webpack_require__(4);
var fxSelectorCreator = reselect_1.createSelectorCreator(reselect_1.defaultMemoize, immutable_1.is);
var maps = {};
exports.default = function (hocFactory, settings) {
    if (settings === void 0) {
        settings = {
            data: true,
            rootReducerKey: ["schemaForm"]
        };
    }
    var getItemDataHoc = function (parentKeys, keys) {
        var getFormItemData = function (state) {
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
        var getFormItemMeta = function (state) {
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

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var form_1 = __webpack_require__(7);
exports.SchemaForm = form_1.SchemaForm;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var container_1 = __webpack_require__(27);
var index_1 = __webpack_require__(28);
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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = __webpack_require__(2);
var factory_1 = __webpack_require__(3);
exports.hoc = recompose_1.compose(recompose_1.shouldUpdate(function () {
  return false;
}), factory_1.hocFactory.get("utils")(), factory_1.hocFactory.get("merge")());

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(29);
exports.SchemaFormItem = component_1.SchemaFormItem;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var redux_1 = __webpack_require__(30);
var container_1 = __webpack_require__(31);
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

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = __webpack_require__(2);
var factory_1 = __webpack_require__(3);
exports.hoc = recompose_1.compose(factory_1.hocFactory.get("utils")(), factory_1.hocFactory.get("make")());

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var normal_1 = __webpack_require__(33);
exports.NormalField = normal_1.NormalField;
var object_1 = __webpack_require__(34);
exports.ObjectField = object_1.ObjectField;
var array_1 = __webpack_require__(35);
exports.ArrayField = array_1.ArrayField;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var recompose_1 = __webpack_require__(2);
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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var react_1 = __webpack_require__(1);
var react_redux_1 = __webpack_require__(9);
var immutable_1 = __webpack_require__(4);
var ajv_1 = __webpack_require__(37);
var fx_schema_form_core_1 = __webpack_require__(5);
var factory_1 = __webpack_require__(3);
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
                                root = this.props.root, validate = this.props.ajv.getSchema(this.props.schemaId), $validateBeforeData = immutable_1.default.fromJS({
                                    dirty: true,
                                    isValid: true,
                                    isLoading: true
                                }), $validateAfterData = immutable_1.default.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = this.normalizeDataPath;
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
                                    var childNode = root.addChild(dataKeys, immutable_1.default.fromJS({}));
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

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMjJlMzJlZTliMjJiNmFhYzI3OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3RzbGliQDEuOS4wQHRzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwicmVjb21wb3NlXCIsXCJhbWRcIjpcInJlY29tcG9zZVwiLFwiY29tbW9uanMyXCI6XCJyZWNvbXBvc2VcIixcImNvbW1vbmpzXCI6XCJyZWNvbXBvc2VcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZhY3RvcnkudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJJbW11dGFibGVcIixcImFtZFwiOlwiaW1tdXRhYmxlXCIsXCJjb21tb25qczJcIjpcImltbXV0YWJsZVwiLFwiY29tbW9uanNcIjpcImltbXV0YWJsZVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiZngtc2NoZW1hLWZvcm0tY29yZVwiLFwiYW1kXCI6XCJmeC1zY2hlbWEtZm9ybS1jb3JlXCIsXCJjb21tb25qczJcIjpcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIixcImNvbW1vbmpzXCI6XCJmeC1zY2hlbWEtZm9ybS1jb3JlXCJ9Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy90cmVlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwicmVhY3QtcmVkdXhcIixcImFtZFwiOlwicmVhY3QtcmVkdXhcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcmVkdXhcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1yZWR1eFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob2NzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9jcy9tZXJnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvY3MvdXRpbHMudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJyZXNvbHZlLXBhdGhuYW1lXCIsXCJhbWRcIjpcInJlc29sdmUtcGF0aG5hbWVcIixcImNvbW1vbmpzMlwiOlwicmVzb2x2ZS1wYXRobmFtZVwiLFwiY29tbW9uanNcIjpcInJlc29sdmUtcGF0aG5hbWVcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvY3MvdGhlbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob2NzL2ZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9jcy9hcnJheS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3NjaGVtYS5mb3JtLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwicmVkdXgtYWN0XCIsXCJhbWRcIjpcInJlZHV4LWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWR1eC1hY3RcIixcImNvbW1vbmpzXCI6XCJyZWR1eC1hY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvY3MvdmFsaWRhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob2NzL21ha2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob2NzL3RlbXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob2NzL2RhdGEudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJyZXNlbGVjdFwiLFwiYW1kXCI6XCJyZXNlbGVjdFwiLFwiY29tbW9uanMyXCI6XCJyZXNlbGVjdFwiLFwiY29tbW9uanNcIjpcInJlc2VsZWN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1pdGVtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtaXRlbS9jb21wb25lbnQudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWR1eFwiLFwiYW1kXCI6XCJyZWR1eFwiLFwiY29tbW9uanMyXCI6XCJyZWR1eFwiLFwiY29tbW9uanNcIjpcInJlZHV4XCJ9Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1pdGVtL2NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkcy9ub3JtYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9maWVsZHMvb2JqZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRzL2FycmF5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9kZWMudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJBanZcIixcImFtZFwiOlwiYWp2XCIsXCJjb21tb25qczJcIjpcImFqdlwiLFwiY29tbW9uanNcIjpcImFqdlwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBLFdBQUc7O0FBRUgsb0RBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOzs7O0FBSUE7QUFDQSxzREFBOEM7QUFDOUM7QUFDQTtBQUNBLG9DQUE0QjtBQUM1QixxQ0FBNkI7QUFDN0IseUNBQWlDOztBQUVqQywrQ0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBLDREQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QU8sT0FBRTtBQUN4QyxnQ0FBVSxTQUFHLHNCQUFrQixtQkFBSSxJQUFDLHNCQUFpQixrQkFBSSxJQUFLLEtBQUssS0FBUTtBQUV4RSxnQ0FBTyxPQUFLLFNBQWEsU0FBRTtBQUNwQix1Q0FBQyxDQUNYO0FBQ0o7QUFDSjtBQUFDO0FBRUssMkJBQ1Y7QUFBRyxpQkFoQmdCO0FBa0JiLHVCQUNWO0FBQUM7QUFFTSw2Q0FBTSxTQUFiO0FBQ1UsOEJBQThEO29CQUE1RCxZQUFNO29CQUFFLFFBQWU7b0JBQWYsa0NBQWU7b0JBQUUsUUFBb0I7b0JBQXBCLHVDQUFvQztBQUU5RCx1QkFDSCwyQ0FDSSw4QkFBVSw4QkFBWSxhQUFNLEtBQWEsZ0JBQVUsS0FBVSxTQUNyRCxRQUFXLGFBQWUsYUFBVyxZQUVoQyxVQUFPLHVCQUFvQixJQUFDLFVBQUU7QUFDN0IsMkJBQUMsdUNBQVEsS0FBRyxFQUFJLElBQVksZUFBSSxFQUFJLElBQzlDO0FBQUksaUJBRjRCLENBQVAsR0FNekM7QUFBQztBQXJJdUIsdUVBYm5CLFFBQUMsVUFBa0M7QUFDeEMsb0JBQVksV0FBVyxTQUFlLGVBQU8sT0FBUyxTQUFZLFlBQU8sT0FBQyxDQUFTO29CQUN2RSxXQUFXLFNBQWUsZUFBTyxPQUFTLFNBQVksWUFBTyxPQUFDLENBQVM7b0JBQzNFLE9BQVEsTUFBTSxNQUFXO0FBRTNCO0FBQ0UsMEJBQU8sTUFBTSxNQUFVO0FBQ3ZCLDBCQUFNO0FBQ0gsNkJBQU0sS0FBTSxNQUFJLElBQVc7QUFDNUIsNEJBQU0sS0FBTSxNQUFJLElBQVU7QUFDcEIsa0NBQU0sS0FBTSxNQUFJLElBRXBDO0FBUFc7QUFPRCxhQVpSLHVEQW1KRDtBQUFELG1CQUFDO0FBQUEsVUF0SW9DLFFBc0lwQztBQUVLLGVBQ1Y7QUFDSjtBQUFFLEU7Ozs7OztBQy9MRixnRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWNvbXBvc2VcIiksIHJlcXVpcmUoXCJpbW11dGFibGVcIiksIHJlcXVpcmUoXCJmeC1zY2hlbWEtZm9ybS1jb3JlXCIpLCByZXF1aXJlKFwicmVhY3QtcmVkdXhcIiksIHJlcXVpcmUoXCJyZXNvbHZlLXBhdGhuYW1lXCIpLCByZXF1aXJlKFwicmVkdXgtYWN0XCIpLCByZXF1aXJlKFwicmVzZWxlY3RcIiksIHJlcXVpcmUoXCJyZWR1eFwiKSwgcmVxdWlyZShcImFqdlwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ4LXNjaGVtYS1mb3JtLXJlYWN0XCIsIFtcInJlYWN0XCIsIFwicmVjb21wb3NlXCIsIFwiaW1tdXRhYmxlXCIsIFwiZngtc2NoZW1hLWZvcm0tY29yZVwiLCBcInJlYWN0LXJlZHV4XCIsIFwicmVzb2x2ZS1wYXRobmFtZVwiLCBcInJlZHV4LWFjdFwiLCBcInJlc2VsZWN0XCIsIFwicmVkdXhcIiwgXCJhanZcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZngtc2NoZW1hLWZvcm0tcmVhY3RcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlY29tcG9zZVwiKSwgcmVxdWlyZShcImltbXV0YWJsZVwiKSwgcmVxdWlyZShcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIiksIHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKSwgcmVxdWlyZShcInJlc29sdmUtcGF0aG5hbWVcIiksIHJlcXVpcmUoXCJyZWR1eC1hY3RcIiksIHJlcXVpcmUoXCJyZXNlbGVjdFwiKSwgcmVxdWlyZShcInJlZHV4XCIpLCByZXF1aXJlKFwiYWp2XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmeC1zY2hlbWEtZm9ybS1yZWFjdFwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wicmVjb21wb3NlXCJdLCByb290W1wiSW1tdXRhYmxlXCJdLCByb290W1wiZngtc2NoZW1hLWZvcm0tY29yZVwiXSwgcm9vdFtcInJlYWN0LXJlZHV4XCJdLCByb290W1wicmVzb2x2ZS1wYXRobmFtZVwiXSwgcm9vdFtcInJlZHV4LWFjdFwiXSwgcm9vdFtcInJlc2VsZWN0XCJdLCByb290W1wiUmVkdXhcIl0sIHJvb3RbXCJBanZcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVmeF9zY2hlbWFfZm9ybV9yZWFjdFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVmeF9zY2hlbWFfZm9ybV9yZWFjdFwiXSA9IFxyXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0XHRpZihwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHR9IDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiBcdFx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xyXG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XHJcbiBcdFx0O1xyXG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiBcdFx0XHRpZih0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xyXG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcclxuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbiBcdFx0XHRcdGlmKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxyXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpKTtcclxuIFx0XHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcclxuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXHJcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XHJcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxyXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGUpIHtcclxuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcclxuIFx0XHRcdFx0XHRcdHJldHVybjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0XHJcbiBcdFxyXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XHJcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMjIyZTMyZWU5YjIyYjZhYWMyNzlcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcclxuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XHJcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRpZighbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xyXG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcclxuIFx0XHRcdGlmKG1lLmhvdC5hY3RpdmUpIHtcclxuIFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xyXG4gXHRcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA8IDApXHJcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA8IDApXHJcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcclxuIFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlcXVlc3QgKyBcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgKyBtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcclxuIFx0XHR9O1xyXG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XHJcbiBcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fTtcclxuIFx0XHRmb3IodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XHJcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicmVhZHlcIilcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcclxuIFx0XHRcdFx0dGhyb3cgZXJyO1xyXG4gXHRcdFx0fSk7XHJcbiBcdFxyXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xyXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XHJcbiBcdFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcclxuIFx0XHRcdFx0XHRpZighaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9O1xyXG4gXHRcdHJldHVybiBmbjtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaG90ID0ge1xyXG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxyXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcclxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXHJcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcclxuIFx0XHJcbiBcdFx0XHQvLyBNb2R1bGUgQVBJXHJcbiBcdFx0XHRhY3RpdmU6IHRydWUsXHJcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxyXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxyXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxyXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGlmKCFsKSByZXR1cm4gaG90U3RhdHVzO1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxyXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXHJcbiBcdFx0fTtcclxuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XHJcbiBcdFx0cmV0dXJuIGhvdDtcclxuIFx0fVxyXG4gXHRcclxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XHJcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcclxuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdERlZmVycmVkO1xyXG4gXHRcclxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXHJcbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XHJcbiBcdFx0dmFyIGlzTnVtYmVyID0gKCtpZCkgKyBcIlwiID09PSBpZDtcclxuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcclxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XHJcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XHJcbiBcdFx0XHRpZighdXBkYXRlKSB7XHJcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0XHRcdHJldHVybiBudWxsO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcclxuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcclxuIFx0XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XHJcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcclxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxyXG4gXHRcdFx0XHR9O1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcclxuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcclxuIFx0XHRcdHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xyXG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xyXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRpZighaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxyXG4gXHRcdFx0cmV0dXJuO1xyXG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XHJcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0aWYoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xyXG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XHJcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcclxuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcclxuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XHJcbiBcdFx0aWYoIWRlZmVycmVkKSByZXR1cm47XHJcbiBcdFx0aWYoaG90QXBwbHlPblVwZGF0ZSkge1xyXG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cclxuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxyXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxyXG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xyXG4gXHRcdFx0fSkudGhlbihcclxuIFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiBcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gXHRcdFx0XHR9LFxyXG4gXHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpIHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcclxuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuIFx0XHJcbiBcdFx0dmFyIGNiO1xyXG4gXHRcdHZhciBpO1xyXG4gXHRcdHZhciBqO1xyXG4gXHRcdHZhciBtb2R1bGU7XHJcbiBcdFx0dmFyIG1vZHVsZUlkO1xyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcclxuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xyXG4gXHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxyXG4gXHRcdFx0XHRcdGlkOiBpZFxyXG4gXHRcdFx0XHR9O1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xyXG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZighbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9tYWluKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcclxuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XHJcbiBcdFx0XHRcdFx0aWYoIXBhcmVudCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXHJcbiBcdFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxyXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXHJcbiBcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcclxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXHJcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcclxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcclxuIFx0XHRcdFx0aWYoYS5pbmRleE9mKGl0ZW0pIDwgMClcclxuIFx0XHRcdFx0XHRhLnB1c2goaXRlbSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxyXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cclxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcclxuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcclxuIFx0XHJcbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcclxuIFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIik7XHJcbiBcdFx0fTtcclxuIFx0XHJcbiBcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xyXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xyXG4gXHRcdFx0XHRpZihob3RVcGRhdGVbaWRdKSB7XHJcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xyXG4gXHRcdFx0XHRpZihyZXN1bHQuY2hhaW4pIHtcclxuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0c3dpdGNoKHJlc3VsdC50eXBlKSB7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIgaW4gXCIgKyByZXN1bHQucGFyZW50SWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25VbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EaXNwb3NlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcclxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoYWJvcnRFcnJvcikge1xyXG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xyXG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihkb0FwcGx5KSB7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0XHRcdFx0Zm9yKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSwgcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvRGlzcG9zZSkge1xyXG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXHJcbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xyXG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxyXG4gXHRcdFx0XHR9KTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XHJcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xyXG4gXHRcdFx0aWYoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XHJcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0dmFyIGlkeDtcclxuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcclxuIFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRpZighbW9kdWxlKSBjb250aW51ZTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xyXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcclxuIFx0XHRcdGZvcihqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcclxuIFx0XHRcdFx0Y2IoZGF0YSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xyXG4gXHRcclxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXHJcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxyXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cclxuIFx0XHRcdGZvcihqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XHJcbiBcdFx0XHRcdGlmKCFjaGlsZCkgY29udGludWU7XHJcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XHJcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cclxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcclxuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcclxuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xyXG4gXHRcdFx0XHRcdFx0aWYoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcclxuIFx0XHJcbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xyXG4gXHRcclxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcclxuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKG1vZHVsZSkge1xyXG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcclxuIFx0XHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcclxuIFx0XHRcdFx0XHRcdGlmKGNiKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKGNhbGxiYWNrcy5pbmRleE9mKGNiKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gXHRcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xyXG4gXHRcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcclxuIFx0XHRmb3IoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcclxuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGVycjIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmdpbmFsRXJyb3I6IGVyciwgLy8gVE9ETyByZW1vdmUgaW4gd2VicGFjayA0XHJcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnIyO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxyXG4gXHRcdGlmKGVycm9yKSB7XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xyXG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgxMCkoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIyMmUzMmVlOWIyMmI2YWFjMjc5IiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL190c2xpYkAxLjkuMEB0c2xpYi90c2xpYi5lczYuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwicmVjb21wb3NlXCIsXCJhbWRcIjpcInJlY29tcG9zZVwiLFwiY29tbW9uanMyXCI6XCJyZWNvbXBvc2VcIixcImNvbW1vbmpzXCI6XCJyZWNvbXBvc2VcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFzZUZhY3RvcnkgfSBmcm9tIFwiZngtc2NoZW1hLWZvcm0tY29yZVwiO1xuXG5pbXBvcnQgeyBGeFJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2VyXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzL3NjaGVtYS5mb3JtXCI7XG5pbXBvcnQgeyBSQywgRGVmYXVsdFByb3BzLCBOc0ZhY3RvcnksIFNjaGVtYUZvcm1OcyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHV0aWxzLCBtZXJnZSwgZmllbGQsIHRoZW1lLCBhcnJheSwgdmFsaWRhdGUsIG1ha2UsIHRlbXAsIGRhdGEgfSBmcm9tIFwiLi9ob2NzXCI7XG5pbXBvcnQgeyBzY2hlbWFGb3JtUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJGYWN0b3J5ID0gbmV3IEJhc2VGYWN0b3J5PEZ4UmVkdWNlcj4oKTtcbmV4cG9ydCBjb25zdCBob2NGYWN0b3J5ID0gbmV3IEJhc2VGYWN0b3J5PChzZXR0aW5ncz86IGFueSkgPT4gUmVhY3QuUHVyZUNvbXBvbmVudDxEZWZhdWx0UHJvcHMsIGFueT4+KCk7XG5leHBvcnQgY29uc3QgdGhlbWVGYWN0b3J5ID0gbmV3IEJhc2VGYWN0b3J5PE5zRmFjdG9yeT4oKTtcblxuaG9jRmFjdG9yeS5hZGQoXCJ1dGlsc1wiLCB1dGlscy5iaW5kKHV0aWxzLCBob2NGYWN0b3J5KSk7XG5ob2NGYWN0b3J5LmFkZChcIm1lcmdlXCIsIG1lcmdlLmJpbmQobWVyZ2UsIGhvY0ZhY3RvcnkpKTtcbmhvY0ZhY3RvcnkuYWRkKFwiZmllbGRcIiwgZmllbGQuYmluZChmaWVsZCwgaG9jRmFjdG9yeSkpO1xuaG9jRmFjdG9yeS5hZGQoXCJ0aGVtZVwiLCB0aGVtZS5iaW5kKHRoZW1lLCBob2NGYWN0b3J5KSk7XG5ob2NGYWN0b3J5LmFkZChcImFycmF5XCIsIGFycmF5LmJpbmQoYXJyYXksIGhvY0ZhY3RvcnkpKTtcbmhvY0ZhY3RvcnkuYWRkKFwidmFsaWRhdGVcIiwgdmFsaWRhdGUuYmluZCh2YWxpZGF0ZSwgaG9jRmFjdG9yeSkpO1xuaG9jRmFjdG9yeS5hZGQoXCJtYWtlXCIsIG1ha2UuYmluZChtYWtlLCBob2NGYWN0b3J5KSk7XG5ob2NGYWN0b3J5LmFkZChcInRlbXBcIiwgdGVtcC5iaW5kKHRlbXAsIGhvY0ZhY3RvcnkpKTtcbmhvY0ZhY3RvcnkuYWRkKFwiZGF0YVwiLCBkYXRhLmJpbmQoZGF0YSwgaG9jRmFjdG9yeSkpO1xuXG5yZWR1Y2VyRmFjdG9yeS5hZGQoXCJzY2hlbWFGb3JtXCIsIHNjaGVtYUZvcm1SZWR1Y2VyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZhY3RvcnkudHN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJJbW11dGFibGVcIixcImFtZFwiOlwiaW1tdXRhYmxlXCIsXCJjb21tb25qczJcIjpcImltbXV0YWJsZVwiLFwiY29tbW9uanNcIjpcImltbXV0YWJsZVwifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIixcImFtZFwiOlwiZngtc2NoZW1hLWZvcm0tY29yZVwiLFwiY29tbW9uanMyXCI6XCJmeC1zY2hlbWEtZm9ybS1jb3JlXCIsXCJjb21tb25qc1wiOlwiZngtc2NoZW1hLWZvcm0tY29yZVwifVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW1tdXRhYmxlLCB7IGZyb21KUyB9IGZyb20gXCJpbW11dGFibGVcIjtcblxuaW1wb3J0IHsgU2NoZW1hRm9ybVJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy9zY2hlbWEuZm9ybVwiO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hRm9ybVJlZHVjZXIgPSBuZXcgU2NoZW1hRm9ybVJlZHVjZXIoZnJvbUpTKHt9KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlci50c3giLCJpbXBvcnQgeyBTY2hlbWFGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCB7IFNjaGVtYUZvcm0gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4IiwiLyoqXG4gKiB0cmVlIG1hcCBzdHJ1Y3RcbiAqIOi/memHjOeUqOadpeiusOW9leaVsOaNrueahOWFg+aVsOaNruS/oeaBr1xuICog5YWD5pWw5o2u5L+h5oGv5YyF5ous77yMaXNWYWxpZO+8jGlzTG9hZGluZ++8jGlzU2hvd++8jC4uLmV0Y1xuICovXG5leHBvcnQgY2xhc3MgVHJlZU1hcCB7XG4gICAgcHJpdmF0ZSBjaGlsZHJlbjogVHJlZU1hcFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKiBAcGFyYW0ga2V5ICAgIOW9k+WJjeiKgueCueeahGtlee+8jOeUqOS6juiuoeeul+S9jee9rlxuICAgICAqIEBwYXJhbSB2YWx1ZSAg5b2T5YmN6IqC54K555qE5YC8XG4gICAgICogQHBhcmFtIHBhcmVudCDlvZPliY3oioLngrnnmoTniLbkurLoioLngrlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IGFueSwgcHJpdmF0ZSBwYXJlbnQ/OiBUcmVlTWFwKSB7IH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOS4quWtqeWtkOWFg+e0oFxuICAgICAqIOi/memHjOmcgOimgeaehOW7uuS4gOmil+WujOaVtOeahOagke+8jOaJgOS7peimgemBjeWOhmtleXPmnaXliqjmgIHliJvlu7roioLngrlcbiAgICAgKiB0aW1lIGNvbXBsZXhpdHkgPSBPKDEpIC8gQ29uc3RhbnRcbiAgICAgKiBAcGFyYW0ga2V5cyAg6IqC54K555qE6Lev5b6EIGV4YW1wbGUgW1wicm9vdFwiLFwiYlwiXSAgcm9vdCAtPiBiXG4gICAgICogQHBhcmFtIHZhbHVlIOWtqeWtkOeahOaVsOaNrlxuICAgICAqIEByZXR1cm5zIFRyZWVNYXBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkQ2hpbGQoa2V5czogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiwgdmFsdWU/OiBhbnkpOiBUcmVlTWFwIHtcbiAgICAgICAgbGV0IGN1cktleXMgPSB0aGlzLmdldEN1cnJlbnRLZXlzKCk7XG4gICAgICAgIGxldCBjdXJOb2RlOiBUcmVlTWFwID0gdGhpcztcbiAgICAgICAgbGV0IGNoaWxkO1xuXG4gICAgICAgIC8vIOS4juW9k+WJjei3r+W+hOWkmuS4gOasoeWvueavlO+8jOWOu+aOiemHjeWkjeeahOmDqOWIhlxuICAgICAgICBrZXlzID0ga2V5cy5zcGxpY2UoY3VyS2V5cy5sZW5ndGgpO1xuXG4gICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yib5bu65omA5pyJ6Lev5b6E55qE6IqC54K5XG4gICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGxldCBpc051bWJlciA9IGtleS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyO1xuXG4gICAgICAgICAgICBjaGlsZCA9IGN1ck5vZGUuY29udGFpbnMoa2V5KTtcblxuICAgICAgICAgICAgLy8g6L+Z6YeM6ZyA6KaB5YGa5LiA5LiL54m55q6K5aSE55CGXG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/mlbDlrZfnmoTor53vvIzliJnor7TmmI7mmK/mlbDnu4TvvIxrZXnmlLnmiJBgLWBcbiAgICAgICAgICAgIC8vIOWmguaenOS4jeaYr+aVsOe7hOeahOivne+8jOWImeaXoOaJgOiwk+mhuuW6j++8jOebtOaOpXB1c2jlsLHooYxcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+aVsOe7hO+8jOWImeimgeS/neivgemhuuW6j+WSjOaVsOaNrueahOS4i+agh+S4gOiHtFxuICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChpc051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IG5ldyBUcmVlTWFwKFwiLVwiLCBudWxsLCBjdXJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyTm9kZS5jaGlsZHJlbltrZXldID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBuZXcgVHJlZU1hcChrZXkudG9TdHJpbmcoKSwgbnVsbCwgY3VyTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1ck5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJOb2RlID0gY2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blvZPliY3nmoRrZXlcbiAgICAgKiDlpoLmnpxrZXnmmK9gLWAs5Luj6KGo5piv5pWw57uE77yM5YiZ6L2s5o2i5oiQ5pWw57uE5LiL5qCHXG4gICAgICogdGltZSBjb21wbGV4aXR5ID0gTygxKSAvIENvbnN0YW50XG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGdldEtleSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMua2V5IHx8IHRoaXMua2V5ID09PSBcIi1cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXhJblBhcmVudCgpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5YmN6IqC54K555qEa2V5c+i3r+W+hFxuICAgICAqIHRpbWUgY29tcGxleGl0eSA9IE8oMSkgLyBDb25zdGFudFxuICAgICAqIEByZXR1cm5zIHN0cmluZ1tdXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRLZXlzKCk6IEFycmF5PHN0cmluZyB8IG51bWJlcj4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KHRoaXMucGFyZW50LmdldEN1cnJlbnRLZXlzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXMuY29uY2F0KFt0aGlzLmtleV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluW9k+WJjeiKgueCueWcqOeItuS6smNoaWxkcmVu5Lit55qE5LiL5qCH57Si5byVXG4gICAgICogdGltZSBjb21wbGV4aXR5ID0gTygxKSAvIENvbnN0YW50XG4gICAgICogQHJldHVybnMgbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIGdldEluZGV4SW5QYXJlbnQoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wYXJlbnQuY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3oioLngrnmn6Xmib7mmK/lkKblrZjlnKjoioLngrlcbiAgICAgKiB0aW1lIGNvbXBsZXhpdHkgPSBPKG4pIC8gTGluZWFyXG4gICAgICogQHBhcmFtIGtleSDoioLngrnnmoTmlbDmja5cbiAgICAgKiBAcmV0dXJucyBUcmVlTWFwXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhaW5zKGtleTogc3RyaW5nIHwgbnVtYmVyKTogVHJlZU1hcCB8IG51bGwge1xuICAgICAgICBsZXQgaXNOdW1iZXIgPSBrZXkuY29uc3RydWN0b3IgPT09IE51bWJlcjtcblxuICAgICAgICAvLyDlpoLmnpzmmK/mlbDlrZfnmoTor53vvIznm7TmjqXov5Tlm55jaGlsZHJlbuS4reWvueW6lOS4i+agh+eahOWFg+e0oFxuICAgICAgICBpZiAoaXNOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN6IqC54K555qEa2V5PT096KaB5pCc57Si55qEa2V577yM5YiZ6L+U5Zue5pys6LqrXG4gICAgICAgIGlmICh0aGlzLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJY2hpbGRyZW7vvIzliJnov5Tlm57nqbpcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuIHx8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpgY3ljoblrZDoioLngrnvvIzlsYLlsYLpgJLlvZLvvIznm7TliLDmib7liLBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuY29udGFpbnMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrue7meWumueahOi3r+W+hOaVsOe7hO+8jOi/lOWbnuWvueW6lOeahOiKgueCuVxuICAgICAqIHRpbWUgY29tcGxleGl0eSA9IE8obikgLyBMaW5lYXJcbiAgICAgKiBAcGFyYW0ga2V5cyDot6/lvoRcbiAgICAgKiBAcmV0dXJucyBUcmVlTWFwIHwgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBjb250YWluUGF0aChrZXlzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KTogVHJlZU1hcCB8IG51bGwge1xuICAgICAgICBsZXQgbm9kZTogVHJlZU1hcCA9IHRoaXM7XG5cbiAgICAgICAga2V5cy5mb3JFYWNoKChrZXk6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5jb250YWlucyhrZXkpO1xuXG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO54i25Lqy6IqC54K55Lit5Yig6Zmk5b2T5YmN6IqC54K5XG4gICAgICogdGltZSBjb21wbGV4aXR5ID0gTyhuKSAvIExpbmVhclxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVGcm9tUGFyZW50KCk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4SW5QYXJlbnQoKTtcblxuICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDIy5Lqk5o2i5L2N572uXG4gICAgICogdGltZSBjb21wbGV4aXR5ID0gTygxKSAvIExpbmVhclxuICAgICAqIEBwYXJhbSB0b0luZGV4IOS6pOaNouS9jee9rueahOWFg+e0oFxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hPbmVUb09uZUZyb21QYXJlbnQodG9JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBjdXJJbmRleCA9IHRoaXMuZ2V0SW5kZXhJblBhcmVudCgpO1xuXG4gICAgICAgIC8vIOWmguaenOayoeacieeItuS6su+8jOiOt+WPlueItuS6suayoeacieWFg+e0oOWImei/lOWbnlxuICAgICAgICBpZiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5jaGlsZHJlbiB8fCBjdXJJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOeItuS6suS4reS4jeWtmOWcqOW9k+WJjeaIluiAhemcgOimgeS6pOaNoueahOe0ouW8le+8jOWImei/lOWbnlxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIDwgKGN1ckluZGV4ID4gdG9JbmRleCA/IGN1ckluZGV4IDogdG9JbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIy5Lqk5o2i5L2N572uXG4gICAgICAgIFt0aGlzLnBhcmVudC5jaGlsZHJlbltjdXJJbmRleF0sIHRoaXMucGFyZW50LmNoaWxkcmVuW3RvSW5kZXhdXSA9IFt0aGlzLnBhcmVudC5jaGlsZHJlblt0b0luZGV4XSwgdGhpcy5wYXJlbnQuY2hpbGRyZW5bY3VySW5kZXhdXTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+WKqOWIsOafkOS4quS9jee9rlxuICAgICAqIHRpbWUgY29tcGxleGl0eSA9IE8oMSkgLyBMaW5lYXJcbiAgICAgKiBAcGFyYW0gdG9JbmRleCDpnIDopoHnp7vliqjliLDnmoTkvY3nva5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zZXJ0VG9Gcm9tUGFyZW50KHRvSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgY3VySW5kZXggPSB0aGlzLmdldEluZGV4SW5QYXJlbnQoKTtcbiAgICAgICAgbGV0IG9mZnNldCA9ICh0b0luZGV4ID4gY3VySW5kZXggJiYgZmFsc2UgPyAxIDogMCk7XG5cbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ54i25Lqy77yM5oiW6ICF54i25Lqy5rKh5pyJ5a2Q6IqC54K577yM5oiW6ICF5b2T5YmN5L2N572u5bCP5LqOMFxuICAgICAgICBpZiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5jaGlsZHJlbiB8fCBjdXJJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOi2heWHuuS6hueItuS6sueahOWtkOiKgueCueaVsOmHj++8jOa3u+WKoOS4gOS4qlxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIDw9IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKHRoaXMucGFyZW50LmdldEN1cnJlbnRLZXlzKCkuY29uY2F0KFt0b0luZGV4XSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g54i25Lqy6IqC54K55Lit5Yig6Zmk5b2T5YmN5YWD57SgXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAvLyDlsIblvZPliY3oioLngrnmj5LlhaXliLDliLblrprnmoTkvY3nva5cbiAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4gPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5jb25jYXQoW10pLnNwbGljZSgwLCB0b0luZGV4IC0gb2Zmc2V0KS5jb25jYXQodGhpcylcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHRvSW5kZXggLSBvZmZzZXQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgY3ljobmjIflrproioLngrnkuIvmiYDmnInlrZDoioLngrnnmoR2YWx1ZeaVsOaNrizlvZPliY3oioLngrnkuI3orqHnrpflnKjlhoVcbiAgICAgKiBAcGFyYW0gbm9kZSDmjIflrprnmoToioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9yRWFjaChjbGVhckZ1bmM6IChub2RlOiBUcmVlTWFwKSA9PiBhbnksIGN1cnJlbnROb2RlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gY2xlYXJGdW5jKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0udmFsdWUgPSBjbGVhckZ1bmModGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5mb3JFYWNoKGNsZWFyRnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGlicy90cmVlLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwicmVhY3QtcmVkdXhcIixcImFtZFwiOlwicmVhY3QtcmVkdXhcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcmVkdXhcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1yZWR1eFwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlRmFjdG9yeSB9IGZyb20gXCJmeC1zY2hlbWEtZm9ybS1jb3JlXCI7XG5cbmltcG9ydCB7IFNjaGVtYUZvcm1SZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvc2NoZW1hLmZvcm1cIjtcbmltcG9ydCB7IHJlZHVjZXJGYWN0b3J5LCBob2NGYWN0b3J5LCB0aGVtZUZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyBGeFJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2VyXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQWN0aW9ucyB9IGZyb20gXCIuL3JlZHVjZXJzL3NjaGVtYS5mb3JtXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtLCBEZWZhdWx0UHJvcHMsIFJDLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBOb3JtYWxGaWVsZCwgT2JqZWN0RmllbGQsIEFycmF5RmllbGQgfSBmcm9tIFwiLi9maWVsZHNcIjtcbmltcG9ydCB7IFRyZWVNYXAgfSBmcm9tIFwiLi9saWJzL3RyZWVcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Ib2NTZXR0aW5ncywgU2NoZW1hRm9ybUhvY091dFByb3BzLCBkZWZhdWx0IGFzIHNjaGVtYUZvcm1EZWMgfSBmcm9tIFwiLi9saWJzL2RlY1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybVByb3BzIH0gZnJvbSBcIi4vbGlicy9kZWNcIjtcblxuLyoqXG4gKiDpu5jorqTmoLflvI/phY3nva5cbiAqIOavj+S4quagt+W8j+WMheWQq3RlbXDvvIxmaWVsZOWSjHdpZGdldOS4ieS4qmZhY3RvcnlcbiAqL1xuY29uc3QgZGVmYXVsdFRoZW1lID0ge1xuICAgIHRlbXBGYWN0b3J5OiBuZXcgQmFzZUZhY3Rvcnk8UkM8RGVmYXVsdFByb3BzLCBhbnk+PigpLFxuICAgIGZpZWxkRmFjdG9yeTogbmV3IEJhc2VGYWN0b3J5PFJDPERlZmF1bHRQcm9wcywgYW55Pj4oKSxcbiAgICB3aWRnZXRGYWN0b3J5OiBuZXcgQmFzZUZhY3Rvcnk8UkM8RGVmYXVsdFByb3BzLCBhbnk+PigpXG59O1xuXG5kZWZhdWx0VGhlbWUuZmllbGRGYWN0b3J5LmFkZChcImRlZmF1bHRcIiwgTm9ybWFsRmllbGQgYXMgYW55KTtcbmRlZmF1bHRUaGVtZS5maWVsZEZhY3RvcnkuYWRkKFwib2JqZWN0XCIsIE9iamVjdEZpZWxkIGFzIGFueSk7XG5kZWZhdWx0VGhlbWUuZmllbGRGYWN0b3J5LmFkZChcImFycmF5XCIsIEFycmF5RmllbGQgYXMgYW55KTtcblxudGhlbWVGYWN0b3J5LmFkZChcImRlZmF1bHRcIiwgZGVmYXVsdFRoZW1lIGFzIGFueSk7XG5cbmV4cG9ydCB7XG4gICAgU2NoZW1hRm9ybVByb3BzLFxuICAgIEZ4UmVkdWNlcixcbiAgICBGeFVpU2NoZW1hLFxuICAgIFNjaGVtYUZvcm1BY3Rpb25zLFxuICAgIERlZmF1bHRQcm9wc1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRUaGVtZSxcbiAgICBzY2hlbWFGb3JtRGVjLFxuICAgIFRyZWVNYXAsXG4gICAgcmVkdWNlckZhY3RvcnksXG4gICAgU2NoZW1hRm9ybSxcbiAgICBob2NGYWN0b3J5XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWVsZCB9IGZyb20gXCIuL2ZpZWxkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5IH0gZnJvbSBcIi4vYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsaWRhdGUgfSBmcm9tIFwiLi92YWxpZGF0ZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYWtlIH0gZnJvbSBcIi4vbWFrZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZW1wIH0gZnJvbSBcIi4vdGVtcFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvY3MvaW5kZXgudHN4IiwiXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFzZUZhY3RvcnksIE1lcmdlTGliLCBGeEpzb25TY2hlbWEsIFVpU2NoZW1hIH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIjtcbmltcG9ydCB7IGNvbm5lY3QsIERpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlLCBzaG91bGRVcGRhdGUsIG9ubHlVcGRhdGVGb3JLZXlzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIFJDLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuLyoqXG4gKiBNZXJnZUhvYyDmt7vliqDnmoTlsZ7mgKdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXJnZUhvY091dFByb3BzIHtcbiAgICBtZXJnZVNjaGVtYUxpc3Q/OiBGeFVpU2NoZW1hW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyZ2VIb2NQcm9wcyBleHRlbmRzIERlZmF1bHRQcm9wcyB7XG4gICAgdWlTY2hlbWFzOiBBcnJheTxzdHJpbmcgfCBVaVNjaGVtYT47XG59XG5cbmxldCB0b3RhbFRpbWUgPSAwLCB0aW1laWQ7XG5cbi8qKlxuICogbWVyZ2Xlj4LmlbDkuK3nmoRzY2hlbWHlkox1aVNjaGVtYe+8jOeUn+aIkOaWsOeahOWvueixoW1lcmdlU2NoZW1hTGlzdO+8jOS8oOWFpee7hOS7tueahHByb3Bz5LitXG4gKiBAcGFyYW0gaG9jRmFjdG9yeSAgaG9j55qE5bel5Y6C5pa55rOVXG4gKiBAcGFyYW0gQ29tcG9uZW50ICAg6ZyA6KaB5YyF6KOF55qE57uE5Lu2XG4gKiDliqDlhaXlsZ7mgKdcbiAqIG1lcmdlU2NoZW1hTGlzdCAgICDlkIjlubbkuYvlkI7nmoTmlbDmja5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGhvY0ZhY3Rvcnk6IEJhc2VGYWN0b3J5PGFueT4sIHNldHRpbmdzOiBhbnkgPSB7fSkgPT4ge1xuICAgIHJldHVybiAoQ29tcG9uZW50OiBSQzxhbnksIGFueT4pOiBSQzxNZXJnZUhvY1Byb3BzLCBhbnk+ID0+IHtcbiAgICAgICAgY2xhc3MgTWVyZ2VDb21wb25lbnRIb2MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE1lcmdlSG9jUHJvcHMsIGFueT4ge1xuICAgICAgICAgICAgcHJpdmF0ZSBfbWVyZ2VVaVNjaGVtYUxpc3Q6IEZ4VWlTY2hlbWFbXTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlkIjlubZzY2hlbWHlkox1aVNjaGVtYeeUn+aIkCBtZXJnZVVpU2NoZW1hTGlzdFxuICAgICAgICAgICAgICogQHBhcmFtIHByb3BzIHByb3BzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzOiBNZXJnZUhvY1Byb3BzKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdWlTY2hlbWEgPSBwcm9wcy51aVNjaGVtYSA/IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnVpU2NoZW1hKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodWlTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgdWlTY2hlbWEua2V5cyA9IHVpU2NoZW1hLm9yaWdpbktleXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2UgPSBuZXcgTWVyZ2VMaWIocHJvcHMuYWp2LCBwcm9wcy5zY2hlbWFJZCwgdWlTY2hlbWEsIHByb3BzLnVpU2NoZW1hcyBhcyBhbnkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVyZ2VVaVNjaGVtYUxpc3QgPSBtZXJnZS5tZXJnZVVpU2NoZW1hTGlzdC5tYXAoKHY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXJnZUtleXModik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Kej5p6Qa2V5c1xuICAgICAgICAgICAgICogMS4g6YGN5Y6Ga2V5c+S4reeahOWFg+e0oO+8jOWmguaenOmBh+WIsC3vvIzliJnmm7/mjaLmiJDmlbDlrZdcbiAgICAgICAgICAgICAqIEBwYXJhbSBtZXJnZVNjaGVtYSDlkIjlubbov4flkI7nmoRGeFVpU2NoZW1hXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHByaXZhdGUgbWVyZ2VLZXlzKG1lcmdlU2NoZW1hOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFycmF5TGV2ZWwgPSBbXSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheUxldmVsQ29weSA9IGFycmF5TGV2ZWwuY29uY2F0KFtdKTtcblxuICAgICAgICAgICAgICAgIG1lcmdlU2NoZW1hID0gT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VTY2hlbWEpO1xuICAgICAgICAgICAgICAgIG1lcmdlU2NoZW1hLm9yaWdpbktleXMgPSBbXS5jb25jYXQobWVyZ2VTY2hlbWEua2V5cyk7XG4gICAgICAgICAgICAgICAgbWVyZ2VTY2hlbWEua2V5cyA9IG1lcmdlU2NoZW1hLmtleXMucmV2ZXJzZSgpLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheUxldmVsQ29weS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbWVyZ2VTY2hlbWEua2V5cy5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VTY2hlbWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdWlTY2hlbWFzLCB1aVNjaGVtYSwgLi4uZXh0cmFQcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlU2NoZW1hTGlzdD17dGhpcy5fbWVyZ2VVaVNjaGVtYUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZXh0cmFQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1lcmdlQ29tcG9uZW50SG9jIGFzIGFueTtcbiAgICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ob2NzL21lcmdlLnRzeCIsIlxuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFzZUZhY3RvcnksIE1lcmdlTGliLCBGeEpzb25TY2hlbWEgfSBmcm9tIFwiZngtc2NoZW1hLWZvcm0tY29yZVwiO1xuaW1wb3J0IHsgY29tcG9zZSwgc2hvdWxkVXBkYXRlLCBvbmx5VXBkYXRlRm9yS2V5cyB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCByZXNvbHZlUGF0aG5hbWUgZnJvbSBcInJlc29sdmUtcGF0aG5hbWVcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIFJDLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVdGlsc0hvY091dFByb3BzIHtcbiAgICBnZXRPcHRpb25zOiAocHJvcHM6IERlZmF1bHRQcm9wcywgY2F0ZWdvcnk6IHN0cmluZywgZmllbGQ6IHN0cmluZykgPT4gYW55O1xuICAgIGdldFRpdGxlKHByb3BzOiBEZWZhdWx0UHJvcHMpOiAoKSA9PiBhbnk7XG4gICAgZ2V0UGF0aEtleXM6IChrZXlzOiBzdHJpbmdbXSwgcGF0aDogc3RyaW5nKSA9PiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiDljIXoo4V1dGlsc+eahOe7hOS7tkhPQ1xuICogQHBhcmFtIGhvY0ZhY3RvcnkgIGhvY+eahOW3peWOguaWueazlVxuICogQHBhcmFtIENvbXBvbmVudCDpnIDopoHljIXoo4XnmoTnu4Tku7ZcbiAqIOWKoOWFpeWxnuaAp1xuICogZ2V0T3B0aW9ucyAgICDojrflj5blj4LmlbBcbiAqIGdldFRpdGxlICAgICAg6I635Y+W5b2T5YmNdWlTY2hlbWHnmoR0aXRsZVxuICogZ2V0UGF0aEtleXMgICDojrflj5bnm7jlr7nkuo7lvZPliY1rZXlz55qE6Lev5b6EXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChob2NGYWN0b3J5OiBCYXNlRmFjdG9yeTxhbnk+LCBzZXR0aW5nczogYW55ID0ge30pID0+IHtcbiAgICByZXR1cm4gKENvbXBvbmVudDogYW55KTogUkM8RGVmYXVsdFByb3BzLCBhbnk+ID0+IHtcbiAgICAgICAgY2xhc3MgQ29tcG9uZW50SG9jIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxVdGlsc0hvY091dFByb3BzLCBhbnk+IHtcbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGdldFRpdGxlPXt0aGlzLmdldFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBnZXRQYXRoS2V5cz17dGhpcy5nZXRQYXRoS2V5c31cbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9ucz17dGhpcy5nZXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5Y+C5pWwXG4gICAgICAgICAgICAgKiBAcGFyYW0gcHJvcHMgICAgIOW9k+WJjWNvbXBvbmVudOeahHByb3BzXG4gICAgICAgICAgICAgKiBAcGFyYW0gY2F0ZWdvcnkgIOmcgOimgeiOt+WPlueahOenjeexu++8jOaciXRlbXBsYXRl77yMZmllbGTvvIxob2PnrYlcbiAgICAgICAgICAgICAqIEBwYXJhbSBmaWVsZCAgICAgZmllbGTnmoTlkI3np7BcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJpdmF0ZSBnZXRPcHRpb25zKHByb3BzOiBEZWZhdWx0UHJvcHMsIGNhdGVnb3J5OiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVpU2NoZW1hLCBnbG9iYWxPcHRpb25zIH0gPSBwcm9wcztcbiAgICAgICAgICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHVpU2NoZW1hIGFzIEZ4VWlTY2hlbWE7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0FycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsT3B0aW9ucyAmJiBnbG9iYWxPcHRpb25zLmhhc0luKFtjYXRlZ29yeSwgXCJkZWZhdWx0XCJdKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zQXJyYXkucHVzaChnbG9iYWxPcHRpb25zLmdldEluKFtjYXRlZ29yeSwgXCJkZWZhdWx0XCJdKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbE9wdGlvbnMgJiYgZ2xvYmFsT3B0aW9ucy5oYXNJbihbY2F0ZWdvcnksIGZpZWxkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0FycmF5LnB1c2goZ2xvYmFsT3B0aW9ucy5nZXRJbihbY2F0ZWdvcnksIGZpZWxkXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaGFzSW4oW2NhdGVnb3J5LCBmaWVsZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNBcnJheS5wdXNoKG9wdGlvbnMuZ2V0SW4oW2NhdGVnb3J5LCBmaWVsZF0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0cyA9IG9wdGlvbnNBcnJheS5yZXZlcnNlKCkucmVkdWNlKChwcmV2OiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiwgbmV4dDogSW1tdXRhYmxlLk1hcDxzdHJpbmcsIGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Lm1lcmdlKHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgfSwgSW1tdXRhYmxlLmZyb21KUyh7fSkpLnRvSlMoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluagh+mimOaVsOaNrlxuICAgICAgICAgICAgICogdGl0bGUgfHwga2V5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHByaXZhdGUgZ2V0VGl0bGUocHJvcHM6IERlZmF1bHRQcm9wcyk6IHN0cmluZyB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1aVNjaGVtYSB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwga2V5cyB9ID0gdWlTY2hlbWEgYXMgRnhVaVNjaGVtYTtcblxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW10uY29uY2F0KGtleXMpLnBvcCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5qC55o2u55u45a+56Lev5b6E77yM5b6X5Yiwa2V5c1xuICAgICAgICAgICAgICogQHBhcmFtIGtleXMg5b2T5YmN55qEa2V5c1xuICAgICAgICAgICAgICogQHBhcmFtIHBhdGgg6Lev5b6EXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHByaXZhdGUgZ2V0UGF0aEtleXMoa2V5czogQXJyYXk8c3RyaW5nPiwgcGF0aDogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgICAgICAgICAgbGV0IGtleXNDb3B5ID0gW1wiXCJdLmNvbmNhdChrZXlzLmNvbmNhdChbXCJcIl0pKTtcbiAgICAgICAgICAgICAgICBsZXQga2V5c1Jlc29sdmU6IHN0cmluZ1tdID0gcmVzb2x2ZVBhdGhuYW1lKHBhdGgsIGtleXNDb3B5LmpvaW4oXCIvXCIpKS5zcGxpdChcIi9cIik7XG5cbiAgICAgICAgICAgICAgICBrZXlzUmVzb2x2ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleXNSZXNvbHZlLmxlbmd0aCAmJiAha2V5c1Jlc29sdmVba2V5c1Jlc29sdmUubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICAgICAga2V5c1Jlc29sdmUucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXNSZXNvbHZlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbXBvbmVudEhvYyBhcyBhbnk7XG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaG9jcy91dGlscy50c3giLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJyZXNvbHZlLXBhdGhuYW1lXCIsXCJhbWRcIjpcInJlc29sdmUtcGF0aG5hbWVcIixcImNvbW1vbmpzMlwiOlwicmVzb2x2ZS1wYXRobmFtZVwiLFwiY29tbW9uanNcIjpcInJlc29sdmUtcGF0aG5hbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VGYWN0b3J5IH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIjtcblxuaW1wb3J0IHsgUkMsIE5zRmFjdG9yeSwgRGVmYXVsdFByb3BzLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lRmFjdG9yeSB9IGZyb20gXCIuLi9mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVIb2NPdXRQcm9wcyB7XG4gICAgY3VycmVudFRoZW1lOiBOc0ZhY3Rvcnk7XG59XG5cbi8qKlxuICog5YyF6KOFdGhlbWXnmoTnu4Tku7ZIT0NcbiAqIEBwYXJhbSBob2NGYWN0b3J5ICBob2PnmoTlt6XljoLmlrnms5VcbiAqIEBwYXJhbSBDb21wb25lbnQg6ZyA6KaB5YyF6KOF55qE57uE5Lu2XG4gKiDliqDlhaXlsZ7mgKdcbiAqIGN1cnJlbnRUaGVtZSDlvZPliY3nmoTlkb3lkI3nqbrpl7RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGhvY0ZhY3Rvcnk6IEJhc2VGYWN0b3J5PGFueT4sIHNldHRpbmdzOiBhbnkgPSB7fSkgPT4ge1xuICAgIHJldHVybiAoQ29tcG9uZW50OiBhbnkpOiBSQzxEZWZhdWx0UHJvcHMsIGFueT4gPT4ge1xuICAgICAgICBjbGFzcyBUaGVtZUNvbXBvbmVudEhvYyBleHRlbmRzIFB1cmVDb21wb25lbnQ8RGVmYXVsdFByb3BzLCBhbnk+IHtcbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGhlbWUsIGZpZWxkIH0gPSB0aGlzLnByb3BzLnVpU2NoZW1hIGFzIEZ4VWlTY2hlbWE7XG4gICAgICAgICAgICAgICAgbGV0IG5zRmFjdG9yeTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGVtZUZhY3RvcnkuaGFzKHRoZW1lIHx8IFwiZGVmYXVsdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBuc0ZhY3RvcnkgPSB0aGVtZUZhY3RvcnkuZ2V0KHRoZW1lIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOayoeacieaJvuWIsCR7dGhlbWUgfHwgXCJkZWZhdWx0XCJ955qE5qC35byP77yBYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgY3VycmVudFRoZW1lPXtuc0ZhY3Rvcnl9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBUaGVtZUNvbXBvbmVudEhvYyBhcyBhbnk7XG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaG9jcy90aGVtZS50c3giLCJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgQmFzZUZhY3RvcnkgfSBmcm9tIFwiZngtc2NoZW1hLWZvcm0tY29yZVwiO1xuXG5pbXBvcnQgeyBUaGVtZUhvY091dFByb3BzIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IFV0aWxzSG9jT3V0UHJvcHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgUkMsIERlZmF1bHRQcm9wcywgRnhVaVNjaGVtYSB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRIb2NPdXRQcm9wcyB7XG4gICAgRmllbGRDb21wb25lbnQ6IFJDPGFueSwgYW55PjtcbiAgICBXaWRnZXRDb21wb25lbnQ6IFJDPGFueSwgYW55Pjtcbn1cblxuLyoqXG4gKiDljIXoo4VGaWVsZOeahOe7hOS7tkhPQ1xuICogQHBhcmFtIGhvY0ZhY3RvcnkgIGhvY+eahOW3peWOguaWueazlVxuICogQHBhcmFtIENvbXBvbmVudCDpnIDopoHljIXoo4XnmoTnu4Tku7ZcbiAqIOWKoOWFpeWxnuaAp0ZpZWxkQ29tcG9uZW50ICAgc2NoZW1h5a+55bqU55qEZmllbGRjb21wb25lbnRcbiAqIOWKoOWFpeWxnuaAp1dpZGdldENvbXBvbmVudCAgc2NoZW1h5a+55bqU55qEd2lkZ2V0Y29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChob2NGYWN0b3J5OiBCYXNlRmFjdG9yeTxhbnk+LCBzZXR0aW5nczogYW55ID0ge30pID0+IHtcbiAgICByZXR1cm4gKENvbXBvbmVudDogYW55KTogUkM8RGVmYXVsdFByb3BzICYgVGhlbWVIb2NPdXRQcm9wcyAmIFV0aWxzSG9jT3V0UHJvcHMsIGFueT4gPT4ge1xuICAgICAgICBjbGFzcyBGaWVsZENvbXBvbmVudEhvYyBleHRlbmRzIFB1cmVDb21wb25lbnQ8RGVmYXVsdFByb3BzICYgVGhlbWVIb2NPdXRQcm9wcyAmIFV0aWxzSG9jT3V0UHJvcHMsIGFueT4ge1xuICAgICAgICAgICAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFRoZW1lLCBnZXRPcHRpb25zLCB1aVNjaGVtYSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgeyBmaWVsZCwgd2lkZ2V0LCB0eXBlIH0gPSB1aVNjaGVtYSBhcyBGeFVpU2NoZW1hO1xuICAgICAgICAgICAgICAgIGxldCBGaWVsZENvbXBvbmVudCwgV2lkZ2V0Q29tcG9uZW50O1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gZ2V0T3B0aW9ucyh0aGlzLnByb3BzLCBcImhvY1wiLCBcImZpZWxkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNhbGNGaWVsZCA9IGZpZWxkIHx8IHR5cGUgYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaGVtZS5maWVsZEZhY3RvcnkuaGFzKGNhbGNGaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgRmllbGRDb21wb25lbnQgPSBjdXJyZW50VGhlbWUuZmllbGRGYWN0b3J5LmdldChjYWxjRmllbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGhlbWUuZmllbGRGYWN0b3J5LmhhcyhcImRlZmF1bHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpZWxkQ29tcG9uZW50ID0gY3VycmVudFRoZW1lLmZpZWxkRmFjdG9yeS5nZXQoXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg5om+5LiN5YiwZmllbGTvvJoke2ZpZWxkIHx8IHR5cGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGhlbWUud2lkZ2V0RmFjdG9yeS5oYXMod2lkZ2V0IHx8IHR5cGUgYXMgc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBXaWRnZXRDb21wb25lbnQgPSBjdXJyZW50VGhlbWUud2lkZ2V0RmFjdG9yeS5nZXQod2lkZ2V0IHx8IHR5cGUgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRoZW1lLndpZGdldEZhY3RvcnkuaGFzKFwiZGVmYXVsdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgV2lkZ2V0Q29tcG9uZW50ID0gY3VycmVudFRoZW1lLndpZGdldEZhY3RvcnkuZ2V0KFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg5om+5LiN5Yiwd2lkZ2V077yaJHt3aWRnZXQgfHwgdHlwZX1gLCB1aVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgRmllbGRDb21wb25lbnQ9eyhGaWVsZENvbXBvbmVudCl9XG4gICAgICAgICAgICAgICAgICAgIFdpZGdldENvbXBvbmVudD17V2lkZ2V0Q29tcG9uZW50fSAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBGaWVsZENvbXBvbmVudEhvYyBhcyBhbnk7XG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaG9jcy9maWVsZC50c3giLCJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBicmFuY2gsIHJlbmRlckNvbXBvbmVudCwgc2hvdWxkVXBkYXRlLCBjb21wb3NlLCB3aXRoSGFuZGxlcnMsIHJlbmRlck5vdGhpbmcsIG9ubHlVcGRhdGVGb3JLZXlzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgY29ubmVjdCwgRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJhc2VGYWN0b3J5IH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIjtcblxuaW1wb3J0IHsgVXRpbHNIb2NPdXRQcm9wcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIFJDLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHNjaGVtYUZvcm1SZWR1Y2VyIH0gZnJvbSBcIi4uL3JlZHVjZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcnJheUhvY091dFByb3BzIGV4dGVuZHMgRGVmYXVsdFByb3BzIHtcbiAgICBhZGRJdGVtOiAocHJvcHM6IERlZmF1bHRQcm9wcywgZGF0YT86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICByZW1vdmVJdGVtOiAocGFyZW50S2V5czogYW55W10sIGtleXM6IGFueVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHN3aXRjaEl0ZW06IChwYXJlbnRLZXlzOiBhbnlbXSwga2V5czogYW55W10sIGN1ckluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBtb3ZlSXRlbTogKHBhcmVudEtleXM6IGFueVtdLCBrZXlzOiBhbnlbXSwgY3VySW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGluaXRBcnJheUNvbXBvbmVudDogKHByb3BzOiBEZWZhdWx0UHJvcHMsIGluZGV4PzogbnVtYmVyKSA9PiBKU1guRWxlbWVudDtcbiAgICBBcnJheUNvbXBvbmVudD86IG5ldyAoKSA9PiBSZWFjdC5QdXJlQ29tcG9uZW50PERlZmF1bHRQcm9wcz47XG4gICAgQXJyYXlJdGVtQ29tcG9uZW50PzogbmV3ICgpID0+IFJlYWN0LlB1cmVDb21wb25lbnQ8RGVmYXVsdFByb3BzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVByb3BzIGV4dGVuZHMgRGVmYXVsdFByb3BzLCBVdGlsc0hvY091dFByb3BzIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCAoaG9jRmFjdG9yeTogQmFzZUZhY3Rvcnk8YW55Piwgc2V0dGluZ3M6IGFueSA9IHt9KSA9PiB7XG5cbiAgICBjb25zdCBob2MgPSAoY29tcG9zZShcbiAgICAgICAgd2l0aEhhbmRsZXJzKHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5pu05paw5LiA5Liq5pWw5o2uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFkZEl0ZW06IChwcm9wc0N1cjogRGVmYXVsdFByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChwcm9wczogRGVmYXVsdFByb3BzLCBkYXRhPzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtU2NoZW1hOiBhbnkgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogYW55ID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVWlTY2hlbWE6IGFueSA9IHByb3BzLnVpU2NoZW1hLml0ZW1zO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlhYjojrflj5bpu5jorqTnmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb3BzLmFqdi52YWxpZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHREYXRhOiBpdGVtVWlTY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKGRlZmF1bHRWYWx1ZS5kZWZhdWx0RGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUZvcm1SZWR1Y2VyLmFjdGlvbnMuYWRkSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5czogcHJvcHMucGFyZW50S2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiAocHJvcHMudWlTY2hlbWEgYXMgYW55KS5rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRlZmF1bHRWYWx1ZS5kZWZhdWx0RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5Yig6Zmk5LiA5Liq5pWw57uE5YWD57SgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZUl0ZW06IChwcm9wc0N1cjogRGVmYXVsdFByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwYXJlbnRLZXlzOiBhbnlbXSwga2V5czogYW55W10sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hRm9ybVJlZHVjZXIuYWN0aW9ucy5yZW1vdmVJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEtleXM6IHBhcmVudEtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDkuI7kuIDkuKrlhYPntKDkuqTmjaLkvY3nva5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3dpdGNoSXRlbTogKHByb3BzQ3VyOiBEZWZhdWx0UHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmVudEtleXM6IGFueVtdLCBrZXlzOiBhbnlbXSwgY3VySW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYUZvcm1SZWR1Y2VyLmFjdGlvbnMuc3dpdGNoSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlzOiBwYXJlbnRLZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czoga2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckluZGV4OiBjdXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvSW5kZXg6IHRvSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOenu+WKqOWIsOafkOS4quWFg+e0oOWQjumdolxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3ZlSXRlbTogKHByb3BzQ3VyOiBEZWZhdWx0UHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmVudEtleXM6IGFueVtdLCBrZXlzOiBhbnlbXSwgY3VySW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYUZvcm1SZWR1Y2VyLmFjdGlvbnMubW92ZVRvSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlzOiBwYXJlbnRLZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czoga2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckluZGV4OiBjdXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvSW5kZXg6IHRvSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWIneWni+WMlmFycmF555qE5pON5L2c57uE5Lu2XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXRBcnJheUNvbXBvbmVudDogKHByb3BzQ3VyOiBEZWZhdWx0UHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByb3BzOiBEZWZhdWx0UHJvcHMgJiBBcnJheUhvY091dFByb3BzLCBpbmRleD86IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IEFycmF5Q29tcG9uZW50LCBBcnJheUl0ZW1Db21wb25lbnQsIC4uLmV4dHJhUHJvcHMgfSA9IHByb3BzLCB1aVNjaGVtYSA9IHByb3BzLnVpU2NoZW1hIGFzIEZ4VWlTY2hlbWE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVpU2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5Q29tcG9uZW50ID8gPEFycmF5Q29tcG9uZW50IHsuLi5leHRyYVByb3BzfSAvPiA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXlJdGVtQ29tcG9uZW50ID8gPEFycmF5SXRlbUNvbXBvbmVudCB7Li4uZXh0cmFQcm9wc30gLz4gOiBudWxsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSBhcyBhbnkpO1xuXG4gICAgLyoqXG4gICAgICog5YyF6KOFYXJyYXnnmoTnu4Tku7ZIT0NcbiAgICAgKiBAcGFyYW0gaG9jRmFjdG9yeSAgaG9j55qE5bel5Y6C5pa55rOVXG4gICAgICogQHBhcmFtIENvbXBvbmVudCAgIOmcgOimgeWMheijheeahOe7hOS7tlxuICAgICAqIOWKoOWFpeWxnuaAp1xuICAgICAqIGFycmF5SXRlbXNcbiAgICAgKi9cbiAgICBsZXQgYXJyYXlIb2MgPSAoQ29tcG9uZW50OiBhbnkpOiBSQzxBcnJheUhvY091dFByb3BzLCBhbnk+ID0+IHtcbiAgICAgICAgQGhvY1xuICAgICAgICBjbGFzcyBBcnJheUNvbXBvbmVudEhvYyBleHRlbmRzIFB1cmVDb21wb25lbnQ8QXJyYXlQcm9wcywgYW55PiB7XG4gICAgICAgICAgICBwcml2YXRlIEFycmF5Q29tcG9uZW50O1xuICAgICAgICAgICAgcHJpdmF0ZSBBcnJheUl0ZW1Db21wb25lbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcnJheVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QXJyYXlDb21wb25lbnRzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaXZhdGUgaW5pdEFycmF5Q29tcG9uZW50cygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGdldE9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9jT3B0aW9uczogYW55ID0gZ2V0T3B0aW9ucyh0aGlzLnByb3BzLCBcImhvY1wiLCBcImFycmF5XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhvY09wdGlvbnMuQXJyYXlDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BcnJheUNvbXBvbmVudCA9IGhvY09wdGlvbnMuQXJyYXlDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhvY09wdGlvbnMuQXJyYXlJdGVtQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXJyYXlJdGVtQ29tcG9uZW50ID0gaG9jT3B0aW9ucy5BcnJheUl0ZW1Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGxldCBwcm9wczogYW55ID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5BcnJheUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5BcnJheUNvbXBvbmVudCA9IHRoaXMuQXJyYXlDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQXJyYXlJdGVtQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLkFycmF5SXRlbUNvbXBvbmVudCA9IHRoaXMuQXJyYXlJdGVtQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5Q29tcG9uZW50SG9jIGFzIGFueTtcbiAgICB9O1xuXG4gICAgbGV0IHB1cmVIb2MgPSAoQ29tcG9uZW50OiBhbnkpOiBSQzxBcnJheUhvY091dFByb3BzLCBhbnk+ID0+IHtcbiAgICAgICAgQGhvY1xuICAgICAgICBjbGFzcyBBcnJheVB1cmVDb21wb25lbnRIb2MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFycmF5UHJvcHMsIGFueT4ge1xuICAgICAgICAgICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXlQdXJlQ29tcG9uZW50SG9jIGFzIGFueTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJyYW5jaChcbiAgICAgICAgKHByb3BzOiBBcnJheVByb3BzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHVpU2NoZW1hIH0gPSBwcm9wcztcblxuICAgICAgICAgICAgcmV0dXJuIHVpU2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIjtcbiAgICAgICAgfSxcbiAgICAgICAgYXJyYXlIb2MsXG4gICAgICAgIHB1cmVIb2NcbiAgICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ob2NzL2FycmF5LnRzeCIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlUmVkdWNlciwgU2ltcGxlQWN0aW9uQ3JlYXRvciB9IGZyb20gXCJyZWR1eC1hY3RcIjtcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmltcG9ydCB7IEZ4UmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7IFRyZWVNYXAgfSBmcm9tIFwiLi4vbGlicy90cmVlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hRm9ybUFjdGlvbnMge1xuICAgIGNyZWF0ZUZvcm06IFNpbXBsZUFjdGlvbkNyZWF0b3I8eyBrZXk6IHN0cmluZywgZGF0YTogYW55IH0+O1xuICAgIHVwZGF0ZUl0ZW1EYXRhOiBTaW1wbGVBY3Rpb25DcmVhdG9yPHsgcGFyZW50S2V5czogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBkYXRhOiBhbnksIG1ldGE/OiBhbnkgfT47XG4gICAgdXBkYXRlSXRlbU1ldGE6IFNpbXBsZUFjdGlvbkNyZWF0b3I8eyBwYXJlbnRLZXlzOiBzdHJpbmdbXSwga2V5czogc3RyaW5nW10sIGRhdGE6IGFueSB9PjtcbiAgICBhZGRJdGVtOiBTaW1wbGVBY3Rpb25DcmVhdG9yPHsgcGFyZW50S2V5czogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBkYXRhOiBhbnkgfT47XG4gICAgcmVtb3ZlSXRlbTogU2ltcGxlQWN0aW9uQ3JlYXRvcjx7IHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciB9PjtcbiAgICBzd2l0Y2hJdGVtOiBTaW1wbGVBY3Rpb25DcmVhdG9yPHsgcGFyZW50S2V5czogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBjdXJJbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIgfT47XG4gICAgbW92ZVRvSXRlbTogU2ltcGxlQWN0aW9uQ3JlYXRvcjx7IHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgY3VySW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyIH0+O1xufVxuXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybVJlZHVjZXI8VD4gaW1wbGVtZW50cyBGeFJlZHVjZXIge1xuXG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtOiBTaW1wbGVBY3Rpb25DcmVhdG9yPHsga2V5OiBzdHJpbmcsIGRhdGE6IGFueSB9PlxuICAgICAgICA9IGNyZWF0ZUFjdGlvbihcIuWIm+W7uuS4gOS4quihqOWNleaVsOaNrlwiKTtcbiAgICBwcml2YXRlIHVwZGF0ZUl0ZW1EYXRhOiBTaW1wbGVBY3Rpb25DcmVhdG9yPHsgcGFyZW50S2V5czogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBkYXRhOiBhbnksIG1ldGE/OiBhbnkgfT5cbiAgICAgICAgPSBjcmVhdGVBY3Rpb24oXCLmm7TmlrDkuIDkuKrooajljZXmlbDmja5cIik7XG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtTWV0YTogU2ltcGxlQWN0aW9uQ3JlYXRvcjx7IHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgZGF0YTogYW55IH0+XG4gICAgICAgID0gY3JlYXRlQWN0aW9uKFwi5pu05paw5LiA5Liq6KGo5Y2V5YWD5pWw5o2uXCIpO1xuICAgIHByaXZhdGUgYWRkSXRlbTogU2ltcGxlQWN0aW9uQ3JlYXRvcjx7IHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgZGF0YTogYW55IH0+XG4gICAgICAgID0gY3JlYXRlQWN0aW9uKFwi5re75Yqg5LiA5Liq5pWw5o2uXCIpO1xuICAgIHByaXZhdGUgcmVtb3ZlSXRlbTogU2ltcGxlQWN0aW9uQ3JlYXRvcjx7IHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciB9PlxuICAgICAgICA9IGNyZWF0ZUFjdGlvbihcIuWIoOmZpOS4gOS4quaVsOaNrlwiKTtcbiAgICBwcml2YXRlIHN3aXRjaEl0ZW06IFNpbXBsZUFjdGlvbkNyZWF0b3I8eyBwYXJlbnRLZXlzOiBzdHJpbmdbXSwga2V5czogc3RyaW5nW10sIGN1ckluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlciB9PlxuICAgICAgICA9IGNyZWF0ZUFjdGlvbihcIuWFg+e0oDIy5Lqk5o2i5L2N572uXCIpO1xuICAgIHByaXZhdGUgbW92ZVRvSXRlbTogU2ltcGxlQWN0aW9uQ3JlYXRvcjx7IHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBzdHJpbmdbXSwgY3VySW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyIH0+XG4gICAgICAgID0gY3JlYXRlQWN0aW9uKFwi5YWD57Sg56e75L2NXCIpO1xuICAgIHByaXZhdGUgdmFsaWRhdGVBbGw6IFNpbXBsZUFjdGlvbkNyZWF0b3I8eyBwYXJlbnRLZXlzOiBzdHJpbmdbXSwga2V5czogc3RyaW5nW10sIGN1ckluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlciB9PlxuICAgICAgICA9IGNyZWF0ZUFjdGlvbihcIumqjOivgeWFqOmDqOWtl+autVwiKTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoFxuICAgICAqIEBwYXJhbSBpbml0aWFsU3RhdGUg5Yid5aeL5YyW54q25oCBXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsU3RhdGU6IGFueSkgeyB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5YmN55qEYWN0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWN0aW9ucygpOiBTY2hlbWFGb3JtQWN0aW9ucyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVGb3JtOiB0aGlzLmNyZWF0ZUZvcm0sXG4gICAgICAgICAgICB1cGRhdGVJdGVtRGF0YTogdGhpcy51cGRhdGVJdGVtRGF0YSxcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW1NZXRhOiB0aGlzLnVwZGF0ZUl0ZW1NZXRhLFxuICAgICAgICAgICAgYWRkSXRlbTogdGhpcy5hZGRJdGVtLFxuICAgICAgICAgICAgcmVtb3ZlSXRlbTogdGhpcy5yZW1vdmVJdGVtLFxuICAgICAgICAgICAgbW92ZVRvSXRlbTogdGhpcy5tb3ZlVG9JdGVtLFxuICAgICAgICAgICAgc3dpdGNoSXRlbTogdGhpcy5zd2l0Y2hJdGVtXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi/lOWbnuW9k+WJjeeahHJlZHVjZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJlZHVjZXIoKTogUmVkdWNlcjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVJlZHVjZXI8YW55Pih7XG4gICAgICAgICAgICBbdGhpcy5jcmVhdGVGb3JtIGFzIGFueV06IHRoaXMuY3JlYXRlRm9ybUhhbmRsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgW3RoaXMudXBkYXRlSXRlbURhdGEgYXMgYW55XTogdGhpcy51cGRhdGVJdGVtRGF0YUhhbmRsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgW3RoaXMudXBkYXRlSXRlbU1ldGEgYXMgYW55XTogdGhpcy51cGRhdGVJdGVtTWV0YUhhbmRsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgW3RoaXMuYWRkSXRlbSBhcyBhbnldOiB0aGlzLmFkZEl0ZW1EYXRhSGFuZGxlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBbdGhpcy5yZW1vdmVJdGVtIGFzIGFueV06IHRoaXMucmVtb3ZlSXRlbURhdGFIYW5kbGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIFt0aGlzLnN3aXRjaEl0ZW0gYXMgYW55XTogdGhpcy5zd2l0Y2hJdGVtSGFuZGxlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBbdGhpcy5tb3ZlVG9JdGVtIGFzIGFueV06IHRoaXMubW92ZUl0ZW1IYW5kbGUuYmluZCh0aGlzKSxcbiAgICAgICAgfSwgdGhpcy5pbml0aWFsU3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOino+aekOS4gOS4qui3r+W+hOS4iueahOaVsOaNru+8jOWIpOaWreaVsOaNruagvOW8j++8jOWBmuWkhOeQhlxuICAgICAqIEBwYXJhbSBzdGF0ZSDlvZPliY3nmoRzdGF0ZVxuICAgICAqIEBwYXJhbSBrZXlzICDmlbDmja7ot6/lvoRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc29sdmVLZXlzKHN0YXRlOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55Piwga2V5czogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBpZiAoc3RhdGUuaGFzSW4oa2V5cykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0ga2V5cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtS2V5cyA9IFtdLmNvbmNhdChrZXlzKS5zcGxpY2UoMCwgaSArIDEpO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpxrZXnkuI3lrZjlnKjvvIzpgY3ljobnlJ/miJDmlbDmja7nu5PmnoRcbiAgICAgICAgICAgIGlmICghc3RhdGUuaGFzSW4obUtleXMpKSB7XG4gICAgICAgICAgICAgICAgbUtleXMucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5oYXNJbihtS2V5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNbaV0uY29uc3RydWN0b3IgPT09IE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZS5zZXRJbihtS2V5cywgSW1tdXRhYmxlLkxpc3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnNldEluKG1LZXlzLCBJbW11dGFibGUuTWFwKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgbikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenGtleeWtmOWcqO+8jOWImeWIpOaWreaVsOaNrue7k+aehOaYr+WQpuS4jue7k+aehOS4gOiHtFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc3RhdGUuZ2V0SW4obUtleXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFJbW11dGFibGUuTWFwLmlzTWFwKGRhdGEpICYmICFJbW11dGFibGUuTGlzdC5pc0xpc3QoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNbaSArIDFdLmNvbnN0cnVjdG9yID09PSBOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gc3RhdGUuc2V0SW4obUtleXMsIEltbXV0YWJsZS5MaXN0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZS5zZXRJbihtS2V5cywgSW1tdXRhYmxlLk1hcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rkuIDku73ooajljZXmlbDmja5cbiAgICAgKiBAcGFyYW0gc3RhdGUgICDlvZPliY3nmoRzdGF0ZVxuICAgICAqIEBwYXJhbSBwYXJhbTEgIOWPguaVsOWAvO+8jGtleSDlkowgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRm9ybUhhbmRsZShzdGF0ZTogSW1tdXRhYmxlLk1hcDxzdHJpbmcsIGFueT4sIHsga2V5LCBkYXRhIH06IGFueSk6IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBhbnk+IHtcbiAgICAgICAgaWYgKHN0YXRlLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnJlbW92ZShrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0YSA9IG5ldyBUcmVlTWFwKGtleSwgSW1tdXRhYmxlLmZyb21KUyh7fSkpO1xuICAgICAgICBjb25zdCBzdGF0ZURhdGEgPSBJbW11dGFibGUuTWFwPHN0cmluZywgYW55Pih7XG4gICAgICAgICAgICBtZXRhOiBtZXRhLFxuICAgICAgICAgICAgZGF0YTogSW1tdXRhYmxlLmZyb21KUyhkYXRhKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGtleSwgc3RhdGVEYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5L+u5pS55LiA5Liq5pWw5o2uXG4gICAgICog5ZCI5bm2cGFycmVudEtleXPlkoxrZXlz77yM5Lit6Ze05Yqg5YWl5LiA5Liq4oCcZGF0YeKAnVxuICAgICAqIEBwYXJhbSBzdGF0ZSAg5b2T5YmN55qEc3RhdGVcbiAgICAgKiBAcGFyYW0gcGFyYW0xIOWPguaVsOWAvO+8jGtleXMscGFyZW50S2V5c+WSjGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUl0ZW1EYXRhSGFuZGxlKHN0YXRlOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiwgeyBwYXJlbnRLZXlzLCBrZXlzLCBkYXRhLCBtZXRhIH06IGFueSk6IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBhbnk+IHtcbiAgICAgICAgbGV0IGRhdGFLZXlzID0gcGFyZW50S2V5cy5jb25jYXQoW1wiZGF0YVwiLCAuLi5rZXlzXSk7XG5cbiAgICAgICAgc3RhdGUgPSB0aGlzLnJlc29sdmVLZXlzKHN0YXRlLCBkYXRhS2V5cyk7XG4gICAgICAgIHN0YXRlID0gc3RhdGUuc2V0SW4oZGF0YUtleXMsIEltbXV0YWJsZS5mcm9tSlMoZGF0YSkpO1xuXG4gICAgICAgIGlmIChtZXRhKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMudXBkYXRlSXRlbU1ldGFIYW5kbGUoc3RhdGUsIHsgcGFyZW50S2V5cywga2V5cywgbWV0YSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuIDkuKrmlbDnu4TliLBMaXN0XG4gICAgICogMS4g5re75Yqg5pWw57uEXG4gICAgICogMi4g5L+u5pS5bWV0YeS4reeahGNvbGxhcHNpbmflrZfmrrXkuLpmYWxzZe+8jOS9v+W+l+aKmOWPoOeahOeKtuaAgeaUueWPmOaIkOS4jeaKmOWPoOeahOeKtuaAgVxuICAgICAqIEBwYXJhbSBzdGF0ZSAg5b2T5YmN55qEc3RhdGVcbiAgICAgKiBAcGFyYW0gcGFyYW0xIGtleXMscGFyZW50S2V5c+WSjGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZEl0ZW1EYXRhSGFuZGxlKHN0YXRlOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiwgeyBwYXJlbnRLZXlzLCBrZXlzLCBkYXRhIH06IGFueSk6IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBhbnk+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSBwYXJlbnRLZXlzLmNvbmNhdChbXCJkYXRhXCIsIC4uLmtleXNdKSxcbiAgICAgICAgICAgIG1ldGFLZXlzOiBzdHJpbmdbXSA9IHBhcmVudEtleXMuY29uY2F0KFtcIm1ldGFcIl0pLFxuICAgICAgICAgICAgcm9vdE5vZGU6IFRyZWVNYXAgPSBzdGF0ZS5nZXRJbihtZXRhS2V5cyksXG4gICAgICAgICAgICBjaGlsZE5vZGU6IFRyZWVNYXAgPSByb290Tm9kZS5jb250YWluUGF0aChwYXJlbnRLZXlzLmNvbmNhdChrZXlzKSk7XG4gICAgICAgIGxldCBmb3JtSXRlbURhdGE6IEltbXV0YWJsZS5MaXN0PGFueT47XG5cbiAgICAgICAgc3RhdGUgPSB0aGlzLnJlc29sdmVLZXlzKHN0YXRlLCBkYXRhS2V5cyk7XG4gICAgICAgIGZvcm1JdGVtRGF0YSA9IHN0YXRlLmdldEluKGRhdGFLZXlzKSB8fCBJbW11dGFibGUuTGlzdCgpO1xuICAgICAgICBmb3JtSXRlbURhdGEgPSBmb3JtSXRlbURhdGEucHVzaChJbW11dGFibGUuZnJvbUpTKGRhdGEpKTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlICYmIGNoaWxkTm9kZS52YWx1ZSkge1xuICAgICAgICAgICAgY2hpbGROb2RlLnZhbHVlID0gY2hpbGROb2RlLnZhbHVlLm1lcmdlKHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0SW4oZGF0YUtleXMsIGZvcm1JdGVtRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5pWw57uE5Lit55qE5LiA5Liq5YWD57SgXG4gICAgICogMS4g5Yig6Zmk5YWD57Sg5pWw57uE5Lit55qE5pWw5o2uXG4gICAgICogMi4g5Yig6ZmkbWV0YeS/oeaBr+S4reeahOaVsOaNrlxuICAgICAqIEBwYXJhbSBzdGF0ZSAg5b2T5YmN55qEc3RhdGVcbiAgICAgKiBAcGFyYW0gcGFyYW0xIGtleXMscGFyZW50S2V5c+WSjGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZUl0ZW1EYXRhSGFuZGxlKHN0YXRlOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiwgeyBwYXJlbnRLZXlzLCBrZXlzLCBpbmRleCB9OiBhbnkpOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcGFyZW50S2V5cy5jb25jYXQoW1wiZGF0YVwiLCAuLi5rZXlzXSksXG4gICAgICAgICAgICBtZXRhS2V5czogc3RyaW5nW10gPSBwYXJlbnRLZXlzLmNvbmNhdChbXCJtZXRhXCJdKSxcbiAgICAgICAgICAgIHJvb3ROb2RlOiBUcmVlTWFwID0gc3RhdGUuZ2V0SW4obWV0YUtleXMpLFxuICAgICAgICAgICAgY2hpbGROb2RlOiBUcmVlTWFwID0gcm9vdE5vZGUuYWRkQ2hpbGQocGFyZW50S2V5cy5jb25jYXQoa2V5cykuY29uY2F0KFtpbmRleF0pKTtcbiAgICAgICAgbGV0IGZvcm1JdGVtRGF0YTogSW1tdXRhYmxlLkxpc3Q8YW55PjtcblxuICAgICAgICBzdGF0ZSA9IHRoaXMucmVzb2x2ZUtleXMoc3RhdGUsIGRhdGFLZXlzKTtcbiAgICAgICAgZm9ybUl0ZW1EYXRhID0gc3RhdGUuZ2V0SW4oZGF0YUtleXMpO1xuXG4gICAgICAgIGlmICghZm9ybUl0ZW1EYXRhIHx8ICFJbW11dGFibGUuTGlzdC5pc0xpc3QoZm9ybUl0ZW1EYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY2hpbGROb2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXRJbihkYXRhS2V5cywgZm9ybUl0ZW1EYXRhLnJlbW92ZShpbmRleCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS6pOaNojLkuKrmlbDnu4TnmoTkvY3nva5cbiAgICAgKiAxLiDkuqTmjaLmlbDnu4TmlbDmja5cbiAgICAgKiAyLiDkuqTmjaJtZXRh5Lit55qE5L2N572u5L+h5oGvXG4gICAgICogQHBhcmFtIHN0YXRlICAg5b2T5YmN55qEc3RhdGVcbiAgICAgKiBAcGFyYW0gcGFyYW0xICDlj4LmlbBcbiAgICAgKiAgIHBhcmVudEtleXMgICAg54i25Lqy55qEa2V5c1xuICAgICAqICAga2V5cyAgICAgICAgICDlvZPliY1pdGVt55qEa2V5c1xuICAgICAqICAgY3VySW5kZXggICAgICDlvZPliY1pdGVt55qE57Si5byVXG4gICAgICogICB0b0luZGV4ICAgICAgIOmcgOimgeS6pOaNoueahGl0ZW3ntKLlvJVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN3aXRjaEl0ZW1IYW5kbGUoc3RhdGU6IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBhbnk+LCB7IHBhcmVudEtleXMsIGtleXMsIGN1ckluZGV4LCB0b0luZGV4IH06IGFueSk6IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBhbnk+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSBwYXJlbnRLZXlzLmNvbmNhdChbXCJkYXRhXCIsIC4uLmtleXNdKSxcbiAgICAgICAgICAgIG1ldGFLZXlzOiBzdHJpbmdbXSA9IHBhcmVudEtleXMuY29uY2F0KFtcIm1ldGFcIl0pLFxuICAgICAgICAgICAgcm9vdE5vZGU6IFRyZWVNYXAgPSBzdGF0ZS5nZXRJbihtZXRhS2V5cyk7XG4gICAgICAgIGxldCBmb3JtSXRlbURhdGE6IEltbXV0YWJsZS5MaXN0PGFueT4sIGNoaWxkTm9kZTogVHJlZU1hcDtcblxuICAgICAgICBzdGF0ZSA9IHRoaXMucmVzb2x2ZUtleXMoc3RhdGUsIGRhdGFLZXlzKTtcbiAgICAgICAgZm9ybUl0ZW1EYXRhID0gc3RhdGUuZ2V0SW4oZGF0YUtleXMpO1xuXG4gICAgICAgIGlmICghZm9ybUl0ZW1EYXRhIHx8IGZvcm1JdGVtRGF0YS5zaXplIDw9IHRvSW5kZXggfHwgdG9JbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJJdGVtRGF0YSA9IGZvcm1JdGVtRGF0YS5nZXQoY3VySW5kZXgpO1xuXG4gICAgICAgIGZvcm1JdGVtRGF0YSA9IGZvcm1JdGVtRGF0YS5zZXQoY3VySW5kZXgsIGZvcm1JdGVtRGF0YS5nZXQodG9JbmRleCkpO1xuICAgICAgICBmb3JtSXRlbURhdGEgPSBmb3JtSXRlbURhdGEuc2V0KHRvSW5kZXgsIGN1ckl0ZW1EYXRhKTtcblxuICAgICAgICBjaGlsZE5vZGUgPSByb290Tm9kZS5jb250YWluUGF0aChwYXJlbnRLZXlzLmNvbmNhdChrZXlzKS5jb25jYXQoW2N1ckluZGV4XSkpO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUuc3dpdGNoT25lVG9PbmVGcm9tUGFyZW50KHRvSW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gcm9vdE5vZGUuY29udGFpblBhdGgocGFyZW50S2V5cy5jb25jYXQoa2V5cykuY29uY2F0KFt0b0luZGV4XSkpO1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5zd2l0Y2hPbmVUb09uZUZyb21QYXJlbnQoY3VySW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldEluKGRhdGFLZXlzLCBmb3JtSXRlbURhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS6pOaNojLkuKrmlbDnu4TnmoTkvY3nva5cbiAgICAgKiAxLiDkuqTmjaLmlbDnu4TmlbDmja5cbiAgICAgKiAyLiDkuqTmjaJtZXRh5Lit55qE5L2N572u5L+h5oGvXG4gICAgICogQHBhcmFtIHN0YXRlICAg5b2T5YmN55qEc3RhdGVcbiAgICAgKiBAcGFyYW0gcGFyYW0xICDlj4LmlbBcbiAgICAgKiAgIHBhcmVudEtleXMgICAg54i25Lqy55qEa2V5c1xuICAgICAqICAga2V5cyAgICAgICAgICDlvZPliY1pdGVt55qEa2V5c1xuICAgICAqICAgY3VySW5kZXggICAgICDlvZPliY1pdGVt55qE57Si5byVXG4gICAgICogICB0b0luZGV4ICAgICAgIOmcgOimgeS6pOaNoueahGl0ZW3ntKLlvJVcbiAgICAgKi9cbiAgICBwcml2YXRlIG1vdmVJdGVtSGFuZGxlKHN0YXRlOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiwgeyBwYXJlbnRLZXlzLCBrZXlzLCBjdXJJbmRleCwgdG9JbmRleCB9OiBhbnkpOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcGFyZW50S2V5cy5jb25jYXQoW1wiZGF0YVwiLCAuLi5rZXlzXSksXG4gICAgICAgICAgICBtZXRhS2V5czogc3RyaW5nW10gPSBwYXJlbnRLZXlzLmNvbmNhdChbXCJtZXRhXCJdKSxcbiAgICAgICAgICAgIHJvb3ROb2RlOiBUcmVlTWFwID0gc3RhdGUuZ2V0SW4obWV0YUtleXMpLFxuICAgICAgICAgICAgY2hpbGROb2RlOiBUcmVlTWFwID0gcm9vdE5vZGUuYWRkQ2hpbGQocGFyZW50S2V5cy5jb25jYXQoa2V5cykuY29uY2F0KFtjdXJJbmRleF0pKSxcbiAgICAgICAgICAgIG9mZnNldCA9ICh0b0luZGV4ID4gY3VySW5kZXggJiYgZmFsc2UgPyAxIDogMCk7XG4gICAgICAgIGxldCBmb3JtSXRlbURhdGE6IEltbXV0YWJsZS5MaXN0PGFueT47XG5cbiAgICAgICAgc3RhdGUgPSB0aGlzLnJlc29sdmVLZXlzKHN0YXRlLCBkYXRhS2V5cyk7XG4gICAgICAgIGZvcm1JdGVtRGF0YSA9IHN0YXRlLmdldEluKGRhdGFLZXlzKTtcblxuICAgICAgICBpZiAoIWZvcm1JdGVtRGF0YSB8fCBmb3JtSXRlbURhdGEuc2l6ZSA8PSB0b0luZGV4IHx8IHRvSW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VySXRlbURhdGEgPSBmb3JtSXRlbURhdGEuZ2V0KGN1ckluZGV4KTtcblxuICAgICAgICBmb3JtSXRlbURhdGEgPSBmb3JtSXRlbURhdGEucmVtb3ZlKGN1ckluZGV4KTtcbiAgICAgICAgZm9ybUl0ZW1EYXRhID0gZm9ybUl0ZW1EYXRhLmluc2VydCh0b0luZGV4IC0gb2Zmc2V0LCBjdXJJdGVtRGF0YSk7XG5cbiAgICAgICAgY2hpbGROb2RlLmluc2VydFRvRnJvbVBhcmVudCh0b0luZGV4KTtcblxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0SW4oZGF0YUtleXMsIGZvcm1JdGVtRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L+u5pS55LiA5Liq5pWw5o2u55qE5YWD5pWw5o2uXG4gICAgICog6YCa6L+HcGFyZW50S2V5c+WPluW+l+agueiKgueCuVxuICAgICAqIOmAmui/h2tleXPlkIjmiJDlhYPntKDnmoToioLngrnot6/lvoTvvIzku47moLnoioLngrnojrflj5bmlbDmja5cbiAgICAgKiBAcGFyYW0gc3RhdGUgIOW9k+WJjeeahHN0YXRlXG4gICAgICogQHBhcmFtIHBhcmFtMSDlj4LmlbDlgLzvvIxrZXlzLHBhcmVudEtleXPlkoxkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtTWV0YUhhbmRsZShzdGF0ZTogSW1tdXRhYmxlLk1hcDxzdHJpbmcsIGFueT4sIHsgcGFyZW50S2V5cywga2V5cywgZGF0YSB9OiBhbnkpOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PiB7XG4gICAgICAgIGxldCBtZXRhS2V5czogc3RyaW5nW10gPSBwYXJlbnRLZXlzLmNvbmNhdChbXCJtZXRhXCJdKTtcbiAgICAgICAgbGV0IHJvb3ROb2RlOiBUcmVlTWFwID0gc3RhdGUuZ2V0SW4obWV0YUtleXMpO1xuICAgICAgICBsZXQgY2hpbGROb2RlOiBUcmVlTWFwID0gcm9vdE5vZGUuYWRkQ2hpbGQocGFyZW50S2V5cy5jb25jYXQoa2V5cykpO1xuICAgICAgICBsZXQgdmFsdWUgPSBjaGlsZE5vZGUudmFsdWU7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZS52YWx1ZSkge1xuICAgICAgICAgICAgY2hpbGROb2RlLnZhbHVlID0gY2hpbGROb2RlLnZhbHVlLm1lcmdlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGROb2RlLnZhbHVlID0gSW1tdXRhYmxlLmZyb21KUyhkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChpcyhjaGlsZE5vZGUudmFsdWUsIHZhbHVlKSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IG5ld1Jvb3QgPSBPYmplY3QuYXNzaWduKHt9LCByb290Tm9kZSwgVHJlZU1hcC5wcm90b3R5cGUpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXRJbihtZXRhS2V5cywgbmV3Um9vdCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL3NjaGVtYS5mb3JtLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcInJlZHV4LWFjdFwiLFwiYW1kXCI6XCJyZWR1eC1hY3RcIixcImNvbW1vbmpzMlwiOlwicmVkdXgtYWN0XCIsXCJjb21tb25qc1wiOlwicmVkdXgtYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoSGFuZGxlcnMsIGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyBCYXNlRmFjdG9yeSB9IGZyb20gXCJmeC1zY2hlbWEtZm9ybS1jb3JlXCI7XG5cbmltcG9ydCB7IE1ha2VIb2NPdXRQcm9wcyB9IGZyb20gXCIuL21ha2VcIjtcbmltcG9ydCB7IFV0aWxzSG9jT3V0UHJvcHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgRGVmYXVsdFByb3BzLCBSQyB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBzY2hlbWFGb3JtUmVkdWNlciB9IGZyb20gXCIuLi9yZWR1Y2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVIb2NPdXRQcm9wcyBleHRlbmRzIERlZmF1bHRQcm9wcywgTWFrZUhvY091dFByb3BzIHtcbiAgICB1cGRhdGVJdGVtRGF0YTogKHByb3BzOiBEZWZhdWx0UHJvcHMsIGRhdGE6IGFueSwgbWV0YT86IGFueSkgPT4gdm9pZDtcbiAgICB1cGRhdGVJdGVtTWV0YTogKHByb3BzOiBEZWZhdWx0UHJvcHMsIGRhdGE6IGFueSwgbWV0YT86IGFueSkgPT4gdm9pZDtcbiAgICB2YWxpZGF0ZTogKHByb3BzOiBEZWZhdWx0UHJvcHMsIGRhdGE6IGFueSwgbWV0YT86IGFueSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCAoaG9jRmFjdG9yeTogQmFzZUZhY3Rvcnk8YW55Piwgc2V0dGluZ3M6IGFueSA9IHt9KSA9PiB7XG4gICAgLyoqXG4gICAgICog5YyF6KOFdmFsaWRhdGXnmoTnu4Tku7ZIT0NcbiAgICAgKiBAcGFyYW0gaG9jRmFjdG9yeSAgaG9j55qE5bel5Y6C5pa55rOVXG4gICAgICogQHBhcmFtIENvbXBvbmVudCAgIOmcgOimgeWMheijheeahOe7hOS7tlxuICAgICAqIOWKoOWFpeWxnuaAp1xuICAgICAqL1xuICAgIHJldHVybiAoQ29tcG9uZW50OiBhbnkpOiBSQzxEZWZhdWx0UHJvcHMsIGFueT4gPT4ge1xuICAgICAgICBAKGNvbXBvc2UoXG4gICAgICAgICAgICB3aXRoSGFuZGxlcnMoe1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIOmqjOivgeWNleS4quaVsOaNrlxuICAgICAgICAgICAgICAgICAqIOS9v+eUqOW9k+WJjee7hOS7tuS4reeahHVpU2NoZW1h77yM5Lul5Y+K5Lyg6YCS6L+H5p2l55qE5pWw5o2u5YGa6aqM6K+BXG4gICAgICAgICAgICAgICAgICog6L+Z6YeM5Y+v6IO95pyJ6L+c56iL6aqM6K+BXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChwcm9wc0N1cjogRGVmYXVsdFByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3luYyAocHJvcHM6IERlZmF1bHRQcm9wcyAmIFV0aWxzSG9jT3V0UHJvcHMsIGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7IGRpcnR5OiB0cnVlLCBpc1ZhbGlkOiBmYWxzZSwgaXNMb2FkaW5nOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hRm9ybVJlZHVjZXIuYWN0aW9ucy51cGRhdGVJdGVtTWV0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEtleXM6IHByb3BzLnBhcmVudEtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IChwcm9wcy51aVNjaGVtYSBhcyBhbnkpLmtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaXNMb2FkaW5nOiB0cnVlLCBpc1ZhbGlkOiBmYWxzZSwgZXJyb3JUZXh0OiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zlgZrkuIDlsYJ0cnkgY2F0Y2jlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlUmVzdWx0ID0gYXdhaXQgcHJvcHMuYWp2LnZhbGlkYXRlKHByb3BzLnVpU2NoZW1hLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaXNWYWxpZCA9IHZhbGlkYXRlUmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6aqM6K+B5Ye66ZSZ77yM5YiZ5oqb5Ye66ZSZ6K+vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3I6IGFueSA9IG5ldyBFcnJvcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLmVycm9ycyA9IHByb3BzLmFqdi5lcnJvcnM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aSE55CG6ZSZ6K+v5raI5oGvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVycm9yVGV4dCA9IGVyci5lcnJvcnMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5hanYuZXJyb3JzVGV4dChlcnIuZXJyb3JzLCB7IGRhdGFWYXI6IHByb3BzLmdldFRpdGxlKHByb3BzKS50b1N0cmluZygpIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdpdGhIYW5kbGVycyh7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICog5pu05paw5LiA5Liq5pWw5o2uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdXBkYXRlSXRlbURhdGE6IChwcm9wc0N1cjogRGVmYXVsdFByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJvcHM6IERlZmF1bHRQcm9wcywgZGF0YTogYW55LCBtZXRhPzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFGb3JtUmVkdWNlci5hY3Rpb25zLnVwZGF0ZUl0ZW1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlzOiBwcm9wcy5wYXJlbnRLZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IChwcm9wcy51aVNjaGVtYSBhcyBhbnkpLmtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIOabtOaWsOS4gOS4quWFg+aVsOaNrlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1NZXRhOiAocHJvcHNDdXI6IFZhbGlkYXRlSG9jT3V0UHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChwcm9wczogRGVmYXVsdFByb3BzLCBkYXRhOiBhbnksIG1ldGE/OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUZvcm1SZWR1Y2VyLmFjdGlvbnMudXBkYXRlSXRlbU1ldGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEtleXM6IHByb3BzLnBhcmVudEtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czogKHByb3BzLnVpU2NoZW1hIGFzIGFueSkua2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtZXRhIHx8IGF3YWl0IHByb3BzQ3VyLnZhbGlkYXRlKHByb3BzLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpIGFzIGFueSlcbiAgICAgICAgY2xhc3MgQXJyYXlDb21wb25lbnRIb2MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PERlZmF1bHRQcm9wcywgYW55PiB7XG4gICAgICAgICAgICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXlDb21wb25lbnRIb2MgYXMgYW55O1xuICAgIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvY3MvdmFsaWRhdGUudHN4IiwiXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tcG9zZSwgc2hvdWxkVXBkYXRlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgQmFzZUZhY3RvcnkgfSBmcm9tIFwiZngtc2NoZW1hLWZvcm0tY29yZVwiO1xuXG5pbXBvcnQgeyBVdGlsc0hvY091dFByb3BzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IFJDLCBEZWZhdWx0UHJvcHMsIEZ4VWlTY2hlbWEgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ha2VIb2NPdXRQcm9wcyBleHRlbmRzIFV0aWxzSG9jT3V0UHJvcHMge1xuXG59XG5cbi8qKlxuICog5YyF6KOFRmllbGTnmoTnu4Tku7ZIT0NcbiAqIEBwYXJhbSBob2NGYWN0b3J5ICBob2PnmoTlt6XljoLmlrnms5VcbiAqIEBwYXJhbSBDb21wb25lbnQg6ZyA6KaB5YyF6KOF55qE57uE5Lu2XG4gKiAgMS4g5Yqg5YWl5bGe5oCnRmllbGRDb21wb25lbnQgICBzY2hlbWHlr7nlupTnmoRmaWVsZGNvbXBvbmVudFxuICogIDIuIOWKoOWFpeWxnuaAp1dpZGdldENvbXBvbmVudCAgc2NoZW1h5a+55bqU55qEd2lkZ2V0Y29tcG9uZW50XG4gKiAgMy4gSE9D6buY6K6k6aG65bqP77yaVGhlbWVIb2MgLT4gRmllbGRIb2MgLT4gVmFsaWRhdGVIb2MgLT4gQXJyYXlIb2MgLT4gVGVtcEhvY1xuICovXG5leHBvcnQgZGVmYXVsdCAoaG9jRmFjdG9yeTogQmFzZUZhY3Rvcnk8YW55Piwgc2V0dGluZ3M6IGFueSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIChDb21wb25lbnQ6IGFueSk6IFJDPERlZmF1bHRQcm9wcyAmIE1ha2VIb2NPdXRQcm9wcywgYW55PiA9PiB7XG4gICAgICAgIEAoc2hvdWxkVXBkYXRlKCgpID0+IGZhbHNlKSBhcyBhbnkpXG4gICAgICAgIGNsYXNzIE1ha2VDb21wb25lbnRIb2MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PERlZmF1bHRQcm9wcyAmIE1ha2VIb2NPdXRQcm9wcywgYW55PiB7XG4gICAgICAgICAgICBwcml2YXRlIGZpZWxkS2V5ID0gXCJob2NzXCI7XG5cbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdWlTY2hlbWEsIGdldE9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB1aVNjaGVtYSBhcyBGeFVpU2NoZW1hO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkT3B0aW9ucyA9IGdldE9wdGlvbnModGhpcy5wcm9wcywgXCJmaWVsZFwiLCB0eXBlIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9jcyA9IHNldHRpbmdzLmhvY3MgfHwgdWlTY2hlbWFbdGhpcy5maWVsZEtleV0gfHwgW1widGhlbWVcIiwgXCJmaWVsZFwiLCBcInZhbGlkYXRlXCIsIFwiYXJyYXlcIiwgXCJ0ZW1wXCJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IENvbXBvbmVudFdpdGhIb2NzID0gY29tcG9zZTxEZWZhdWx0UHJvcHMgJiBNYWtlSG9jT3V0UHJvcHMsIGFueT5cbiAgICAgICAgICAgICAgICAgICAgKC4uLltcInV0aWxzXCJdLmNvbmNhdChob2NzKS5tYXAoaG9jID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaG9jICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvYztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBob2NGYWN0b3J5LmdldChob2MpKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKShDb21wb25lbnQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRXaXRoSG9jcyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWFrZUNvbXBvbmVudEhvYyBhcyBhbnk7XG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaG9jcy9tYWtlLnRzeCIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlRmFjdG9yeSB9IGZyb20gXCJmeC1zY2hlbWEtZm9ybS1jb3JlXCI7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwsIGNvbXBvc2UsIHNob3VsZFVwZGF0ZSwgb25seVVwZGF0ZUZvcktleXMsIGxpZmVjeWNsZSwgcHVyZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgUkMsIERlZmF1bHRQcm9wcywgRnhVaVNjaGVtYSB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUaGVtZUhvY091dFByb3BzIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IE1ha2VIb2NPdXRQcm9wcyB9IGZyb20gXCIuL21ha2VcIjtcbmltcG9ydCB7IFV0aWxzSG9jT3V0UHJvcHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgQXJyYXlIb2NPdXRQcm9wcyB9IGZyb20gXCIuL2FycmF5XCI7XG5cbi8qKlxuICog5YyF6KOFVGVtcGxhdGXnmoTnu4Tku7ZIT0NcbiAqIEBwYXJhbSBob2NGYWN0b3J5ICBob2PnmoTlt6XljoLmlrnms5VcbiAqIEBwYXJhbSBDb21wb25lbnQg6ZyA6KaB5YyF6KOF55qE57uE5Lu2XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGhvY0ZhY3Rvcnk6IEJhc2VGYWN0b3J5PGFueT4sIHNldHRpbmdzOiBhbnkgPSB7XG4gICAgdGVtcEZpZWxkOiBcInRlbXBzXCIsXG4gICAgdGVtcGxhdGVzOiBbXVxufSkgPT4ge1xuICAgIHJldHVybiAoQ29tcG9uZW50OiBhbnkpOiBSQzxEZWZhdWx0UHJvcHMgJiBUaGVtZUhvY091dFByb3BzLCBhbnk+ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICog6I635Y+W5qih5p2/55qEY29tcG9uZW50c1xuICAgICAgICAqIEBwYXJhbSB1aVNjaGVtYSDlkIjlubblkI7nmoTmlbDmja5cbiAgICAgICAgKi9cbiAgICAgICAgY2xhc3MgVGVtcENvbXBvbmVudEhvYyBleHRlbmRzIFB1cmVDb21wb25lbnQ8RGVmYXVsdFByb3BzICYgVGhlbWVIb2NPdXRQcm9wcyAmIFV0aWxzSG9jT3V0UHJvcHMgJiBBcnJheUhvY091dFByb3BzLCBhbnk+IHtcbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdWlTY2hlbWEsIGdldE9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBvcHRpb25zOiB1aVNjaGVtYU9wdGlvbnMsIGtleXMgfSA9IHVpU2NoZW1hIGFzIEZ4VWlTY2hlbWE7XG4gICAgICAgICAgICAgICAgY29uc3QgVGVtcENvbXBvbmVudHMgPSB0aGlzLmdldFRlbXBsYXRlcygpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRlbXBDb21wb25lbnRzLnJlZHVjZSgocHJldjogSlNYLkVsZW1lbnQsIHsga2V5LCBUZW1wIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcE9wdGlvbnMgPSBnZXRPcHRpb25zKHRoaXMucHJvcHMsIFwidGVtcFwiLCBrZXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgVGVtcFdpdGhIb2MgPSBjb21wb3NlKC4uLih0ZW1wT3B0aW9ucy50ZW1wSG9jcyB8fCBbXSkpKFRlbXApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGVtcFdpdGhIb2NcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5cy5qb2luKFwiLlwiKSArIGtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBLZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFqdj17dGhpcy5wcm9wcy5hanZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1aVNjaGVtYT17dGhpcy5wcm9wcy51aVNjaGVtYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUlkPXt0aGlzLnByb3BzLnNjaGVtYUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlMZXZlbD17dGhpcy5wcm9wcy5hcnJheUxldmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlJbmRleD17dGhpcy5wcm9wcy5hcnJheUluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT3B0aW9ucz17dGhpcy5wcm9wcy5nbG9iYWxPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXlDb21wb25lbnQ9e3RoaXMucHJvcHMuQXJyYXlDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheUl0ZW1Db21wb25lbnQ9e3RoaXMucHJvcHMuQXJyYXlJdGVtQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdEFycmF5Q29tcG9uZW50PXt0aGlzLnByb3BzLmluaXRBcnJheUNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEtleXM9e3RoaXMucHJvcHMucGFyZW50S2V5c31cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFRpdGxlPXt0aGlzLnByb3BzLmdldFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9ucz17dGhpcy5wcm9wcy5nZXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UGF0aEtleXM9e3RoaXMucHJvcHMuZ2V0UGF0aEtleXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17cHJldn0gLz47XG4gICAgICAgICAgICAgICAgfSwgPENvbXBvbmVudCBrZXk9e2tleXMuam9pbihcIi5cIil9IHsuLi50aGlzLnByb3BzfSAvPik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiDojrflj5bmqKHmnb/nmoRjb21wb25lbnRzXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZXMoKTogQXJyYXk8eyBrZXk6IHN0cmluZywgVGVtcDogUkM8YW55LCBhbnk+IH0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVpU2NoZW1hLCBjdXJyZW50VGhlbWUsIGdldE9wdGlvbnMgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5cywgdHlwZSB9ID0gdWlTY2hlbWEgYXMgRnhVaVNjaGVtYSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZURlZmF1bHRPcHRpb25zID0gZ2V0T3B0aW9ucyh0aGlzLnByb3BzLCBcImZpZWxkXCIsIHR5cGUgYXMgc3RyaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgVGVtcENvbXBvbmVudCA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZTtcblxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy50ZW1wbGF0ZXMgJiYgc2V0dGluZ3MudGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSBzZXR0aW5ncy50ZW1wbGF0ZXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0eXBlRGVmYXVsdE9wdGlvbnNbc2V0dGluZ3MudGVtcEZpZWxkXSB8fCBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBnZXRUZW1wbGF0ZSA9ICh0bXA6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRtcC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50VGhlbWUudGVtcEZhY3RvcnkuaGFzKHRtcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg5LiN5a2Y5ZyoJHt0bXB955qEdGVtcO+8gWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbXBDb21wb25lbnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbXA6IGN1cnJlbnRUaGVtZS50ZW1wRmFjdG9yeS5nZXQodG1wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW1wQ29tcG9uZW50LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRtcC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW1wOiB0bXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW10uY29uY2F0KHRlbXBsYXRlKS5yZXZlcnNlKCkuZm9yRWFjaCgodG1sLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGVtcGxhdGUodG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gVGVtcENvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBUZW1wQ29tcG9uZW50SG9jIGFzIGFueTtcbiAgICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ob2NzL3RlbXAudHN4IiwiXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tcG9zZSwgc2hvdWxkVXBkYXRlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgY29ubmVjdCwgRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJhc2VGYWN0b3J5IH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIjtcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvckNyZWF0b3IsIGRlZmF1bHRNZW1vaXplIH0gZnJvbSBcInJlc2VsZWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlLCB7IGlzIH0gZnJvbSBcImltbXV0YWJsZVwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIFJDLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhSG9jT3V0UHJvcHMgZXh0ZW5kcyBEZWZhdWx0UHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUhvY1NldHRpbmdzIHtcbiAgICByb290UmVkdWNlcktleTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgICBkYXRhPzogYm9vbGVhbjtcbiAgICBkYXRhTGVuZ3RoPzogYm9vbGVhbjtcblxuICAgIG1ldGE/OiBib29sZWFuO1xufVxuXG4vLyDoh6rlrprkuYnpgInmi6nlmajliJvlu7rlh73mlbBcbmNvbnN0IGZ4U2VsZWN0b3JDcmVhdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplLCBpcyk7XG5cbmNvbnN0IG1hcHM6IGFueSA9IHt9O1xuXG5cbi8qKlxuICog5LiOcmVkdWNl55u45YWz55qE5pWw5o2u5pON5L2cXG4gKiDojrflj5Zmb3JtSXRlbURhdGHmlbDmja5cbiAqIOiOt+WPlmZvcm1JdGVtTWV0YeaVsOaNrlxuICovXG5leHBvcnQgZGVmYXVsdCAoaG9jRmFjdG9yeTogQmFzZUZhY3Rvcnk8UkM8RGVmYXVsdFByb3BzLCB7fT4+LCBzZXR0aW5nczogRGF0YUhvY1NldHRpbmdzID0ge1xuICAgIGRhdGE6IHRydWUsXG4gICAgcm9vdFJlZHVjZXJLZXk6IFtcInNjaGVtYUZvcm1cIl1cbn0pID0+IHtcblxuICAgIGNvbnN0IGdldEl0ZW1EYXRhSG9jID0gKHBhcmVudEtleXM6IHN0cmluZ1tdLCBrZXlzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5ZGb3JtSXRlbURhdGHnmoTmlbDmja5cbiAgICAgICAgICogQHBhcmFtIHN0YXRlIOW9k+WJjeeahHN0YXRl5qCRXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZ2V0Rm9ybUl0ZW1EYXRhID0gKHN0YXRlOiBJbW11dGFibGUuTWFwPHN0cmluZywgYW55PikgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGFLZXlzID0gc2V0dGluZ3Mucm9vdFJlZHVjZXJLZXkuY29uY2F0KFsuLi5wYXJlbnRLZXlzLCBcImRhdGFcIiwgLi4ua2V5c10pO1xuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuZGF0YSAmJiBzdGF0ZS5oYXNJbihkYXRhS2V5cykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm9ybUl0ZW1EYXRhID0gc3RhdGUuZ2V0SW4oZGF0YUtleXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1JdGVtRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MuZGF0YUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1JdGVtRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtSXRlbURhdGEuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgKiDojrflj5ZGb3JtSXRlbU1ldGHnmoTmlbDmja5cbiAgICAgICAgKiBAcGFyYW0gc3RhdGUg5b2T5YmN55qEc3RhdGXmoJFcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGdldEZvcm1JdGVtTWV0YSA9IChzdGF0ZTogSW1tdXRhYmxlLk1hcDxzdHJpbmcsIGFueT4pID0+IHtcbiAgICAgICAgICAgIGxldCBtZXRhS2V5cyA9IHNldHRpbmdzLnJvb3RSZWR1Y2VyS2V5LmNvbmNhdChbLi4ucGFyZW50S2V5cywgXCJtZXRhXCJdKTtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm1ldGEgJiYgc3RhdGUuaGFzSW4obWV0YUtleXMpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb3ROb2RlID0gc3RhdGUuZ2V0SW4obWV0YUtleXMpO1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSByb290Tm9kZS5jb250YWluUGF0aChbLi4ucGFyZW50S2V5cywgLi4ua2V5c10pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZ4U2VsZWN0b3JDcmVhdG9yKFxuICAgICAgICAgICAgW2dldEZvcm1JdGVtRGF0YSwgZ2V0Rm9ybUl0ZW1NZXRhXSxcbiAgICAgICAgICAgIChmb3JtSXRlbURhdGE6IGFueSwgZm9ybUl0ZW1NZXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBydG46IHsgZm9ybUl0ZW1EYXRhPzogYW55LCBmb3JtSXRlbU1ldGE/OiBhbnkgfSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1JdGVtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBydG4uZm9ybUl0ZW1EYXRhID0gZm9ybUl0ZW1EYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9ybUl0ZW1NZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ0bi5mb3JtSXRlbU1ldGEgPSBmb3JtSXRlbU1ldGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog55So5LqO6I635Y+W5pWw5o2u55qEaG9jXG4gICAgICogQHBhcmFtIGhvY0ZhY3RvcnkgIGhvY+eahOW3peWOguaWueazlVxuICAgICAqIEBwYXJhbSBDb21wb25lbnQgICDpnIDopoHljIXoo4XnmoTnu4Tku7ZcbiAgICAgKiDliqDlhaXlsZ7mgKdcbiAgICAgKiBhcnJheUl0ZW1zXG4gICAgICovXG4gICAgcmV0dXJuIChDb21wb25lbnQ6IGFueSk6IFJDPERhdGFIb2NPdXRQcm9wcywgYW55PiA9PiB7XG4gICAgICAgIEBzaG91bGRVcGRhdGUoKCkgPT4gZmFsc2UpXG4gICAgICAgIGNsYXNzIERhdGFDb21wb25lbnRIb2MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PERhdGFIb2NPdXRQcm9wcywgYW55PiB7XG4gICAgICAgICAgICBwcml2YXRlIENvbXBvbmVudFdpdGhIb2M7XG5cbiAgICAgICAgICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5cyB9ID0gdGhpcy5wcm9wcy51aVNjaGVtYSBhcyBGeFVpU2NoZW1hO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1hcEtleXMgPSBbLi4udGhpcy5wcm9wcy5wYXJlbnRLZXlzLCAuLi5rZXlzLFxuICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzLmRhdGEsIHNldHRpbmdzLmRhdGFMZW5ndGgsIHNldHRpbmdzLm1ldGEsIC4uLnNldHRpbmdzLnJvb3RSZWR1Y2VyS2V5XS5qb2luKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAobWFwc1ttYXBLZXlzXSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIXRoaXMuQ29tcG9uZW50V2l0aEhvYykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaG9jID0gbWFwc1ttYXBLZXlzXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuQ29tcG9uZW50V2l0aEhvYyA9IGhvYyhDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBob2MgPSBjb25uZWN0KGdldEl0ZW1EYXRhSG9jKHRoaXMucHJvcHMucGFyZW50S2V5cywga2V5cykpO1xuICAgICAgICAgICAgICAgIC8vIG1hcHNbbWFwS2V5c10gPSBob2M7XG4gICAgICAgICAgICAgICAgY29uc3QgQ29tcG9uZW50V2l0aEhvYyA9IGhvYyhDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IENvbXBvbmVudFdpdGhIb2MgPSB0aGlzLkNvbXBvbmVudFdpdGhIb2M7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudFdpdGhIb2Mgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERhdGFDb21wb25lbnRIb2MgYXMgYW55O1xuICAgIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvY3MvZGF0YS50c3giLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJyZXNlbGVjdFwiLFwiYW1kXCI6XCJyZXNlbGVjdFwiLFwiY29tbW9uanMyXCI6XCJyZXNlbGVjdFwiLFwiY29tbW9uanNcIjpcInJlc2VsZWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVaVNjaGVtYSB9IGZyb20gXCJmeC1zY2hlbWEtZm9ybS1jb3JlL2Rpc3QvZHRzL21vZGVscy91aXNjaGVtYVwiO1xuaW1wb3J0IHsgRnhKc29uU2NoZW1hIH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmUvZGlzdC9kdHMvbW9kZWxzL2pzb25zY2hlbWFcIjtcbmltcG9ydCB7IE1hcCB9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7IEJhc2VGYWN0b3J5IH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIjtcblxuZXhwb3J0IHsgU2NoZW1hRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcbmV4cG9ydCB7IERlZmF1bHRQcm9wcyB9IGZyb20gXCIuL2RlZmF1bHQucHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWFGb3JtTnM8RiwgVCwgVz4ge1xuICAgIGZpZWxkRmFjdG9yeTogQmFzZUZhY3Rvcnk8Rj47XG4gICAgdGVtcEZhY3Rvcnk6IEJhc2VGYWN0b3J5PFQ+O1xuICAgIHdpZGdldEZhY3Rvcnk6IEJhc2VGYWN0b3J5PFc+O1xufVxuXG5leHBvcnQgdHlwZSBSQzxQLCBUPiA9IG5ldyAoKSA9PiBSZWFjdC5QdXJlQ29tcG9uZW50PFAsIFQ+O1xuZXhwb3J0IGludGVyZmFjZSBGeFVpU2NoZW1hIGV4dGVuZHMgVWlTY2hlbWEge1xuICAgIG9wdGlvbnM/OiBNYXA8c3RyaW5nLCBhbnk+O1xuICAgIGNoaWxkcmVuPzogQXJyYXk8VWlTY2hlbWEgfCBzdHJpbmc+O1xuICAgIHRoZW1lPzogc3RyaW5nO1xuICAgIGZpZWxkPzogc3RyaW5nO1xuICAgIHdpZGdldD86IHN0cmluZztcbiAgICB0ZW1wcz86IHN0cmluZztcbiAgICBpc1JlcXVpcmVkPzogYm9vbGVhbjtcbiAgICByZWZLZXlzPzogc3RyaW5nW107XG4gICAgb3JpZ2luS2V5cz86IHN0cmluZ1tdO1xufVxuZXhwb3J0IHR5cGUgTnNGYWN0b3J5ID0gU2NoZW1hRm9ybU5zPFJDPGFueSwgYW55PiwgUkM8YW55LCBhbnk+LCBSQzxhbnksIGFueT4+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRGVmYXVsdFByb3BzLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBob2MgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcbmltcG9ydCB7IE1lcmdlSG9jT3V0UHJvcHMgfSBmcm9tIFwiLi4vLi4vaG9jcy9tZXJnZVwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUl0ZW0gfSBmcm9tIFwiLi4vZm9ybWl0ZW0vaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIERlZmF1bHRQcm9wcywgTWVyZ2VIb2NPdXRQcm9wcyB7XG4gICAgUm9vdENvbXBvbmVudD86IGFueTtcbiAgICB1aVNjaGVtYXM/OiBBcnJheTxzdHJpbmcgfCBGeFVpU2NoZW1hPjtcbn1cblxuQGhvY1xuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNjaGVtYUlkLCBtZXJnZVNjaGVtYUxpc3QsIGFycmF5TGV2ZWwsIFJvb3RDb21wb25lbnQsIGNoaWxkcmVuLCAuLi5leHRyYVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmb3JtSXRlbUxpc3QgPSBtZXJnZVNjaGVtYUxpc3QubWFwKCh1aVNjZWhtYTogRnhVaVNjaGVtYSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBhcnJheUxldmVsQ29weSA9IGFycmF5TGV2ZWwgPyBhcnJheUxldmVsLmNvbmNhdChbXSkgOiBbXTtcblxuICAgICAgICAgICAgcmV0dXJuIDxTY2hlbWFGb3JtSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIHsuLi5leHRyYVByb3BzfVxuICAgICAgICAgICAgICAgIHNjaGVtYUlkPXtzY2hlbWFJZH1cbiAgICAgICAgICAgICAgICB1aVNjaGVtYT17dWlTY2VobWF9XG4gICAgICAgICAgICAgICAgYXJyYXlMZXZlbD17YXJyYXlMZXZlbENvcHl9XG4gICAgICAgICAgICAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8Um9vdENvbXBvbmVudCA+XG4gICAgICAgICAgICAgICAge2Zvcm1JdGVtTGlzdH1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1Jvb3RDb21wb25lbnQ+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1JdGVtTGlzdH1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3JtL2NvbXBvbmVudC50c3giLCJpbXBvcnQgeyBjb21wb3NlLCBDb21wb25lbnRFbmhhbmNlciwgc2hvdWxkVXBkYXRlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGhvY0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgaG9jOiBDb21wb25lbnRFbmhhbmNlcjxEZWZhdWx0UHJvcHMsIGFueT4gPSBjb21wb3NlPERlZmF1bHRQcm9wcywgYW55PihcbiAgICBzaG91bGRVcGRhdGUoKCkgPT4gZmFsc2UpLFxuICAgIGhvY0ZhY3RvcnkuZ2V0KFwidXRpbHNcIikoKSxcbiAgICBob2NGYWN0b3J5LmdldChcIm1lcmdlXCIpKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3JtL2NvbnRhaW5lci50c3giLCJpbXBvcnQgeyBTY2hlbWFGb3JtSXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgeyBTY2hlbWFGb3JtSXRlbSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybWl0ZW0vaW5kZXgudHN4IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHsgRGVmYXVsdFByb3BzIH0gZnJvbSBcIi4uL2RlZmF1bHQucHJvcHNcIjtcbmltcG9ydCB7IGhvYyB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xuaW1wb3J0IHsgRmllbGRIb2NPdXRQcm9wcyB9IGZyb20gXCIuLi8uLi9ob2NzL2ZpZWxkXCI7XG5pbXBvcnQgeyBVdGlsc0hvY091dFByb3BzIH0gZnJvbSBcIi4uLy4uL2hvY3MvdXRpbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIERlZmF1bHRQcm9wcyB7XG5cbn1cblxuQGhvY1xuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1JdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBGaWVsZENvbXBvbmVudCwgdWlTY2hlbWEsIC4uLmV4dHJhUHJvcHMgfSA9IHRoaXMucHJvcHMgYXMgUHJvcHMgJiBGaWVsZEhvY091dFByb3BzICYgVXRpbHNIb2NPdXRQcm9wcztcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGV4dHJhUHJvcHMuZ2V0T3B0aW9ucyh0aGlzLnByb3BzLCBcImZpZWxkXCIsICh1aVNjaGVtYSBhcyBhbnkpLmZpZWxkIHx8ICh1aVNjaGVtYSBhcyBhbnkpLnR5cGUpO1xuICAgICAgICBsZXQgRmllbGRDb21wb25lbnRXaXRoSG9jID0gRmllbGRDb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKCFGaWVsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codWlTY2hlbWEsIFwi5rKh5pyJ5om+5Yiw5Yy56YWN55qEZmllbGRcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmZpZWxkSG9jcyAmJiBvcHRpb25zLmZpZWxkSG9jcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIEZpZWxkQ29tcG9uZW50V2l0aEhvYyA9IGNvbXBvc2UoXG4gICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuZmllbGRIb2NzIHx8IFtdKVxuICAgICAgICAgICAgKShGaWVsZENvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPEZpZWxkQ29tcG9uZW50V2l0aEhvYyBrZXk9eyh1aVNjaGVtYSBhcyBhbnkpLmtleXMuam9pbihcImZvcm1JdGVtXCIpfSB1aVNjaGVtYT17dWlTY2hlbWF9IHsuLi5leHRyYVByb3BzfSAvPjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3JtaXRlbS9jb21wb25lbnQudHN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVkdXhcIixcImFtZFwiOlwicmVkdXhcIixcImNvbW1vbmpzMlwiOlwicmVkdXhcIixcImNvbW1vbmpzXCI6XCJyZWR1eFwifVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tcG9zZSwgQ29tcG9uZW50RW5oYW5jZXIgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5cbmltcG9ydCB7IERlZmF1bHRQcm9wcyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgaG9jRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9mYWN0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBob2M6IENvbXBvbmVudEVuaGFuY2VyPERlZmF1bHRQcm9wcywgYW55PiA9IGNvbXBvc2U8RGVmYXVsdFByb3BzLCBhbnk+KFxuICAgIGhvY0ZhY3RvcnkuZ2V0KFwidXRpbHNcIikoKSxcbiAgICBob2NGYWN0b3J5LmdldChcIm1ha2VcIikoKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1pdGVtL2NvbnRhaW5lci50c3giLCJleHBvcnQgeyBOb3JtYWxGaWVsZCB9IGZyb20gXCIuL25vcm1hbFwiO1xuZXhwb3J0IHsgT2JqZWN0RmllbGQgfSBmcm9tIFwiLi9vYmplY3RcIjtcbmV4cG9ydCB7IEFycmF5RmllbGQgfSBmcm9tIFwiLi9hcnJheVwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZpZWxkcy9pbmRleC50c3giLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZSwgc2hvdWxkVXBkYXRlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIEZ4VWlTY2hlbWEgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVXRpbHNIb2NPdXRQcm9wcyB9IGZyb20gXCIuLi9ob2NzL3V0aWxzXCI7XG5pbXBvcnQgeyBGaWVsZEhvY091dFByb3BzIH0gZnJvbSBcIi4uL2hvY3MvZmllbGRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb3JtYWxGaWVsZFByb3BzIGV4dGVuZHMgRGVmYXVsdFByb3BzLCBVdGlsc0hvY091dFByb3BzLCBGaWVsZEhvY091dFByb3BzIHtcblxufVxuXG4vKipcbiAqIOaZrumAmuaVsOaNruWtl+auteexu+Wei1xuICog6L+Z6YeM55u05o6l5riy5p+TW2ZpZWxkSG9jXeS4ree7k+eul+W+l+WHuueahFdpZGdldENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgTm9ybWFsRmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE5vcm1hbEZpZWxkUHJvcHM+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBOb3JtYWxGaWVsZFByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBjb25zdCB7IFdpZGdldENvbXBvbmVudCwgRmllbGRDb21wb25lbnQsIGZvcm1JdGVtTWV0YSwgZm9ybUl0ZW1EYXRhLCAuLi5leHRyYVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmaWVsZE9wdGlvbnMgPSBleHRyYVByb3BzLmdldE9wdGlvbnModGhpcy5wcm9wcywgXCJmaWVsZFwiLCBcIm5vcm1hbFwiKTtcbiAgICAgICAgY29uc3QgeyBrZXlzIH0gPSBleHRyYVByb3BzLnVpU2NoZW1hIGFzIEZ4VWlTY2hlbWE7XG4gICAgICAgIGxldCBXaWRnZXRDb21wb25lbnRXaXRoSG9jID0gV2lkZ2V0Q29tcG9uZW50O1xuXG4gICAgICAgIGlmICghV2lkZ2V0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZE9wdGlvbnMud2lkZ2V0SG9jcyAmJiBmaWVsZE9wdGlvbnMud2lkZ2V0SG9jcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIFdpZGdldENvbXBvbmVudFdpdGhIb2MgPSBjb21wb3NlKFxuICAgICAgICAgICAgICAgIC4uLmZpZWxkT3B0aW9ucy53aWRnZXRIb2NzXG4gICAgICAgICAgICApKFdpZGdldENvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFdpZGdldENvbXBvbmVudFdpdGhIb2Mga2V5PXtrZXlzLmpvaW4oXCIuXCIpfSB7Li4uZXh0cmFQcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmllbGRzL25vcm1hbC50c3giLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTY2hlbWFGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IHsgRGVmYXVsdFByb3BzLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RGaWVsZFByb3BzIGV4dGVuZHMgRGVmYXVsdFByb3BzIHtcblxufVxuXG4vKipcbiAqIE9iamVjdOexu+Wei+eahOWtl+auteino+aekFxuICog5bWM5aWX5LiA5bGCU2NoZW1hRm9ybVxuICovXG5leHBvcnQgY2xhc3MgT2JqZWN0RmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE9iamVjdEZpZWxkUHJvcHMsIGFueT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBjb25zdCB1aVNjaGVtYSA9IHRoaXMucHJvcHMudWlTY2hlbWEgYXMgRnhVaVNjaGVtYSxcbiAgICAgICAgICAgIHsgYXJyYXlJbmRleCwgYXJyYXlMZXZlbCwgcGFyZW50S2V5cywgZ2xvYmFsT3B0aW9ucywgYWp2LCBzY2hlbWFJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyDlpoLmnpxjaGlsZHJlbuiuvue9ruaIkG51bGzvvIzliJnov5Tlm57nqbpcbiAgICAgICAgaWYgKHVpU2NoZW1hLmNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2NoZW1hRm9ybVxuICAgICAgICAgICAgICAgIGFycmF5SW5kZXg9e2FycmF5SW5kZXh9XG4gICAgICAgICAgICAgICAgYXJyYXlMZXZlbD17YXJyYXlMZXZlbH1cbiAgICAgICAgICAgICAgICBzY2hlbWFJZD17dWlTY2hlbWEuc2NoZW1hUGF0aH1cbiAgICAgICAgICAgICAgICB1aVNjaGVtYXM9e3VpU2NoZW1hLmNoaWxkcmVuIHx8IFtcIipcIl19XG4gICAgICAgICAgICAgICAgdWlTY2hlbWE9e3VpU2NoZW1hfVxuICAgICAgICAgICAgICAgIHBhcmVudEtleXM9e3BhcmVudEtleXN9XG4gICAgICAgICAgICAgICAgZ2xvYmFsT3B0aW9ucz17Z2xvYmFsT3B0aW9uc31cbiAgICAgICAgICAgICAgICBhanY9e2Fqdn0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmllbGRzL29iamVjdC50c3giLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2hvdWxkVXBkYXRlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbXBvcnQgeyBTY2hlbWFGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IHsgRGVmYXVsdFByb3BzLCBGeFVpU2NoZW1hIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IGhvY0ZhY3RvcnkgfSBmcm9tIFwiLi4vZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5RmllbGRQcm9wcyBleHRlbmRzIERlZmF1bHRQcm9wcyB7XG5cbn1cblxubGV0IGFycmF5RmllbGRTdHlsZSA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIlxufTtcblxuLyoqXG4gKiDmlbDnu4Tnu5PmnoTnmoTlrZfmrrXop6PmnpBcbiAqIOi/memHjOmcgOimgeaVsOe7hOWFg+e0oOeahOS4quaVsOadpeWBmuW+queOr1xuICog5b6q546v55Sf5oiQ5YWD57Sg5Liq5pWw55qEU2NoZW1hRm9ybVxuICovXG5leHBvcnQgY2xhc3MgQXJyYXlGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8QXJyYXlGaWVsZFByb3BzLCBhbnk+IHtcbiAgICAvKipcbiAgICAgKiDpgY3ljobmlbDmja7vvIznlJ/miJDlrZDooajljZVcbiAgICAgKiBAcGFyYW0gaWR4IOaVsOe7hOeahOe0ouW8lVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVuZGVySXRlbShpZHg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnRLZXlzLCBnbG9iYWxPcHRpb25zLCBhcnJheUxldmVsID0gW10sIGFqdiwgQXJyYXlJdGVtQ29tcG9uZW50IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdWlTY2hlbWEgPSB0aGlzLnByb3BzLnVpU2NoZW1hIGFzIEZ4VWlTY2hlbWE7XG5cbiAgICAgICAgLy8g5aaC5p6c5LiN6ZyA6KaBY2hpbGRyZW7vvIzliJnot7Plh7pcbiAgICAgICAgaWYgKHVpU2NoZW1hLmNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2NoZW1hRm9ybVxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIGFycmF5SW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XG4gICAgICAgICAgICAgICAgQXJyYXlJdGVtQ29tcG9uZW50PXtBcnJheUl0ZW1Db21wb25lbnR9XG4gICAgICAgICAgICAgICAgYXJyYXlMZXZlbD17YXJyYXlMZXZlbC5jb25jYXQoW2lkeF0pfVxuICAgICAgICAgICAgICAgIHNjaGVtYUlkPXt1aVNjaGVtYS5zY2hlbWFQYXRofVxuICAgICAgICAgICAgICAgIHVpU2NoZW1hcz17dWlTY2hlbWEuY2hpbGRyZW4gfHwgW1wiLVwiXX1cbiAgICAgICAgICAgICAgICBwYXJlbnRLZXlzPXtwYXJlbnRLZXlzfVxuICAgICAgICAgICAgICAgIGdsb2JhbE9wdGlvbnM9e2dsb2JhbE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgYWp2PXthanZ9IC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4suafk+mhtemdolxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgeyB1aVNjaGVtYSwgZm9ybUl0ZW1EYXRhIH0gPSB0aGlzLnByb3BzLCBjaGlsZCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgK2Zvcm1JdGVtRGF0YTsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZC5wdXNoKHRoaXMucmVuZGVySXRlbShpKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17YXJyYXlGaWVsZFN0eWxlfT57Y2hpbGQgfHwgbnVsbH08L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZpZWxkcy9hcnJheS50c3giLCJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgeyBBanYsIEVycm9yT2JqZWN0LCBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiYWp2XCI7XG5pbXBvcnQgeyBzY2hlbWFGaWVsZEZhY3RvcnksIHNjaGVtYUtleXNGYWN0b3J5IH0gZnJvbSBcImZ4LXNjaGVtYS1mb3JtLWNvcmVcIjtcblxuaW1wb3J0IHsgUkMsIERlZmF1bHRQcm9wcywgRnhVaVNjaGVtYSB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBob2NGYWN0b3J5LCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gXCIuLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyBUcmVlTWFwIH0gZnJvbSBcIi4vdHJlZVwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUFjdGlvbnMgfSBmcm9tIFwiLi4vcmVkdWNlcnMvc2NoZW1hLmZvcm1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWFGb3JtSG9jT3V0UHJvcHMge1xuICAgIHZhbGlkYXRlQWxsOiAoKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hRm9ybUhvY1NldHRpbmdzIHtcbiAgICByb290UmVkdWNlcktleT86IHN0cmluZ1tdO1xuICAgIHBhcmVudEtleXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWFGb3JtUHJvcHMgZXh0ZW5kcyBEZWZhdWx0UHJvcHMge1xuICAgIHJvb3Q/OiBUcmVlTWFwO1xuICAgIGRhdGE/OiBhbnk7XG4gICAgZXJyb3JzPzogYW55O1xuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xuICAgIGlzVmFsaWRhdGluZz86IGJvb2xlYW47XG59XG5cbmNvbnN0IGFjdGlvbnM6IFNjaGVtYUZvcm1BY3Rpb25zID0gcmVkdWNlckZhY3RvcnkuZ2V0KFwic2NoZW1hRm9ybVwiKS5hY3Rpb25zO1xuXG4vKipcbiAqIOaPkOS+m+mqjOivgeetieWKn+iDvVxuICogQHBhcmFtIENvbXBvbmVudCDpnIDopoHljIXoo4XnmoTnu4Tku7ZcbiAqIOWKoOWFpeWxnuaAp0ZpZWxkQ29tcG9uZW50ICAgc2NoZW1h5a+55bqU55qEZmllbGRjb21wb25lbnRcbiAqIOWKoOWFpeWxnuaAp1dpZGdldENvbXBvbmVudCAgc2NoZW1h5a+55bqU55qEd2lkZ2V0Y29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5nczogU2NoZW1hRm9ybUhvY1NldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gKENvbXBvbmVudDogYW55KTogUkM8U2NoZW1hRm9ybVByb3BzLCBhbnk+ID0+IHtcbiAgICAgICAgQChjb25uZWN0KChzdGF0ZTogSW1tdXRhYmxlLk1hcDxzdHJpbmcsIGFueT4pID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhS2V5cyA9IHNldHRpbmdzLnJvb3RSZWR1Y2VyS2V5LmNvbmNhdChzZXR0aW5ncy5wYXJlbnRLZXlzKS5jb25jYXQoW1wiZGF0YVwiXSksXG4gICAgICAgICAgICAgICAgbWV0YUtleXMgPSBzZXR0aW5ncy5yb290UmVkdWNlcktleS5jb25jYXQoc2V0dGluZ3MucGFyZW50S2V5cykuY29uY2F0KFtcIm1ldGFcIl0pLFxuICAgICAgICAgICAgICAgIHJvb3QgPSBzdGF0ZS5nZXRJbihtZXRhS2V5cyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZ2V0SW4oZGF0YUtleXMpLFxuICAgICAgICAgICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogcm9vdC52YWx1ZS5nZXQoXCJpc1ZhbGlkXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yczogcm9vdC52YWx1ZS5nZXQoXCJlcnJvcnNcIiksXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiByb290LnZhbHVlLmdldChcImlzTG9hZGluZ1wiKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkgYXMgYW55KVxuICAgICAgICBjbGFzcyBTY2hlbWFGb3JtQ29tcG9uZW50SG9jIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxTY2hlbWFGb3JtUHJvcHMsIGFueT4ge1xuICAgICAgICAgICAgcHJpdmF0ZSBfdmFsaWRhdGVBbGw7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzOiBTY2hlbWFGb3JtUHJvcHMpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZGF0ZUFsbCA9IHRoaXMudmFsaWRhdGVBbGwuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZUFsbCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IHRoaXMucHJvcHMucm9vdCxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUgPSB0aGlzLnByb3BzLmFqdi5nZXRTY2hlbWEodGhpcy5wcm9wcy5zY2hlbWFJZCksXG4gICAgICAgICAgICAgICAgICAgICR2YWxpZGF0ZUJlZm9yZURhdGEgPSBJbW11dGFibGUuZnJvbUpTKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcnR5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgJHZhbGlkYXRlQWZ0ZXJEYXRhID0gSW1tdXRhYmxlLmZyb21KUyh7IGlzTG9hZGluZzogZmFsc2UsIGRpcnR5OiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVEYXRhUGF0aCA9IHRoaXMubm9ybWFsaXplRGF0YVBhdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg5rKh5pyJ5om+5Yiw5a+55bqU55qEJHt0aGlzLnByb3BzLnNjaGVtYUlkfTtgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb290LmZvckVhY2goKG5vZGU6IFRyZWVNYXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUudmFsdWUubWVyZ2UoJHZhbGlkYXRlQmVmb3JlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkdmFsaWRhdGVCZWZvcmVEYXRhO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy51cGRhdGVJdGVtTWV0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlzOiBzZXR0aW5ncy5wYXJlbnRLZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByb290LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlKHRoaXMucHJvcHMuZGF0YS50b0pTKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvb3QudmFsdWUgPSByb290LnZhbHVlLm1lcmdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy51cGRhdGVJdGVtTWV0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlzOiBzZXR0aW5ncy5wYXJlbnRLZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByb290LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgKFZhbGlkYXRpb25FcnJvciBhcyBhbnkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLmVycm9ycy5mb3JFYWNoKChlbGVtZW50OiBFcnJvck9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFLZXlzID0gcm9vdC5nZXRDdXJyZW50S2V5cygpLmNvbmNhdChub3JtYWxpemVEYXRhUGF0aCh0aGlzLnByb3BzLnNjaGVtYUlkLCBlbGVtZW50LmRhdGFQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gcm9vdC5hZGRDaGlsZChkYXRhS2V5cywgSW1tdXRhYmxlLmZyb21KUyh7fSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUudmFsdWUgPSBjaGlsZE5vZGUudmFsdWUubWVyZ2UoJHZhbGlkYXRlQWZ0ZXJEYXRhKS5tZXJnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0OiBlbGVtZW50Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByb290LnZhbHVlID0gcm9vdC52YWx1ZS5tZXJnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5mb3JFYWNoKChub2RlOiBUcmVlTWFwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlLm1lcmdlKCR2YWxpZGF0ZUFmdGVyRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnVwZGF0ZUl0ZW1NZXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEtleXM6IHNldHRpbmdzLnBhcmVudEtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJvb3QudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGRhdGFQYXRo5Lit55qEa2V55qC85byP5YyW77ybXG4gICAgICAgICAgICAgKiBkYXRhUGF0aOS4reWPr+iDveacieaVsOe7hOeahOagvOW8j++8jOaJgOS7pemcgOimgeaKiuaVsOWtl+i9rOaNouaIkOaVsOWtl++8jOiAjOS4jeaYr+Wtl+espuaNolxuICAgICAgICAgICAgICog6YGN5Y6G5omA5pyJ55qEa2V577yM5Y+R546w5piv5pWw5a2X5a2X56ym77yM5YiZ5p+l5om+54i257qn55qEc2NoZW1h77yM5aaC5p6c54i257qn55qEdHlwZeaYr2FycmF577yM5YiZ5oqK5b2T5YmNa2V56L2s5o2i5oiQ5pWw5a2XXG4gICAgICAgICAgICAgKiBAcGFyYW0gc2NoZW1hSWQgc2NoZW1hSWRcbiAgICAgICAgICAgICAqIEBwYXJhbSBkYXRhUGF0aCDlvZPliY3nmoTmlbDmja7ot6/lvoTlrZfnrKbkuLJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJpdmF0ZSBub3JtYWxpemVEYXRhUGF0aChzY2hlbWFJZDogc3RyaW5nLCBkYXRhUGF0aDogc3RyaW5nKTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFLZXlzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gZGF0YVBhdGguc3Vic3RyaW5nKDEpLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICAgICAgICAgIGRhdGFLZXlzID0gZGF0YUtleXMubWFwKChrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcigra2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBkYXRhS2V5cy5zbGljZSgwLCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMudW5zaGlmdChzY2hlbWFJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFLZXlzRmFjdG9yeS5oYXMoa2V5cy5qb2luKFwiL1wiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2NoZW1hID0gc2NoZW1hRmllbGRGYWN0b3J5LmdldChzY2hlbWFLZXlzRmFjdG9yeS5nZXQoa2V5cy5qb2luKFwiL1wiKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICtrZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhS2V5cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkID0gZmFsc2UsIGlzVmFsaWRhdGluZyA9IGZhbHNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgdmFsaWRhdGVBbGw9e3RoaXMuX3ZhbGlkYXRlQWxsfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1ZhbGlkLnRvU3RyaW5nKCkgKyBpc1ZhbGlkYXRpbmcudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID8gbnVsbCA6IGVycm9ycyA/IGVycm9ycy5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtlLmdldChcImRhdGFQYXRoXCIpfT57ZS5nZXQoXCJtZXNzYWdlXCIpfTwvZGl2PjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTY2hlbWFGb3JtQ29tcG9uZW50SG9jIGFzIGFueTtcbiAgICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWJzL2RlYy50c3giLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJBanZcIixcImFtZFwiOlwiYWp2XCIsXCJjb21tb25qczJcIjpcImFqdlwiLFwiY29tbW9uanNcIjpcImFqdlwifVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==