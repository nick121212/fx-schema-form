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
                compose(withHandlers({
                    validate: (propsCur) => {
                        return (props, data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            const result = { dirty: true, isValid: false, isLoading: false };
                            const schema = Object.assign({}, props.uiSchema);
                            const timeId = setTimeout(() => {
                                reducerFactory.get(props.reducerKey || "schemaForm").actions.updateItemMeta({
                                    parentKeys: props.parentKeys,
                                    keys: schema.keys,
                                    meta: { isLoading: true, isValid: false, errorText: false }
                                });
                            }, 200);
                            try {
                                let validateFunc;
                                if (schema.schemaPath && props.ajv.getSchema(schema.schemaPath)) {
                                    validateFunc = props.ajv.getSchema(schema.schemaPath);
                                }
                                else if (schema.$id) {
                                    validateFunc = props.ajv.getSchema(schema.$id);
                                }
                                else {
                                    let schemaInCache = Object.assign({}, schemaFieldFactory.get(schema.schemaPath));
                                    delete schemaInCache.$id;
                                    delete schemaInCache.$ref;
                                    validateFunc = props.ajv.compile(schemaInCache);
                                }
                                result.isValid = yield validateFunc(data);
                                if (!result.isValid) {
                                    let error = new Error();
                                    error.errors = validateFunc.errors;
                                    throw error;
                                }
                            }
                            catch (err) {
                                result.errorText = err.errors ?
                                    props.ajv.errorsText(err.errors, {
                                        dataVar: props.getTitle(props).toString()
                                    }) : err.message;
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
                            reducerFactory.get(props.reducerKey || "schemaForm").actions.updateItemData({
                                parentKeys: props.parentKeys,
                                keys: props.uiSchema.keys,
                                data: data,
                                meta
                            });
                            if (props.uiSchema.onValueChanged) {
                                props.uiSchema.onValueChanged(props, data);
                            }
                        };
                    },
                    updateItemMeta: (propsCur) => {
                        return (props, data, meta = null, noChange = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            reducerFactory.get(props.reducerKey || "schemaForm").actions.updateItemMeta({
                                parentKeys: props.parentKeys,
                                keys: props.uiSchema.keys,
                                meta: meta || (yield propsCur.validate(props, data)),
                                noChange: noChange
                            });
                        });
                    },
                    removeItemData: (propsCur) => {
                        return (props, meta = true) => {
                            reducerFactory.get(props.reducerKey || "schemaForm").actions.removeItemData({
                                parentKeys: props.parentKeys,
                                keys: props.uiSchema.keys,
                                meta: meta
                            });
                        };
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