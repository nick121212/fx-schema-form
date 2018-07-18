import { DefaultProps } from "../components";
import { RC } from "../models";
import { TreeMap } from "./tree";
export interface SchemaFormHocSettings {
    rootReducerKey: string[];
    parentKeys: string[];
}
export interface SchemaFormProps extends SchemaFormHocOutProps {
    root?: TreeMap;
    data?: any;
    errors?: any;
    isValid?: boolean;
    isValidating?: boolean;
    formKey?: string;
    initData?: any;
    shouldResetForm?: boolean;
    keepData?: boolean;
}
export interface SchemaFormHocOutProps {
    validateAll?: ($async?: boolean) => Promise<any>;
    resetForm?: () => Promise<void>;
}
export declare const name = "schemaFormDec";
declare const _default: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps & DefaultProps, any>;
export default _default;
