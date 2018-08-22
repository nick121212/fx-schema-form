import { schemaKeysFactory, schemaFieldFactory, getSchemaId } from "fx-schema-form-core";
import { fromJS, Map } from "immutable";
import resolvePathname from "resolve-pathname";
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { reducerFactory } from "../factory";
import { schemaFormTypes, FxUiSchema } from "../models";
import merge from "./merge";


/**
 * 判断是否是生产环境
 */
export const isProd = () => {
    const { NODE_ENV } = process.env;

    return typeof NODE_ENV !== "undefined" &&
        NODE_ENV === `"production"`;
};

/**
 * dataPath中的key格式化；
 * dataPath是一个字符串，需要把里面的数字转化一下
 * dataPath中可能有数组的格式，所以需要把数字转换成数字，而不是字符
 * 遍历所有的key，发现是数字字符，则查找父级的schema，如果父级的type是array，则把当前key转换成数字
 * @param schemaId schemaId
 * @param dataPath 当前的数据路径字符串
 */
export const normalizeDataPath = (schemaId: string, dataPath: string): Array<string | number> => {
    let dataKeys: Array<string | number> = dataPath.replace(/^\//g, "").split("/");

    dataKeys = dataKeys.map((key: string | number, index: number) => {
        if (Number.isInteger(+key)) {
            let keys: Array<string | number> = dataKeys.slice(0, index);

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

/**
* 将当前的props更改成任意路径的props
* @param props 当前组件的props
* @param path  需要转换的路径
*/
export const getPathProps = (props: DefaultProps & UtilsHocOutProps, path: string): DefaultProps => {
    let newProps = Object.assign({}, props, {
        uiSchema: Object.assign({}, props.uiSchema, {
            keys: props.getPathKeys((props.uiSchema as any).keys as any, path)
        })
    });

    return newProps;
};

/**
 * 获取当前的reducer中的actions
 * @param   {DefaultProps} propsCur 当前的属性
 * @param   {Boolean}      raw      是否为raw
 * @return  {Object}
 */
export const getActions = (propsCur: DefaultProps, raw = false) => {
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

/**
 * 过滤props中的属性，只传递所需的属性
 * 从设置中，获取一部分的设置
 * @param props        当前component的props
 * @param includeKeys  需要保留的keys
 * @param excludeKeys  需要去掉的keys
 */
export const getRequiredKeys = (props: { [key: string]: any }, includeKeys: string[] = [], excludeKeys: string[] = [])
    : { [key: string]: any } => {
    let extraProps: { [key: string]: any } = {};

    if (includeKeys && includeKeys.constructor === Array && includeKeys.length) {
        includeKeys.forEach((key: string) => {
            if (props.hasOwnProperty(key)) {
                extraProps[key] = props[key];
            }
        });
    } else {
        extraProps = Object.assign({}, props);
    }

    if (excludeKeys && excludeKeys.constructor === Array && excludeKeys.length) {
        excludeKeys.forEach((key: string) => {
            if (extraProps.hasOwnProperty(key)) {
                delete extraProps[key];
            }
        });
    }

    return extraProps;
};

/**
 * 获取参数
 * @param props         当前component的props
 * @param category      需要获取的种类，有template，field，hoc等
 * @param field         field的名称
 * @param extraSettings 其余的设置项
 */
export const getOptions = ({ uiSchema = { key: "" }, globalOptions }: DefaultProps,
    category: string,
    field: string,
    ...extraSettings: Map<string, any>[]): { [key: string]: any } => {

    let { options, type = "" } = uiSchema as FxUiSchema,
        optionsArray: Map<string, any>[] = [],
        getLocalOptions = (o: any, ks: string[]) => {
            if (o) {
                if (!Map.isMap(o)) {
                    o = fromJS(o);
                }
                if (o.hasIn(ks)) {
                    optionsArray.push(o.getIn(ks));
                }
            }
        };

    // 从globalOptions中抽取default的配置
    // 从globalOptions中抽取field的配置
    // 从options中抽取field的配置
    getLocalOptions(globalOptions, [category, "default"]);
    getLocalOptions(globalOptions, [category, field]);
    getLocalOptions(globalOptions, [schemaFormTypes.field, type.toString(), "options", category, field]);
    getLocalOptions(options, [category, field]);

    optionsArray = optionsArray.concat(extraSettings);

    let opts = optionsArray.reverse().reduce((prev: any, next: Map<string, any>) => {
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

/**
 * 获取标题数据
 * title || key || index
 * @param props         当前的props
 * @param extraSettings 额外的配置参数
 */
export const getTitle = ({ uiSchema, arrayIndex }: DefaultProps, ...extraSettings: Map<string, any>[]): string => {
    let { title = undefined, keys = [] } = uiSchema as FxUiSchema || {};

    if (!title && extraSettings && extraSettings.length) {
        extraSettings.forEach((sets: Map<string, any>) => {
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


/**
 * 根据相对路径，得到keys
 * @param keys 当前的keys
 * @param path 路径
 */
export const getPathKeys = (keys: Array<string>, path: string, schemaId?: string): Array<string> => {
    let keysCopy = [""].concat(keys.concat([""]));
    let keysResolve: any[] = resolvePathname(path, keysCopy.join("/")).split("/");

    keysResolve.shift();

    if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
        keysResolve.pop();
    }

    // 这里处理一下这个字符串数字的问题把数组中的 "1" 转换成 1
    if (schemaId) {
        keysResolve = normalizeDataPath(getSchemaId(schemaId), keysResolve.join("/"));
    }

    return keysResolve;
};

/**
 * 获取当前schema的默认的数据
 *  通过ajv的validate方法获取默认的数据
 *  与data和defaultData做合并处理
 * @param ajv          ajv实例
 * @param schema       json-schema
 * @param data         额外的数据
 * @param defaultData  额外的数据
 * @param needMerge    是否需要合并数据
 */
export const getDefaultData = async (ajv: Ajv, schema: JSONSchema6, data: any, defaultData?: any, needMerge = false): Promise<any> => {
    let defaultValue: any = {},
        type = schema.type,
        mergeData = (dataOfType: any) => {
            if (!needMerge) {
                return defaultValue.defaultData;
            }

            let mData: any = merge(fromJS(defaultValue.defaultData), fromJS(dataOfType));

            if (defaultData) {
                return merge(mData, fromJS(defaultData));
            }

            return mData.toJS();
        };

    try {
        // 调用ajv的validate方法，这里会处理defaultValue的值
        await ajv.validate({
            type: "object",
            properties: {
                defaultData: schema
            }
        }, defaultValue);
    } catch (e) {
        return data;
    } finally {
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
};
