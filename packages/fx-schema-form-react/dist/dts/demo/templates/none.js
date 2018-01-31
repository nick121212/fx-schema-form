"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var NoneTemp = (function (_super) {
    tslib_1.__extends(NoneTemp, _super);
    function NoneTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoneTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, tempKey = _a.tempKey, getOptions = _a.getOptions;
        var _b = getOptions(this.props, "temp", tempKey), className = _b.className, tempOptions = tslib_1.__rest(_b, ["className"]);
        return react_1.default.createElement("div", null, children);
    };
    return NoneTemp;
}(react_1.PureComponent));
exports.NoneTemp = NoneTemp;
//# sourceMappingURL=none.js.map