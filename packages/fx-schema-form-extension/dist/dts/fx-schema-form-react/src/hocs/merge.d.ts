import { BaseFactory, UiSchema } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { FxUiSchema, RC } from "../models";
export interface MergeHocOutProps {
    mergeSchemaList?: FxUiSchema[];
}
export interface MergeHocProps extends DefaultProps {
    uiSchemas: Array<string | UiSchema>;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: RC<any, any>) => RC<MergeHocProps, any>;
export default _default;
