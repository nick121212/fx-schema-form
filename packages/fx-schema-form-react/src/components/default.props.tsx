import { UiSchema } from "fx-schema-form-core/dist/typings/models/uischema";
import { Ajv } from "ajv";
import Immutable from "immutable";

import { FxUiSchema } from "../models";
/**
 * 默认的组件参数
 */
export interface DefaultProps {
    /**
     * schema对应的$id
     */
    schemaId: string;
    /**
     * form的ID，用于从state中查找数据
     */
    formId?: string;
    /**
     * uiSchema
     */
    uiSchema?: FxUiSchema;
    /**
     * 父亲的路径
     */
    parentKeys: string[];
    /**
     * 全局默认配置
     */
    globalOptions: Immutable.Map<string, any>;
    /**
     * ajv的实例
     */
    ajv: Ajv;
    /**
     * 如果是数组，则表示当前数组的下标
     */
    arrayIndex?: number;
    /**
     * 当前formItem的层级
     */
    arrayLevel?: number[];

    formItemData?: any;
    formItemMeta?: any;

    /**
     * 数组元素子项的操作
     */
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}

export const props = 1;
