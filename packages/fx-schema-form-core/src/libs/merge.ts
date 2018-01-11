
import * as Ajv from "ajv";

import { uiSchemaSchema } from "./uischema";
import { BaseFactory } from "./factory";
import { array, object, none } from "./types";
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
    public compileSchema(keys: Array<string>, schema: any, options: any) {
        none(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));

        switch (schema.type) {
            case "object":
                // none(schema, [], Object.assign({}, options, { compileSchema: this.compileSchema }));
                object(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));
                break;
            case "array":
                // none(schema, [], Object.assign({}, options, { compileSchema: this.compileSchema }));
                array(schema, keys, Object.assign({}, options, { compileSchema: this.compileSchema }));
                break;
            default:
                break;
        }

        return schema;
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
        schema = this.compileSchema(options.parentKeys || [], schema, Object.assign({ maxDepth: 5, }, options, {
            map: options.map,
            ajv: options.ajv,
            key,
            depth: 1,
            schemaPathKey: schema.schemaPathKey || [key + "#"]
        }));

        if (options.depth) {
            options.depth++;
        }

        // 合并
        return this.uiMerge.merge(options.map, options.parentKeys, schema, uiSchema, Object.assign({ depth: 1, maxDepth: 5, }, options, {
            key,
            schemaPathKey: [`${key}#`]
        }));
    }
}

export const schemaMerge = new SchemaMerge(new UiMerge());
