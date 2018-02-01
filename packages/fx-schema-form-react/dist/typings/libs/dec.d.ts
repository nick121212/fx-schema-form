import { DefaultProps } from "../components";
import { RC } from "../models";
import { TreeMap } from "./tree";
export interface SchemaFormHocSettings {
    rootReducerKey: string[];
    parentKeys: string[];
}
export interface SchemaFormProps extends DefaultProps {
    root?: TreeMap;
    data?: any;
    errors?: any;
    isValid?: boolean;
    isValidating?: boolean;
}
export interface SchemaFormHocOutProps extends SchemaFormProps {
    validateAll?: () => Promise<any>;
}
declare const _default: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps, any>;
export default _default;
