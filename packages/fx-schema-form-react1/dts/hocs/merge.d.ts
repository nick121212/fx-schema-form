import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps, RC, FxUiSchema } from "../components";
export interface MergeHocOutProps {
    mergeSchemaList: FxUiSchema[];
}
export interface MergeHocProps extends DefaultProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: RC<any, any>) => RC<MergeHocProps, any>;
export default _default;
