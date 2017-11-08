"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var index_1 = require("../../index");
var GridColField = /** @class */ (function (_super) {
    tslib_1.__extends(GridColField, _super);
    function GridColField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridColField.prototype.getColProps = function () {
        var formItemData = this.props.formItemData;
        var span = formItemData.span, push = formItemData.push, offset = formItemData.offset;
        var props = {};
        if (push) {
            props.push = push;
        }
        if (offset) {
            props.offset = offset;
        }
        props.span = span || 24;
        return props;
    };
    GridColField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, getCurrentState = _a.getCurrentState, formItemData = _a.formItemData, ItemButtons = _a.ItemButtons, getHocOptions = _a.getHocOptions, uiSchemaOptions = _a.uiSchemaOptions, arrayIndex = _a.arrayIndex, arrayLevel = _a.arrayLevel, WidgetComponent = _a.WidgetComponent, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey;
        var uiSchema = mergeSchema.uiSchema;
        var _b = (uiSchemaOptions || {}).gridcol, gridcol = _b === void 0 ? { image: false } : _b;
        var _c = (globalOptions || {}).gridcol, gridDefault = _c === void 0 ? {} : _c;
        return (react_1.default.createElement(antd_1.Col, tslib_1.__assign({}, this.getColProps()), gridcol.image ?
            react_1.default.createElement("img", { style: { width: "100%" }, src: formItemData.image }) :
            react_1.default.createElement(index_1.SchemaForm, { arrayIndex: arrayIndex, schemaFormOptions: schemaFormOptions, ItemButtons: ItemButtons, getCurrentState: getCurrentState, schemaKey: schemaKey, arrayLevel: arrayLevel, schema: mergeSchema, parentKeys: mergeSchema.originKeys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions })));
    };
    return GridColField;
}(react_1.default.PureComponent));
exports.GridColField = GridColField;
//# sourceMappingURL=grid.js.map