import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { compose } from "recompose";
export class NormalField extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const _a = this.props, { WidgetComponent, FieldComponent, formItemMeta, formItemData } = _a, extraProps = tslib_1.__rest(_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]);
        const fieldOptions = extraProps.getOptions(this.props, "field", "normal");
        const { keys } = extraProps.uiSchema;
        let WidgetComponentWithHoc = WidgetComponent;
        if (!WidgetComponent || !keys) {
            return null;
        }
        if (fieldOptions.widgetHocs && fieldOptions.widgetHocs.length) {
            WidgetComponentWithHoc = compose(...fieldOptions.widgetHocs)(WidgetComponent);
        }
        return (React.createElement(WidgetComponentWithHoc, Object.assign({ key: keys.join(".") }, extraProps)));
    }
}
//# sourceMappingURL=normal.js.map