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
import { connect } from "react-redux";
import { fromJS } from "immutable";
import { ValidationError } from "ajv";
import { reducerFactory } from "../factory";
const actions = reducerFactory.get("schemaForm").actions;
export default (settings = {}) => {
    return (Component) => {
        let SchemaFormComponentHoc = class SchemaFormComponentHoc extends React.PureComponent {
            validateAll() {
                return __awaiter(this, void 0, void 0, function* () {
                    let root = this.props.root;
                    let validate = this.props.ajv.getSchema(this.props.schemaId);
                    let $validateBeforeData = fromJS({
                        dirty: true,
                        isValid: true,
                        isLoading: true
                    }), $validateAfterData = fromJS({ isLoading: false, dirty: true });
                    if (!validate) {
                        throw new Error(`没有找到对应的${this.props.schemaId};`);
                    }
                    try {
                        root.forEach((node) => {
                            if (node.value) {
                                return node.value.merge($validateBeforeData);
                            }
                            return $validateBeforeData;
                        });
                        yield validate(this.props.data.toJS());
                        actions.updateItemMeta({
                            parentKeys: settings.parentKeys,
                            keys: [],
                            data: root.value
                        });
                    }
                    catch (e) {
                        if (!(e instanceof ValidationError)) {
                            throw e;
                        }
                        e.errors.forEach((element) => {
                            let dataKeys = root.getCurrentKeys().concat(element.dataPath.substring(1).split("/"));
                            let childNode = root.addChild(dataKeys, fromJS({}));
                            childNode.value = childNode.value.merge($validateAfterData).merge({
                                isValid: false,
                                errorText: element.message
                            });
                            console.log(childNode.value.toJS());
                        });
                    }
                    finally {
                        root.forEach((node) => {
                            if (node.value) {
                                return node.value.merge($validateAfterData);
                            }
                            return node.value;
                        });
                        actions.updateItemMeta({
                            parentKeys: settings.parentKeys,
                            keys: [],
                            data: root.value
                        });
                    }
                });
            }
            render() {
                return React.createElement(Component, Object.assign({ validateAll: this.validateAll }, this.props));
            }
        };
        SchemaFormComponentHoc = __decorate([
            connect((state) => {
                let dataKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["data"]);
                let metaKeys = settings.rootReducerKey.concat(settings.parentKeys).concat(["meta"]);
                return {
                    data: state.getIn(dataKeys),
                    root: state.getIn(metaKeys)
                };
            })
        ], SchemaFormComponentHoc);
        return SchemaFormComponentHoc;
    };
};
//# sourceMappingURL=dec.js.map