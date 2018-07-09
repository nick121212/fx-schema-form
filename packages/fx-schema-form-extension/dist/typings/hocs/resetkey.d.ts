import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
export interface Props extends DefaultProps, UtilsHocOutProps {
}
export interface ResetKeysHocOutSettings {
    excludeKeys: string[];
    includeKeys: string[];
}
export declare const name = "resetKey";
export declare const hoc: (_hocFactory: BaseFactory<any>) => (settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (_hocFactory: BaseFactory<any>) => (settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
};
export default _default;
