"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var index_1 = require("../../index");
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
        return (react_1.default.createElement(antd_1.Card, { title: "经纬度" },
            react_1.default.createElement(index_1.SchemaForm, { schemaFormOptions: schemaFormOptions, schemaKey: schemaKey, schema: mergeSchema, parentKeys: mergeSchema.keys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions })));
    };
    return GeoPositionField;
}(react_1.default.PureComponent));
exports.GeoPositionField = GeoPositionField;
//# sourceMappingURL=geo.js.map