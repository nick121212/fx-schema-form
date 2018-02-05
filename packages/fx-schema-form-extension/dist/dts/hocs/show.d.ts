import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { ConditionHocOutProps } from "./condition";
export interface Props extends DefaultProps, ConditionHocOutProps, UtilsHocOutProps {
}
export interface ResetKeysHocOutSettings {
    paths?: string[];
    renderNothing?: boolean;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
export default _default;
