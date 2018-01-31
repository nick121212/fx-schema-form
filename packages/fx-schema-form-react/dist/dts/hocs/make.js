"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var MakeComponentHoc = (function (_super) {
            tslib_1.__extends(MakeComponentHoc, _super);
            function MakeComponentHoc() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fieldKey = "hocs";
                return _this;
            }
            MakeComponentHoc.prototype.render = function () {
                var _a = this.props, uiSchema = _a.uiSchema, getOptions = _a.getOptions;
                var type = uiSchema.type;
                var fieldOptions = getOptions(this.props, "field", type);
                var hocs = settings.hocs ||
                    uiSchema[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];
                hocs.unshift("utils");
                var ComponentWithHocs = recompose_1.compose.apply(void 0, [].concat(hocs).map(function (hoc) {
                    if (typeof hoc !== "string") {
                        return hoc;
                    }
                    return hocFactory.get(hoc)();
                }))(Component);
                return react_1.default.createElement(ComponentWithHocs, tslib_1.__assign({}, this.props));
            };
            MakeComponentHoc = tslib_1.__decorate([
                recompose_1.shouldUpdate(function () { return false; })
            ], MakeComponentHoc);
            return MakeComponentHoc;
        }(react_1.PureComponent));
        return MakeComponentHoc;
    };
};
//# sourceMappingURL=make.js.map