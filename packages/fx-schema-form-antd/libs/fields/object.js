import * as tslib_1 from "tslib";
import React from "react";
import { SchemaForm } from "../index";
var ObjectField = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectField, _super);
    function ObjectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, getCurrentState = _a.getCurrentState, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey;
        var uiSchema = mergeSchema.uiSchema;
        return (React.createElement(SchemaForm, { schemaFormOptions: schemaFormOptions, getCurrentState: getCurrentState, schemaKey: schemaKey, schema: mergeSchema, parentKeys: mergeSchema.keys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions }));
    };
    return ObjectField;
}(React.Component));
export { ObjectField };
//# sourceMappingURL=object.js.map