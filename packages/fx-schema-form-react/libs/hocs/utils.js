import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { schemaKeysFactory, schemaFieldFactory } from "fx-schema-form-core";
import Immutable, { fromJS } from "immutable";
import resolvePathname from "resolve-pathname";
import { schemaFormTypes } from "../models/index";
import merge from "../libs/merge";
export const name = "utils";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            class ComponentHoc extends PureComponent {
                render() {
                    return React.createElement(Component, Object.assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions, normalizeDataPath: this.normalizeDataPath, getRequiredKeys: this.getRequiredKeys, getDefaultData: this.getDefaultData }, this.props));
                }
                getRequiredKeys(props, includeKeys = [], excludeKeys = []) {
                    let extraProps = {};
                    if (includeKeys && includeKeys.constructor === Array && includeKeys.length) {
                        includeKeys.forEach((key) => {
                            if (props.hasOwnProperty(key)) {
                                extraProps[key] = props[key];
                            }
                        });
                    }
                    else {
                        extraProps = Object.assign({}, props);
                    }
                    if (excludeKeys && excludeKeys.constructor === Array && excludeKeys.length) {
                        excludeKeys.forEach((key) => {
                            if (extraProps.hasOwnProperty(key)) {
                                delete extraProps[key];
                            }
                        });
                    }
                    return extraProps;
                }
                normalizeDataPath(schemaId, dataPath) {
                    let dataKeys = dataPath.replace(/^\//g, "").split("/");
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
                getOptions(props, category, field, ...extraSettings) {
                    const { uiSchema = {}, globalOptions } = props;
                    let { options, type = "" } = uiSchema, optionsArray = [], getOptions = (o, ks) => {
                        if (o) {
                            if (!Immutable.Map.isMap(o)) {
                                o = Immutable.fromJS(o);
                            }
                            if (o.hasIn(ks)) {
                                optionsArray.push(o.getIn(ks));
                            }
                        }
                    };
                    getOptions(globalOptions, [category, "default"]);
                    getOptions(globalOptions, [category, field]);
                    getOptions(globalOptions, [schemaFormTypes.field, type.toString(), "options", category, field]);
                    getOptions(options, [category, field]);
                    optionsArray = optionsArray.concat(extraSettings);
                    let opts = optionsArray.reverse().reduce((prev, next) => {
                        if (next) {
                            if (!Immutable.Map.isMap(next)) {
                                next = fromJS(next);
                            }
                            return merge(next, prev, { "*": "replace" });
                        }
                        return prev;
                    }, fromJS({}));
                    return opts.toJS();
                }
                getTitle(props, ...extraSettings) {
                    const { uiSchema } = props;
                    let { title, keys } = uiSchema;
                    if (!title && extraSettings && extraSettings.length) {
                        extraSettings.forEach((sets) => {
                            if (sets && !title && sets.get("title")) {
                                title = sets.get("title");
                            }
                        });
                    }
                    if (title !== undefined) {
                        return title;
                    }
                    if (keys && keys.length) {
                        let keysCopy = [...keys], keyTitle = keysCopy.pop();
                        return keyTitle !== undefined ? keyTitle.toString() : "";
                    }
                    if (props.arrayIndex) {
                        return props.arrayIndex.toString();
                    }
                    return "";
                }
                getPathKeys(keys, path) {
                    let keysCopy = [""].concat(keys.concat([""]));
                    let keysResolve = resolvePathname(path, keysCopy.join("/")).split("/");
                    keysResolve.shift();
                    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                        keysResolve.pop();
                    }
                    return keysResolve;
                }
                getDefaultData(ajv, schema, data, needMerge = false) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        let itemSchema = {}, defaultValue = {}, type = schema.type, mergeData = (dataOfType) => {
                            if (!needMerge) {
                                return defaultValue.defaultData;
                            }
                            return merge(fromJS(defaultValue.defaultData), fromJS(dataOfType)).toJS();
                        };
                        try {
                            yield ajv.validate({
                                type: "object",
                                properties: {
                                    defaultData: schema
                                }
                            }, defaultValue);
                        }
                        catch (e) {
                            console.log(e);
                            return data;
                        }
                        finally {
                            switch (type) {
                                case "object":
                                    if (!defaultValue.defaultData) {
                                        defaultValue.defaultData = data || {};
                                    }
                                    defaultValue.defaultData = mergeData(data || {});
                                    break;
                                case "array":
                                    if (!defaultValue.defaultData) {
                                        defaultValue.defaultData = data || [];
                                    }
                                    defaultValue.defaultData = mergeData(data || []);
                                    break;
                                default:
                                    defaultValue.defaultData = data || defaultValue.defaultData;
                            }
                        }
                        return defaultValue.defaultData;
                    });
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
//# sourceMappingURL=utils.js.map