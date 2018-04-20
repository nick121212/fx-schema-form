import { DefaultProps } from "../components";
import { RC } from "../models/index";
import { TreeMap } from "./tree";
import { UtilsHocOutProps } from "../hocs/utils";
import { ValidateHocOutProps } from "../hocs/validate";
export interface SchemaFormHocSettings {
    rootReducerKey: string[];
    parentKeys: string[];
}
export interface SchemaFormProps extends DefaultProps, UtilsHocOutProps, SchemaFormHocOutProps, ValidateHocOutProps {
    root?: TreeMap;
    data?: any;
    errors?: any;
    isValid?: boolean;
    isValidating?: boolean;
    formKey: string;
    initData?: any;
    shouldResetForm?: boolean;
}
export interface SchemaFormHocOutProps {
    validateAll?: ($async?: boolean) => Promise<any>;
    resetForm?: () => void;
}
export declare const name = "schemaFormDec";
declare const _default: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps, any>;
export default _default;
