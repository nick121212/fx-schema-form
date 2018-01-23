import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaTypeFactory } from "../factory";

/**
 * 解析schema中的字段，缓存到【schemaFieldFactory】中
 * 1. 验证schema的合法性
 * 2. 提取成map
 */
export class ResolveLib {
    public mergeSchema: JSONSchema6;

    constructor(private ajv: Ajv, private schema: JSONSchema6, public readonly $id = "") {
        // 验证schema的完整性
        if (!$id) {
            this.initSchema(ajv, schema);
        }
        // 生成map
        this.compileSchema(schema, $id);
    }

    private initSchema(ajv: Ajv, schema: JSONSchema6): JSONSchema6 {
        // 如果没有$id, 直接报错
        if (!schema.$id) {
            throw new Error(`id is required by fx-schema-form-core.`);
        }

        // 验证schema的正确性
        if (!ajv.validateSchema(schema)) {
            throw ajv.errors;
        }

        // 把schema加入到ajv
        if (!ajv.getSchema(schema.$id)) {
            ajv.addSchema(schema);
        }

        return schema;
    }

    /**
     * 遍历schema，生成map
     * @param schema  schema
     * 1. 如果schema.type不是string，报错
     * 2. 调用【schemaTypeFactory
     */
    private compileSchema(schema: JSONSchema6, $id: string): void {
        schemaTypeFactory.get("any")(schema, $id || (schema.$id + "#"), this.ajv);

        this.mergeSchema = schema;
        if (!schema.type) {
            return;
        }

        if (schema.type.constructor !== String) {
            throw new Error(`schema type[${schema.type}] can only be string.`);
        }

        let type: string = schema.type.toString();

        if (schemaTypeFactory.has(type)) {
            this.mergeSchema = schemaTypeFactory.get(type)(schema, $id || (schema.$id + "#"), this.ajv);
        }
    }

    public static getDataKeys($id: string) {
        let filterKeyWords = ["items", "properties"];
        let keys = $id.split("/").map((key: string, index: number) => {
            if (index === 0 && /#$/g.test(key)) {
                return null;
            }

            if (key === "properties") {
                return null;
            }

            if (key === "items") {
                return "-";
            }

            return key;
        });

        return keys.filter((key: string) => {
            return !!key;
        });
    }
}

