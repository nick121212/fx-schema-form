import { BaseFactory } from "fx-schema-form-core";
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
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: RC<any, any>) => RC<MergeHocProps, any>;
export default _default;
