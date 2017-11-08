"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var container_1 = require("./container");
var index_1 = require("../../index");
var block_1 = require("../block");
/**
 * SchemaForm组件
 * 通过schema和uiSchea生成表单元素
 */
var SchemaFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaFormComponent, _super);
    function SchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * render
     */
    SchemaFormComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, mergeSchemaList = _a.mergeSchemaList, schemaKey = _a.schemaKey, ItemButtons = _a.ItemButtons, arrayIndex = _a.arrayIndex, arrayLevel = _a.arrayLevel, globalOptions = _a.globalOptions, RootComponent = _a.RootComponent, schemaFormOptions = _a.schemaFormOptions, formDefaultData = _a.formDefaultData, getCurrentState = _a.getCurrentState;
        var RootComponentHock = RootComponent;
        // 计算顶部容器，如果有RootComponent，则使用，否则使用默认的容器组件
        if (!RootComponentHock) {
            RootComponentHock = block_1.SchemaFormBlock;
        }
        return (react_1.default.createElement(RootComponentHock, null,
            mergeSchemaList.map(function (mergeSchema, idx) {
                mergeSchema.keys = _this.mergeKeys(mergeSchema);
                return react_1.default.createElement(index_1.SchemaFormItem, { key: schemaKey + "-" + idx.toString() + "}", getCurrentState: getCurrentState, schemaKey: schemaKey, arrayIndex: arrayIndex, arrayLevel: arrayLevel, ItemButtons: ItemButtons, formDefaultData: formDefaultData, mergeSchemaList: mergeSchemaList, mergeSchema: mergeSchema, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions });
            }),
            children));
    };
    /**
     * 合并keys，把-替换成数组索引
     */
    SchemaFormComponent.prototype.mergeKeys = function (mergeSchema) {
        var _a = this.props.arrayLevel, arrayLevel = _a === void 0 ? [] : _a;
        var arrayLevelCopy = arrayLevel.concat([]);
        mergeSchema.originKeys = mergeSchema.keys.concat([]);
        return mergeSchema.keys.map(function (key) {
            if (key === "-") {
                return arrayLevelCopy.shift();
            }
            return key;
        });
    };
    return SchemaFormComponent;
}(react_1.default.PureComponent));
exports.SchemaForm = container_1.hoc(SchemaFormComponent);
//# sourceMappingURL=index.js.map