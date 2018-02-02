import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { ConditionHocOutProps } from "./condition";
export interface ConsoleHocProps extends DefaultProps, UtilsHocOutProps, ConditionHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>) => (Component: any) => RC<ConsoleHocProps, any>;
export default _default;
