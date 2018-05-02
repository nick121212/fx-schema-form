var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from "react";
import { compose } from "recompose";
import { schemaFormTypes } from "../models";
export const name = "normal";
export class NormalField extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const _a = this.props, { WidgetComponent, FieldComponent, formItemMeta, formItemData } = _a, extraProps = __rest(_a, ["WidgetComponent", "FieldComponent", "formItemMeta", "formItemData"]), fieldOptions = extraProps.getOptions(this.props, schemaFormTypes.field, name), { keys } = extraProps.uiSchema;
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
export default {
    [name]: NormalField,
    default: NormalField
};
//# sourceMappingURL=normal.js.map