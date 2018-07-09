import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
    formItemNode?: TreeMap;
}
export declare const name = "copyToMeta";
export interface CopyToMetaPath {
    path: string;
    to: string[];
    defaultValue?: any;
}
export interface CopyToMetaSettings {
    paths?: Array<CopyToMetaPath>;
    condition?: ConditionHocSettings;
}
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: CopyToMetaSettings) => any;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: CopyToMetaSettings) => any;
};
export default _default;
