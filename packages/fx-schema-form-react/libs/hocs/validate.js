import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { withHandlers, compose } from "recompose";
import { schemaFieldFactory } from "fx-schema-form-core";
import { reducerFactory } from "../factory";
export const name = "validate";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        return (Component) => {
            let ArrayComponentHoc = class ArrayComponentHoc extends PureComponent {
                render() {
                    return React.createElement(Component, Object.assign({}, this.props));
                }
            };
            ArrayComponentHoc = tslib_1.__decorate([
                compose(hocFactory.get("data")({
                    root: true
                }), withHandlers({
                    getActions: (propsCur) => {
                        return (raw = false) => {
                            let actions = reducerFactory.get(propsCur.reducerKey || "schemaForm").actions;
                            if (raw) {
                                for (const key in actions) {
                                    if (actions.hasOwnProperty(key)) {
                                        const element = actions[key];
                                        actions[key] = element.raw;
                                    }
                                }
                            }
                            return actions;
                        };
                    }
                }), withHandlers({
                    validate: (propsCur) => {
                        return (props, data, meta = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            const result = { dirty: true, isValid: false, isLoading: false };
                            const { uiSchema, reducerKey, parentKeys, ajv, getTitle } = props;
                            const schema = Object.assign({}, uiSchema);
                            const timeId = setTimeout(() => {
                                propsCur.getActions().updateItemMeta({
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
                                    let schemaInCache = Object.assign({}, schemaFieldFactory.get(schema.schemaPath));
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
                            return propsCur.getActions(raw).updateItemData({
                                parentKeys: parentKeys,
                                keys: uiSchema.keys,
                                data: data,
                                meta
                            });
                        };
                    },
                    updateItemMeta: (propsCur) => {
                        return (raw, props, data, meta = null, noChange = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            const { parentKeys, uiSchema } = props;
                            return propsCur.getActions(raw).updateItemMeta({
                                parentKeys: parentKeys,
                                keys: uiSchema.keys,
                                meta: meta || (yield propsCur.validate(props, data)),
                                noChange: noChange
                            });
                        });
                    },
                    removeItemData: (propsCur) => {
                        return (raw, { parentKeys, uiSchema }, meta = true) => {
                            return propsCur.getActions(raw).removeItemData({
                                parentKeys: parentKeys,
                                keys: uiSchema.keys,
                                meta: meta
                            });
                        };
                    },
                    combineActions: (propsCur) => {
                        return (...actions) => {
                            return propsCur.getActions().combineActions(actions);
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