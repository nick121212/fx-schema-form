"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {
        tempField: "temps",
        templates: []
    }; }
    return function (Component) {
        var TempComponentHoc = (function (_super) {
            tslib_1.__extends(TempComponentHoc, _super);
            function TempComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TempComponentHoc.prototype.render = function () {
                var _this = this;
                var _a = this.props, uiSchema = _a.uiSchema, getOptions = _a.getOptions;
                var _b = uiSchema, uiSchemaOptions = _b.options, keys = _b.keys;
                var TempComponents = this.getTemplates();
                return TempComponents.reduce(function (prev, _a) {
                    var key = _a.key, Temp = _a.Temp;
                    var tempOptions = getOptions(_this.props, "temp", key), TempWithHoc = recompose_1.compose.apply(void 0, (tempOptions.tempHocs || []))(Temp);
                    return react_1.default.createElement(TempWithHoc, { key: keys.join(".") + key, tempKey: key, ajv: _this.props.ajv, uiSchema: _this.props.uiSchema, schemaId: _this.props.schemaId, arrayLevel: _this.props.arrayLevel, arrayIndex: _this.props.arrayIndex, globalOptions: _this.props.globalOptions, ArrayComponent: _this.props.ArrayComponent, ArrayItemComponent: _this.props.ArrayItemComponent, initArrayComponent: _this.props.initArrayComponent, parentKeys: _this.props.parentKeys, getTitle: _this.props.getTitle, getOptions: _this.props.getOptions, getPathKeys: _this.props.getPathKeys, children: prev });
                }, react_1.default.createElement(Component, tslib_1.__assign({ key: keys.join(".") }, this.props)));
            };
            TempComponentHoc.prototype.getTemplates = function () {
                var _a = this.props, uiSchema = _a.uiSchema, currentTheme = _a.currentTheme, getOptions = _a.getOptions, _b = uiSchema, keys = _b.keys, type = _b.type, typeDefaultOptions = getOptions(this.props, "field", type), TempComponent = [];
                var template;
                if (settings.templates && settings.templates.length > 0) {
                    template = settings.templates;
                }
                else {
                    template = typeDefaultOptions[settings.tempField] || "default";
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
        }(react_1.PureComponent));
        return TempComponentHoc;
    };
};
//# sourceMappingURL=temp.js.map