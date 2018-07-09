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
import Immutable from "immutable";
import { schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
export const name = "oneOf";
export const hoc = (hocFactory) => {
    return (settings) => {
        const innerHoc1 = (Component) => {
            class ComponentHoc extends React.PureComponent {
                render() {
                    const { getPathKeys, uiSchema, getOptions } = this.props, { condition } = this.props, { keys = null } = uiSchema || {}, options = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {}));
                    if (!options.path || !condition || !keys || !uiSchema || !options.uiSchemas) {
                        return null;
                    }
                    let pathKeys = getPathKeys(keys, options.path);
                    let data = condition.get(pathKeys.join("/"));
                    if (options.uiSchemas[data]) {
                        const { schemaId: oneOfScehmaId, uiSchemas: uiSchemaInOneof } = options.uiSchemas[data];
                        if (!oneOfScehmaId || !schemaKeysFactory.has(oneOfScehmaId)) {
                            return null;
                        }
                        let currentSchema = schemaFieldFactory.get(schemaKeysFactory.get(oneOfScehmaId));
                        return React.createElement(Component, Object.assign({}, this.props, { oneOfScehmaId: oneOfScehmaId, uiSchemaInOneof: uiSchemaInOneof, currentSchema: currentSchema }));
                    }
                    return null;
                }
            }
            return ComponentHoc;
        };
        const innerHoc = (_Component) => {
            let ComponentHoc = class ComponentHoc extends React.PureComponent {
                componentWillUpdate(props) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const { currentSchema, updateItemDataRaw, getDefaultData, combineActions, ajv } = props, actions = [];
                        actions.push(updateItemDataRaw(props, true));
                        if (!currentSchema) {
                            actions.push(updateItemDataRaw(props, null));
                        }
                        else {
                            actions.push(updateItemDataRaw(props, yield getDefaultData(ajv, currentSchema, null)));
                        }
                        combineActions(...actions);
                    });
                }
                render() {
                    const { uiSchema, reducerKey, arrayLevel, arrayIndex, globalOptions, parentKeys, ajv, getPathKeys, getOptions } = this.props, { currentSchema, oneOfScehmaId, uiSchemaInOneof } = this.props, { condition } = this.props, { keys = null } = uiSchema || {}, options = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {})), pathKeys = getPathKeys(keys, options.path), data = condition ? condition.get(pathKeys.join("/")) : "";
                    if (currentSchema) {
                        return React.createElement(SchemaForm, { key: data ? data.toString() : oneOfScehmaId, schemaId: oneOfScehmaId, uiSchema: uiSchema, reducerKey: reducerKey, arrayLevel: arrayLevel, arrayIndex: arrayIndex, uiSchemas: uiSchemaInOneof, parentKeys: [...parentKeys], globalOptions: globalOptions, ajv: ajv });
                    }
                    return null;
                }
            };
            ComponentHoc = __decorate([
                innerHoc1
            ], ComponentHoc);
            return ComponentHoc;
        };
        return hocFactory.get("wrapper")({
            hoc: innerHoc,
            hocName: name
        });
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=oneof.js.map