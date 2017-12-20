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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose, shouldUpdate } from "recompose";
export default function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var MakeComponentHoc = (function (_super) {
            __extends(MakeComponentHoc, _super);
            function MakeComponentHoc() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fieldKey = "ui:item.hoc";
                return _this;
            }
            MakeComponentHoc.prototype.render = function () {
                var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
                var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys, type = mergeSchema.type;
                var fieldOptions = this.props.getFieldOptions(type);
                var typeDefaultOptions = globalOptions[type] || {};
                var hocs = settings.hocs || uiSchema[this.fieldKey] ||
                    fieldOptions[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];
                var ComponentWithHocs = compose.apply(void 0, ["utils"].concat(hocs).map(function (hoc) {
                    if (typeof hoc !== "string") {
                        return hoc;
                    }
                    return hocFactory.get(hoc)();
                }))(Component);
                return <ComponentWithHocs {...this.props}/>;
            };
            MakeComponentHoc = __decorate([
                shouldUpdate(function () { return false; })
            ], MakeComponentHoc);
            return MakeComponentHoc;
        }(React.PureComponent));
        return MakeComponentHoc;
    };
};
//# sourceMappingURL=make.jsx.map