import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps } from "./condition";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { TreeMap } from "fx-schema-form-react/libs/libs/tree";
export interface Props extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps, ValidateHocOutProps {
    formItemNode: TreeMap;
}
export declare const name = "extraForm";
export declare const hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<Props, any>;
};
export default _default;
