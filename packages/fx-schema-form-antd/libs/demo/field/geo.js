import * as tslib_1 from "tslib";
import React from "react";
import { Card } from "antd";
import { SchemaForm } from "../../index";
var GeoPositionField = /** @class */ (function (_super) {
    tslib_1.__extends(GeoPositionField, _super);
    function GeoPositionField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeoPositionField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey;
        var uiSchema = mergeSchema.uiSchema;
        // return (
        //     <span>
        //         hello geo
        //     </span>
        // );
        return (React.createElement(Card, { title: "经纬度" },
            React.createElement(SchemaForm, { schemaFormOptions: schemaFormOptions, schemaKey: schemaKey, schema: mergeSchema, parentKeys: mergeSchema.keys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions })));
    };
    return GeoPositionField;
}(React.PureComponent));
export { GeoPositionField };
//# sourceMappingURL=geo.js.map