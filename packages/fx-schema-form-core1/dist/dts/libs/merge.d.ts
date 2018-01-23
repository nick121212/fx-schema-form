import { Ajv } from "ajv";
import { UiSchema } from "../models/uischema";
/**
 * 用来转换uiSchema的类
 *
 */
export declare class MergeLib {
    private ajv;
    private schemaPath;
    private parentKeys;
    private uiSchemas;
    /**
     * 合并过后的数据
     */
    mergeUiSchemaList: UiSchema[];
    /**
     * 当前$id对应的schema
     */
    private curSchema;
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
    constructor(ajv: Ajv, schemaPath: string, parentKeys: string[], uiSchemas: Array<UiSchema | string>);
    /**
     * 初始化uiSchema
     * 如果是字符串；用$id合并之后，获取schema
     * 如果是【UiSchema】；合并key之后，获取schema
     * @param uiSchema uiSchema
     */
    private initUiSchema(uiSchema);
    /**
     * 如果在【schemaKeysFactory】中没有发现uiSchema.key,则报错
     * 从【schemaKeysFactory】获取对应的schema，与uiSchema合并之后返回
     * @param uiSchema uiSchema
     */
    private mergeUiSchemaToArray(uiSchema);
    /**
     * 合并uiSchema
     * 1. 先判断uiSchema中是否存在*
     * 2. 如果没有*号，则遍历uiSchema，合并数据
     * 3. 如果存在*号；先合并*之前和*之后的uiSchema
     * 4. 遍历当前的schema：
     *    如果是object，则遍历properties，然后合并数据
     *    如果是array，则直接返回items，然后合并数据
     */
    private mergeUiSchema();
}
