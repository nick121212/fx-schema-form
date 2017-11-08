"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
/**
 * block组建
 */
var SchemaFormBlock = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaFormBlock, _super);
    function SchemaFormBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaFormBlock.prototype.render = function () {
        return (react_1.default.createElement("div", null, this.props.children));
    };
    return SchemaFormBlock;
}(react_1.default.Component));
exports.SchemaFormBlock = SchemaFormBlock;
//# sourceMappingURL=index.js.map