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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
var mapDispatchToProps = function (dispatch, ownProps) {
    var mergeSchema = ownProps.mergeSchema, actions = ownProps.actions, schemaFormOptions = ownProps.schemaFormOptions, schemaKey = ownProps.schemaKey, formData = ownProps.formData;
    var keys = mergeSchema.keys;
    var validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, id: null }));
    var validateAsync = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var result, timeId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = {
                        dirty: true,
                        isValid: false,
                        isLoading: false
                    };
                    timeId = setTimeout(function () {
                        actions.updateItemMeta({ keys: keys, meta: { isLoading: true, isValid: false, errorText: false } });
                    }, 200);
                    return [4, validate(data).then(function () {
                            result.isValid = true;
                        }).catch(function (err) {
                            result.errorText = err.errors ?
                                schemaFormOptions.ajv.errorsText(err.errors, { dataVar: "/" + keys.join("/") })
                                : err.message;
                        })];
                case 1:
                    _a.sent();
                    clearTimeout(timeId);
                    return [2, result];
            }
        });
    }); };
    return {
        validate: validateAsync,
        updateItemData: function (data, meta) {
            actions.updateItem({ keys: keys, data: data, meta: meta });
        },
        updateItemMeta: function (data) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, validateAsync(data)];
                    case 1:
                        result = _a.sent();
                        actions.updateItemMeta({ keys: keys, meta: result });
                        return [2];
                }
            });
        }); }
    };
};
export default function (hocFactory, settings) {
    if (settings === void 0) { settings = {}; }
    return function (Component) {
        var ValidateComponentHoc = (function (_super) {
            __extends(ValidateComponentHoc, _super);
            function ValidateComponentHoc() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ValidateComponentHoc.prototype.render = function () {
                return <Component {...this.props}/>;
            };
            ValidateComponentHoc = __decorate([
                compose(connect(null, mapDispatchToProps), shouldUpdate(function () { return false; }))
            ], ValidateComponentHoc);
            return ValidateComponentHoc;
        }(React.PureComponent));
        return ValidateComponentHoc;
    };
};
//# sourceMappingURL=validate.jsx.map