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
import { connect } from "react-redux";
import { compose } from "recompose";
import { mapFormItemDataProps } from "../hocs/select";
var NormalField = (function (_super) {
    __extends(NormalField, _super);
    function NormalField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, getFieldOptions = _a.getFieldOptions;
        var fieldOptions = getFieldOptions("normal");
        var WidgetComponentWithHoc = compose.apply(void 0, [connect(mapFormItemDataProps)].concat((fieldOptions.hocs || [])))(WidgetComponent);
        return (<WidgetComponentWithHoc key={mergeSchema.keys.join(".")} {...this.props}/>);
    };
    return NormalField;
}(React.PureComponent));
export { NormalField };
//# sourceMappingURL=normal.jsx.map