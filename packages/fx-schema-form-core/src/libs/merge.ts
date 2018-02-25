import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { uiSchemaSchema, UiSchema } from "../models/uischema";
import { schemaFieldFactory, schemaKeysFactory } from "../factory";
import { default as ResolveLib } from "./resolve";
import { FxJsonSchema } from "../models/jsonschema";

/**
* 根据给出的parentKeys和uiSchemaKeys来获取uiSchema的key
* 1. 遍历uiSchemaKeys，分别于parentKeys做合并
* 2. 合并后的keys去仓库里面找，如果为找到则报错
* 3. 判断找到的schema中是否带有 $ref
* 4. 如果有$ref，则更改parentKeys为$ref的路径
* 5. 如果没有，则更改parentKeys为当前合并的keys
* @param uiSchemaKeys 当前的keys
* @param parentKeys   父亲的keys
*/
const getUiSchemaKeyRecursion = (uiSchemaKeys: string[], parentKeys: string[]): string => {
    while (uiSchemaKeys.length) {
        let key: string = uiSchemaKeys.shift() || "";
        let keys: string[] = key ? parentKeys.concat([key]) : parentKeys;
        let keysStr = keys.join("/").replace(/\/$/, "");

        if (!schemaKeysFactory.has(keysStr)) {
            if (!__PROD__) {
                throw new Error(`${keys.join("/")} did not found.`);
            }
            return;
        }

        let schema: FxJsonSchema = schemaFieldFactory.get(schemaKeysFactory.get(keysStr));

        if (schema.$ref) {
            parentKeys = ResolveLib.getDataKeys(schema.$ref, true);
        } else {
            parentKeys = keys;
        }
    }

    return parentKeys.join("/");
};
/**
  * 获取父亲的keys
  */
const getParentSchemaKeys = (parent: UiSchema): Array<string | number> => {
    if (parent) {
        if (parent.keys) {
            return parent.keys;
        }
    }

    return [];
};

/**
 * 获取当前uiSchema的key
 * 如果没有父亲节点
 * 默认返回父亲的key+当前uiSchema的key
 * @param uiSchema uiSchma
 */
const getCurrentSchemaKey = (parent: UiSchema, schemaPath: string, uiSchema: UiSchema): string => {
    const $id = ResolveLib.getSchemaId(schemaPath);
    let uiSchemaKeys = uiSchema.key.split("/");

    // 如果父亲节点的shcemaId不是传入的schemaId，则不适用父亲的key做计算
    if (parent && ResolveLib.getSchemaId(parent.key) === $id) {
        return getUiSchemaKeyRecursion(uiSchemaKeys, parent.key.split("/"));
    }

    return getUiSchemaKeyRecursion(uiSchemaKeys, [$id]);
};

/**
 * 如果在【schemaKeysFactory】中没有发现uiSchema.key,则报错
 * 从【schemaKeysFactory】获取对应的schema，与uiSchema合并之后返回
 * @param uiSchema uiSchema
 */
const mergeUiSchemaToArray = (uiSchema: UiSchema): UiSchema => {
    if (!schemaKeysFactory.has(uiSchema.key)) {
        if (!__PROD__) {
            throw new Error(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        }
        return;
    }

    let schemaKey: string = schemaKeysFactory.get(uiSchema.key);
    let schema = schemaFieldFactory.get(schemaKey);

    return Object.assign({}, schema, uiSchema);
};

/**
 * 初始化uiSchema
 * 如果是字符串；用$id合并之后，获取schema
 * 如果是【UiSchema】；合并key之后，获取schema
 * @param uiSchema uiSchema
 */
const initUiSchema = (parent: UiSchema, schemaPath: string, uiSchema: UiSchema): UiSchema => {
    let parentKeys = getParentSchemaKeys(parent),
        keys;

    keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);

    return Object.assign({}, uiSchema, {
        key: getCurrentSchemaKey(parent, schemaPath, uiSchema),
        keys
    });
};

const pushMergeResult = (uiSchemasFirst: UiSchema[], uiSchemasLast: UiSchema[], uiSchema: UiSchema) => {
    if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
        return val.key === uiSchema.key;
    }).length) {
        uiSchema = mergeUiSchemaToArray(uiSchema);
        uiSchemasFirst.push(uiSchema);
    }
};

/**
 * 合并uiSchema
 * 1. 先判断uiSchema中是否存在*
 * 2. 如果没有*号，则遍历uiSchema，合并数据
 * 3. 如果存在*号；先合并*之前和*之后的uiSchema
 * 4. 遍历当前的schema：
 *    如果是object，则遍历properties，然后合并数据
 *    如果是array，则直接返回items，然后合并数据
 * @param parent
 * @param schemaPath
 * @param uiSchemas
 * @param curSchema
 */
const initMergeSchema = (parent: UiSchema | null, schemaPath: string, uiSchemas: Array<UiSchema | string>, curSchema: FxJsonSchema): UiSchema[] => {
    let idx: number = uiSchemas.indexOf("*"),
        uiSchemasFirst: UiSchema[] = [], uiSchemasLast: UiSchema[] = [],
        types = ["object", "array"];

    // 如果存在多个*，则报错
    if (uiSchemas.lastIndexOf("*") !== idx) {
        if (!__PROD__) {
            throw new Error("uiSchema can only has one *.");
        }
        return;
    }

    // 不存在*号的情况
    if (idx < 0) {
        uiSchemas.slice(idx + 1).map((us: string | UiSchema) => {
            let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } as UiSchema : (us as UiSchema));

            uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
        });

        return uiSchemasFirst;
    }

    // 处理*之前的数据
    uiSchemas.slice(0, idx).forEach((us: string | UiSchema) => {
        let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } as UiSchema : (us as UiSchema));

        uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });
    // 处理*之后的数据
    uiSchemas.slice(idx + 1).forEach((us: string | UiSchema) => {
        let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? { key: us } as UiSchema : (us as UiSchema));

        uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
    });

    // 如果是object类型，遍历properties属性，与之前的数据去重后添加到数组
    if (curSchema.type === types[0] && curSchema.properties) {
        Object.keys(curSchema.properties).forEach((us: string) => {
            let uiSchema = initUiSchema(parent, schemaPath, { key: us } as UiSchema);

            // if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
            //     return val.key === uiSchema.key;
            // }).length) {
            //     uiSchema = mergeUiSchemaToArray(uiSchema);
            //     uiSchemasFirst.push(uiSchema);
            // }
            pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
        });
    }

    // 如果是数组，获取下一级的key，然后做对比处理
    if (curSchema.type === types[1] && curSchema.items) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: ResolveLib.getDataKeys(curSchema.schemaPath || "").join("/")
        });
        // let uiSchemaItems = this.initUiSchema(ResolveLib.getDataKeys(this.curSchema.schemaPath).concat(["-"]).join("/"));

        // if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
        //     return val.key === uiSchema.key;
        // }).length) {
        //     uiSchema = mergeUiSchemaToArray(uiSchema);
        //     uiSchemasFirst.push(uiSchema);
        // }

        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);

        // if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
        //     return val.key === uiSchemaItems.key;
        // }).length) {
        //     uiSchemaItems = this.mergeUiSchemaToArray(uiSchemaItems);
        //     uiSchemasFirst.push(uiSchemaItems);
        // }
    }

    // 是普通对象
    if (types.indexOf(curSchema.type as string) < 0) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: ResolveLib.getDataKeys(curSchema.schemaPath || "", false).join("/")
        });

        // if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
        //     return val.key === uiSchema.key;
        // }).length) {
        //     uiSchema = mergeUiSchemaToArray(uiSchema);
        //     uiSchemasFirst.push(uiSchema);
        // }

        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }

    return uiSchemasFirst.concat(uiSchemasLast);
};

/**
 * 用来转换uiSchema的类
 * 如果有$ref，则直接使用
 */
export default class MergeLib {
    /**
     * 合并过后的数据
     */
    public mergeUiSchemaList: UiSchema[];

    /**
     * 构造函数
     * 1. 验证uiSchema的正确性
     * 2. 处理uiSchema中带*号的数据
     * 3. 返回合并后的数据
     * @param ajv         当前的ajv实例
     * @param $id         schema的$id
     * @param parent      父亲的schema
     * @param uiSchemas   uiSchema
     */
    constructor(ajv: Ajv, schemaPath: string, parent: UiSchema | null, uiSchemas?: Array<UiSchema | string>) {

        uiSchemas = uiSchemas || ["*"];

        if (!ajv.validate(uiSchemaSchema, uiSchemas)) {
            throw ajv.errors;
        }

        let keyPath: string = ResolveLib.getDataKeys(schemaPath, true).join("/");

        if (!schemaKeysFactory.has(keyPath)) {
            if (!__PROD__) {
                throw new Error(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
            }
            return;
        }

        const curSchema = schemaFieldFactory.get(schemaKeysFactory.get(keyPath));
        if (curSchema.$id) {
            curSchema.$ref = curSchema.$id;
            curSchema.$id = undefined;
            delete curSchema.$id;
        }
        this.mergeUiSchemaList = initMergeSchema(parent || null, schemaPath, uiSchemas, curSchema);
    }
}
