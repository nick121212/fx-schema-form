var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
var NullWidget = (function (_super) {
    __extends(NullWidget, _super);
    function NullWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, arrayIndex = _a.arrayIndex, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, meta = _a.meta, validate = _a.validate, updateItemData = _a.updateItemData;
        var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? {} : _b, keys = mergeSchema.keys;
        var _c = uiSchema.readonly, readonly = _c === void 0 ? false : _c;
        return (<span>
                此值为Null值，这个有啥意思么
        </span>);
    };
    return NullWidget;
}(React.Component));
export { NullWidget };
//# sourceMappingURL=null.jsx.map