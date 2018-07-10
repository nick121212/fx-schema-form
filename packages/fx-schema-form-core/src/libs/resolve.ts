import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaTypeFactory } from "../factory";
import { warn } from "../utils";

// 去掉末尾的#正则
const regexp = /#$/g;

/**
* 解析path成成数据的路径
* 最终schema需要与uiSchema做合并，uiSchema中的key配置的是数组 ["appType', '-','type']，所以需要做一下转换
* 1. 去掉properties，items关键字转换成【 - 】
* 2. 第一个字符去掉末尾的【 # 】
* @example design#/properties/appType => ["appType']
* @example design#/properties/appType/type => ["appType','type']
* @example design#/properties/appType/items/properties/type => ["appType', '-','type']
* @param {String}   schemaKey schema的path
* @param {Boolean}  keepFirst 是否需要保留第一个
*/
export const getDataKeys = (schemaKey: string, keepFirst = false): string[] => {
    let keys = schemaKey.split("/").map((key: string, index: number) => {
        // 第一个替换末尾的#
        if (index === 0 && regexp.test(key)) {
            // 这里是regexp的陷阱,需要修改lastIndex = 0
            // 对于同一个正则表达式对象regex，不能重复调用：第一次返回true，第二次就返回false，很显然这种效果不是我们想要的。
            // 这是因为RegExp.test()方法，第一次从位置0开始查找，可以匹配；第二次的查找位置就不是0了，说以就不能匹配了。
            regexp.lastIndex = 0;

            return keepFirst ? key.replace(regexp, "") : null;
        }

        // 去掉properties
        if (key === "properties") {
            return null;
        }

        // 转换items成-
        if (key === "items") {
            return "-";
        }

        return key;
    });

    // 提取其中不为空的项
    return keys.filter((key: string | null) => {
        return key !== null;
    }) as string[];
};

/**
* 从schemaPath中获取$id
* @param {String} schemaKey 当前schema的path
*/
export const getSchemaId = (schemaKey: string): string => {
    const keys = schemaKey.split("/");

    if (!keys.length) {
        if (__DEV__) {
            warn(`${schemaKey} not a valid schemaPath.`);
            // throw new Error(`${schemaKey} not a valid schemaPath.`);
        }
        return "";
    }

    return keys[0].replace(regexp, "");
};


/**
 * 解析schema中的字段，缓存到【schemaFieldFactory】中
 * 1. 验证schema的合法性
 * 2. 提取成map
 */
export default class ResolveLib {
    public mergeSchema: JSONSchema6 = {};

    /**
     * 构造函数
     * @param {Ajv}     ajv    当前的ajv实例
     * @param {schema}  schema 当前的schema
     * @param {String}  $id    schema的id
     */
    constructor(private ajv: Ajv, schema: JSONSchema6, readonly $id = "") {
        // 验证schema的完整性
        if (!$id) {
            this.initSchema(ajv, schema);
        }
        // 生成map
        this.compileSchema(schema, $id || schema.$ref || "");
    }

    /**
     * 初始化schema
     * 1. 判断$id，如果不存在，报错
     * 2. 验证schema的结构是否正确，不正确报错
     * 3. 若果ajv中不存在schema，则添加进ajv
     * @param {Ajv}          ajv     ajv的实例
     * @param {JSONSchema6}  schema  schema
     */
    private initSchema(ajv: Ajv, schema: JSONSchema6): JSONSchema6 {
        let $id: string | undefined = schema.$id;

        // 如果没有$id, 同时没有$ref的情况下直接报错
        if (!$id && !schema.$ref) {
            if (__DEV__) {
                // throw new Error(`id is required.`);
                console.log(schema);
                warn("id is required");
            }
            return schema;
        }

        // 验证schema的正确性
        if (!ajv.validateSchema(schema)) {
            throw ajv.errors;
        }

        // 把schema加入到ajv
        if ($id && !ajv.getSchema($id)) {
            ajv.addSchema(schema);
        }

        return schema;
    }

    /**
     * 遍历schema，生成map
     * 1. 如果schema.type不是string，报错
     * 2. 调用【schemaTypeFactory
     * @param {JSONSchema6} schema  schema
     * @param {String}      $id     id
     */
    private compileSchema(schema: JSONSchema6, $id: string): void {
        schema = schemaTypeFactory.get("undefined")(schema, $id || ((schema.$id || "") + "#"), this.ajv);

        this.mergeSchema = schema;

        // 如果不存在type，则直接返回
        if (!schema.type || schema.$ref) {
            return;
        }

        // 这里只解析type为字符串的结构，不支持数组类型的type
        if (schema.type.constructor !== String) {
            if (__DEV__) {
                warn(`schema type[${schema.type}] can only be string.`);
                // throw new Error(`schema type[${schema.type}] can only be string.`);
            }
            return;
        }

        let type: string = schema.type.toString();

        // 这里调用相对应的type的方法，来解析schema
        if (schemaTypeFactory.has(type)) {
            this.mergeSchema = schemaTypeFactory.get(type)(schema, $id || (schema.$id + "#"), this.ajv);
        }
    }
}

