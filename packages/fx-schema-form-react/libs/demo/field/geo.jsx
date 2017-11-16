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
import { Card } from "antd";
import { SchemaForm } from "../../index";
var GeoPositionField = (function (_super) {
    __extends(GeoPositionField, _super);
    function GeoPositionField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeoPositionField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey;
        var uiSchema = mergeSchema.uiSchema;
        return (<Card title="经纬度">
                <SchemaForm schemaFormOptions={schemaFormOptions} schemaKey={schemaKey} schema={mergeSchema} parentKeys={mergeSchema.keys} RootComponent={uiSchema.root} uiSchema={uiSchema.items || ["*"]} globalOptions={globalOptions}>
                </SchemaForm>
            </Card>);
    };
    return GeoPositionField;
}(React.PureComponent));
export { GeoPositionField };
//# sourceMappingURL=geo.jsx.map