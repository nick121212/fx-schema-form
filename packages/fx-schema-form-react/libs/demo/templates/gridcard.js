var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import { Card, Row, Col } from "antd";
export class AntdCardTemp extends React.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, ItemButtons, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { dirty, isValid, errorText = "" } = meta;
        let { showButtons } = tempOptions, extra = __rest(tempOptions, ["showButtons"]);
        return (React.createElement(Card, Object.assign({}, extra, { extra: showButtons ? React.createElement(Col, null, ItemButtons ? React.createElement(ItemButtons, null) : null) : null }),
            React.createElement(Row, { type: "flex" }, children)));
    }
}
//# sourceMappingURL=gridcard.js.map