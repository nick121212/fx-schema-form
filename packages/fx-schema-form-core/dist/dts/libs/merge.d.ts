import { Ajv } from "ajv";
import { UiSchema } from "../models/uischema";
/**
 * 用来转换uiSchema的类
 * 如果有$ref，则直接使用
 */
export declare class MergeLib {
    private schemaPath;
    parent: UiSchema;
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
     * @param parent      父亲的schema
     * @param uiSchemas   uiSchema
     */
    constructor(ajv: Ajv, schemaPath: string, parent: UiSchema, uiSchemas: Array<UiSchema | string>);
    /**
     * 获取父亲的keys
     */
    private getParentSchemaKeys();
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
    private getUiSchemaKeyRecursion(uiSchemaKeys, parentKeys);
    /**
     * 获取当前uiSchema的key
     * 如果没有父亲节点
     * 默认返回父亲的key+当前uiSchema的key
     * @param uiSchema
     */
    private getCurrentSchemaKey(uiSchema);
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
