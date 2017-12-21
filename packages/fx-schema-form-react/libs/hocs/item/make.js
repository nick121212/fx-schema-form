var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose, shouldUpdate } from "recompose";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        let MakeComponentHoc = class MakeComponentHoc extends React.PureComponent {
            constructor() {
                super(...arguments);
                this.fieldKey = "ui:item.hoc";
            }
            render() {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema = { options: {} }, keys, type } = mergeSchema;
                const fieldOptions = this.props.getFieldOptions(type);
                const typeDefaultOptions = globalOptions[type] || {};
                const hocs = settings.hocs || uiSchema[this.fieldKey] ||
                    fieldOptions[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];
                let ComponentWithHocs = compose(...["utils"].concat(hocs).map(hoc => {
                    if (typeof hoc !== "string") {
                        return hoc;
                    }
                    return hocFactory.get(hoc)();
                }))(Component);
                return React.createElement(ComponentWithHocs, Object.assign({}, this.props));
            }
        };
        MakeComponentHoc = __decorate([
            shouldUpdate(() => false)
        ], MakeComponentHoc);
        return MakeComponentHoc;
    };
};
//# sourceMappingURL=make.js.map