import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { uiSchemaSchema, UiSchema } from "../models/uischema";
import { schemaFieldFactory, schemaKeysFactory } from "../factory";
import { ResolveLib } from "./resolve";
import { FxJsonSchema } from "../models/jsonschema";

/**
 * 用来转换uiSchema的类
 */
export class MergeLib {
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
     * @param parentKeys  父亲的keys 暂时没用到
     * @param uiSchemas   uiSchema
     */
    constructor(private ajv: Ajv, private schemaPath: string, public parent: UiSchema, private uiSchemas: Array<UiSchema | string>) {
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

    private getParentSchemaKeys() {
        if (this.parent) {
            // if (this.parent.refKeys) {
            //     return this.parent.refKeys;
            // }

            if (this.parent.keys) {
                return this.parent.keys;
            }
        }

        return [];
    }

    private getCurrentSchemaKey(uiSchema: UiSchema) {
        const $id = ResolveLib.getSchemaId(this.schemaPath);

        if (this.parent) {

            if (this.parent.$ref) {
                return ResolveLib.getDataKeys(this.parent.$ref, true).concat([uiSchema.key]).join("/");
            }


            return this.parent.key + "/" + uiSchema.key;
        }

        return [$id, uiSchema.key].join("/");
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

        // if (uiSchema.constructor === String) {
        //     keys = parentKeys.concat([uiSchema as string]);
        //     if (!uiSchema) {
        //         return {
        //             key: [$id, ...parentKeys].join("/"),
        //             keys
        //         };
        //     }
        //     return {
        //         key: [$id, ...parentKeys, uiSchema as string].join("/"),
        //         keys
        //     };
        // }

        keys = parentKeys.concat([uiSchema.key]);

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
    private mergeUiSchema() {
        let idx: number = this.uiSchemas.indexOf("*");
        let uiSchemasFirst = [], uiSchemasLast = [];

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
                key: ResolveLib.getDataKeys(this.curSchema.schemaPath).join("/")
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
