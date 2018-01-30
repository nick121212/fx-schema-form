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
import React from "react";
import { withHandlers, compose } from "recompose";
import { schemaFormReducer } from "../reducer";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        let ArrayComponentHoc = class ArrayComponentHoc extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({}, this.props));
            }
        };
        ArrayComponentHoc = __decorate([
            compose(withHandlers({
                validate: (propsCur) => {
                    return (props, data) => __awaiter(this, void 0, void 0, function* () {
                        const result = { dirty: true, isValid: false, isLoading: false };
                        const timeId = setTimeout(() => {
                            schemaFormReducer.actions.updateItemMeta({
                                parentKeys: props.parentKeys,
                                keys: props.uiSchema.keys,
                                data: { isLoading: true, isValid: false, errorText: false }
                            });
                        }, 200);
                        try {
                            let validateResult = yield props.ajv.validate(props.uiSchema, data);
                            result.isValid = validateResult;
                            if (!validateResult) {
                                let error = new Error();
                                error.errors = props.ajv.errors;
                                throw error;
                            }
                        }
                        catch (err) {
                            result.errorText = err.errors ?
                                props.ajv.errorsText(err.errors, { dataVar: props.getTitle(props).toString() })
                                : err.message;
                        }
                        finally {
                            clearTimeout(timeId);
                        }
                        return result;
                    });
                }
            }), withHandlers({
                updateItemData: (propsCur) => {
                    return (props, data, meta) => {
                        schemaFormReducer.actions.updateItemData({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            data: data,
                            meta
                        });
                    };
                },
                updateItemMeta: (propsCur) => {
                    return (props, data, meta) => __awaiter(this, void 0, void 0, function* () {
                        schemaFormReducer.actions.updateItemMeta({
                            parentKeys: props.parentKeys,
                            keys: props.uiSchema.keys,
                            data: meta || (yield propsCur.validate(props, data))
                        });
                    });
                }
            }))
        ], ArrayComponentHoc);
        return ArrayComponentHoc;
    };
};
//# sourceMappingURL=validate.js.map