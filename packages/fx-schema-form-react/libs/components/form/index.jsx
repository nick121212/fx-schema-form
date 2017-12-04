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
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { SchemaFormBlock } from "../block";
var SchemaFormComponent = (function (_super) {
    __extends(SchemaFormComponent, _super);
    function SchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaFormComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, mergeSchemaList = _a.mergeSchemaList, schemaKey = _a.schemaKey, ItemButtons = _a.ItemButtons, arrayIndex = _a.arrayIndex, arrayLevel = _a.arrayLevel, globalOptions = _a.globalOptions, RootComponent = _a.RootComponent, schemaFormOptions = _a.schemaFormOptions, reducerKeys = _a.reducerKeys, formDefaultData = _a.formDefaultData, getCurrentState = _a.getCurrentState, actions = _a.actions;
        var RootComponentHock = RootComponent;
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }
        console.log("form component render===========");
        return (<RootComponentHock>
                {mergeSchemaList.map(function (mergeSchema, idx) {
            mergeSchema.keys = _this.mergeKeys(mergeSchema);
            return <SchemaFormItem key={schemaKey + "-" + idx.toString() + "}"} getCurrentState={getCurrentState} schemaKey={schemaKey} arrayIndex={arrayIndex} reducerKeys={reducerKeys} arrayLevel={arrayLevel} ItemButtons={ItemButtons} actions={actions} formDefaultData={formDefaultData} mergeSchemaList={mergeSchemaList} mergeSchema={mergeSchema} schemaFormOptions={schemaFormOptions} globalOptions={globalOptions}>
                        </SchemaFormItem>;
        })}
                {children || null}
            </RootComponentHock>);
    };
    SchemaFormComponent.prototype.mergeKeys = function (mergeSchema) {
        var _a = this.props.arrayLevel, arrayLevel = _a === void 0 ? [] : _a;
        var arrayLevelCopy = arrayLevel.concat([]);
        console.log("-----", mergeSchema.keys);
        if (mergeSchema.keys.constructor === Function) {
            console.log(mergeSchema.keys());
        }
        mergeSchema.originKeys = mergeSchema.keys.concat([]);
        return mergeSchema.keys.map(function (key) {
            if (key === "-") {
                return arrayLevelCopy.shift();
            }
            return key;
        });
    };
    return SchemaFormComponent;
}(React.PureComponent));
export var SchemaForm = hoc(SchemaFormComponent);
//# sourceMappingURL=index.jsx.map