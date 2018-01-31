"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
var reducer_1 = require("../reducer");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var ArrayComponentHoc = (function (_super) {
            tslib_1.__extends(ArrayComponentHoc, _super);
            function ArrayComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArrayComponentHoc.prototype.render = function () {
                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
            };
            ArrayComponentHoc = tslib_1.__decorate([
                recompose_1.compose(recompose_1.withHandlers({
                    validate: function (propsCur) {
                        return function (props, data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
                                        result.errorText = err_1.errors ?
                                            props.ajv.errorsText(err_1.errors, { dataVar: props.getTitle(props).toString() })
                                            : err_1.message;
                                        return [3, 5];
                                    case 4:
                                        clearTimeout(timeId);
                                        return [7];
                                    case 5: return [2, result];
                                }
                            });
                        }); };
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
                        return function (props, data, meta) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
                                        _d = (_e.sent());
                                        _e.label = 2;
                                    case 2:
                                        _b.apply(_a, [(_c.data = _d,
                                                _c)]);
                                        return [2];
                                }
                            });
                        }); };
                    }
                }))
            ], ArrayComponentHoc);
            return ArrayComponentHoc;
        }(react_1.PureComponent));
        return ArrayComponentHoc;
    };
};
//# sourceMappingURL=validate.js.map