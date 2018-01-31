"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var fx_schema_form_core_1 = require("fx-schema-form-core");
var totalTime = 0, timeid;
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var MergeComponentHoc = (function (_super) {
            tslib_1.__extends(MergeComponentHoc, _super);
            function MergeComponentHoc(props) {
                var _this = _super.call(this, props) || this;
                var uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : null;
                if (uiSchema) {
                    uiSchema.keys = uiSchema.originKeys;
                }
                var merge = new fx_schema_form_core_1.MergeLib(props.ajv, props.schemaId, uiSchema, props.uiSchemas);
                _this._mergeUiSchemaList = merge.mergeUiSchemaList.map(function (v) {
                    return _this.mergeKeys(v);
                });
                return _this;
            }
            MergeComponentHoc.prototype.mergeKeys = function (mergeSchema) {
                var _a = this.props.arrayLevel, arrayLevel = _a === void 0 ? [] : _a;
                var arrayLevelCopy = arrayLevel.concat([]);
                mergeSchema = Object.assign({}, mergeSchema);
                mergeSchema.originKeys = [].concat(mergeSchema.keys);
                mergeSchema.keys = mergeSchema.keys.reverse().map(function (key) {
                    if (key === "-") {
                        return arrayLevelCopy.pop();
                    }
                    return key;
                });
                mergeSchema.keys.reverse();
                return mergeSchema;
            };
            MergeComponentHoc.prototype.render = function () {
                var _a = this.props, uiSchemas = _a.uiSchemas, uiSchema = _a.uiSchema, extraProps = tslib_1.__rest(_a, ["uiSchemas", "uiSchema"]);
                return (react_1.default.createElement(Component, tslib_1.__assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps)));
            };
            return MergeComponentHoc;
        }(react_1.PureComponent));
        return MergeComponentHoc;
    };
};
//# sourceMappingURL=merge.js.map