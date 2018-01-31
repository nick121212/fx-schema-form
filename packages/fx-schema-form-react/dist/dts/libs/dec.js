import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";
import { ValidationError } from "ajv";
import { schemaFieldFactory, schemaKeysFactory } from "fx-schema-form-core";
import { reducerFactory } from "../factory";
const actions = reducerFactory.get("schemaForm").actions;
export default (settings = { rootReducerKey: [], parentKeys: [] }) => {
    return (Component) => {
        let SchemaFormComponentHoc = class SchemaFormComponentHoc extends PureComponent {
            constructor(props) {
                super(props);
                this._validateAll = this.validateAll.bind(this);
            }
            validateAll() {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    let root = this.props.root, validate = this.props.ajv.getSchema(this.props.schemaId), $validateBeforeData = Immutable.fromJS({
                        dirty: true,
                        isValid: true,
                        isLoading: true
                    }), $validateAfterData = Immutable.fromJS({ isLoading: false, dirty: true }), normalizeDataPath = this.normalizeDataPath;
                    if (!root) {
                        return;
                    }
                    if (!validate) {
                        throw new Error(`没有找到对应的${this.props.schemaId};`);
                    }
                    try {
                        root.forEach((node) => {
                            if (node.value) {
                                return node.value.merge($validateBeforeData);
                            }
                            return $validateBeforeData;
                        }, true);
                        actions.updateItemMeta({
                            parentKeys: settings.parentKeys,
                            keys: [],
                            data: root.value
                        });
                        yield validate(this.props.data.toJS());
                        root.value = root.value.merge({
                            isValid: true
                        });
                        actions.updateItemMeta({
                            parentKeys: settings.parentKeys,
                            keys: [],
                            data: root.value
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
                            let dataKeys = root.getCurrentKeys().concat(normalizeDataPath(this.props.schemaId, element.dataPath));
                            let childNode = root.addChild(dataKeys, Immutable.fromJS({}));
                            if (childNode) {
                                childNode.value = childNode.value.merge($validateAfterData).merge({
                                    isValid: false,
                                    errorText: element.message
                                });
                            }
                        });
                        root.value = root.value.merge({
                            isValid: false,
                            errors: e.errors
                        });
                    }
                    finally {
                        root.forEach((node) => {
                            if (node.value) {
                                return node.value.merge($validateAfterData);
                            }
                            return node.value;
                        }, true);
                        console.log(root.value);
                        actions.updateItemMeta({
                            parentKeys: settings.parentKeys,
                            keys: [],
                            data: root.value
                        });
                    }
                });
            }
            normalizeDataPath(schemaId, dataPath) {
                let dataKeys = dataPath.substring(1).split("/");
                dataKeys = dataKeys.map((key, index) => {
                    if (Number.isInteger(+key)) {
                        let keys = dataKeys.slice(0, index);
                        keys.unshift(schemaId);
                        if (schemaKeysFactory.has(keys.join("/"))) {
                            let schema = schemaFieldFactory.get(schemaKeysFactory.get(keys.join("/")));
                            if (schema.type === "array") {
                                return +key;
                            }
                        }
                    }
                    return key;
                });
                return dataKeys;
            }
            render() {
                const { errors, isValid = false, isValidating = false } = this.props;
                return (React.createElement("div", null,
                    React.createElement(Component, Object.assign({ validateAll: this._validateAll }, this.props)),
                    isValid.toString() + isValidating.toString(),
                    isValid ? null : errors ? errors.map((e) => {
                        return React.createElement("div", { key: e.get("dataPath") }, e.get("message"));
                    }) : null));
            }
        };
        SchemaFormComponentHoc = tslib_1.__decorate([
            connect((state) => {
                let dataKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["data"]), metaKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["meta"]), root = state.getIn(metaKeys);
                return {
                    data: state.getIn(dataKeys),
                    root: root,
                    isValid: root.value.get("isValid"),
                    errors: root.value.get("errors"),
                    isValidating: root.value.get("isLoading")
                };
            }),
            tslib_1.__metadata("design:paramtypes", [Object])
        ], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
};
//# sourceMappingURL=dec.js.map