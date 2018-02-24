import { UiSchema } from "fx-schema-form-core/dist/typings/models/uischema";
import { Ajv } from "ajv";
import Immutable from "immutable";
import propTypes, { ValidationMap } from "prop-types";

import { FxUiSchema } from "../models/index";
/**
 * 默认的组件参数
 */
export interface DefaultProps {
    /**
     * schema对应的$id
     */
    schemaId: string;
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
    /**
     * 数据
     */
    formItemData?: any;
    /**
     * meta数据
     */
    formItemMeta?: any;
    /**
     * 数组元素子项的操作
     */
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
    /**
     * 当前的reducerkey
     */
    reducerKey?: string;
}

export const DefaultPropsTypeCheck: ValidationMap<DefaultProps & { customProp: Function }> = {
    schemaId: propTypes.string.isRequired,
    uiSchema: propTypes.object,
    parentKeys: propTypes.array.isRequired,
    globalOptions: propTypes.object.isRequired,
    ajv: propTypes.object.isRequired,
    arrayIndex: propTypes.number,
    arrayLevel: propTypes.array,
    formItemData: propTypes.any,
    formItemMeta: propTypes.any,
    ArrayItemComponent: propTypes.any
};
