var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { fromJS, Map, List } from "immutable";
import { ValidationError } from "ajv";
import { schemaFormTypes } from "../models";
import { hocFactory, errorFactory } from "../factory";
import { d, m } from "../reducers/reducer";
export const name = "schemaFormDec";
export default (settings = { rootReducerKey: [], parentKeys: [] }) => {
    return (Component) => {
        let SchemaFormComponentHoc = class SchemaFormComponentHoc extends PureComponent {
            constructor(props) {
                super(props);
                if (props.validateAll) {
                    this._validateAll = props.validateAll.bind(this);
                }
                if (props.resetForm) {
                    props.resetForm();
                }
            }
            render() {
                const { getRequiredKeys, getOptions, schemaId } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name, fromJS(settings || {})), extraProps = getRequiredKeys(this.props, options.hocIncludeKeys, options.hocExcludeKeys);
                return (React.createElement(Component, Object.assign({ validateAll: this._validateAll, parentKeys: settings.parentKeys, schemaId: schemaId }, extraProps)));
            }
        };
        SchemaFormComponentHoc = __decorate([
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
                    return (async) => __awaiter(this, void 0, void 0, function* () {
                        let root = props.root, curAjv = props.ajv, dataRaw = props.data, validate = props.ajv.getSchema(props.schemaId), $validateBeforeData = fromJS({
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
                            if (Map.isMap(dataRaw) || List.isList(dataRaw)) {
                                dataRaw = dataRaw.toJS();
                            }
                            curAjv.errors = undefined;
                            if (!(yield validate(dataRaw))) {
                                if (!validate.errors) {
                                    validate.errors = [];
                                }
                                throw new ValidationError(validate.errors.concat(curAjv.errors || []));
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
                                return {
                                    isValid: false,
                                    errMsg: e.message
                                };
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
                                        errorText: errorFactory.get("default")(element, dataKeys)
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
                        return {
                            isValid: root.value.get("isValid"),
                            data: dataRaw
                        };
                    });
                },
                resetForm: (props) => {
                    return () => __awaiter(this, void 0, void 0, function* () {
                        const { formKey, shouldResetForm, keepData, ajv, getDefaultData, initData = {}, schemaId } = props;
                        if (formKey && shouldResetForm !== false) {
                            let { createForm } = props.getActions(props);
                            let schema = ajv.getSchema(schemaId).schema;
                            if (createForm && schema) {
                                createForm({
                                    key: formKey,
                                    keepData,
                                    data: yield getDefaultData(ajv, schema, initData, {}, true)
                                });
                            }
                        }
                    });
                }
            })),
            __metadata("design:paramtypes", [Object])
        ], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
};
//# sourceMappingURL=dec.js.map