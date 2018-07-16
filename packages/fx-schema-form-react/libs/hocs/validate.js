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
import React, { PureComponent } from "react";
import { withHandlers, compose } from "recompose";
import { schemaFieldFactory } from "fx-schema-form-core";
export const name = "validate";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        return (Component) => {
            let ArrayComponentHoc = class ArrayComponentHoc extends PureComponent {
                render() {
                    return React.createElement(Component, Object.assign({}, this.props));
                }
            };
            ArrayComponentHoc = __decorate([
                compose(hocFactory.get("data")({
                    root: settings.root
                }), withHandlers({
                    validate: (propsCur) => {
                        return (props, data, meta = {}) => __awaiter(this, void 0, void 0, function* () {
                            const result = { dirty: true, isValid: false, isLoading: false };
                            const { uiSchema, parentKeys, ajv, getTitle } = props;
                            const schema = Object.assign({}, uiSchema);
                            const timeId = setTimeout(() => {
                                propsCur.getActions(propsCur).updateItemMeta({
                                    parentKeys: parentKeys,
                                    keys: schema.keys,
                                    meta: { isLoading: true, isValid: false, errorText: false }
                                });
                            }, 200);
                            try {
                                let validateFunc;
                                if (schema.schemaPath && ajv.getSchema(schema.schemaPath)) {
                                    validateFunc = ajv.getSchema(schema.schemaPath);
                                }
                                else if (schema.$id) {
                                    validateFunc = ajv.getSchema(schema.$id);
                                }
                                else {
                                    let schemaInCache = Object.assign({}, schemaFieldFactory.get(schema.schemaPath || ""));
                                    delete schemaInCache.$id;
                                    delete schemaInCache.$ref;
                                    validateFunc = ajv.compile(schemaInCache);
                                }
                                if (propsCur.formItemData) {
                                    result.isValid = yield validateFunc(data, undefined, undefined, undefined, propsCur.formItemData.toJS());
                                }
                                else {
                                    result.isValid = yield validateFunc(data);
                                }
                                if (!result.isValid) {
                                    let error = new Error();
                                    error.errors = validateFunc.errors;
                                    throw error;
                                }
                            }
                            catch (err) {
                                result.errorText = err.errors ?
                                    ajv.errorsText(err.errors, {
                                        dataVar: getTitle(props).toString()
                                    }) : err.message;
                            }
                            finally {
                                clearTimeout(timeId);
                            }
                            return Object.assign({}, meta, result);
                        });
                    }
                }), hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData"]
                }), withHandlers({
                    updateItemData: (propsCur) => {
                        return (raw, { parentKeys, uiSchema }, data, meta) => {
                            const { keys = [] } = uiSchema || {};
                            return propsCur.getActions(propsCur, raw).updateItemData({
                                parentKeys,
                                keys,
                                data,
                                meta
                            });
                        };
                    },
                    updateItemMeta: (propsCur) => {
                        return (raw, props, data, meta = null, noChange = false) => __awaiter(this, void 0, void 0, function* () {
                            const { parentKeys, uiSchema } = props;
                            const { keys = [] } = uiSchema || {};
                            return propsCur.getActions(propsCur, raw).updateItemMeta({
                                parentKeys,
                                keys,
                                meta: meta || (yield propsCur.validate(props, data)),
                                noChange
                            });
                        });
                    },
                    removeItemData: (propsCur) => {
                        return (raw, { parentKeys, uiSchema }, meta = true) => {
                            const { keys = [] } = uiSchema || {};
                            return propsCur.getActions(propsCur, raw).removeItemData({
                                parentKeys,
                                keys,
                                meta
                            });
                        };
                    },
                    combineActions: (propsCur) => {
                        return (...actions) => {
                            return propsCur.getActions(propsCur).combineActions(actions);
                        };
                    },
                }), withHandlers({
                    updateItemData: (propsCur) => {
                        return propsCur.updateItemData.bind(null, false);
                    },
                    updateItemMeta: (propsCur) => {
                        return propsCur.updateItemMeta.bind(null, false);
                    },
                    removeItemData: (propsCur) => {
                        return propsCur.removeItemData.bind(null, false);
                    },
                    updateItemDataRaw: (propsCur) => {
                        return propsCur.updateItemData.bind(null, true);
                    },
                    updateItemMetaRaw: (propsCur) => {
                        return propsCur.updateItemMeta.bind(null, true);
                    },
                    removeItemDataRaw: (propsCur) => {
                        return propsCur.removeItemData.bind(null, true);
                    }
                }))
            ], ArrayComponentHoc);
            return ArrayComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=validate.js.map