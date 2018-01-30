import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";
/**
 * 解析schema中的字段，缓存到【schemaFieldFactory】中
 * 1. 验证schema的合法性
 * 2. 提取成map
 */
export declare class ResolveLib {
    private ajv;
    private schema;
    readonly $id: string;
    mergeSchema: JSONSchema6;
    constructor(ajv: Ajv, schema: JSONSchema6, $id?: string);
    /**
     * 初始化schema
     * 1. 判断$id，如果不存在，报错
     * 2. 验证schema的结构是否正确，不正确报错
     * 3. 若果ajv中不存在schema，则添加进ajv
     * @param ajv     ajv的实例
     * @param schema  schema
     */
    private initSchema(ajv, schema);
    /**
     * 遍历schema，生成map
     * 1. 如果schema.type不是string，报错
     * 2. 调用【schemaTypeFactory
     * @param schema  schema
     */
    private compileSchema(schema, $id);
    /**
     * 解析path成成数据的路径
     * 最终schema需要与uiSchema做合并，uiSchema中的key配置的是数组 ["appType', '-','type']，所以需要做一下转换
     * 1. 去掉properties，items关键字转换成【 - 】
     * 2. 第一个字符去掉末尾的【 # 】
     * @example design#/properties/appType => ["appType']
     * @example design#/properties/appType/type => ["appType','type']
     * @example design#/properties/appType/items/properties/type => ["appType', '-','type']
     * @param schemaKey schema的path
     * @param keepFirst 是否需要保留第一个
     */
    static getDataKeys(schemaKey: string, keepFirst?: boolean): string[];
    /**
     * 从schemaPath中获取$id
     * @param schemaKey 当前schema的path
     */
    static getSchemaId(schemaKey: string): string;
}
