import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { hoc } from "./container";
import { SchemaFormItem } from "../formitem/index";
let SchemaForm = class SchemaForm extends PureComponent {
    render() {
        const _a = this.props, { schemaId, mergeSchemaList, arrayLevel, RootComponent, children } = _a, extraProps = tslib_1.__rest(_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
        const formItemList = mergeSchemaList ? mergeSchemaList.map((uiScehma, idx) => {
            let arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
            return React.createElement(SchemaFormItem, Object.assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
        }) : [];
        if (RootComponent) {
            return React.createElement(RootComponent, null,
                formItemList,
                children);
        }
        return (React.createElement("div", null,
            formItemList,
            children));
    }
};
SchemaForm = tslib_1.__decorate([
    hoc
], SchemaForm);
export { SchemaForm };
//# sourceMappingURL=component.js.map