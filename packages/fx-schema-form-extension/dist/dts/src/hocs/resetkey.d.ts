import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";
export interface ResetKeysHocProps extends DefaultProps, UtilsHocOutProps {
}
export interface ResetKeysHocOutSettings {
    excludeKeys: string[];
    includeKeys: string[];
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: ResetKeysHocOutSettings) => (Component: any) => RC<ResetKeysHocProps, any>;
export default _default;
