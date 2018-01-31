"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var resolve_pathname_1 = require("resolve-pathname");
var immutable_1 = require("immutable");
exports.default = function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var ComponentHoc = (function (_super) {
            tslib_1.__extends(ComponentHoc, _super);
            function ComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ComponentHoc.prototype.render = function () {
                return react_1.default.createElement(Component, tslib_1.__assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions }, this.props));
            };
            ComponentHoc.prototype.getOptions = function (props, category, field) {
                var uiSchema = props.uiSchema, globalOptions = props.globalOptions;
                var options = uiSchema.options;
                var optionsArray = [];
                if (globalOptions && globalOptions.hasIn([category, "default"])) {
                    optionsArray.push(globalOptions.getIn([category, "default"]));
                }
                if (globalOptions && globalOptions.hasIn([category, field])) {
                    optionsArray.push(globalOptions.getIn([category, field]));
                }
                if (options && options.hasIn([category, field])) {
                    optionsArray.push(options.getIn([category, field]));
                }
                var opts = optionsArray.reverse().reduce(function (prev, next) {
                    if (next) {
                        return next.merge(prev);
                    }
                    return prev;
                }, immutable_1.default.fromJS({})).toJS();
                return opts;
            };
            ComponentHoc.prototype.getTitle = function (props) {
                var uiSchema = props.uiSchema;
                var _a = uiSchema, title = _a.title, keys = _a.keys;
                if (title !== undefined) {
                    return title;
                }
                return [].concat(keys).pop().toString();
            };
            ComponentHoc.prototype.getPathKeys = function (keys, path) {
                var keysCopy = [""].concat(keys.concat([""]));
                var keysResolve = resolve_pathname_1.default(path, keysCopy.join("/")).split("/");
                keysResolve.shift();
                if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                    keysResolve.pop();
                }
                return keysResolve;
            };
            return ComponentHoc;
        }(react_1.PureComponent));
        return ComponentHoc;
    };
};
//# sourceMappingURL=utils.js.map