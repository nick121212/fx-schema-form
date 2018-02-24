import { DefaultProps } from "../components";
import { RC } from "../models/index";
import { TreeMap } from "./tree";
import { UtilsHocOutProps } from "../hocs/utils";
export interface SchemaFormHocSettings {
    rootReducerKey: string[];
    parentKeys: string[];
}
export interface SchemaFormProps extends DefaultProps, UtilsHocOutProps, SchemaFormHocOutProps {
    root?: TreeMap;
    data?: any;
    errors?: any;
    isValid?: boolean;
    isValidating?: boolean;
    reducerKey: string;
    formKey: string;
    initData?: any;
}
export interface SchemaFormHocOutProps {
    validateAll?: ($async?: boolean) => Promise<any>;
}
declare const _default: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps, any>;
export default _default;
