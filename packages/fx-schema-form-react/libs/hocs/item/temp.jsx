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
import React from "react";
import { compose, shouldUpdate } from "recompose";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";
import { mapMetaStateToProps } from "../select";
var metaConnect = compose(shouldUpdate(function () { return false; }), connect(mapMetaStateToProps), shouldUpdate(function (curProps, nextProps) {
    return !isEqual(curProps.meta, nextProps.meta);
}));
export default function (hocFactory, settings) {
    if (settings === void 0) { settings = {
        tempField: "ui:temp",
        templates: [],
        tempHoc: function (TempComponent) { return TempComponent; }
    }; }
    return function (Component) {
        var TempComponentHoc = (function (_super) {
            __extends(TempComponentHoc, _super);
            function TempComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TempComponentHoc.prototype.render = function () {
                var _this = this;
                var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
                var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys;
                var TempComponents = this.getTemplates();
                var uiSchemaOptions = uiSchema.options || {};
                return TempComponents.reduce(function (prev, _a) {
                    var key = _a.key, Temp = _a.Temp;
                    var TempWithHoc = settings.tempHoc(Temp);
                    return <TempWithHoc globalOptions={globalOptions} tempKey={key} uiSchemaOptions={uiSchemaOptions} key={keys.join(".") + key} {..._this.props} children={prev}/>;
                }, <Component key={keys.join(".")} uiSchemaOptions={uiSchemaOptions} {...this.props}/>);
            };
            TempComponentHoc.prototype.getTemplates = function () {
                var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, currentTheme = _a.currentTheme;
                var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys, type = mergeSchema.type;
                var _c = (globalOptions || {}).field, field = _c === void 0 ? {} : _c;
                var typeDefaultOptions = field[type] || {};
                var template = uiSchema[settings.tempField] ||
                    typeDefaultOptions[settings.tempField] || "default", TempComponent = [];
                if (settings.templates && settings.templates.length > 0) {
                    template = settings.templates;
                }
                var getTemplate = function (tmp) {
                    switch (tmp.constructor) {
                        case String:
                            if (!currentTheme.tempFactory.has(tmp)) {
                                console.error("\u4E0D\u5B58\u5728" + tmp + "\u7684temp\uFF01");
                            }
                            else {
                                TempComponent.push({
                                    key: tmp,
                                    Temp: currentTheme.tempFactory.get(tmp)
                                });
                            }
                            break;
                        case Object:
                            TempComponent.push({
                                key: tmp.name,
                                Temp: tmp
                            });
                            break;
                        case Array:
                            [].concat(template).reverse().forEach(function (tml, idx) {
                                getTemplate(tml);
                            });
                            break;
                    }
                };
                getTemplate(template);
                return TempComponent;
            };
            return TempComponentHoc;
        }(React.PureComponent));
        return TempComponentHoc;
    };
};
//# sourceMappingURL=temp.jsx.map