var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
export const name = "oneOf";
export const hoc = (hocFactory) => {
    return (settings) => {
        return (Component) => {
            class ComponentHoc extends React.PureComponent {
                constructor() {
                    super(...arguments);
                    this.currentSchema = null;
                }
                componentDidUpdate(props) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const { uiSchema, updateItemData, getDefaultData, removeItemData, ajv } = props;
                        removeItemData(props, true);
                        if (!this.currentSchema) {
                            return updateItemData(props, null);
                        }
                        updateItemData(props, yield getDefaultData(ajv, this.currentSchema, null));
                    });
                }
                render() {
                    const { getPathKeys, uiSchema, getOptions, schemaId, reducerKey, arrayLevel, arrayIndex, globalOptions, parentKeys, ajv } = this.props, _a = this.props, { condition } = _a, extraProps = __rest(_a, ["condition"]), { keys = null } = uiSchema || {}, options = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {}));
                    if (!options.path || !condition || !keys || !uiSchema || !options.uiSchemas) {
                        return null;
                    }
                    let pathKeys = getPathKeys(keys, options.path);
                    let data = condition.get(pathKeys.join("/"));
                    let someOf = uiSchema[options.key || name];
                    if (!someOf) {
                        return null;
                    }
                    if (someOf && options.uiSchemas[data]) {
                        let { index, uiSchema: uiSchemaInOneof } = options.uiSchemas[data];
                        if (!someOf[index]) {
                            return null;
                        }
                        this.currentSchema = someOf[index];
                        return React.createElement(SchemaForm, { key: index, schemaId: someOf[index].$id, uiSchema: uiSchema, reducerKey: reducerKey, arrayLevel: arrayLevel, arrayIndex: arrayIndex, uiSchemas: uiSchemaInOneof, parentKeys: [...parentKeys], globalOptions: globalOptions, ajv: ajv });
                    }
                    return null;
                }
            }
            return ComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=oneof.js.map