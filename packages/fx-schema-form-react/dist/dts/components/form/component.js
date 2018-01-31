"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var container_1 = require("./container");
var index_1 = require("../formitem/index");
var SchemaForm = (function (_super) {
    tslib_1.__extends(SchemaForm, _super);
    function SchemaForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaForm.prototype.render = function () {
        var _a = this.props, schemaId = _a.schemaId, mergeSchemaList = _a.mergeSchemaList, arrayLevel = _a.arrayLevel, RootComponent = _a.RootComponent, children = _a.children, extraProps = tslib_1.__rest(_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
        var formItemList = mergeSchemaList.map(function (uiScehma, idx) {
            var arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
            return react_1.default.createElement(index_1.SchemaFormItem, tslib_1.__assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
        });
        if (RootComponent) {
            return react_1.default.createElement(RootComponent, null,
                formItemList,
                children);
        }
        return (react_1.default.createElement("div", null,
            formItemList,
            children));
    };
    SchemaForm = tslib_1.__decorate([
        container_1.hoc
    ], SchemaForm);
    return SchemaForm;
}(react_1.PureComponent));
exports.SchemaForm = SchemaForm;
//# sourceMappingURL=component.js.map