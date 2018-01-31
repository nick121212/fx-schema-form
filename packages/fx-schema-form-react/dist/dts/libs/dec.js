"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var immutable_1 = require("immutable");
var ajv_1 = require("ajv");
var fx_schema_form_core_1 = require("fx-schema-form-core");
var factory_1 = require("../factory");
var actions = factory_1.reducerFactory.get("schemaForm").actions;
exports.default = function (settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var SchemaFormComponentHoc = (function (_super) {
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
                            case 5: return [2];
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
                var _a = this.props, errors = _a.errors, _b = _a.isValid, isValid = _b === void 0 ? false : _b, _c = _a.isValidating, isValidating = _c === void 0 ? false : _c;
                return (react_1.default.createElement("div", null,
                    react_1.default.createElement(Component, tslib_1.__assign({ validateAll: this._validateAll }, this.props)),
                    isValid.toString() + isValidating.toString(),
                    isValid ? null : errors ? errors.map(function (e) {
                        return react_1.default.createElement("div", { key: e.get("dataPath") }, e.get("message"));
                    }) : null));
            };
            SchemaFormComponentHoc = tslib_1.__decorate([
                react_redux_1.connect(function (state) {
                    var dataKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["data"]), metaKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["meta"]), root = state.getIn(metaKeys);
                    return {
                        data: state.getIn(dataKeys),
                        root: root,
                        isValid: root.value.get("isValid"),
                        errors: root.value.get("errors"),
                        isValidating: root.value.get("isLoading")
                    };
                }),
                tslib_1.__metadata("design:paramtypes", [Object])
            ], SchemaFormComponentHoc);
            return SchemaFormComponentHoc;
        }(react_1.PureComponent));
        return SchemaFormComponentHoc;
    };
};
//# sourceMappingURL=dec.js.map