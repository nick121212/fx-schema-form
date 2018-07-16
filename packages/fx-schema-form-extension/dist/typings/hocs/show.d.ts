import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
export interface Props extends DefaultProps, ConditionHocOutProps, UtilsHocOutProps {
}
export interface ShowHideHocOutSettings {
    paths?: string[];
    renderNothing?: boolean;
    condition?: ConditionHocSettings;
}
export declare const name = "show";
export declare const hoc: (hocFactory: BaseFactory<any>) => (_settings?: ShowHideHocOutSettings) => any;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (_settings?: ShowHideHocOutSettings) => any;
};
export default _default;
