import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { compose } from "redux";
import { hoc } from "./container";
let SchemaFormItem = class SchemaFormItem extends PureComponent {
    render() {
        const _a = this.props, { FieldComponent, uiSchema } = _a, extraProps = tslib_1.__rest(_a, ["FieldComponent", "uiSchema"]);
        const options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
        let FieldComponentWithHoc = FieldComponent;
        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }
        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = compose(...(options.fieldHocs || []))(FieldComponent);
        }
        return React.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
    }
};
SchemaFormItem = tslib_1.__decorate([
    hoc
], SchemaFormItem);
export { SchemaFormItem };
//# sourceMappingURL=component.js.map