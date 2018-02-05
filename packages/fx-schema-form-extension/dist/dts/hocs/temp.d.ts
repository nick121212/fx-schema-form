import { BaseFactory } from "fx-schema-form-core";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ThemeHocOutProps } from "fx-schema-form-react/dist/typings/hocs/theme";
export interface Props extends DefaultProps, ThemeHocOutProps, UtilsHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<Props, any>;
export default _default;
