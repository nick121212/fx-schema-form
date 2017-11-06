import * as tslib_1 from "tslib";
import React from "react";
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { SchemaFormBlock } from "../block";
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
        var _a = this.props, children = _a.children, mergeSchemaList = _a.mergeSchemaList, schemaKey = _a.schemaKey, arrayItems = _a.arrayItems, arrayIndex = _a.arrayIndex, globalOptions = _a.globalOptions, RootComponent = _a.RootComponent, schemaFormOptions = _a.schemaFormOptions, formDefaultData = _a.formDefaultData, getCurrentState = _a.getCurrentState;
        var RootComponentHock = RootComponent;
        // 计算顶部容器，如果有RootComponent，则使用，否则使用默认的容器组件
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }
        console.log("form render----------------");
        return (React.createElement(RootComponentHock, null,
            mergeSchemaList.map(function (mergeSchema, idx) {
                var find = false;
                if (typeof arrayIndex === "number") {
                    mergeSchema.keys = mergeSchema.keys.map(function (key) {
                        if (find) {
                            return key;
                        }
                        if (key === "-") {
                            return arrayIndex;
                        }
                        return key;
                    });
                }
                return React.createElement(SchemaFormItem, { key: schemaKey + "-" + idx.toString() + "}", getCurrentState: getCurrentState, schemaKey: schemaKey, arrayIndex: arrayIndex, arrayItems: arrayItems, formDefaultData: formDefaultData, mergeSchemaList: mergeSchemaList, mergeSchema: mergeSchema, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions });
            }),
            children));
    };
    return SchemaFormComponent;
}(React.PureComponent));
export var SchemaForm = hoc(SchemaFormComponent);
//# sourceMappingURL=index.js.map