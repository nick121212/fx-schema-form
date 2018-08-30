var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { schemaKeysFactory, schemaFieldFactory, getSchemaId } from "fx-schema-form-core";
import { fromJS, Map } from "immutable";
import resolvePathname from "resolve-pathname";
import { reducerFactory } from "../factory";
import { schemaFormTypes } from "../models";
import merge from "./merge";
export const isProd = () => {
    const { NODE_ENV } = process.env;
    return typeof NODE_ENV !== "undefined" &&
        NODE_ENV === `"production"`;
};
export const normalizeDataPath = (schemaId, dataPath) => {
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
};
export const getPathProps = (props, path) => {
    let newProps = Object.assign({}, props, {
        uiSchema: Object.assign({}, props.uiSchema, {
            keys: props.getPathKeys(props.uiSchema.keys, path)
        })
    });
    return newProps;
};
export const getActions = (propsCur, raw = false) => {
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
export const getRequiredKeys = (props, includeKeys = [], excludeKeys = []) => {
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
};
export const getOptions = ({ uiSchema = { key: "" }, globalOptions }, category, field, ...extraSettings) => {
    let { options, type = "" } = uiSchema, optionsArray = [], getLocalOptions = (o, ks) => {
        if (o) {
            if (!Map.isMap(o)) {
                o = fromJS(o);
            }
            if (o.hasIn(ks)) {
                optionsArray.push(o.getIn(ks));
            }
        }
    };
    getLocalOptions(globalOptions, [category, "default"]);
    getLocalOptions(globalOptions, [category, field]);
    getLocalOptions(globalOptions, [schemaFormTypes.field, type.toString(), "options", category, field]);
    getLocalOptions(options, [category, field]);
    optionsArray = optionsArray.concat(extraSettings);
    let opts = optionsArray.reverse().reduce((prev, next) => {
        if (next) {
            if (!Map.isMap(next)) {
                next = fromJS(next);
            }
            return merge(next, prev, { "*": "replace" });
        }
        return prev;
    }, fromJS({}));
    return opts.toJS();
};
export const getTitle = ({ uiSchema, arrayIndex }, ...extraSettings) => {
    let { title = undefined, keys = [] } = uiSchema || {};
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
    if (arrayIndex) {
        return arrayIndex.toString();
    }
    return "";
};
export const getPathKeys = (keys, path, schemaId) => {
    let keysCopy = [""].concat(keys.concat([""]));
    let keysResolve = resolvePathname(path, keysCopy.join("/")).split("/");
    keysResolve.shift();
    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
        keysResolve.pop();
    }
    if (schemaId) {
        keysResolve = normalizeDataPath(getSchemaId(schemaId), keysResolve.join("/"));
    }
    return keysResolve;
};
export const getDefaultData = (ajv, schema, data, defaultData, needMerge = false) => __awaiter(this, void 0, void 0, function* () {
    let defaultValue = {}, type = schema.type, mergeData = (dataOfType) => {
        if (!needMerge) {
            return defaultValue.defaultData;
        }
        let mData = merge(fromJS(defaultValue.defaultData), fromJS(dataOfType));
        if (defaultData) {
            return merge(mData, fromJS(defaultData));
        }
        return mData.toJS();
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
//# sourceMappingURL=utils.js.map