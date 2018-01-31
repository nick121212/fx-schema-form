"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
var reducer_1 = require("../reducer");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    var hoc = recompose_1.compose(recompose_1.withHandlers({
        addItem: function (propsCur) {
            return function (props, data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
                        case 5: return [2];
                    }
                });
            }); };
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
                var ArrayComponent = props.ArrayComponent, ArrayItemComponent = props.ArrayItemComponent, extraProps = tslib_1.__rest(props, ["ArrayComponent", "ArrayItemComponent"]), uiSchema = props.uiSchema;
                if (uiSchema.type === "array") {
                    return ArrayComponent ? react_1.default.createElement(ArrayComponent, tslib_1.__assign({}, extraProps)) : null;
                }
                return ArrayItemComponent ? react_1.default.createElement(ArrayItemComponent, tslib_1.__assign({}, extraProps)) : null;
            };
        }
    }));
    var arrayHoc = function (Component) {
        var ArrayComponentHoc = (function (_super) {
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
            ArrayComponentHoc = tslib_1.__decorate([
                hoc,
                tslib_1.__metadata("design:paramtypes", [Object, Object])
            ], ArrayComponentHoc);
            return ArrayComponentHoc;
        }(react_1.PureComponent));
        return ArrayComponentHoc;
    };
    var pureHoc = function (Component) {
        var ArrayPureComponentHoc = (function (_super) {
            tslib_1.__extends(ArrayPureComponentHoc, _super);
            function ArrayPureComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArrayPureComponentHoc.prototype.render = function () {
                return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
            };
            ArrayPureComponentHoc = tslib_1.__decorate([
                hoc
            ], ArrayPureComponentHoc);
            return ArrayPureComponentHoc;
        }(react_1.default.PureComponent));
        return ArrayPureComponentHoc;
    };
    return recompose_1.branch(function (props) {
        var uiSchema = props.uiSchema;
        return uiSchema.type === "array";
    }, arrayHoc, pureHoc);
};
//# sourceMappingURL=array.js.map