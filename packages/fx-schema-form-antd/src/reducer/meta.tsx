import ajv from "ajv";

/**
 * meta数据
 */
export interface SchemaFormMeta {
    isShow?: boolean;
    dirty?: boolean;
    isValid?: boolean;
    errors?: ajv.ErrorObject[];
    errorText?: string;
}
