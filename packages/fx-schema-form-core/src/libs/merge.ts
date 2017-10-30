
import * as Ajv from "ajv";

import { uiSchemaSchema } from "./uischema";
import { BaseFactory } from "./factory";
import { array, object } from "./types";
import { UiMerge } from "./ui";


export class SchemaMerge {
    constructor(private uiMerge: UiMerge) {
        uiMerge.init(this.merge.bind(this));
    }

    /**
     * 遍历schema，生成map
     * @param keys    当前的keys
     * @param schema  schema
     * @param options 参数配置
     */
    private compileSchema(keys: Array<string>, schema: any, options: any) {
        switch (schema.type) {
            case "object":
                object(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));
                break;
            case "array":
                array(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));
                break;
            default:
                break;
        }
    }

    /**
     * 合并schema和uiSchema
     * @param key          key
     * @param schema       schema
     * @param uiSchemas    uiSchema
     * @param options      参数
     */
    public merge(key: string, schema: any, uiSchema: Array<any> = ["*"], options: any = {}) {
        if (!options.ajv) {
            options.ajv = new Ajv(Object.assign({}, options.avjOptions || {}, { $data: true }));

        }
        if (!options.map) {
            options.map = new BaseFactory<any>();
        }

        // 验证schema的正确性
        if (!options.ajv.validateSchema(schema)) {
            return console.error("schema", options.ajv.errors);
        }
        // 验证uiSchema的正确性
        if (uiSchema && !options.ajv.validate(uiSchemaSchema, uiSchema)) {
            return console.error("uiSchema", options.ajv.errors);
        }
        /**
         * 如果为空，则全部显示
         */
        // if (!uiSchema || !uiSchema.length) {
        //     uiSchema = ["*"];
        // }

        // schema添加到ajv
        if (!options.ajv.getSchema(key)) {
            options.ajv.addSchema(schema, key);
        }
        /**
         * 生成map
         */
        this.compileSchema(options.parentKeys || [], schema, Object.assign({}, options, {
            map: options.map,
            ajv: options.ajv,
            key,
            depth: 1,
            maxDepth: 3,
            schemaPathKey: schema.schemaPathKey || [key + "#"]
        }));

        if (options.depth) {
            options.depth++;
        }

        // 合并
        return this.uiMerge.merge(options.map, options.parentKeys, schema, uiSchema, Object.assign({ depth: 1 }, options, {
            key,
            maxDepth: 3,
            schemaPathKey: [`${key}#`]
        }));
    }
}

export const schemaMerge = new SchemaMerge(new UiMerge());
