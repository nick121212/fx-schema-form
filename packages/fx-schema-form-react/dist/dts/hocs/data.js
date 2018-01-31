"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var immutable_1 = require("immutable");
var fxSelectorCreator = reselect_1.createSelectorCreator(reselect_1.defaultMemoize, immutable_1.is);
var maps = {};
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {
        data: true,
        rootReducerKey: ["schemaForm"]
    }; }
    var getItemDataHoc = function (parentKeys, keys) {
        var getFormItemData = function (state) {
            var dataKeys = settings.rootReducerKey.concat(parentKeys.concat(["data"], keys));
            if (settings.data && state.hasIn(dataKeys)) {
                var formItemData = state.getIn(dataKeys);
                if (formItemData !== undefined) {
                    if (!settings.dataLength) {
                        return formItemData;
                    }
                    else {
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
        var DataComponentHoc = (function (_super) {
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
            DataComponentHoc = tslib_1.__decorate([
                recompose_1.shouldUpdate(function () { return false; })
            ], DataComponentHoc);
            return DataComponentHoc;
        }(react_1.PureComponent));
        return DataComponentHoc;
    };
};
//# sourceMappingURL=data.js.map