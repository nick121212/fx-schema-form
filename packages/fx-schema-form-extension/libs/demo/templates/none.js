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
export class NoneTemp extends PureComponent {
    render() {
        const { children, tempKey, getOptions } = this.props;
        const _a = getOptions(this.props, "temp", tempKey), { className } = _a, tempOptions = __rest(_a, ["className"]);
        return React.createElement("div", null, children);
    }
}
//# sourceMappingURL=none.js.map