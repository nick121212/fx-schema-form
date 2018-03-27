import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import { ConditionHocOutProps } from "./condition";
export interface Props extends DefaultProps, ConditionHocOutProps, UtilsHocOutProps {
}
export interface ResetKeysHocOutSettings {
    paths?: string[];
    renderNothing?: boolean;
}
export declare const name = "show";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
};
export default _default;
