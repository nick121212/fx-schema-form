import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { compose, shouldUpdate } from "recompose";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        let MakeComponentHoc = class MakeComponentHoc extends PureComponent {
            constructor() {
                super(...arguments);
                this.fieldKey = "hocs";
            }
            render() {
                const { uiSchema, getOptions } = this.props;
                const { type } = uiSchema;
                const fieldOptions = getOptions(this.props, "field", type);
                const hocs = settings.hocs ||
                    (uiSchema ? uiSchema.hocs : null) || ["theme", "field", "validate", "array", "temp"];
                hocs.unshift("utils");
                let ComponentWithHocs = compose(...[...hocs].map(hoc => {
                    if (typeof hoc !== "string") {
                        return hoc;
                    }
                    return hocFactory.get(hoc)();
                }))(Component);
                return React.createElement(ComponentWithHocs, Object.assign({}, this.props));
            }
        };
        MakeComponentHoc = tslib_1.__decorate([
            shouldUpdate(() => false)
        ], MakeComponentHoc);
        return MakeComponentHoc;
    };
};
//# sourceMappingURL=make.js.map