import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { FxUiSchema } from "fx-schema-form-react/libs/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { JSONSchema6 } from "json-schema";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps {
    currentSchema: JSONSchema6;
    oneOfScehmaId: string;
    uiSchemaInOneof: FxUiSchema[];
}
export interface UiSchemas {
    [key: string]: {
        schemaId: string;
        uiSchemas: Array<FxUiSchema | string>;
    };
}
export interface OneHocOutSettings {
    path: string;
    key: "anyOf" | "oneOf";
    uiSchemas?: UiSchemas;
    condition?: ConditionHocSettings;
}
export declare const name = "oneOf";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings: OneHocOutSettings) => any;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings: OneHocOutSettings) => any;
};
export default _default;
