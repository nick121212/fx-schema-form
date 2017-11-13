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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";
var metaConnect = compose(connect(mapMetaStateToProps), onlyUpdateForKeys(["meta"]), shouldUpdate(function (curProps, nextProps) {
    return !isEqual(curProps.meta, nextProps.meta);
}));
export var TempHoc = function (hocFactory, Component) {
    var TempComponentHoc = (function (_super) {
        __extends(TempComponentHoc, _super);
        function TempComponentHoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tempField = "ui:temp";
            return _this;
        }
        TempComponentHoc.prototype.render = function () {
            var _this = this;
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys;
            var TempComponents = this.getTemplates();
            var uiSchemaOptions = uiSchema.options || {};
            var ComponentWithHoc = compose(connect(mapFormItemDataProps))(Component);
            var index = 0;
            return TempComponents.reduce(function (prev, _a) {
                var key = _a.key, Temp = _a.Temp;
                var TempWithHoc = metaConnect(Temp);
                return React.createElement(TempWithHoc, __assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key + index++ }, _this.props, { children: prev }));
            }, React.createElement(ComponentWithHoc, __assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
        };
        TempComponentHoc.prototype.getTemplates = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, currentTheme = _a.currentTheme;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys, type = mergeSchema.type;
            var typeDefaultOptions = globalOptions[type] || {};
            var template = uiSchema[this.tempField] ||
                typeDefaultOptions[this.tempField] ||
                globalOptions[this.tempField] || "default", TempComponent = [];
            if (typeof template === "string") {
                TempComponent.push({
                    key: template,
                    Temp: (currentTheme.tempFactory.get(template))
                });
            }
            else {
                [].concat(template).reverse().forEach(function (tml, idx) {
                    if (!currentTheme.tempFactory.has(tml || "default")) {
                        console.error("\u4E0D\u5B58\u5728" + tml + "\u7684temp\uFF01");
                    }
                    else {
                        TempComponent.push({
                            key: tml,
                            Temp: currentTheme.tempFactory.get(tml || "default")
                        });
                    }
                });
            }
            return TempComponent;
        };
        TempComponentHoc = __decorate([
            compose(shouldUpdate(function () { return false; }))
        ], TempComponentHoc);
        return TempComponentHoc;
    }(React.PureComponent));
    return TempComponentHoc;
};
//# sourceMappingURL=temp.js.map