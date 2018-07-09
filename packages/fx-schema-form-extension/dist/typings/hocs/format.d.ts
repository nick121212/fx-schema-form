import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models/index";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare const name = "format";
export declare const hoc: (_hocFactory: BaseFactory<any>) => () => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (_hocFactory: BaseFactory<any>) => () => (Component: any) => RC<Props, any>;
};
export default _default;
