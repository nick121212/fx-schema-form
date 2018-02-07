import { BaseFactory } from "fx-schema-form-core";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ThemeHocOutProps } from "fx-schema-form-react/dist/typings/hocs/theme";
import { TreeMap } from "fx-schema-form-react/dist/typings/libs/tree";
export interface Props extends DefaultProps, ThemeHocOutProps, UtilsHocOutProps {
    formItemNode?: TreeMap;
}
declare const _default: (hocFactory: BaseFactory<any>) => (Component: any) => RC<Props, any>;
export default _default;
