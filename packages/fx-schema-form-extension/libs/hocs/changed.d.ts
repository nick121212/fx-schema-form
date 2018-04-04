import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
    formItemNode?: TreeMap;
}
export declare const name = "changed";
export interface ChangedSettings {
    paths?: string[];
    onChanged?: (props: DefaultProps, data: any) => void;
    condition?: ConditionHocSettings;
}
export declare const hoc: (hocFactory: any) => (settings?: ChangedSettings) => any;
declare const _default: {
    name: string;
    hoc: (hocFactory: any) => (settings?: ChangedSettings) => any;
};
export default _default;
