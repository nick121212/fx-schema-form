import { RC } from "../../types";
import { SchemaFormBaseProps } from "../../components/form/props";
export interface MergeHocOutProps {
    schemaFormOptions: any;
    mergeSchemaList: any;
    formDefaultData?: any;
}
export interface MergeHocProps extends SchemaFormBaseProps {
    metaState: {
        isLoading: boolean;
        isValid: boolean;
    };
}
export declare const MergeHoc: (hocFactory: any, Component: RC<any, any>) => RC<MergeHocProps, any>;
