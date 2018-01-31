import { Ajv } from "ajv";

import { uiSchemaSchema, UiSchema } from "../models/uischema";
import { schemaFieldFactory, schemaKeysFactory } from "../factory";
import { default as ResolveLib } from "./resolve";
import { FxJsonSchema } from "../models/jsonschema";

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
     * 当前$id对应的schema
     */
    private curSchema: FxJsonSchema;
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
    constructor(ajv: Ajv, private schemaPath: string, public parent: UiSchema | null = null, private uiSchemas: Array<UiSchema | string> = ["*"]) {
        if (!ajv.validate(uiSchemaSchema, uiSchemas)) {
            throw ajv.errors;
        }

        let keyPath: string = ResolveLib.getDataKeys(schemaPath, true).join("/");

        if (!schemaKeysFactory.has(keyPath)) {
            throw new Error(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
        }

        this.curSchema = schemaFieldFactory.get(schemaKeysFactory.get(keyPath));
        this.mergeUiSchemaList = this.mergeUiSchema();
    }

    /**
     * 获取父亲的keys
     */
    private getParentSchemaKeys() {
        if (this.parent) {
            if (this.parent.keys) {
                return this.parent.keys;
            }
        }

        return [];
    }

    /**
     * 根据给出的parentKeys和uiSchemaKeys来获取uiSchema的key
     * 1. 遍历uiSchemaKeys，分别于parentKeys做合并
     * 2. 合并后的keys去仓库里面找，如果为找到则报错
     * 3. 判断找到的schema中是否带有 $ref
     * 4. 如果有$ref，则更改parentKeys为$ref的路径
     * 5. 如果没有，则更改parentKeys为当前合并的keys
     * @param uiSchemaKeys 
     * @param parentKeys 
     */
    private getUiSchemaKeyRecursion(uiSchemaKeys: string[], parentKeys: string[]) {
        while (uiSchemaKeys.length) {
            let key: string = uiSchemaKeys.shift() || "";
            let keys: string[] = [...parentKeys, key];

            if (!schemaKeysFactory.has(keys.join("/"))) {
                throw new Error(`${keys.join("/")} did not found. do you forget to resolve schema first.`);
            }

            let schema: FxJsonSchema = schemaFieldFactory.get(schemaKeysFactory.get(keys.join("/")));

            if (schema.$ref) {
                parentKeys = ResolveLib.getDataKeys(schema.$ref, true);
            } else {
                parentKeys = keys;
            }
        }

        return parentKeys.join("/");
    }

    /**
     * 获取当前uiSchema的key
     * 如果没有父亲节点
     * 默认返回父亲的key+当前uiSchema的key
     * @param uiSchema 
     */
    private getCurrentSchemaKey(uiSchema: UiSchema) {
        const $id = ResolveLib.getSchemaId(this.schemaPath);
        let uiSchemaKeys = uiSchema.key.split("/");

        if (this.parent) {
            return this.getUiSchemaKeyRecursion(uiSchemaKeys, this.parent.key.split("/"));
        }

        return this.getUiSchemaKeyRecursion(uiSchemaKeys, [$id]);
    }

    /**
     * 初始化uiSchema
     * 如果是字符串；用$id合并之后，获取schema
     * 如果是【UiSchema】；合并key之后，获取schema
     * @param uiSchema uiSchema
     */
    private initUiSchema(uiSchema: UiSchema): UiSchema {
        let parentKeys = this.getParentSchemaKeys(),
            keys;

        keys = parentKeys.concat(uiSchema.key.split("/"));

        return Object.assign({}, uiSchema, {
            key: this.getCurrentSchemaKey(uiSchema),
            keys
        });
    }

    /**
     * 如果在【schemaKeysFactory】中没有发现uiSchema.key,则报错
     * 从【schemaKeysFactory】获取对应的schema，与uiSchema合并之后返回
     * @param uiSchema uiSchema
     */
    private mergeUiSchemaToArray(uiSchema: UiSchema) {
        if (!schemaKeysFactory.has(uiSchema.key)) {
            throw new Error(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        }

        let schemaKey: string = schemaKeysFactory.get(uiSchema.key);
        let schema = schemaFieldFactory.get(schemaKey);

        return Object.assign({}, schema, uiSchema);
    }

    /**
     * 合并uiSchema
     * 1. 先判断uiSchema中是否存在*
     * 2. 如果没有*号，则遍历uiSchema，合并数据
     * 3. 如果存在*号；先合并*之前和*之后的uiSchema
     * 4. 遍历当前的schema：
     *    如果是object，则遍历properties，然后合并数据
     *    如果是array，则直接返回items，然后合并数据
     */
    private mergeUiSchema(): UiSchema[] {
        let idx: number = this.uiSchemas.indexOf("*");
        let uiSchemasFirst: UiSchema[] = [], uiSchemasLast: UiSchema[] = [];

        // 如果存在多个*，则报错
        if (this.uiSchemas.lastIndexOf("*") !== idx) {
            throw new Error("uiSchema can only has one *.");
        }

        // 不存在*号的情况
        if (idx < 0) {
            this.uiSchemas.slice(idx + 1).map((us: string | UiSchema) => {
                let uiSchema = this.initUiSchema(us.constructor === String ? { key: us } as UiSchema : (us as UiSchema));

                uiSchemasFirst.push(this.mergeUiSchemaToArray(uiSchema));
            });

            return uiSchemasFirst;
        }

        // 处理*之前的数据
        this.uiSchemas.slice(0, idx).forEach((us: string | UiSchema) => {
            let uiSchema = this.initUiSchema(us.constructor === String ? { key: us } as UiSchema : (us as UiSchema));

            uiSchemasFirst.push(this.mergeUiSchemaToArray(uiSchema));
        });
        // 处理*之后的数据
        this.uiSchemas.slice(idx + 1).forEach((us: string | UiSchema) => {
            let uiSchema = this.initUiSchema(us.constructor === String ? { key: us } as UiSchema : (us as UiSchema));

            uiSchemasLast.push(this.mergeUiSchemaToArray(uiSchema));
        });

        // 如果是object类型，遍历properties属性，与之前的数据去重后添加到数组
        if (this.curSchema.type === "object" && this.curSchema.properties) {
            Object.keys(this.curSchema.properties).forEach((us: string) => {
                let uiSchema = this.initUiSchema({ key: us } as UiSchema);

                if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
                    return val.key === uiSchema.key;
                }).length) {
                    uiSchema = this.mergeUiSchemaToArray(uiSchema);
                    uiSchemasFirst.push(uiSchema);
                }
            });
        }

        // 如果是数组，获取下一级的key，然后做对比处理
        if (this.curSchema.type === "array" && this.curSchema.items) {
            let uiSchema = this.initUiSchema({
                key: ResolveLib.getDataKeys(this.curSchema.schemaPath || "").join("/")
            });
            // let uiSchemaItems = this.initUiSchema(ResolveLib.getDataKeys(this.curSchema.schemaPath).concat(["-"]).join("/"));

            if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
                return val.key === uiSchema.key;
            }).length) {
                uiSchema = this.mergeUiSchemaToArray(uiSchema);
                uiSchemasFirst.push(uiSchema);
            }

            // if (!uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
            //     return val.key === uiSchemaItems.key;
            // }).length) {
            //     uiSchemaItems = this.mergeUiSchemaToArray(uiSchemaItems);
            //     uiSchemasFirst.push(uiSchemaItems);
            // }
        }

        return uiSchemasFirst.concat(uiSchemasLast);
    }
}
