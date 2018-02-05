import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps } from "./condition";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC, FxUiSchema } from "fx-schema-form-react/dist/typings/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps {
}
export interface OneHocOutSettings {
    path: string;
    key: "anyOf" | "oneOf";
    uiSchemas?: {
        [key: string]: FxUiSchema;
    };
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: OneHocOutSettings) => (Component: any) => RC<Props, any>;
export default _default;
