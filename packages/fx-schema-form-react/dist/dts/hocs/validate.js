import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { withHandlers, compose } from "recompose";
import { schemaFormReducer } from "../reducer";
export default (hocFactory, settings = {}) => {
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
                    return (props, data, meta) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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