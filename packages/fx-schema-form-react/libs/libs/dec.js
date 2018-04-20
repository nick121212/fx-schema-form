import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import { ValidationError } from "ajv";
import { schemaFormTypes } from "../models/index";
import { hocFactory } from "../factory";
import { d, m } from "../reducers/reducer";
export const name = "schemaFormDec";
export default (settings = { rootReducerKey: [], parentKeys: [] }) => {
    return (Component) => {
        let SchemaFormComponentHoc = class SchemaFormComponentHoc extends PureComponent {
            constructor(props) {
                super(props);
                this._validateAll = props.validateAll.bind(this);
                props.resetForm();
            }
            render() {
                const { errors, isValid = false, isValidating = false, getRequiredKeys, getOptions, schemaId } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name, fromJS(settings)), extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);
                return (React.createElement(Component, Object.assign({ validateAll: this._validateAll, parentKeys: settings.parentKeys, schemaId: schemaId }, extraProps)));
            }
        };
        SchemaFormComponentHoc = tslib_1.__decorate([
            compose(hocFactory.get("utils")(), connect((state) => {
                let rootKeys = settings.rootReducerKey.concat(settings.parentKeys), dataKeys = rootKeys.concat([d]), metaKeys = rootKeys.concat([m]), root = state.getIn(metaKeys);
                return {
                    data: state.getIn(dataKeys),
                    root: root,
                    isValid: root ? root.value.get("isValid") : true,
                    errors: root ? root.value.get("errors") : null,
                    isValidating: root ? root.value.get("isLoading") : false
                };
            }), withHandlers({
                validateAll: (props) => {
                    let { updateItemMeta } = props.getActions(props), timeId;
                    return (async) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        let root = props.root, validate = props.ajv.getSchema(props.schemaId), $validateBeforeData = fromJS({
                            dirty: true,
                            isValid: true,
                            isLoading: true
                        }), $validateAfterData = fromJS({ isLoading: false, dirty: true }), normalizeDataPath = props.normalizeDataPath;
                        if (!root) {
                            return;
                        }
                        if (!validate) {
                            throw new Error(`没有找到对应的${props.schemaId};`);
                        }
                        try {
                            root.forEach((node) => {
                                if (node.value) {
                                    return node.value.merge($validateBeforeData);
                                }
                                return $validateBeforeData;
                            }, true);
                            timeId = setTimeout(() => {
                                updateItemMeta({
                                    parentKeys: settings.parentKeys,
                                    keys: [],
                                    meta: root.value
                                });
                            }, 200);
                            props.ajv.errors = null;
                            if (!(yield validate(props.data.toJS()))) {
                                throw new ValidationError(validate.errors.concat(props.ajv.errors || []));
                            }
                            root.value = root.value.merge({
                                isValid: true
                            });
                            updateItemMeta({
                                parentKeys: settings.parentKeys,
                                keys: [],
                                meta: root.value
                            });
                        }
                        catch (e) {
                            if (!(e instanceof ValidationError)) {
                                return console.error(e);
                            }
                            if (!root) {
                                return;
                            }
                            e.errors.forEach((element) => {
                                let dataKeys = root.getCurrentKeys().concat(normalizeDataPath(props.schemaId, element.dataPath));
                                let childNode = root.containPath(dataKeys);
                                if (!childNode) {
                                    childNode = root.addChild(dataKeys, fromJS({}));
                                }
                                if (childNode) {
                                    childNode.value = childNode.value.merge($validateAfterData).merge({
                                        isValid: false,
                                        errorText: dataKeys.pop() + " " + element.message
                                    });
                                }
                            });
                            root.value = root.value.merge({
                                isValid: false,
                                errors: e.errors
                            });
                        }
                        finally {
                            clearTimeout(timeId);
                            root.forEach((node) => {
                                if (node.value) {
                                    return node.value.merge($validateAfterData);
                                }
                                return node.value;
                            }, true);
                            updateItemMeta({
                                parentKeys: settings.parentKeys,
                                keys: [],
                                meta: root.value
                            });
                        }
                    });
                },
                resetForm: (props) => {
                    return () => {
                        const { formKey, shouldResetForm, reducerKey, initData = {} } = props;
                        if (formKey && shouldResetForm !== false) {
                            let { createForm } = props.getActions(props);
                            if (createForm) {
                                createForm({
                                    key: formKey,
                                    data: initData
                                });
                            }
                        }
                    };
                }
            })),
            tslib_1.__metadata("design:paramtypes", [Object])
        ], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
};
//# sourceMappingURL=dec.js.map